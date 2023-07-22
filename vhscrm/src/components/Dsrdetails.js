import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import DSRnav from "../components/DSRnav";
import { Link, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function Dsrdetails() {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const location = useLocation();
  const { data } = location.state || {};

  const [servicedata, setservicedata] = useState([]);
  const [techniciandata, settechniciandata] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;
  const [bookingDate, setbookingDate] = useState(data.bookingDate);
  const [jobCategory, setjobCategory] = useState(data.jobCategory);
  const [priorityLevel, setpriorityLevel] = useState(
    data.dsrdata[0]?.priorityLevel
  );
  const [appoDate, setappoDate] = useState(data.dsrdata[0]?.appoDate);
  const [appoTime, setappoTime] = useState(data.dsrdata[0]?.appoTime);
  const [customerFeedback, setcustomerFeedback] = useState(
    data.dsrdata[0]?.customerFeedback
  );
  const [jobType, setjobType] = useState(data.jobType);
  const [techComment, settechComment] = useState(data.dsrdata[0]?.techComment);
  const [techName, settechName] = useState(data.dsrdata[0]?.techName);
  const [complaintRef, setcomplaintRefo] = useState([]);
  // const [Showinapp, setShowinapp] = useState(
  //   data.dsrdata[0]?.showinApp  ? data.dsrdata[0]?.showinApp : true
  // );
  const [Showinapp, setShowinapp] = useState(data.dsrdata[0]?.showinApp || "YES");
  const [jobComplete, setjobComplete] = useState(
    data.dsrdata[0]?.jobComplete || "NO"
  );
  const [sendSms, setsendSms] = useState(data.dsrdata[0]?.sendSms);
  const [workerAmount, setworkerAmount] = useState(
    data.dsrdata[0]?.workerAmount
  );
  const [workerName, setworkerName] = useState(data.dsrdata[0]?.workerName);
  const [daytoComplete, setdaytoComplete] = useState(
    data.dsrdata[0]?.daytoComplete
  );

  const [dsrdata, setdsrdata] = useState([]);
const [LatestCardNo, setLatestCardNo] = useState(0);


  console.log("new", data);

  useEffect(() => {
    getservices();
    gettechnician();
    getaddcall();
    getAlldata();
  }, []);

  const getservices = async () => {
    let res = await axios.get(apiURL + "/getsubcategory");
    if ((res.status = 200)) {
      setservicedata(res.data?.subcategory);
    }
  };
  const gettechnician = async () => {
    let res = await axios.get(apiURL + "/getalltechnician");
    if ((res.status = 200)) {
      settechniciandata(res.data?.technician.filter((i)=>i.city === data.customerData[0]?.city && i.category === data.customerData[0]?.category));
    }
  };

  const handleChange = (event) => {
    setShowinapp(event.target.value);
  };
  const handleChange1 = (event) => {
    setjobComplete(event.target.value);
  };

  const newdata = async (e) => {
    e.preventDefault();

 
      try {
        const config = {
          url: "/adddsrcall",
          method: "post",
          baseURL: apiURL,
          // data: formdata,
          headers: { "content-type": "application/json" },
          data: {
            cardNo: data.cardNo,
            category: data.category,
            bookingDate: moment().format("DD-MM-YYYY"),
            priorityLevel: priorityLevel,
            appoDate: appoDate,
            appoTime: appoTime,
            customerFeedback: customerFeedback,
            techComment: techComment,
            workerName: workerName,
            workerAmount: workerAmount,
            daytoComplete: daytoComplete,
            backofficerno: admin.contactno,
            techName: techName,
            showinApp: Showinapp,
            sendSms: sendSms,
            jobType:jobType,
            jobComplete: jobComplete,
            amount: data.serviceCharge,
          },
        };
        await axios(config).then(function (response) {
          if (response.status === 200) {
            console.log("success");
            alert(" Added");

            window.location.assign("/dsrcategory");
          }
        });
      } catch (error) {
        console.error(error);
        alert(" Not Added");
      }
   
  };


  const save = async (e) => {
    e.preventDefault();

   
      try {
        const config = {
          url: `/updatedsrdata/${data.dsrdata[0]?._id}`,
          method: "post",
          baseURL: apiURL,
          // data: formdata,
          headers: { "content-type": "application/json" },
          data: {
            bookingDate: bookingDate,
            jobCategory: jobCategory,
            complaintRef: data.complaintRef,
            priorityLevel: priorityLevel,
            appoDate: appoDate,
            appoTime: appoTime,
            customerFeedback: customerFeedback,
            jobType: jobType,
            techComment: techComment,
            backofficerExe: admin.displayname,
            techName: techName,
            showinApp: Showinapp,
            sendSms: sendSms,
            jobComplete: jobComplete,
            workerAmount: workerAmount,
            workerName: workerName,
            daytoComplete: daytoComplete,
          },
        };
        await axios(config).then(function (response) {
          if (response.status === 200) {
            console.log("success");
            alert(" Added");

            window.location.assign("/dsrcategory");
          }
        });
      } catch (error) {
        console.error(error);
        alert(" Not Added");
      }

  };

  const getaddcall = async () => {
    let res = await axios.get(apiURL+"/getalldsrlist");
    if (res.status === 200) {
      console.log("allCustomer----", res);
    
      setLatestCardNo(res.data?.addcall[0]?.complaintRef);
    }
  };
  console.log("latestCardNo==", LatestCardNo + 1);
  const getAlldata = async () => {
    let res = await axios.get(apiURL + "/getaggredsrdata");
    if (res.status === 200) {
      setdsrdata(res.data.addcall);
      setcomplaintRefo(
        res.data?.addcall.filter((i) => i.cardNo === data.cardNo)
      );
    }
  };
  console.log("data", complaintRef);
  let i = 1;
  return (
    <div className="web">
      <Header />
      <DSRnav />

      <div className="row m-auto ">
        <div className="col-md-12">
          <div className="card" style={{ marginTop: "20px" }}>
            <div className="card-body p-4">
              <h5>Job Information</h5>
              <hr />

              <div className="row pt-3">
                <div className="col-md-4">
                  <div className="vhs-input-label">Booking Date</div>
                  <div className="group pt-1">
                    <input
                      type="text"
                      className="col-md-12 vhs-input-value"
                      defaultValue={(data.dsrdata[0]?.bookingDate)?(data.dsrdata[0]?.bookingDate):moment().format("DD-MM-YY")}
                      onChange={(e) => setbookingDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="vhs-input-label">Complaint Ref. </div>
                  <div className="group pt-1">
                    <input
                      type="text"
                      className="col-md-12 vhs-input-value"
                      placeholder="253773637"
                      // defaultValue={}
                      value={(data.dsrdata[0]?.complaintRef)?data.dsrdata[0]?.complaintRef +1:LatestCardNo + 1}
                    />
                  </div>
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-4">
                  <div className="vhs-input-label">Priority Level</div>
                  <div className="group pt-1">
                    <select
                      className="col-md-12 vhs-input-value"
                      onChange={(e) => setpriorityLevel(e.target.value)}
                    >
                      {data.dsrdata[0]?.priorityLevel ? (
                        <option>{data.dsrdata[0]?.priorityLevel}</option>
                      ) : (
                        <option>--select--</option>
                      )}
                      <option>High</option>
                      <option>Low</option>
                      <option>Normal</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vhs-input-label">Appointment Date</div>
                  <div className="group pt-1">
                  <input
                      type="date"
                      className="col-md-12 vhs-input-value"
                      defaultValue ={appoDate ? appoDate  : moment().format("YYYY-MM-DD")}
                      onChange={(e) => setappoDate(e.target.value)}
                    />
                  </div>
                </div>

               
                <div className="col-md-4">
                  <div className="vhs-input-label">Appointment Time</div>
                  <div className="group pt-1">
                    <input
                      type="time"
                      className="col-md-12 vhs-input-value"
                      defaultValue={(data.dsrdata[0]?.appoTime)?data.dsrdata[0]?.appoTime:moment().format("LT")}
                      onChange={(e) => setappoTime(e.target.value)}
                    />
                    <p>Time Given</p>
                  </div>
                </div>
              </div>

              <h5>Customer Information</h5>
              <hr />

              <div className="row pt-3">
                <div className="col-md-4">
                  <div className="vhs-input-label">Customer Name</div>
                  <div className="group pt-1">
                    <div className="vhs-non-editable">
                      {data.customer[0]?.customerName}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vhs-input-label">Card No</div>
                  <div className="group pt-1">
                    <div className="vhs-non-editable">{data.cardNo}</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vhs-input-label">Contact 1</div>
                  <div className="group pt-1">
                    <div className="vhs-non-editable">
                      {data.customer[0]?.mainContact}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-4">
                  <div className="vhs-input-label"> Contact 2</div>
                  <div className="group pt-1">
                    <div className="vhs-non-editable">
                      {data.customer[0]?.alternateContact}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vhs-input-label">Address</div>
                  <div className="group pt-1">
                    <div className="vhs-non-editable">
                      {" "}
                      {data.customer[0]?.cnap},{data.customer[0]?.rbhf},
                      {data.customer[0]?.lnf}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vhs-input-label"> Email Id</div>
                  <div className="group pt-1">
                    <div className="vhs-non-editable">
                      {data.customer[0]?.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-4">
                  <div className="vhs-input-label">City</div>
                  <div className="group pt-1">
                    <div className="vhs-non-editable">
                      {data.customer[0]?.city}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vhs-input-label">Customer Type</div>
                  <div className="group pt-1">
                    <div className="vhs-non-editable">
                      {data.customer[0]?.customerType}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vhs-input-label"> Special Instruction</div>
                  <div className="group pt-1">
                    <div className="vhs-non-editable">
                      {data.customer[0]?.instructions}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h6>Treatment Details</h6>
                <table class="table table-hover table-bordered mt-1">
                  <thead className="">
                    <tr className="table-secondary">
                      <th className="table-head" scope="col">
                        Sr
                      </th>
                      <th className="table-head" scope="col">
                        Category
                      </th>
                      <th className="table-head" scope="col">
                        Cont.Type
                      </th>
                      <th className="table-head" scope="col">
                        Treatment
                      </th>
                      <th className="table-head" scope="col">
                        Service Freq.
                      </th>
                      <th className="table-head" scope="col">
                        Contract Period
                      </th>
                      <th className="table-head" scope="col">
                        Service Date
                      </th>
                      <th className="table-head" scope="col">
                        Description
                      </th>
                      <th className="table-head" scope="col">
                        Charges
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {data.map((item) => ( */}
                    <tr>
                      <td>{i++}</td>
                      <td>{data?.category}</td>
                      <td>{data?.contractType}</td>
                      <td>{data?.service}</td>
                      <td>{data?.serviceFrequency}</td>
                      <td>
                        {data?.startDate}/{data?.expiryDate}
                      </td>
                      <td>{data?.dateofService}</td>
                      <td>{data?.desc}</td>
                      <td>{data?.serviceCharge}</td>
                    </tr>
                    {/* ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <h5 className="mt-5">Service & Repair Information</h5>
        <hr />

        <div className="row pt-3">
          <div className="row">
            <div className="col-6 d-flex">
              <div className="col-4">Customer Feedback</div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">
                <textarea
                  name="postContent"
                  rows={5}
                  cols={20}
                  className="col-md-12 vhs-input-label"
                  onChange={(e) => setcustomerFeedback(e.target.value)}
                  defaultValue={data.dsrdata[0]?.customerFeedback}
                />
              </div>
            </div>

            <div className="col-6 d-flex">
              <div className="col-4">Technician Comment </div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">
                <textarea
                  name="postContent"
                  rows={2}
                  cols={40}
                  className="col-md-12 vhs-input-label"
                  defaultValue={data.dsrdata[0]?.techComment}
                  onChange={(e) => settechComment(e.target.value)}
                />
              </div>
            </div>
           
          </div>
        </div>
        <div className="row pt-3">
          <div className="row">
            <div className="col-6 d-flex">
              <div className="col-4">
                Worker Names 
              </div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">
                <textarea
                  name="postContent"
                  rows={4}
                  cols={40}
                  className="col-md-12 vhs-input-label"
                  defaultValue={data.dsrdata[0]?.workerName}
                  onChange={(e) => setworkerName(e.target.value)}
                />
              </div>
            </div>

            <div className="col-6 d-flex">
              <div className="col-4">Worker Amount </div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">
                <textarea
                  name="postContent"
                  rows={4}
                  cols={40}
                  className="col-md-12 vhs-input-label"
                  defaultValue={data.dsrdata[0]?.workerAmount}
                  onChange={(e) => setworkerAmount(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="row">
            <div className="col-6 d-flex">
              <div className="col-4">
                Day To Complete 
              </div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">
                <input
                  type="date"
                  className="col-md-12 vhs-input-value"
                  defaultValue={data.dsrdata[0]?.daytoComplete}
                  onChange={(e) => setdaytoComplete(e.target.value)}
                />
              </div>
            </div>
          
          </div>
        </div>
        <div className="col-6 d-flex">
              <div className="col-4">Logged User</div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">
                <p style={{ marginBottom: 0 }}> {admin.displayname}</p>
                <p>{admin.contactno}</p>
              </div>
            </div>

        <div className="row pt-3">
          <div className="row">
            <div className="col-6 d-flex">
              <div className="col-4">Backoffice Executive</div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">
                <p style={{ marginBottom: 0 }}> {data.BackofficeExecutive}</p>
                {/* <p>{data.backofficerno}</p> */}
              </div>
            </div>

            <div className="col-6 d-flex">
              <div className="col-4">
                Project manager
                <span className="text-danger">*</span>
              </div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">
                <select
                  className="col-md-12 vhs-input-value"
                  onChange={(e) => settechName(e.target.value)}
                >
                  {data.dsrdata[0]?.techName ? (
                    <option>{data.dsrdata[0]?.techName}</option>
                  ) : (
                    <option>--select--</option>
                  )}
                  {techniciandata.map((item) => (
                    <option>{item.vhsname}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-3">
          <div className="row">
            {/* <div className="col-6 d-flex">
              <div className="col-4">SHOW IN APP</div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">
                <div className="d-flex">
                  <label>
                    <input
                      type="radio"
                      value="YES"
                      className="custom-radio mx-2"
                      checked={Showinapp === "YES"}
                      onChange={handleChange}
                    />
                    YES
                  </label>
                  <label className="mx-5">
                    <input
                      type="radio"
                      value="NO"
                      className="custom-radio mx-2"
                      checked={Showinapp === "NO"}
                      onChange={handleChange}
                    />
                    NO
                  </label>
                </div>
              </div>
            </div> */}

            <div className="col-6 d-flex">
              <div className="col-4">Send SMS</div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">
                <select
                  className="col-md-12 vhs-input-value"
                  onChange={(e) => setsendSms(e.target.value)}
                >
                  {data.dsrdata[0]?.sendSms ? (
                    <option>{data.dsrdata[0]?.sendSms}</option>
                  ) : (
                    <option>--select--</option>
                  )}
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-3">
          <div className="row">
            <div className="col-6 d-flex">
              <div className="col-4">(IN) Sign Date & Time</div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">0000-00-00 00:00:00</div>
            </div>

            <div className="col-6 d-flex">
              <div className="col-4">
                (OUT) Sign Date & Time
                <span className="text-danger">*</span>
              </div>
              <div className="col-1">:</div>
              <div className="group pt-1 col-7">0000-00-00 00:00:00</div>
            </div>
          </div>
        </div>

        <div className="col-6 d-flex">
          <div className="col-4">
            Job Complete
            <span className="text-danger">*</span>
          </div>
          <div className="col-1">:</div>
          <div className="group pt-1 col-7">
            <label>
              <input
                type="radio"
                value="YES"
                className="custom-radio mx-2"
                checked={jobComplete === "YES"}
                onChange={handleChange1}
              />
              YES
            </label>
            <label className="mx-3">
              <input
                type="radio"
                value="NO"
                className="custom-radio mx-2"
                checked={jobComplete === "NO"}
                onChange={handleChange1}
              />
              NO
            </label>
          </div>
        </div>
      </div>
      <div className="row pt-3 justify-content-center pb-5">
        <div className="col-md-1">
          {!(data?.dsrdata[0])? <button className="vhs-button" onClick={newdata}>
            Save
          </button>: <button className="vhs-button" onClick={save}>
            Save
          </button>}
         
        </div>
        <div className="col-md-1">
          <button className="vhs-button">Cancel</button>
        </div>
        <div className="col-md-1">
          <Link to="/dsrquote" state={{ data: data }}>
            <button className="vhs-button">Invoice</button>
          </Link>
        </div>
        <div className="col-md-1">
       
            <button className="vhs-button">Bill SMS</button>
         
        </div>
        <div className="col-md-1">
         
            <button className="vhs-button">Bill Whatsapp</button>
      
        </div>
      </div>
    </div>
  );
}

export default Dsrdetails;
