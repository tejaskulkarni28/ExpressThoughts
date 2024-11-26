const {encryptPassword} = require('../auth/bcrypt');
const usermodel = require('../models/user');
const registerAuthController = async(req, res)=>{
        try{
                const{username, plainpassword} = req.body;
                console.log(`/server/registerAuthController.js/ username: ${username}, plainpassword ${plainpassword}`)
                const encryptedPassword = await encryptPassword(plainpassword);
                console.log(`/server/registerAuthController.js/ ${encryptedPassword}`)

                const userSaved = await new usermodel({
                        username: username,
                        password: encryptedPassword,
                        createdAt: Date.now()
                }).save();
                console.log(`User saved: ${userSaved}`)
                res.status(200).json({
                        success: true,
                        message: "Success"
                })
                
        }catch(error){
                console.log(error)
                res.status(500).send('Server error');
        }
}
module.exports = registerAuthController;