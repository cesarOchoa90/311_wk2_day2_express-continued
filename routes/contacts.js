const express = require('express')
const router = express.Router()

// declaring the variable that holds the functions from the controler/comments where my logic lives
const contactsController =
require('../controllers/contacts')

//routes below
router.get('/contacts',contactsController.list);
router.get('/contacts/:id',contactsController.show);
router.post('/contacts',contactsController.create);


module.exports = router