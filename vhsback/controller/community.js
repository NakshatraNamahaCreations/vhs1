const communitymodel = require("../model/community");

class community {
  //add
  async addcommunity(req, res) {
    let {
      appartmentname,
      communityn,
      percentage,
      projectmanager,
      contactperson,
      email,
      contactno,
      login,
      password,
      cpassword,
    } = req.body;

    try {
      let community = new communitymodel({
        appartmentname,
        communityn,
        percentage,
        projectmanager,
        contactperson,
        email,
        login,
        contactno,
        password,
        cpassword,
      });

      let save = community.save();
      if (save) {
        return res.json({ success: "customer added successfully" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  //edit
  async editcommunity(req, res) {
    let id = req.params.id;

    let {
      appartmentname,
      communityn,
      percentage,
      projectmanager,
      contactperson,
      email,
      contactno,
      login,
      password,
      cpassword,
    } = req.body;
    let data = await communitymodel.findOneAndUpdate(
      { _id: id },
      {
        appartmentname,
      communityn,
      percentage,
      projectmanager,
      contactperson,
      email,
      contactno,
      login,
      password,
      cpassword,
      }
    );
    if (data) {
      return res.json({ success: "Updated" });
    }
  }

  //Get all
  async getallcommunity(req, res) {
    let data = await communitymodel.find({}).sort({ _id: -1 });
    if (data) {
      return res.status(200).json({ community: data });
    } else {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  //Delete
  async deletecommunity(req, res) {
    let id = req.params.id;
    const data = await communitymodel.deleteOne({ _id: id });
    return res.json({ success: "Delete Successf" });
  }
}
const communitycontroller = new community();
module.exports = communitycontroller;
