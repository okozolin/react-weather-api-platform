const express = require('express')
const router = express.Router();
const upload = require("../src/controller/upload.controller")
const getAlerts= require("../src/controller/alerts.controller")

let routes = (app) => {
  router.post("/upload", upload);
  router.get("/alerts", getAlerts);

  app.use(router);
};
module.exports = routes;
