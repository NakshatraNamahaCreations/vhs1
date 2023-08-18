const express = require("express");
const router = express.Router();
const ServiceManagemntController = require("../../controller/userapp/serviceManagement");


const multer=require("multer");
 
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/service");
    },
    filename: function (req, file, cb) {
		cb(null, Date.now() + "_" + file.originalname);
	},
});
const  upload =multer({storage:storage});

router.post("/addservices",upload.single("serviceImg"), ServiceManagemntController.addserviceManagement);
router.get("/getservices", ServiceManagemntController.getserviceManagement);
router.post("/editservices/:Id", ServiceManagemntController.editserviceManagement);
router.post("/deleteservices/:id", ServiceManagemntController.postdeleteserviceManagement);
router.post("/postcategory", ServiceManagemntController.postsubcategory);




module.exports = router;