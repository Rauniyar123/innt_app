//import dependacy
const mongoose=require("mongoose");
const adminSchema=new mongoose.Schema({
    email:{
       type:String
    },
    password:{
        type:String
    },
    otp:{
        type:Number
    },
wallet:{
    type:Number,
    default:0
},


});

module.exports=adminModel=mongoose.model("admin",adminSchema);