const router = require("express")();
const filesHandler = require("../../handlers/files.handler.js");
// let upload = require("../../config/multer.config");

// post: create
// put: update
// delete: delete
// get: get
router.post("/", filesHandler.createFile);


module.exports = router;