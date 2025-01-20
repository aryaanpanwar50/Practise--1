const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match:[/^[a-zA-Z0-9]+$/,"Please enter a valid name"]
    },
    email: {
        type: String,
        required: true,
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email"]
    },
    password: {
        type: String, // Add type here
        required: true,
        minelength:8,
        validate: {
            validator: validatePassword,
            message:"Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
        },
    },
    dateOfBirth: {
        type: Date,
        required: true,
        validate:{
            validator: validateAge,
            message:"User must be at least 18 years old"
        }
    },
});

function validatePassword(password){
    return(
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*(){}<>?]/.test(password)
    )
    
}
function validateAge(dateOfBirth){
    const age = new Date().getFullYear() - dateOfBirth.getFullYear();
    return age>=18;
}



module.exports = mongoose.model('User', userSchema);
