const mongoose=require("mongoose");

const qfSchema=new mongoose.Schema({
    category:{
        type:String,
       
    },
    region:{
        type:String,
    }
});

const qfmodel=mongoose.model("quotationformat",qfSchema);
module.exports=qfmodel;