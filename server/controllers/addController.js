const thoughtmodel = require('../models/thoughts')

const addThought = async (req, res)=>{
        const thought = req.query.thought;
        let temp_thought = await thoughtmodel.findOne({thought})
        
        if(req.body.data != ''){
                if(!temp_thought){
                        temp_thought = new thoughtmodel({
                                thought: req.body.data
                        })
                }
        }else{
                console.log('data not invoked!')
        }
        await temp_thought.save();
}

module.exports = {addThought}