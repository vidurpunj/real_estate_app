const express = require("express") 
const router = express.Router() 
const UserController = require('../controllers/userController')

routes.get('/', UserController.index);
router.post('/');
routes.get('/:productId');
router.put('/:productId');
router.delete('/:productId');

module.exports = routes;