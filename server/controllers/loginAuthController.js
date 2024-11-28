const User = require('../models/user')
const bcrypt = require('bcrypt')
const loginAuthController = async(req, res) => {
  try {
    console.log(`server/login/controller:  username: ${req.body.username}, plainpassword: ${req.body.plainpassword}`)
    if(req.body.username == '' || req.body.plainpassword == ''){
      return res.status(404).json({
        success: false,
        message: "Textbox is blank! Please fill it"
      })
    }else{
      const {username, plainpassword} = req.body; // destructuring assignment
      // allows you to `unpack the values from arrays or properties` ...
      try {
        const user = await User.findOne({username: req.body.username})
        console.log(user);
        if (!user) {
          return res
            .status(200)
            .json({
              success: false,
              message: "User not found"
            })
        }else{
        const isMatch = await bcrypt.compare(plainpassword, user.password)
          if (!isMatch) {
            return res
              .status(200)
              .json({
                success: false,
                message: "Invalid credentials"
              });
          }else{
              // login successful, return sucess response
              // Attaching userid to json response for further purpose after the user is logged.
              const userid = user._id;
              const username = user.username;
              const createdAt = user.createdAt;
              console.log(`User ID: ${userid}, Username: ${username}, CreatedAt: ${createdAt}`)
              res.status(200).json({
                success: true, 
                message: "Login successfull", 
                userid,
                username,
                createdAt
              })
          }
        }
      } catch (error) {

      }
    }
  } catch (error) {
    console.log(`/server/login/catch/ ${error}`)
    res.status(500).json({
      success: false,
      message: "Server error while logging user."
    })
  }

}

module.exports = loginAuthController;