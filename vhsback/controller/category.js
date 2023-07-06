const categorymodel = require("../model/category");

class Category {
  async addcategory(req, res) {
    let { category } = req.body;
    let add = new categorymodel({
      category: category,
    });
    let save = add.save();
    if (save) {
      return res.json({ sucess: "Category name added successfully" });
    }
  }

  //edit category
  async editcategory(req,res){
    let id=req.params.id;
    let{category}=req.body;
    
    let data=await categorymodel.findOneAndUpdate(
        {_id:id},
        {category}
    );
    if (data) {
        return res.json({ success: "Updated" });
      }

  }
  async getcategory(req, res) {
    let category = await categorymodel.find({}).sort({ _id: -1 });
    if (category) {
      return res.json({ category: category });
    }
  }

  async getallcategory(req, res) {
    let category = await categorymodel.aggregate([
      {
        $lookup: {
          from: "subcategories",
          localField: "category",
          foreignField: "category",
          as: "subcategories",
        },
      },
    ]);
    if (category) {
      return res.json({ category: category });
    }
  }

  async postdeletecategory(req, res) {
    let id = req.params.id;
    const data = await categorymodel.deleteOne({ _id: id });

    return res.json({ success: "Successfully" });
  }
}

const categoryController = new Category();
module.exports = categoryController;
