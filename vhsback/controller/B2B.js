const B2Bmodel = require("../model/B2B");

class B2B {
  //add
  async addB2B(req, res) {
    let {
      b2bname,
      contactperson,
      maincontact,
      alternateno,
      gst,
      email,
      address,
      city,
      b2btype,
      instructions,
      approach,
    } = req.body;

    try {
      let customer = new B2Bmodel({
        b2bname,
        contactperson,
        maincontact,
        alternateno,
        gst,
        email,
        address,
        city,
        b2btype,
        instructions,
        approach,
      });

      let save = customer.save();
      if (save) {
        return res.json({ success: "B2B added successfully" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  //edit
  async editB2B(req, res) {
    let id = req.params.id;

    let {
        b2bname,
        contactperson,
        maincontact,
        alternateno,
        gstinid,
        email,
        address,
        city,
        b2btype,
        instructions,
        approach,
    } = req.body;
    let data = await B2Bmodel.findOneAndUpdate(
      { _id: id },
      {
        b2bname,
        contactperson,
        maincontact,
        alternateno,
        gstinid,
        email,
        address,
        city,
        b2btype,
        instructions,
        approach,
      }
    );
    if (data) {
      return res.json({ success: "Updated" });
    }
  }

  //Get all customer
  async getallB2B(req, res) {
    let data = await B2Bmodel.find({}).sort({ _id: -1 });
    if (data) {
      return res.status(200).json({ B2B: data });
    } else {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  //Delete doctor
  async deleteB2B(req, res) {
    let id = req.params.id;
    const data = await B2Bmodel.deleteOne({ _id: id });
    return res.json({ success: "Delete Successf" });
  }
}
const B2Bcontroller = new B2B();
module.exports = B2Bcontroller;
