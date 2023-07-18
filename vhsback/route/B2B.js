const express = require("express");
const router = express.Router();
const B2Bcontroller = require("../controller/B2B");

router.post("/addB2B", B2Bcontroller.addB2B);
router.get("/getB2B", B2Bcontroller.getallB2B);
router.post("/deleteterB2B/:id", B2Bcontroller.deleteB2B);
router.post("/storeB2B", B2Bcontroller.addB2BViaExcelSheet);

module.exports = router;
