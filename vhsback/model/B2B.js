const mongoose = require("mongoose");

const B2BSchema = new mongoose.Schema({
  b2bname: {
    type: String,
  },
  contactperson: {
    type: String,
  },
  maincontact: {
    type: String,
  },
  alternateno: {
    type: String,
  },
  email: {
    type: String,
  },
  gst: {
    type: String,
  },

  address: {
    type: String,
  },

  city: {
    type: String,
  },

  b2btype: {
    type: String,
  },

  approach: {
    type: String,
  },
  instructions: {
    type: String,
  },
}, {
  timestamps: true,
});

const B2Bmodel = mongoose.model("B2B", B2BSchema);
module.exports = B2Bmodel;
