// const viewThought = {

// }  This is an object `{}`

const thoughtmodel = require('../models/thoughts');

const viewThought = async(req, res)=>{
        try{
        // Retrieve sessionUserId from headers
        const sessionUserId = req.headers['sessionuserid']; 
        console.log(`Session UserId from Headers: ${sessionUserId}`);
                // const allThoughts = await thoughtmodel.find();
                const userThoughts = await thoughtmodel.find({
                        userId: sessionUserId
                })
                // console.log(allThoughts)
                console.log(`User thoughts: ${userThoughts}`)
                return res.status(200).json({
                        thoughts: userThoughts
                })
        }catch(error){
                console.log('View Controller.js => ', error);
        }
}
// const thoughts = await thoughtmodel.find();
// When you use await with thoughtmodel.find(), you are telling Node.js to wait until the Promise returned by find() is resolved before moving to the next line. await pauses execution until the data is fetched,
        // console.log(thoughts)
// this is a function

module.exports={viewThought}