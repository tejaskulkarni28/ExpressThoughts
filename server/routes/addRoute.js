const express = require('express')
const router = express.Router()


const {addThought} = require('../controllers/addController')

router.post('/add', addThought) // 2) 
// #-> here addThought is a callback function
// #-> whenever /thought is connected to /add then addThought Controller method is triggered.

module.exports = router