const express = require('express')

const {addThought} = require('../controllers/addController')

const router = express.Router()

router.post('/add', addThought)

module.exports = router