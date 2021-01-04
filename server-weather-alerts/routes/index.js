const express = require('express')
const router = express.Router();
const controller= require("../src/controller/file.controller")

let routes = (app) => {
  router.post("/upload", controller.upload);
  router.get("/alerts", controller.getAlerts);

  app.use(router);
};
module.exports = routes;
