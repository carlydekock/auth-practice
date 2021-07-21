# Auth0 Practice

## Resources

- Tutorial from Yours Truly on Youtube [here](https://www.youtube.com/watch?v=GGGjnBkN8xk&ab_channel=yoursTRULY)
- Auth0 docs [here for frontend](https://auth0.com/docs/quickstart/spa/react) and [here for backend](https://auth0.com/docs/quickstart/spa/react/02-calling-an-api)
- Reminders of setup for Express backend and React (using create-react-app) frontend [here](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)

## Setup/What You Need

- Auth0 account
- Setup React SPA in your dashboard on Auth0
- Setup API in your dashboard on Auth0
- .env variables:
  - Backend .env variables: audience (from Auth0)
  - Frontend .env variables: domain, clientId, and audience (all from Auth0)
  - **Note**: these must start with REACT_APP_ in the .env file (at least on frontend side) to be readable via process.env in a create react app application
