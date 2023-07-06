import React, { useState } from "react";
import Header from "./layout/Header";

const active = {
  backgroundColor: "rgb(169, 4, 46)",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
};
const inactive = { color: "black", backgroundColor: "white" };
function Closeproject() {
  const [selected, setSelected] = useState(0);
  const handleClick = (divNum) => () => {
    setSelected(divNum);
  };
  return (
    <div className="web">
      <Header />

      {/* <div className="row m-auto mt-2" style={{ width: "100%" }}>
        <div className="col-md-12">
          <div className="card sticky">
            <div className="card-body">
              <div>Work List</div>
            </div>
          </div>
        </div>
      </div> */}

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
              <table className="table table-hover table-bordered mt-1">
                <thead className="">
                  <tr>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
                    </th>
                    <th scope="col">
                      <input type="text" className="vhs-table-input" />
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
                  </tr>
                </thead>
                <tbody>
                  <tr className="user-tbale-body">
                    <td>1</td>
                    <td>04/04/2023</td>
                    <td>Mr.Abnish Kumar</td>
                    <td>Mr. Rajesh</td>
                    <td> Mr.Pavan Reddy</td>
                    <td>9886360622</td>
                    <td>
                      519,1st C Main Road, 8th Block Koramangala 560095 Near
                      Lakshmi Devi Park
                    </td>
                  </tr>

                  <tr className="user-tbale-body">
                    <td>2</td>
                    <td>04/04/2023</td>
                    <td>Mr.Abnish Kumar</td>
                    <td>Mr.Ritesh Ranjan</td>
                    <td> ~Shubham Arora</td>
                    <td> 8884403981</td>
                    <td>
                      Its A-401 Geetham Pride Apartments Sarjapura Hobli,
                      Anekal, 48/6, Kudlu Main Rd, Muneshwara Nagar, Bengaluru,
                      Karnataka 560068
                    </td>
                  </tr>

                  <tr className="user-tbale-body">
                    <td>3</td>
                    <td>01/04/2023</td>
                    <td>Mr.Abnish Kumar</td>
                    <td>Mr. Rajesh</td>
                    <td> SUDHEER KUMAR</td>
                    <td> 9035479073</td>
                    <td>
                      Flat No 210 Block 1 Sraddha Palmera Apartments,
                      Kadubeesanahalli, Panathur Post, BangaloreLandmark Near
                      New Horizon Gurukul School
                    </td>
                  </tr>

                  <tr className="user-tbale-body">
                    <td>4</td>
                    <td>04/04/2023</td>
                    <td>Mr.Abnish Kumar</td>
                    <td>Mr. Rajesh</td>
                    <td> Mr.Pavan Reddy</td>
                    <td>9886360622</td>
                    <td>
                      519,1st C Main Road, 8th Block Koramangala 560095 Near
                      Lakshmi Devi Park
                    </td>
                  </tr>

                  <tr className="user-tbale-body">
                    <td>5</td>
                    <td>04/04/2023</td>
                    <td>Mr.Abnish Kumar</td>
                    <td>Mr. Rajesh</td>
                    <td> Mr.Pavan Reddy</td>
                    <td>9886360622</td>
                    <td>
                      519,1st C Main Road, 8th Block Koramangala 560095 Near
                      Lakshmi Devi Park
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
                  </tr>
                </tbody>
              </table>{" "}
            </>
          ) : (
            <>
              <div className="card" style={{ marginTop: "20px" }}>
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
                        <div className="vhs-input-label">Executive wise</div>
                        <div className="group pt-1">
                          <input
                            type="text"
                            className="col-md-12 vhs-input-value"
                          />
                        </div>
                      </div>

                      <div className="col-md-4 pt-2">
                        <div className="vhs-input-label">Technician wise</div>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Closeproject;
