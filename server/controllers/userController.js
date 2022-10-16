const { response } = require("express");
const User = require("../model/User");

// get All Users
const index = (req, res) => {
  const users = User.find().then((users) => {
    res.send(users).catch((error) => {
      res.status(500).send({ message: error.message || "Error in user found" });
    });
  });
};

// Single user
const user_details = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "request body is empty." });
  }
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can not update user with ${id}` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error while updating user infomation." });
    });
};

// Add new product
const user_create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty!" });
    return;
  }
  try {
    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      type: req.body.type,
      email: req.body.email,
      status: req.body.status,
    });

    // Save user in the database
    user
      .save(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some Error  occurred while creating user",
        });
      });
  } catch (error) {}
};

// update product
const user_update = (req, res) => {};

// delete product
const user_delete = (req, res) => {};

module.exports = {
  index,
  user_details,
  user_create,
  user_update,
  user_delete,
};
