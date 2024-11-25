const express = require('express');
const loginAuthController = require('../controllers/loginAuthController');
const router  = express.Router();

// router.post('/register', )
router.post('/login', loginAuthController);

// const custom = async()=>{
//         const encryptedResult = await encryptedPassword('test');
//         const verificationResult = await verifiedPassword('test', encryptedResult);
//         return verificationResult;
// }
// custom();

module.exports = router;
