const thoughtmodel = require('../models/thoughts')

const addThought = async (req, res)=>{
        let thought = req.body.data;
        if(Boolean(thought)){
                await new thoughtmodel({
                                thought: req.body.data
                }).save().then((value)=>{
                        console.log('Promised resolved with: ', value)
                }).catch((error)=>{
                        console.log(error)
                })
        }else{
                console.log("error saving the data")
        }
}

module.exports = {addThought}