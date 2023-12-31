const express=require("express");
const router=express.Router();
const addcallcontroller=require("../controller/addcall");

router.post("/adddsrcall",addcallcontroller.save);
router.get("/getalldsrlist",addcallcontroller.getalldsrcall);
router.post("/postdsrcategory",addcallcontroller.postcategory);
router.post("/updatedsrdata/:id",addcallcontroller.editdsr);

router.get("/getaggredsrdata", addcallcontroller.getallagreedata);

module.exports=router;