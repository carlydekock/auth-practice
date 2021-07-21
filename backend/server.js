const express = require('express');
const cors = require('cors');
// const axios = require('axios');

require('dotenv').config();
const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello from home route');
});

app.get('/protected', (req, res) => {
  res.send('Hello from protected route');
});

app.listen(PORT, () => {
  console.log(`Server is listing on ${PORT}`);
});