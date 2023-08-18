const express=require("express");
const router=express.Router();
const advpaymentController=require("../controller/advpayment");

router.post("/AdvPayment",advpaymentController.advPayment);


router.get("/getAdvPaymentByCustomerId/:customerId",advpaymentController.getPaymentByCustomerId);


module.exports=router;