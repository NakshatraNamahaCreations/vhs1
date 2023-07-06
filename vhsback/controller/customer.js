const customerModel = require("../model/customer");

class addcustomer {
  //add customer
  async addcustomer(req, res) {
    let {
      customerName,
      contactPerson,
      category,
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
    } = req.body;
    try {
      // Get the latest card number from the database
      const latestCustomer = await customerModel
        .findOne()
        .sort({ cardNo: -1 })
        .exec();
      const latestCardNo = latestCustomer ? latestCustomer.cardNo : 0;

      // Increment the card number by 1
      const newCardNo = latestCardNo + 1;

      // Create a new customer instance with the generated card number
      const customer = new customerModel({
        cardNo: newCardNo,
        customerName,
        contactPerson,
        category,
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
      });
      // Save the customer data to the database
      const savedCustomer = await customer.save();

      if (savedCustomer) {
        return res.json({ success: "Customer added successfully" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //edit customer
  async editcustomer(req, res) {
    let id = req.params.id;

    let {
      cardNo,
      customerName,
      contactPerson,
      mainContact,
      category,
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
    } = req.body;
    let data = await customerModel.findOneAndUpdate(
      { _id: id },
      {
        cardNo,
        customerName,
        contactPerson,
        category,
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
      }
    );
    if (data) {
      return res.json({ success: "Updated" });
    }
  }

   async addservicedetails(req, res) {
    try {
      const id = req.params.id;
      const { treatmentdetails } = req.body;

      const doc = await customerModel.findByIdAndUpdate(
        id,
        { $push: { treatmentdetails: treatmentdetails } },
        { new: true } // Optional: To return the updated document
      );

      res.json(doc);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  //Get all customer
  async getallcustomer(req, res) {
    let data = await customerModel.find({}).sort({ _id: -1 });
    if (data) {
      return res.status(200).json({ customers: data });
    } else {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  //Delete customer
  async deletecustomer(req, res) {
    let id = req.params.id;
    const data = await customerModel.deleteOne({ _id: id });
    return res.json({ success: "Delete Successf" });
  }
}
const customercontroller = new addcustomer();
module.exports = customercontroller;
