const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema({
    category:{
        type:String,
        require:true
    },
    categoryimg:{
        type:String,
    }
});

const categorymodel=mongoose.model("category",categorySchema);
module.exports=categorymodel;