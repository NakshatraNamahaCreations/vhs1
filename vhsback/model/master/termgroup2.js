const mongoose = require("mongoose");

const termsgroupSchema = new mongoose.Schema({
  seqno: {
    type: String,
    require: true,
  },
  termsgroup: {
    type: String,
  },
  terms:{
    type:String
  },
  category:{
    type:String
  },
  header:{
    type:String
  },
  content:{
    type:String
  }
});

const termsgroup2model = mongoose.model("termsgroup2", termsgroupSchema);
module.exports = termsgroup2model;
