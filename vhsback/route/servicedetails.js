const express=require("express");
const router=express.Router();
const servicedetailscontroller=require("../controller/servicedetails");

router.post("/addservicedetails",servicedetailscontroller.addservicedetails);
router.get("/getservicedetails",servicedetailscontroller.getservicedetails);
router.post("/deleteservicedetails/:id",servicedetailscontroller.deleteservicedetails);
router.post("/editservicedetails/:id",servicedetailscontroller.editservicedetails);
router.post("/postservicecategory", servicedetailscontroller.postcategory);

module.exports=router;