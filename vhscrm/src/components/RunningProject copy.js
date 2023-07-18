import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import axios from "axios";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

const active = {
  backgroundColor: "rgb(169, 4, 46)",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
};
const inactive = { color: "black", backgroundColor: "white" };

function RunningProject() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const apiURL = process.env.REACT_APP_API_URL;
  const [categorydata, setcategorydata] = useState([]);
  const [category, setcategory] = useState("");
  const [dsrdata, setdsrdata] = useState([]);
  const [treatmentdata, settreatmentData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleClick = (divNum) => () => {
    setSelected(divNum);
  };

  useEffect(() => {
    getcategory();
  }, []);

  const getcategory = async () => {
    let res = await axios.get(apiURL + "/getcategory");
    if ((res.status = 200)) {
      setcategorydata(res.data?.category);
    }
  };

  useEffect(() => {
    // console.log("date", date);
    // console.log("category", category);
    getservicedata();
  }, [category]);

  const getservicedata = async () => {
    let res = await axios.get(apiURL + "/getrunningdata");
    if (res.status === 200) {
      const filteredData = res.data?.runningdata.filter(
        (i) => i.contractType === "AMC" 
      );
      settreatmentData(filteredData);
      setSearchResults(filteredData);
      console.log("filteredData", filteredData);
    }
  };

  // const getAlldsr = async () => {
  //   let res = await axios.get(apiURL + "/getrunningdata");
  //   if (res.status === 200) {
  //     setdsrdata(res.data.runningdata.filter((i) => i.contractType === "AMC" && i.closeProject != "closed"));
  //   }
  // };

  const updatetoclose = async (id) => {
    try {
      const config = {
        url: `/closeproject/${id}`,
        method: "post",
        baseURL: apiURL,
        headers: { "content-type": "application/json" },
        data: {
          closeProject: "closed",
          closeDate: moment().format("L"),
        },
      };
      await axios(config).then(function (response) {
        if (response.status === 200) {
          alert("Updated");
          window.location.assign("/runningproject");
        }
      });
    } catch (error) {
      console.error(error);
      alert("  Not updated");
    }
  };
  
  const details = (data) => {

    navigate(`/painting/${data.customerData[0]?.cardNo}`);
  };

  console.log(dsrdata._id);
  return (
    <div className="web">
      <Header />
      <div className="col-md-4 p-3">
        <div className="vhs-input-label">
          <h3>Running Projects</h3>
        </div>
        {/* <div className="group pt-1">
          <select
            className="col-md-12 vhs-input-value"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option>-select-</option>
            {categorydata.map((item) => (
              <option value={item.category}>{item.category}</option>
            ))}
          </select>
        </div> */}
      </div>

      <div className="row m-auto" style={{ width: "100%" }}>
        <div className="col-md-12">
          {selected == 0 ? (
            <>
              <table class="table table-hover table-bordered mt-1">
                <thead className="">
                  <tr>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <select className="vhs-table-input">
                        <option>-show all-</option>
                        <option>10/04/2023</option>
                        <option>11/04/2023</option>
                        <option>12/04/2023</option>
                        <option>13/04/2023</option>
                      </select>
                    </th>
                    <th scope="col">
                      <select className="vhs-table-input">
                        <option>-show all-</option>
                        <option>Sunil</option>
                        <option>farooq</option>
                        <option>gajanan</option>
                        <option>mr.nandhu</option>
                      </select>
                    </th>
                    <th scope="col">
                      <select className="vhs-table-input">
                        <option>-show all-</option>
                        <option>Abhay</option>
                        <option>Mr.Abhay</option>
                        <option>hemakumar</option>
                        <option>mr.rajesh</option>
                      </select>
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <select className="vhs-table-input">
                        <option>-show all-</option>
                        <option>bangalore</option>
                        <option>chennai</option>
                        <option>pone</option>
                        <option>hyderabad</option>
                      </select>
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <select className="vhs-table-input">
                        <option>-show all-</option>
                        <option>Book for deep cleaning</option>
                        <option>Closed by project manager</option>
                        <option>Running Projects</option>
                      </select>
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                  </tr>

                  <tr className="table-secondary">
                    <th className="table-head" scope="col">
                      Sr.No
                    </th>
                    <th className="table-head" scope="col">
                      Cr.Date
                    </th>
                    <th className="table-head" scope="col">
                      Category
                    </th>
                    <th className="table-head" scope="col">
                      Project Manager
                    </th>
                    <th scope="col" className="table-head">
                      Sales Executive
                    </th>
                    <th scope="col" className="table-head">
                      Customer
                    </th>
                    <th scope="col" className="table-head">
                      Contact No.
                    </th>
                    <th scope="col" className="table-head">
                      Address
                    </th>
                    <th scope="col" className="table-head">
                      City
                    </th>
                    <th scope="col" className="table-head">
                      Quote No.
                    </th>
                    <th scope="col" className="table-head">
                      Project Type
                    </th>
                    <th scope="col" className="table-head">
                      Day To Complete
                    </th>
                    <th scope="col" className="table-head">
                      Worker
                    </th>
                    <th scope="col" className="table-head">
                      Vendor Payment
                    </th>
                    <th scope="col" className="table-head">
                      Charges
                    </th>
                    <th scope="col" className="table-head">
                      Quote Value
                    </th>
                    <th scope="col" className="table-head">
                      Payment
                    </th>
                    <th scope="col" className="table-head">
                      TYPE
                    </th>

                    <th scope="col" className="table-head">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {treatmentdata.map((item, index) => (
                    <tr className="user-tbale-body">
                      <td>{index + 1}</td>
                      <td>{item.date}</td>
                      <td>{item.customerData[0]?.category}</td>
                      <td>{item.dsrdata[0]?.techName}</td>
                      <td>{item.dsrdata[0]?.salesExecutive}</td>
                      <td>{item.customerData[0]?.customerName}</td>
                      <td>{item.customerData[0]?.mainContact}</td>
                      <td>
                        {item.customerData[0]?.lnf} {item.customerData[0]?.rbhf}
                        {item.customerData[0]?.cnap}
                      </td>
                      <td>{item.customerData[0]?.city}</td>
                      <td></td>
                      <td>{item.desc}</td>
                      <td>{item.dsrdata[0]?.daytoComplete}</td>
                      <td>{item.dsrdata[0]?.workerName}</td>
                      <td>0.00</td>
                      <td>{item.dsrdata[0]?.workerAmount}</td>
                      <td>{item.serviceCharge}</td>
                      <td></td>
                      <td>
                        <div>RUNNING PROJECTS</div>
                      </td>

                      <td>
                        <div>
                          <span>
                            <a onClick={()=>details(item)} >
                              Details
                            </a>
                          </span>{" "}
                          /{" "}
                          <span
                            style={{ color: "orange" }}
                            onClick={() => updatetoclose(item._id)}
                          >
                            Close
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {/* <tr
                    className="user-tbale-body"
                    style={{ backgroundColor: "#eee", height: "40px" }}
                  >
                    <td className="text-center"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr> */}
                </tbody>
              </table>{" "}
            </>
          ) : (
            <>
              <div className="row">
                <div className="col-md-12">
                  <div className="card" style={{ marginTop: "80px" }}>
                    <div className="card-body p-4">
                      <form>
                        <div className="row">
                          <div className="col-md-4 pt-2">
                            <div className="vhs-input-label">By Name</div>
                            <div className="group pt-1">
                              <input
                                type="text"
                                className="col-md-12 vhs-input-value"
                              />
                            </div>
                          </div>
                          <div className="col-md-4 pt-2">
                            <div className="vhs-input-label">Number</div>
                            <div className="group pt-1">
                              <input
                                type="text"
                                className="col-md-12 vhs-input-value"
                              />
                            </div>
                          </div>
                          <div className="col-md-4 pt-2">
                            <div className="vhs-input-label">Date Range</div>
                            <div className="group pt-1">
                              <input
                                type="date"
                                className="col-md-12 vhs-input-value"
                              />
                            </div>
                          </div>

                          <div className="col-md-4 pt-2">
                            <div className="vhs-input-label">PM wise</div>
                            <div className="group pt-1">
                              <input
                                type="text"
                                className="col-md-12 vhs-input-value"
                              />
                            </div>
                          </div>

                          <div className="col-md-4 pt-2">
                            <div className="vhs-input-label">
                              Executive wise
                            </div>
                            <div className="group pt-1">
                              <input
                                type="text"
                                className="col-md-12 vhs-input-value"
                              />
                            </div>
                          </div>

                          <div className="col-md-4 pt-2">
                            <div className="vhs-input-label">
                              Technician wise
                            </div>
                            <div className="group pt-1">
                              <input
                                type="text"
                                className="col-md-12 vhs-input-value"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row pt-3 justify-content-center">
                          <div className="col-md-1">
                            <button className="vhs-button">Save</button>
                          </div>
                          <div className="col-md-1">
                            <button className="vhs-button mx-3">Cancel</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RunningProject;
