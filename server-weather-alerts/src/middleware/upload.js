const util = require("util");
const multer= require("multer");

let storage = multer.memoryStorage()
const maxSize = 2 * 1024 * 1024;

let uploadFile = multer({
    storage,
    limits: { fileSize: maxSize },
  }).single("file");
  
  let uploadFileMiddleware = util.promisify(uploadFile);
  module.exports = uploadFileMiddleware;