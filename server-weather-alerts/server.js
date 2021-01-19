const express = require('express');
const path= require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const initRoutes= require("./routes")
require("dotenv").config();
const app = express();

const NODE_ENV = process.env.NODE_ENV || 'development';
if (NODE_ENV === 'development') {
  console.log("--> DEV mode")
  const cors= require("cors")
  const corsOptions = {
      origin: process.env.CLIENT_PORT
    }; 
  app.use(cors(corsOptions));
}

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
if (NODE_ENV === 'production') {
  console.log("--> running from 'public'")
  app.use(express.static(path.join(__dirname, 'public')));
}
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

module.exports = app;
