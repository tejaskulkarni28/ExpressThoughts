const { verifiedPassword, encryptedPassword } = require('../controllers/authController');

const custom = async()=>{
        const encryptedResult = await encryptedPassword('test');
        const verificationResult = await verifiedPassword('test', encryptedResult);
        return verificationResult;
}
custom();
