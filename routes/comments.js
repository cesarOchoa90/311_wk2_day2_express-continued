const express = require('express')
const router = express.Router()

// declaring the variable that holds the functions from the controler/comments where my logic lives
const commentsController =
require('../controllers/comments')

//routes below

router.get('/comments',commentsController.list );
router.get('/comments/:id',commentsController.show );
router.post('/comments',commentsController.create);


module.exports = router