const User = require("../models/user.model")


const signup = async(req,res)=> {
    // console.log("try ka upar")
    try{
        // console.log("dqedewfwefe")
        const {email,password,name,dateOfBirth} = req.body;
        // console.log({email,password,name,dateOfBirth})
        const user = await User.findOne({email});
        if(user){
            return res.status(400).send("User already exists")
        }
        const newUser = new User({
            name,
            email,
            password,
            dateOfBirth,
        });
        // console.log(newUser)
        await newUser.save();
        // console.log("end")
        res.send({data:newUser})
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {signup};