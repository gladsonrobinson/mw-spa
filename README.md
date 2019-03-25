
  

# MAP MARKER APP

  

  

  

This is a full stack web application using React, Node.js, Express, MongoDB and Webpack.

  

  

This project is bootstrapped from ([simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack))

  

  

  

This boilerplate got simple basic structure to get start and basic web pack set up is also available. It help to construct our own architecture for the app. All the client side and server side structure were build from scratch. Have wrote test case for the front end code(only action and reducers) using jest.

  

  

  

All the client and server code structure were build from scratch

  

  

- React

  

  

- Redux

  

  

- React Router

  

  

- Node

  

  

- Express

  

  

- MongoDb

  

  

- ES6

  

  

- Bluebird

  

  

  

## Introduction

  

  

  

### Development mode

  

  

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

  

  

  

### Production mode

  

  

  

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

  

  

  

## Docker

  

  

  

```bash

  

  

Requirements

  

  

### docker

  

  

### docker-compose

  

  

  

#Build and run

  

  

docker build --tag=mw-spa .

  

  

docker-compose -p mw-spa up

  

  

#For Running test case

  

docker-compose -f docker-compose.test.yml up

  

  

#check the app in

  

  

http://localhost:8080/

  

  

  

```

  

  

  

## Quick Start

  

  

  

```bash

  

  

  

Requirements

  

  

### Node v8.0.0 +

  

  

### MongoDB v4.0

  

  

# Go inside the directory

  

  

cd mw-spa

  

  

# Install dependencies

  

  

yarn (or npm install)

  

  

# Start mongodb client

  

  

Follow instructions from mongodb website

  

  

# Start development server

  

  

yarn dev (or npm run dev)

  

  

# Build for production

  

  

yarn build (or npm run build)

  

# Start production server

  

  

yarn start (or npm start)

  

  

# Running Test

  

  

npm run test

  

  

npm run test:coverage

  

  

npm run test:watch

  

  

```

  

  

- How do you handle configuration values? What if those values change?

  

**Used .env file for the configration values***

  

- What happens if we encounter an error with the third-party API integration?

  

**If error occurs on API integration site will show message indicating something went wrong**

  

- Will it also break our application, or are they handled accordingly?

  

**No it wont break the application it is handled accordingly**

  

- Now we will need to change the third-party geocoder API to another one. How can we

  

change our current solution so that we can make this change as seamless as possible? Or

  

how will we change (or refactor) our solution so that any future changes with the third-party

  

integration is only done in isolation?

  

If we change the API we need too modify the map component such as to accommodate new api format

  

**We can refactor such as to create an API wrapper from our server to produce consistent api response irrespective to the API change**

  
  
  
  

**Things To Do:**

 - Error handling for all APIS and Showinf error message and fetch
   status
 - Unit test case for all components
