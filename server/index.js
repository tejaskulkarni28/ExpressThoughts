const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const thoughtRoute = require('./routes/thoughtRoute');
const authRoute = require('./routes/authRoute');
// const loginRoute = require('./routes/loginRoute');
// const registerRoute = require('./routes/registerRoute');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());

app.get('/', (_, res)=>{
    res.send("node: default route")
})


// Below code `app.use` is causing the following error
// (node:6661) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 exit listeners added to [Bus]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)
// Routes
// app.use("/thought", addRoute) // 1)
// app.use("/thought", viewRoute)  
// app.use("/auth", loginRoute)
// app.use("/auth", registerRoute)


// therefore I need to minimise the redundancy
app.use("/auth", authRoute);
app.use("/thought", thoughtRoute);
// and need to combine the code for seperated files which I did not did above where I used app.use 4 times



const port = require('./config/port');
try{
    app.listen(port)
}catch(error){
    console.log(error)
}