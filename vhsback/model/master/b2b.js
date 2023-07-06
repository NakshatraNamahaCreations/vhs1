const mongoose=require("mongoose");

const b2bSchema=new mongoose.Schema({
    customertype:{
        type:String,
        require:true
    },
   
});

const b2bmodel=mongoose.model("masterb2b",b2bSchema);
module.exports=b2bmodel;