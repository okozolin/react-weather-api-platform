const Cache = require("../lib/cache");

const getCache = (req, res, next) => {
  req.alertsTable = Cache.get("alertsTable");
  next();
  return;
};