const advPaymentModal = require("../model/advpayment");

class advPayment {
  async advPayment(req, res) {
    try {
      let {
        paymentDate,
        paymentMode,
        amount,
        Comment,
        userID,
        EnquiryId,
      } = req.body;
      if (!paymentDate || !paymentMode || !amount) {
        return res.status(500).json({ error: "Field must not be empty" });
      } else {
        let add = new advPaymentModal({
          paymentDate,
          paymentMode,
          amount,
          Comment,
          userID,
          EnquiryId,
        });
        let savedPayment = add.save();
        if (savedPayment) {
          return res
            .status(200)
            .json({ success: "Payment added successfully" });
        }
      }
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while adding payment" });
    }
  }

  async getPaymentByCustomerId(req, res) {
    try {
      const customerId = req.params.customerId;
      const payments = await advPaymentModal.find({ userID: customerId });

      console.log(payments);
      if (!payments) {
        return res.status(404).json({ error: "Payment details not found" });
      }

      return res.status(200).json({ payments });
    } catch (error) {
      return res.status(500).json({ error: "An error occurred" });
    }
  }
}

const advpaymentController = new advPayment();
module.exports = advpaymentController;
