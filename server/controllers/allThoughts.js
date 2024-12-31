const thoughtModel = require('../models/thoughts');

const allThoughts = async(req, res)=>{ 
        try{
                const thoughts = await thoughtModel.find();
                let count = 0;
                thoughts.forEach((item)=>{
                        if(item){
                                count++;
                        }
                })
                return res.status(200).json({
                        message: "Data found",
                        thoughts,
                        count
                })
        }catch(error){
                return res.status(404).json({
                        message: "Data not found!",
                        error
                })
        }
}

module.exports = {allThoughts};