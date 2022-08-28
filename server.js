const path = require('path');
require('dotenv').config();


const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');

// Initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  }); 