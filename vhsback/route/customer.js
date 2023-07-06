const express=require("express");
const router=express.Router();
const customercontroller=require("../controller/customer");

router.post("/addcustomer",customercontroller.addcustomer);
router.get("/getcustomer",customercontroller.getallcustomer);
router.post("/deletetercustomer/:id",customercontroller.deletecustomer);
router.post("/addservicedetails/:id", customercontroller.addservicedetails);

module.exports=router;