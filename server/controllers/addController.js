const thoughtmodel = require('../models/thoughts')

const addThought = async (req, res)=>{
        try{
                let thought = req.body.data;
                if(Boolean(thought)){
                        const savedThought = await new thoughtmodel({
                                        thought: req.body.data.trim()
                        }).save()
                        console.log('Thought saved: ', savedThought)
                        return res.status(201).json({ // 201 code means: request succeeded
                                success: true,
                                message: 'Thought added successfully'
                        })
                }else{
                        console.log('Content not found for this request')
                        return res.status(201).json({ //204 code means: no content to send for this request
                                success: false,
                                message: 'Content not found for this request!'
                        })
                }
        }catch(error){
                console.log('Error saving the thought:', error)
                return res.status(400).json({
                        success: false,
                        message: 'Error found while saving the thought',
                        error: error.message
                })
        }
}

module.exports = {addThought}