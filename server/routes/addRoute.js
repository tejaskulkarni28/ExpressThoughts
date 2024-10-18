const express = require('express')

const {addThought} = require('../controllers/addController')

const router = express.Router()

router.post('/add', addThought) // here addThought is a callback function

module.exports = router