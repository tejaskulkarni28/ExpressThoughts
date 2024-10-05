const express = require('express');
const app = express();

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/thoughtsDB').then(()=>{
    console.log("MongoDB connected successfully!")
}).catch((err)=>{
    console.log(err)
})

app.get('/', (_, res)=>{
    res.send("RESTFUL API:  REPRESNTATIONAL STATE TRANSFER APPLICATION INTERFACE")
})

const port = 3001; // localhost port 
app.listen(port, (err)=>{
    if(!err){
        console.log("Node local server started successfully on port", port)
    }else{
        throw new Error("Some Error got caught while starting the node localhost: ", err)
    }
})