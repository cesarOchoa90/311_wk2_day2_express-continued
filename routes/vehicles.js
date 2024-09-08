const express = require('express')
const router = express.Router()


// declaring the variable that holds the functions from the controler/comments where my logic lives
const vehiclesController =
require('../controllers/vehicles')

//routes below

router.get('/vehicles',vehiclesController.list);
router.get('/vehicles/:id',vehiclesController.show);
router.post('/vehicles',vehiclesController.create);

module.exports = router