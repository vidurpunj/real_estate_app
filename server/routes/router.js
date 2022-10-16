const express = require('express');
const route = express.Router()

const services = require('../services/render');
const userController = require('../controllers/userController');

/**
 * @description Root Route
 * @method GET
 */

route.get('/', services.homeRoutes);

route.get('/about',(req,res)  => {
  res.render('about')
})
route.get('/contact',(req,res) => {
  res.render('contact')
})

// users urls
route.get('/users',services.users);

route.get('/add_user', services.add_user)


// API
route.post('/api/user_create', userController.user_create);
route.get('/api/users', userController.index);
route.put('/api/users/:id', userController.user_update);
route.get('/api/users/:id', userController.user_details);
route.delete('/api/users/:id', userController.user_delete);


module.exports = route
