const express = require('express')
const router = express.Router()

// declaring the variable that holds the functions from the controler/comments where my logic lives
const productsController =
require('../controllers/products')

//routes below

router.get('/products',productsController.list);
router.get('/products/:id',productsController.show );
router.post('/products',productsController.create );


module.exports = router