const express = require("express");
const { checkIfAuthenticated } = require("../middlewares/auth.middleware");
const { signup, signin } = require("../controllers/user.controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get('/test', checkIfAuthenticated, async (_, res) => {
  return res.send("Testing");
})

module.exports = {
  routes: router,
};
