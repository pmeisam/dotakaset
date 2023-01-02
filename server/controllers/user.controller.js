"use strict";

const firebase = require("../db.js");
const User = require("../models/user.model");
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
  try {
    console.log("req.body:", req.body);
    const data = req.body;
    const user = await firestore
      .collection("users")
      .add(data)
      .catch((err) => {
        console.log(err);
      });
    res.send({
      status: 200,
      message: "Record saved successfully.",
      data: user,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  addUser,
};
