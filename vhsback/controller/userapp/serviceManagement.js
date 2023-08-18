const serviceManagementModel = require("../../model/userapp/serviceMangament");

class serviceManagement {
  
  async addserviceManagement(req, res) {
    let { serviceName,serviceCategory,NofServiceman,serviceHour,serviceDesc,servicePrice, serviceGst} = req.body;
    let file = req.file.filename;
    let add = new serviceManagementModel({
        serviceImg: file,
        serviceName:serviceName,
        serviceCategory:serviceCategory,
        NofServiceman:NofServiceman,
        serviceHour:serviceHour,
        serviceDesc:serviceDesc,
        servicePrice:servicePrice,
        serviceGst:serviceGst

    });
    let save = add.save();
    if (save) {
      return res.json({ sucess: "service added successfully" });
    }
  }

  //edit serviceManagement
  async editserviceManagement(req,res){
    let id=req.params.id;
    let { serviceImg,serviceName,serviceCategory,NofServiceman,serviceHour,serviceDesc,servicePrice, serviceGst} = req.body;

    
    let data=await serviceManagementModel.findOneAndUpdate(
        {_id:id},
        { serviceImg,serviceName,serviceCategory,NofServiceman,serviceHour,serviceDesc,servicePrice, serviceGst}
    );
    if (data) {
        return res.json({ success: "Updated" });
      }

  }
  async getserviceManagement(req, res) {
    let service = await serviceManagementModel.find({}).sort({ _id: -1 });
    if (service) {
      return res.json({ service: service });
    }
  }

  async postsubcategory(req, res) {
    let { serviceCategory} = req.body;
    console.log(serviceCategory);
    
    let subcategory = await serviceManagementModel
      .find({ serviceCategory })
      .sort({ _id: -1 });

    if (subcategory) {
      return res.json({ services: subcategory });
    }
  }

  async postdeleteserviceManagement(req, res) {
    let id = req.params.id;
    const data = await serviceManagementModel.deleteOne({ _id: id });

    return res.json({ success: "Successfully" });
  }
}

const ServiceManagemntController = new serviceManagement();
module.exports = ServiceManagemntController;
