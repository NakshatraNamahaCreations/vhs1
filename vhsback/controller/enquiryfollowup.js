const enquiryfollowupModel = require("../model/enquiryfollowup");

class addenquiry {
  async Addenquiryfollowup(req, res) {
    try {
      // Generate the series number
      // const uniqueNumber = await generateSeriesNumber();
      let {
        EnquiryId,
        category,
        folldate,
        staffname,
        response,
        desc,
        value,
        colorcode,
        nxtfoll,
      } = req.body;
      const newVendor = new enquiryfollowupModel({
        EnquiryId,
        category,
        folldate,
        staffname,
        response,
        desc,
        value,
        colorcode,
        nxtfoll,
      });
      newVendor.save().then((data) => {
        return res
          .status(200)
          .json({ Success: "Account created. Please login" });
      });
    } catch (error) {
      console.error("Error enquiry add:", error);
    }
  }

  //Get all
  async getallenquiryfollowup(req, res) {
    let data = await enquiryfollowupModel.find({}).sort({ _id: -1 });
    if (data) {
      return res.status(200).json({ enquiryfollowup: data });
    } else {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  //Get survey data
  async getsurveydata(req, res) {
    let data = (await enquiryfollowupModel.find({})).filter(
      (i) => i.response === "Survey"
    );
    if (data) {
      return res.status(200).json({ enquiryfollowup: data });
    } else {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

   //Get new data
   async getnewdata(req, res) {
    let data = (await enquiryfollowupModel.find({})).filter(
      (i) => i.response === "New"
    );
    if (data) {
      return res.status(200).json({ enquiryfollowup: data });
    } else {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
  //post category

  async postsurveycat(req, res) {
    let { category } = req.body;
    let data = await enquiryfollowupModel.find({ category }).sort({ _id: -1 });

    const data1=data.filter((i)=>i.response === "Survey")

    if (data1) {
      return res.json({ enquiryfollowup: data1 });
    } else {
      return res.json({ error: "something went wrong" });
    }
  }

  
  async cancelsurvey(req, res) {
    try {
      let id = req.params.id;
      let { reasonForCancel } = req.body;
      let newData = await enquiryfollowupModel.findOneAndUpdate(
        { _id: id },
        {
          reasonForCancel,
          cancelStatus: true, // Set cancelStatus to true when canceling the survey
        },
        { new: true } // Return the updated document
      );
      if (newData) {
        return res.status(200).json({ Success: "Added", cancelStatus: true });
      } else {
        return res.status(500).json({ error: "Something went wrong" });
      }
    } catch (error) {
      console.log("Error in controller : ", error);
      return res.status(403).send({
        message:
          "Something went wrong while updating your details Please try again later.",
      });
    }
  }
  async updateDetails(req, res) {
    let id = req.params.id;
    let { technicianname, appoDate, appoTime,sendSms } = req.body;
    let newData = await enquiryfollowupModel.findOneAndUpdate(
      { _id: id },
      {
        technicianname,
        appoDate,
        appoTime,
        sendSms
      }
    );
    if (newData) {
      return res.status(200).json({ Success: "Added" });
    } else {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  async getflwdata(req, res) {
    try {
      let data = await enquiryfollowupModel.aggregate([
        {
          $lookup: {
            from: "enquiryadds",
            localField: "EnquiryId",
            foreignField: "EnquiryId",
            as: "enquirydata",
          },
        },
      
      ]);
    
      if (data) {
        return res.json({ enquiryfollowup: data});
      }
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
}

  async getcalllaterdata(req, res) {
    try {
      let data = await enquiryfollowupModel.aggregate([
        {
          $lookup: {
            from: "enquiryadds",
            localField: "EnquiryId",
            foreignField: "EnquiryId",
            as: "enquirydata",
          },
        },
      
      ]);
      const data1=data.filter((i)=>i.response === "Call Later")
      if (data1) {
        return res.json({ enquiryfollowup: data1 });
      }
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
}

  //aggregate enquiry data and survey
  async getallagreedata(req, res) {
    try {
      let data = await enquiryfollowupModel.aggregate([
        {
          $lookup: {
            from: "enquiryadds",
            localField: "EnquiryId",
            foreignField: "EnquiryId",
            as: "enquirydata",
          },
        },
        {
          $lookup: {
            from: "treatments",
            localField: "EnquiryId",
            foreignField: "EnquiryId",
            as: "treatmentData",
          },
        },
      ]);
      const data1=data.filter((i)=>i.response === "Survey")
      if (data1) {
        console.log("data1",data1)
        return res.json({ enquiryfollowup: data });
      }
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
}

  //Delete
  async deleteenquiryfollowup(req, res) {
    let id = req.params.id;
    const data = await enquiryfollowupModel.deleteOne({ _id: id });
    return res.json({ success: "Delete Successf" });
  }
}
const enquiryfollowupcontroller = new addenquiry();
module.exports = enquiryfollowupcontroller;
