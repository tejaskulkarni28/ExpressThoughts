const User = require('../models/user')
const bcrypt = require('bcrypt')
const loginAuthController = async(req, res) => {
  try {
    console.log(`server/login/controller:  username: ${req.body.username}, plainpassword: ${req.body.plainpassword}`)
    const {username, plainpassword} = req.body; // destructuring assignment
    // allows you to `unpack the values from arrays or properties` ...
    try {
      const user = await User.findOne({username: req.body.username})
      if (!user) {
        return res
          .status(400)
          .json({error: "User not found!"})
      }
      const isMatch = await bcrypt.compare(plainpassword, user.password)
      if (!isMatch) {
        return res
          .status(400)
          .json({error: "Invalid credentials"});
      }
      // login successful, return sucess response
      res.json({success: true, message: "Login successfull"})
    } catch (error) {}
  } catch (error) {
    console.log(`/server/login/catch/ ${error}`)
  }

}

module.exports = loginAuthController;