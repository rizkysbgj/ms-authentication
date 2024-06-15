require('dotenv').config();
const express = require('express');

const routes = require('./routes');
const { services, repositories, errorHandlers, connectors } = require('./middlewares')
const PORT = 3001;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`)
});

app.use(
  '/', 
  connectors,
  repositories,
  services,
  routes,
  errorHandlers
);
