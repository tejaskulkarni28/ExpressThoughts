// const viewThought = {

// }  This is an object `{}`

const thoughtmodel = require('../models/thoughts');

const viewThought = async(req, res)=>{
        try{
                const allThoughts = await thoughtmodel.find();
                console.log(allThoughts)
                return res.status(200).json({
                        thoughts: allThoughts
                })
        }catch(error){
                console.log('View Controller.js => ', error);
        }
        const thoughts = await thoughtmodel.find();
        
// When you use await with thoughtmodel.find(), you are telling Node.js to wait until the Promise returned by find() is resolved before moving to the next line. await pauses execution until the data is fetched,
        console.log(thoughts)
}// this is a function
module.exports={viewThought}