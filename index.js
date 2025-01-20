const express = require('express');
const connectDB = require('./config/db')
const userRouter = require("./routes/user.router")
const app = express();
const PORT = 8000;

app.get('/',(req,res)=>{
    try{
        res.send("Server is ready")
        console.log("My first test API is working")
    }catch(error){
        res.status(500).send("Server Error")
    }
    
});

app.use(express.json());

app.use("/api",userRouter);



app.listen(PORT,async ()=>{
    try{
        await connectDB();
        console.log("Listening on port 8000")

    }catch(error){
        console.error("Serve failed to start")
    }

})
