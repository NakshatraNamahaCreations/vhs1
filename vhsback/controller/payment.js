const PaymentModal = require("../model/payment");

class Payment {
  async addPayment(req, res) {
    try {
      let {
        paymentDate,
        paymentType,
        paymentMode,
        amount,
        Comment,
        customerId,
      } = req.body;
      if (!paymentDate || !paymentType || !paymentMode || !amount || !Comment) {
        return res.status(500).json({ error: "Field must not be empty" });
      } else {
        let add = new PaymentModal({
          paymentDate,
          paymentType,
          paymentMode,
          amount,
          Comment,
          customer: customerId,
        });
        const savedPayment = await add.save();
        if (savedPayment) {
          return res.status(200).json({ success: "Payment added successfully" });
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
      const payments = await PaymentModal.find({ customer: customerId });
  
      console.log(payments);
      if (!payments) {
        return res.status(404).json({ error: 'Payment details not found' });
      }
  
      return res.status(200).json({ payments });
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred' });
    }
  }
}

const paymentController = new Payment();
module.exports = paymentController;
