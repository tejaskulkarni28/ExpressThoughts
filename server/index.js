const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/thoughtsDB').then(()=>{
    console.log("MongoDB connected successfully!")
}).catch((err)=>{
    console.log(err)
})

// Middleware to parse incoming JSON requests
app.use(express.json());

app.get('/', (_, res)=>{
    res.send("RESTFUL API:  REPRESNTATIONAL STATE TRANSFER APPLICATION INTERFACE")
})


const thoughtmodel =  require('./models/thoughts');
app.post('/thought/add', async(req, res)=>{
    console.log(req.body)

    // Insert the data into mongodb
    const thought = req.query.thought;
    let temp_thought = await thoughtmodel.findOne({thought})
    if(req.body.data != ''){
        if(!temp_thought){
            temp_thought = new thoughtmodel({
                thought: req.body.data
            })
        }
    }else{
        console.log('Data not invoked!')
    }
    await temp_thought.save();
})

const port = 3001; // localhost port 
app.listen(port, (err)=>{
    if(!err){
        console.log("Node local server started successfully on port", port)
    }else{
        throw new Error("Some Error got caught while starting the node localhost: ", err)
    }
})