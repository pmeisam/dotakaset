const { db } = require("../utils/admin");


const createFile = (req, res) => {
  console.log("In create file handler");
  
  db.collection("fileHandles")
    .add(req.body)
    .then((doc) => {
      res.status(200).json({
        message: `File handle with { id: ${doc.id} } created successfully`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: "Error creating file handle",
      });
      console.error(err);
    });

};

module.exports = {
  createFile,
};
