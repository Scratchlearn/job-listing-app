const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        
    },
    email:{
        type:String,
       
        unique:true
    },
    mobile:{
        type:Number,
       
        unique:true
    },
    password:{
        type:String,
       
        unique:true
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;