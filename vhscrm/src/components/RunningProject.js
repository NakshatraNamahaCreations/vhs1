import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import axios from "axios";

const active = {
  backgroundColor: "rgb(169, 4, 46)",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
};
const inactive = { color: "black", backgroundColor: "white" };
function RunningProject() {
  const [selected, setSelected] = useState(0);
  const apiURL = process.env.REACT_APP_API_URL;
  const [categorydata, setcategorydata] = useState([]);
  const [category, setcategory] = useState("");
  const [dsrdata, setdsrdata] = useState([]);


  const handleClick = (divNum) => () => {
    setSelected(divNum);
  };

  useEffect(() => {
    getcategory();
    getAlldsr();
  }, []);

  const getcategory = async () => {
    let res = await axios.get(apiURL + "/getcategory");
    if ((res.status = 200)) {
      setcategorydata(res.data?.category);
    }
  };

  const getAlldsr = async () => {
    let res = await axios.get(apiURL + "/getaggredsrdata");
    if (res.status === 200) {
      setdsrdata(res.data.addcall);
   
    }
  };

  console.log(dsrdata);
  return (
    <div className="web">
      <Header />
      <div className="col-md-4 p-3">
        <div className="vhs-input-label">
          Category<span className="text-danger"> *</span>
        </div>
        <div className="group pt-1">
          <select
            className="col-md-12 vhs-input-value"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option>-select-</option>
            {categorydata.map((item) => (
              <option value={item.category}>{item.category}</option>
            ))}
          </select>
        </div>
      </div>

      <div
        className="d-flex float-end mt-3 mb-3"
        style={{ flexFlow: "row-reverse" }}
      >
        <button
          className="btn-primary-button mx-2"
          style={selected == 1 ? active : inactive}
          onClick={handleClick(1)}
        >
          Search
        </button>

        <button
          style={selected == 0 ? active : inactive}
          onClick={handleClick(0)}
          className="btn-secondary-button"
        >
          Category Selection Option
        </button>
      </div>

      <div className="row m-auto" style={{ width: "100%" }}>
        <div className="col-md-12">
          {selected == 0 ? (
            <>
              <div className="mt-3">
                Page{" "}
                <span>
                  <select className="vh-user-select">
                    <option>1</option>
                  </select>
                </span>{" "}
                of 1
              </div>
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
                    {/* <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th> */}
                  </tr>

                  <tr className="table-secondary">
                    <th className="table-head" scope="col">
                      Sr.No
                    </th>
                    <th className="table-head" scope="col">
                      Cr.Date
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
                  <tr className="user-tbale-body">
                    <td>1</td>
                    <td>13/04/2023</td>
                    <td>Mr.Ravish Kumar</td>
                    <td>Mr. Mahammad Saleem</td>
                    <td>Mamatha</td>
                    <td>9886360622</td>
                    <td>
                      Svk Homes,6th Cross,Bank Avenue, Babusapalya Kalyanagar
                      Bangalore 560043
                    </td>
                    <td>Bangalore</td>
                    <td>32031</td>
                    <td>2bhk Vc</td>
                    <td>2023-04-18</td>
                    <td>Ranjeet Patel+Chandan(E Bike)</td>
                    <td>0.00</td>
                    <td></td>
                    <td>50000.00</td>
                    <td>
                      <div>(13/04/2023) 20,000.00</div>
                      <div
                        style={{
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Total: 20,000
                      </div>
                      <div
                        style={{
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Pending: 30,00
                      </div>
                    </td>
                    <td>
                      <div>RUNNING PROJECTS</div>
                    </td>
                  
                    <td>
                      <div>
                        Details <span style={{ color: "orange" }}>Close</span>
                      </div>
                    </td>
                  </tr>

                  <tr
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
                
                  </tr>
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
