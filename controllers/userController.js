const { response } = require('express');
const User = require('../model/User');

// get All Users
const index = (req, res) => {
  const users = User.find()
  .then(response => {
    res.json({
      response
    })
    .catch(error => {
      message: 'An error Occoured!'
    })
  })
};

// Single user
const user_details = (req, res) => {};

// Add new product 
const user_create = (req, res) => {
  try{
    const  user = {
      first_name: req.body.title,
      last_name: req.body.price,
      age: req.body.age,
      type: req.body.type,
      email: req.body.email
    };

  }catch(error){

  }
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
  user_delete
}