const mongoose=require("mongoose");

const ajobSchema=new mongoose.Schema({
    material:{
        type:String,
        require:true
    },
    desc:{
        type:String,
    },
    rate:{
        type:String
    },
    category:{
        type:String
    }
});

const ajobmodel=mongoose.model("ajob",ajobSchema);
module.exports=ajobmodel;