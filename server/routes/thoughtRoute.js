const express = require('express')
const router = express.Router();

const {viewThought} = require('../controllers/viewController');
router.get('/view', viewThought)
// here viewThought is a callback function

const {addThought} = require('../controllers/addController')
const {allThoughts, allThoughtsWithUsername} = require('../controllers/allThoughts');
const { likeController } = require('../controllers/feedController');

router.post('/add', addThought) // 2) 
router.get('/all', allThoughts);
router.get('/all/withusers', allThoughtsWithUsername)
router.post('/liked', likeController)
module.exports=router;