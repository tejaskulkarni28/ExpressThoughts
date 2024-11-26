const express = require('express');
const loginAuthController = require('../controllers/loginAuthController');
const registerAuthController = require('../controllers/registerAuthController');
const router  = express.Router();


// // router.post('/register', )
// router.post('/login', loginAuthController);
// router.post('/register', registerAuthController)

router.post('/login', (req, res, next) => {
        console.log('Login route hit'); // Debug log
        next();
}, loginAuthController);
    
router.post("/register", (req, res, next) => {
        console.log("Register route hit"); // Debug log
        console.log("Request body:", req.body); // Confirm payload structure
        next(); // Pass control to the controller
    }, registerAuthController);
    
// router.post('/register', (req, res, next) => {
//         console.log('Register route hit'); // Debug log
//         next();
// }, registerAuthController);

module.exports = router;
