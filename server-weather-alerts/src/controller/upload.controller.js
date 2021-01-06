const uploadFile = require("../middleware/upload");
const Cache = require("../lib/cache");
const csvHelpers = require("../lib/csvHelpers")

const upload = async (req, res) => {
    try {
      const result = await uploadFile(req, res);
      if (req.file == undefined) {
        return res.status(400).send({ message: "Please upload a file!" });
      }
      const alertsTable = csvHelpers.initTable(req.file.buffer)
      Cache.set("alertsTable", alertsTable)

      res.status(200).send({
        message: "Uploaded the file successfully: " + req.file.originalname,
      });
    } catch (err) {
        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
              message: "File size cannot be larger than 2MB!",
            });
          }
      
          res.status(500).send({
            // message: `Could not upload the file:  ${err}`,
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
          });
    }
  };

  module.exports = upload