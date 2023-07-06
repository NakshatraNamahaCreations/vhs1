const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
  category: {
    type: String,
  },
  subcategory: {
    type: String,
  },
  subcategoryimage: {
    type: String,
  },
  videolink: {
    type: String,
  },
});

const subcategoryModel = mongoose.model("subcategory", subcategorySchema);
module.exports = subcategoryModel;
