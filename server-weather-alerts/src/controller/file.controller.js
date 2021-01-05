const uploadFile = require("../middleware/upload");
const upload = async (req, res) => {
    try {
      const result = await uploadFile(req, res);
      if (req.file == undefined) {
        return res.status(400).send({ message: "Please upload a file!" });
      }
  
      const convertBuffertToString = req.file.buffer.toString('utf8')
      console.log("--->convertBuffertToString", convertBuffertToString.split(/\n/))
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

  const getAlerts = async (req, res) => {
    res.send([{city: "a1", status: false},{city: "a2", status: true}])
  }
  module.exports = {
    upload,
    getAlerts
  };