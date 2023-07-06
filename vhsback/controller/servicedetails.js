const servicedetailsmodel = require("../model/servicedetails");

class servicedetails {
  async addservicedetails(req, res) {
    let {
      customerName,
      contactPerson,
      mainContact,
      alternateContact,
      email,
      gstinid,
      rbhf,
      cnap,
      lnf,
      mainArea,
      city,
      pinCode,
      customerType,
      size,
      color,
      instructions,
      approach,
      serviceExecute,
      cardNo,
      contractType,
      service,
      serviceCharge,
      dateofService,
      desc,
      firstserviceDate,
      serviceFrequency,
      startDate,
      category,
      expiryDate,
      date,
      time
    } = req.body;
    // let file = req.file.filename;
    if (!category ) {
      return res.status(500).json({ error: "Field must not be empty" });
    } else {
      let add = new servicedetailsmodel({
        customerName:customerName,
        contactPerson:contactPerson,
        mainContact:mainContact,
        alternateContact:alternateContact,
        email:email,
        gstinid:gstinid,
        rbhf:rbhf,
        cnap:rbhf,
        lnf:lnf,
        mainArea:mainArea,
        city:city,
        pinCode:pinCode,
        customerType:customerType,
        size:size,
        color:color,
        instructions:instructions,
        approach:approach,
        serviceExecute:serviceExecute,
        cardNo:cardNo,
        category: category,
        contractType: contractType,
        service: service,
        serviceCharge: serviceCharge,
        dateofService: dateofService,
        desc: desc,
        serviceFrequency: serviceFrequency,
        startDate: startDate,
        expiryDate: expiryDate,
        firstserviceDate: firstserviceDate,
        date:date,
        time:time
      });
      let save = add.save();
      if (save) {
        return res.json({ sucess: "Added successfully" });
      }
    }
  }
  //edit 
  async editservicedetails(req, res) {
    let id = req.params.id;
    let {
      customerName,
      contactPerson,
      mainContact,
      alternateContact,
      email,
      gstinid,
      rbhf,
      cnap,
      lnf,
      mainArea,
      city,
      pinCode,
      customerType,
      size,
      color,
      instructions,
      approach,
      serviceExecute,
      cardNo,
      contractType,
      service,
      serviceCharge,
      dateofService,
      desc,
      firstserviceDate,
      serviceFrequency,
      startDate,
      category,
      expiryDate,
    } = req.body;

    let data = await servicedetailsmodel.findOneAndUpdate(
      { _id: id },
      {
        customerName,
        contactPerson,
        mainContact,
        alternateContact,
        email,
        gstinid,
        rbhf,
        cnap,
        lnf,
        mainArea,
        city,
        pinCode,
        customerType,
        size,
        color,
        instructions,
        approach,
        serviceExecute,
        cardNo,
        contractType,
        service,
        serviceCharge,
        dateofService,
        desc,
        firstserviceDate,
        serviceFrequency,
        startDate,
        category,
        expiryDate,
      }
    );
    if (data) {
      return res.json({ success: "Updated" });
    }
    else{
      return res.json({error:"error"})
    }
  }

  async postcategory(req, res) {
    let { category } = req.body;
    let servicedetails   = await servicedetailsmodel.find({ category });

    if (servicedetails) {
      return res.json({ servicedetails: servicedetails });
    } else {
      return res.json({ error: "something went wrong" });
    }
  }
  async getservicedetails(req, res) {
    let servicedetails = await servicedetailsmodel.find({}).sort({ _id: -1 });
    if (servicedetails) {
      return res.json({ servicedetails: servicedetails });
    }
  }

  async deleteservicedetails(req, res) {
    let id = req.params.id;
    let data = await servicedetailsmodel.deleteOne({ _id: id });
    return res.json({ sucess: "Successfully deleted" });
  }
}

const servicedetailscontroller = new servicedetails();
module.exports = servicedetailscontroller;
