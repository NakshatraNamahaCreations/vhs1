const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  cardNo: {
    type: Number,
  },
  category: {
    type: String,
  },
  contractType: {
    type: String,
  },
  service: {
    type: String,
  },
  serviceCharge: {
    type: String,
  },
  dateofService: {
    type: String,
    default:"00-00-0000"
  },
  desc: {
    type: String,
  },
  serviceFrequency: {
    type: String,
  },
  startDate: {
    type: String,
    default:"00-00-0000"
  },
  expiryDate: {
    type: String,
    default:"00-00-0000"
  },
  firstserviceDate:{
    type:String,
    default:"00-00-0000"
  },
  customerName: {
    type: String,
  },
  contactPerson: {
    type: String,
    
  },
  mainContact: {
    type: Number,
   
  },
  alternateContact: {
    type: Number,
   
  },
  email: {
    type: String,
  
  },
  gstinid: {
    type: String,
   
  },
  rbhf: {
    type: String,
  
  },
  cnap: {
    type: String,
  
  },
  lnf: {
    type: String,
 
  },
  mainArea: {
    type: String,
  },
  city: {
    type: String,
  },
  pinCode: {
    type: Number,
  },
  customerType: {
    type: String,
   
  },
  size: {
    type: String,
   
  },
  color: {
    type: String,
  },
  instructions: {
    type: String,
  },
  approach: {
    type: String,

  },
  serviceExecute: {
    type: String,
  },
  date:{
    type:String
  },
  time:{
    type:String
  }
});

const servicedetailsmodel = mongoose.model("servicedetails", serviceSchema);
module.exports = servicedetailsmodel;
