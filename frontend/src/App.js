import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
const axios = require('axios');

function App() {

  const {
    loginWithPopup, 
    loginWithRedirect, 
    logout, 
    user, 
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  function callApi(){
    try {
      axios.get('http://localhost:3001/').then(response => console.log(response.data));
    } catch(err){
      console.log(err);
    }
  }

  async function callProtectedApi(){
    const token = await getAccessTokenSilently();
    console.log(token);
    // try {
    //   axios.get('http://localhost:3001/protected').then(response => console.log(response.data));
    // } catch(err) {
    //   console.log(err);
    // }
  }

  return (
    <div className="App">
      <h1>Auth0 authentication</h1>
      <ul style={{listStyle: "none"}}>
        <li><button onClick={loginWithPopup}>Login with Popup</button></li>
        <li><button onClick={loginWithRedirect}>Login with Redirect</button></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
      <h3>User is { isAuthenticated ? "Logged in" : "Not logged in" } </h3>
      { isAuthenticated && <pre style={{textAlign: 'start'}}>{JSON.stringify(user, null, 2)}</pre> }
      
      <ul style={{listStyle: "none"}}>
        <li><button onClick={callApi}>Call API</button></li>
        <li><button onClick={callProtectedApi}>Call Protected API</button></li>
      </ul>
    </div>
  );
}

export default App;
