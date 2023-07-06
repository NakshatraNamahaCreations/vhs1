import React, { useState } from "react";
import Header from "../layout/Header";
import { Link } from "react-router-dom";

function Communityrights() {
  const [selected, setSelected] = useState(0);
  const handleClick = (divNum) => () => {
    setSelected(divNum);
  };
  return (
    <div className="row pb-3">
      <Header />

      <div className="row m-auto">
        <div className="col-md-12">
          <div className="card mt-2">
            <div className="card-body">
              <div className="header-text1">1 Community Rights For : Promo</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-end pt-3">
        <div className="col-md-2 p-0">
          <Link to="/community">
            <button
              className="btn-primary-button"
              //   style={selected == 1 ? active : inactive}
              onClick={handleClick(1)}
            >
              1 Community Add
            </button>
          </Link>
        </div>
        <div className="col-md-2 p-0">
          <Link to="/community">
            <button
              //   style={selected == 0 ? active : inactive}
              onClick={handleClick(0)}
              className="btn-primary-button"
            >
              1 Community View
            </button>
          </Link>
        </div>
      </div>

      <div className="row mt-4 m-auto">
        <div className="col-md-6" style={{ width: "36%" }}>
          <div className="card" style={{ padding: "10px 27px" }}>
            <div
              className="table-content"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Rights For Left Menu
            </div>
            <table class="table table-bordered mt-3">
              <tbody>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Home</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Master</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Enquiry</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Enquiry Followup</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Survey</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Quote</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Quote Followup</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>DSR</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Running Project</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Close Project</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>B2B</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Community</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Reports</td>
                </tr>
                <tr
                  className="user-tbale-body"
                  style={{ backgroundColor: "#eee", height: "40px" }}
                >
                  <td className="text-center"></td>
                  <td className="text-center">
                    <button className="vhs-button">Save</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-6" style={{ width: "36%", marginLeft: "50px" }}>
          <div className="card" style={{ padding: "10px 27px" }}>
            <div
              className="table-content"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Rights For Mis Reports
            </div>
            <table class="table table-bordered mt-3">
              <tbody>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Dsr</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Dsr Call</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}> Customer Payment Gst Bill</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>
                    Customer Pending Payment Pending Bill
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>
                    {" "}
                    Customer Payment Non Gst Bill
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>
                    Customer Payment Combine Both Gst And Non Gst Payment
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}> Customer Payment Received</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}> Expense</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}> Customer Service Expiry</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Amc Sale</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Service Due</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}>Enquiry</td>
                </tr>
                <tr>
                  <td style={{ width: "10%" }}>
                    <input type="checkbox" className="table-checkbox" />
                  </td>
                  <td style={{ width: "80%" }}> Not Interested Enquiry</td>
                </tr>
                <tr
                  className="user-tbale-body"
                  style={{ backgroundColor: "#eee", height: "40px" }}
                >
                  <td className="text-center"></td>
                  <td className="text-center">
                    <button className="vhs-button">Save</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communityrights;
