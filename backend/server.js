const express = require('express');
const cors = require('cors');
//axios: to get user details/info from access token
const axios = require('axios');
//jwt: extracts token automatically from bearer header
const jwt = require('express-jwt');
//jwks-rsa: uses json web key sets to provide secret for the token verification
const jwks = require('jwks-rsa');


require('dotenv').config();
const PORT = process.env.PORT || 3002;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const app = express();

const verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-yiij3usi.us.auth0.com/.well-known/jwks.json'
  }),
  audience: audience,
  issuer: 'https://dev-yiij3usi.us.auth0.com/',
  algorithms: ['RS256'],
});

// app.use(verifyJwt);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello from home route');
});

app.get('/protected', verifyJwt, async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const response = await axios.get('https://dev-yiij3usi.us.auth0.com/userinfo', {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
    const userInfo = response.data;
    console.log(userInfo);
    res.send(userInfo);
  } catch(err){
    res.send(error.message);
  }
});

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Internal server error';
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log(`Server is listing on ${PORT}`);
});