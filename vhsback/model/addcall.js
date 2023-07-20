const mongoose = require("mongoose");

const addCallSchema = new mongoose.Schema({
  // enquiryaddSchema is a MongoDB document
  cardNo: {
    //collections
    type: Number,
  },
  bookingDate: {
    // collections
    type: String,
  },
  category: {
    type: String,
  },
  jobCategory: {
    type: String,
  },
  complaintRef: {
    type: Number,
  },
  priorityLevel: {
    type: String,
  },
  appoDate: {
    type: String,
  },
  appoTime: {
    type: String,
  },
  customerFeedback: {
    type: String,
  },
  workerName: {
    type: String,
  },
  workerAmount:{
    type:String
  },
  daytoComplete:{
    type:String
  },
  techComment: {
    type: String,
  },
  backofficerExe: {
    type: String,
  },
  backofficerno: {
    type: String,
  },
  techName: {
    type: String,
  },
  showinApp: {
    type: String,
  },
  sendSms: {
    type: String,
  },
  inSignDateTime: {
    type: String,
  },
  outSignDateTime: {
    type: String,
  },
  jobComplete: {
    type: String,
  },
  amount:{
    type:String
  },
  salesExecutive:{
    type:String
  },
  jobType:{
    type:String
  }
});

const addcallModel = mongoose.model("addcall", addCallSchema);
module.exports = addcallModel;
