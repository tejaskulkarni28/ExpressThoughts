const express = require('express')
const router = express.Router();

const {viewThought} = require('../controllers/viewController');
router.get('/view', viewThought)
// here viewThought is a callback function

module.exports=router;