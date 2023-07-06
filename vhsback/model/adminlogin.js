const mongoose = require("mongoose");

const adminloginschema = new mongoose.Schema({
  email: {
    type: String,
  },
  createpassword: {
    type: String,
  },
  confirmpassword: {
    type: String,
  },
  password: {
    type: String,
  },
});

const adminloginmodel = mongoose.model("admin", adminloginschema);
module.exports = adminloginmodel;
