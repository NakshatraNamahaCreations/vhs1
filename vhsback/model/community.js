const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    appartmentname: {
    type: String,
  },
  communityn: {
    type: String,
  },
  percentage: {
    type: String,
  },
  projectmanager: {
    type: String,
  },
  contactperson: {
    type: String,
  },
  contactno: {
    type: String,
  },
  email: {
    type: String,
  },
  login: {
    type: String,
  },
  password: {
    type: String,
  },
  cpassword: {
    type: String,
  },
});

const communitymodel = mongoose.model("community", communitySchema);
module.exports = communitymodel;
