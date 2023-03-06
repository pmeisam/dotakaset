const { db } = require("../utils/admin");

const createUser = (req, res) => {
  console.log("in createUser()");
  let userHandle = {
    entityId: req.body.entityId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    // whatsAppNumber: req.body.whatsAppNumber,
    // bestWayContact: req.body.bestWayContact,
    // amazonMusic: req.body.amazonMusic,
    // youtubeMusic: req.body.youtubeMusic,
    // appleMusic: req.body.appleMusic,
    // yutube: req.body.youtube,
    // spotify: req.body.spotify,
    // facebook: req.body.facebook,
    // instagram: req.body.instagram,
  };

  db.collection("userHandles")
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

const getUserByEntityId = async (req, res) => {
  console.log("in getUserByEntityId()");
  console.log(`req.params.userEntityId: ${req.params.userEntityId}`);

  const usersRef = db.collection("userHandles");
  const snapshot = await usersRef
    .where("entityId", "==", req.params.userEntityId)
    .get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return res.status(500).json({
      error: `Error retrieving user handle by { entityId: ${req.params.userEntityId} }`,
      retrieved: false
    });
  } else {
    let user = {};
    snapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      user = doc.data();
      user.id = doc.id;
    });
    return res.status(200).json({
      message: `User handle with { id: ${user.id} } retrieved successfully`,
      retrieved: true,
      data: user,
    });
  }
};

const getUser = (req, res) => {
  console.log("in getUser()");
  db.collection("userHandles")
    .doc(req.params.userId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No document");
        return res.status("400").json({ message: "No data." });
      } else {
        return res.status(200).json({
          message: `User handle with { id: ${
            doc.data().id
          } } retrieved successfully`,
          data: doc.data(),
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: `Error retrieving user handle by ${req.params.userId}`,
      });
      console.error(err);
    });
};

module.exports = {
  createUser,
  getUser,
  getUserByEntityId,
};
