"use strict";

const firebase = require("../db.js");
const User = require("../models/user.model");
const firestore = firebase.firestore();

const signup = async (req, res, next) => {
  try {
    const user = await firebase.auth().createUser({
      email: req.body.email,
      password: req.body.password,
      disabled: false,
      emailVerified: false,
    });
    res.send({
      status: 200,
      message: "User signed up successfully.",
      data: user,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
};

const signin = async (req, res, next) => {
};

module.exports = {
  signup,
  signin,
};
