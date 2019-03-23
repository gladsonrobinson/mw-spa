  

# MAP MARKER APP

  

This is a full stack web application using React, Node.js, Express, MongoDB and Webpack.

This project is bootstrapped from ([simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack))

  

This boilerplate got simple basic structure to get start and basic web pack set up is also available. It help to construct our own architecture for the app. All the client side and server side structure were build from scratch. Have wrote test case for the front end code using jest.

  

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
