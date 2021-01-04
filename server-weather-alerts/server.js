const express = require('express');
const path= require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors= require("cors")
const initRoutes= require("./routes")
const app = express();

const corsOptions = {
    origin: "http://localhost:3001"
  };
  
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
initRoutes(app);
let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});

module.exports = app;
