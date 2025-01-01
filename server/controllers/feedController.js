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
const commentController = async (req, res) => {
        try {
          const {
            commenterId,
            commenterUsername,
            comment,
            commentedAt,
            tweetUserId,
          } = req.body;
      
          console.log("Property values:");
          console.log({ commenterId, commenterUsername, comment, commentedAt, tweetUserId });
      
          // Validate required fields
          if (!tweetUserId) {
            return res.status(400).json({ message: "tweetUserId is required" });
          }
          if (!commenterId) {
            return res.status(400).json({ message: "commenterId is required" });
          }
      
          // Ensure tweetUserId is a valid ObjectId
          if (!/^[0-9a-fA-F]{24}$/.test(tweetUserId)) {
            return res.status(400).json({ message: "Invalid tweetUserId format" });
          }
      
          const savedComment = await thoughtModel.findByIdAndUpdate(
            tweetUserId,
            {
              $push: {
                comments: {
                  commenterId,
                  commenterUsername,
                  comment,
                  commentedAt,
                },
              },
            },
            { new: true }
          );
      
          if (!savedComment) {
            return res.status(404).json({ message: "Thought not found" });
          }
      
          console.log("Updated Thought with Comment:", savedComment);
          return res.status(200).json({
            message: "Comment added successfully",
            savedComment,
          });
        } catch (error) {
          console.error("Error while saving comment:", error);
          return res.status(500).json({
            message: "Comment failed to save",
            error: error.message,
          });
        }
      };
      

module.exports = {likeController, commentController};