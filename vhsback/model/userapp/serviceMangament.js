const mongoose=require("mongoose");

const serviceManagementSchema=new mongoose.Schema({
    serviceImg:{
        type:String
    },
    serviceName:{
        type:String
    },
    serviceCategory:{
        type:String
    },
    NofServiceman:{
        type:String
    },
    serviceHour:{
        type:String
    },
    serviceDesc:{
        type:String
    },
    servicePrice:{
        type:String
    },
    serviceGst:{
        type:String
    },
});

const serviceManagementModel=mongoose.model("serviceManagement",serviceManagementSchema);
module.exports=serviceManagementModel;