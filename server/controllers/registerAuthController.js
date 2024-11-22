const {encryptPassword} = require('../auth/bcrypt');

const registerController = async(plainPassword)=>{
        try{
                const encryptedPassword = await encryptPassword(plainPassword);
        }catch(error){
                console.log(error)
        }
}
module.exports = registerController;