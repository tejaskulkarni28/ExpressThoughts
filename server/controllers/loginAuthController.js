const loginAuthController = async(req, res)=>{
        console.log(`server/login/controller:  ${req.body.username}, ${req.body.plainpassword}`)
}

module.exports = loginAuthController;