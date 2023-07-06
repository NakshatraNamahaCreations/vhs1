const mongoose=require("mongoose");

const amaterialSchema=new mongoose.Schema({
    category:{
        type:String
    },
    material:{
        type:String,
        require:true
    },
    benefits:{
        type:String,
    }
});

const amaterialmodel=mongoose.model("amaterial",amaterialSchema);
module.exports=amaterialmodel;