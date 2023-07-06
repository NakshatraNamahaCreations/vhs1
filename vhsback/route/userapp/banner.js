const bannermodel=require("../../model/userapp/banner");

const multer=require("multer");
const express=require("express");
const router=express.Router();

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/userbanner');
    },
    filename:function(req,file,cb){
        cb(null,Date.now() + "_" + file.originalaname)
    }
})
//add banners

router.route("/adduserbanner").post(async (req, res) => {
  const banner = req.body.banner;
  const newbanner = new bannermodel({
    banner,
  });
  newbanner
    .save()
    .then(() => {
      res.status(200).json("user banner added");
    })
    .catch((err) => {
      res.status(400).json(`Error : ${err}`);
    });
});

//get banner
router.route("/getuserbanner").get(async (req, res) => {
  let banner = await bannermodel.find({});
  if (banner) {
    return res.status(200).json({ banner: banner });
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

//delete banner

router.route("/deleteuserbanner").post(async (req, res) => {
  let id = req.params.id;
  const data = await bannermodel.delete({ _id: id });
  return res.json({ success: "deleted successfully" });
});

module.exports = router;
