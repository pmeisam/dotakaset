const { db } = require("../utils/admin");

const createUser = (req, res) => {
  console.log("in createUser()");
  let userHandle = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    
  };
  db.collection("usersHandle")
    .add(userHandle)
    .then((doc) => {
      res.status(200).json({
        message: `User handle with { id: ${doc.id} } created successfully`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: "Error creating user handle",
      });
      console.error(err);
    });
};

const getUser = (req, res) => {
  console.log("in getUser()");
};

module.exports = {
  createUser,
  getUser,
};
