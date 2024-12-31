const thoughtModel = require("../models/thoughts");
const likeController = async(req, res)=>{
        try{
                const {tweetUserId, updatedLikes} = req.body; 
                const updatedThought = await thoughtModel.findOneAndUpdate(
                        {_id: tweetUserId},
                        {likes: updatedLikes},
                        {new: true}
                )
                if(!updatedThought){
                        throw new Error("Thought not found")
                }
                console.log(updatedThought)
                return updatedThought;
        }
        catch(error){
                console.log("Error while updating like")
                throw new Error("Error while updating like: ", error)
        }
}
const commentController = async(prop1, ...rest)=>{

}

module.exports = {likeController, commentController};