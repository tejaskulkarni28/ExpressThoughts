const mongoose = require('mongoose')

const dbURI = 'mongodb://localhost:27017/thoughtsDB';

const connectDB = async ()=> {
        try{
                await mongoose.connect(dbURI)
        }
        catch(error){
                console.log(error)
        }
}

module.exports = connectDB;