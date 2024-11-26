const {encryptPassword} = require('../auth/bcrypt');
const usermodel = require('../models/user');
const registerAuthController = async(req, res)=>{
        try{
                const{username, plainpassword} = req.body;
                console.log(`/server/registerAuthController.js/ username: ${username}, plainpassword ${plainpassword}`)
                const encryptedPassword = await encryptPassword(plainpassword);
                console.log(`/server/registerAuthController.js/ ${encryptedPassword}`)

                const alreadyUser = await usermodel.findOne({username: username});
                if(alreadyUser){
                        console.log(alreadyUser)
                        res.status(200).json({
                                success: false,
                                message: "Username already taken"
                        })
                }else{
                        console.log(alreadyUser)
                        const userSaved = await new usermodel({
                                username: username,
                                password: encryptedPassword,
                                createdAt: Date.now()
                        }).save();
                        console.log(`User saved: ${userSaved}`)
                        res.status(200).json({
                                success: true,
                                message: "New user registered"
                        })
                }
        }catch(error){
                console.log(error)
                res.status(500).json({
                        success: false,
                        message: "Server error while registering user. "
                })
        }
}
module.exports = registerAuthController;