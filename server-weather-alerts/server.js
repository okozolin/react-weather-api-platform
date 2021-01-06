const express = require('express');
const path= require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors= require("cors")
const initRoutes= require("./routes")
require("dotenv").config();
const app = express();

const corsOptions = {
    origin: process.env.CLIENT_PORT
  };
  
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});

module.exports = app;
