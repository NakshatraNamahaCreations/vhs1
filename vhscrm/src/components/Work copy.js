import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import Customersernav from "./Customersernav";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Work() {
  const apiURL = process.env.REACT_APP_API_URL;
  const location = useLocation();
  const workData = location.state;
  console.log("workData==", workData);

  console.log("customerId", workData.data.data.data.customerData[0]._id);

  const [workDetails, setWorkDetails] = useState([]);
  const [workDate, setWorkDate] = useState("");
  const [mileStone, setMileStone] = useState("");
  const [details, setDetails] = useState("");
  const [matrialUse, setMatrialUse] = useState("");
  const [remark, setRemark] = useState("");

  const addWork = async () => {
    try {
      const config = {
        url: "/addWork",
        method: "post",
        baseURL: apiURL,
        headers: { "content-type": "application/json" },
        data: {
          workDate: workDate,
          workMileStone: mileStone,
          workDetails: details,
          workMaterialUse: matrialUse,
          workRemark: remark,
          customerId: workData.data.data.data.customerData[0]._id,
        },
      };
      await axios(config).then(function (response) {
        if (response.status === 200) {
          alert("work Added");
          window.location.reload("");
        }
      });
    } catch (error) {
      // console.log(error);
      alert("something went wrong", error);
    }
  };

  const getWorkById = async () => {
    try {
      const customerId = workData.data.data.data.customerData[0]._id;
      let res = await axios.get(apiURL + `/getWorkByCustomerId/${customerId}`);
      if (res.status === 200) {
        console.log("workDetails", res);
        setWorkDetails(res.data?.works);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    getWorkById();
  }, []);


  return (
    <div className="web">
      <Header />
      <div>
        <div className="row">
          <div className="navbar">
            <ul className="nav-tab-ul">
              <li>
                <Link
                  to="/customeradd"
                  activeClassName="active"
                  state={{ data: workData }}
                >
                  Customeradd
                </Link>
              </li>
              <li>
                <Link
                  to="/customersearchdetails"
                  activeClassName="active"
                  state={{ data: workData }}
                >
                  Treatment
                </Link>
              </li>
              <li>
                <Link
                  to="/painting"
                  activeClassName="active"
                  state={{ data: workData }}
                >
                  Painting
                </Link>
              </li>
              <li>
                <Link
                  to="/payment"
                  activeClassName="active"
                  state={{ data: workData }}
                >
                  Payment
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  activeClassName="active"
                  state={{ data: workData }}
                >
                  Work
                </Link>
              </li>
              {/* <li>
            <NavLink to="/cservices" activeClassName="active">
              Services
            </NavLink>
          </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid color(srgb 0.855 0.855 0.855)",
          width: "97%",
          margin: "0px 15px",
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        <b>
          Customer Payment &gt;{" "}
          {workData.data.data.data.customerData[0].customerName
            .charAt(0)
            .toUpperCase() +
            workData.data.data.data.customerData[0].customerName.slice(1)}
        </b>
      </div>
      <div className="m-3">
        <div className="card p-2">
          <div className="card-body p-4">
            <div className="row  ">
              <div className="col-6 d-flex ">
                <div className="col-4">
                  Date <span className="text-danger"> *</span>
                </div>
                {/* <div className="col-0">:</div> */}
                <div className="group pt-1 col-5 ml-3">
                  <input
                    type="date"
                    className="col-md-12 vhs-input-value"
                    onChange={(e) => setWorkDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row  mt-2">
              <div className="col-6 d-flex ">
                <div className="col-4">
                  Milestone<span className="text-danger"> *</span>
                </div>
                {/* <div className="col-0">:</div> */}
                <div className="group pt-1 col-5 ml-3">
                  <select
                    className="col-md-12 vhs-input-value"
                    onChange={(e) => setMileStone(e.target.value)}
                  >
                    <option value="">--select--</option>
                    <option value="50% Work Complete">50% Work Complete</option>
                    <option value="75% Work Complete">75% Work Complete</option>
                    <option value="Complete">Complete</option>
                    <option value="Final Touch Pending">
                      Final Touch Pending
                    </option>
                    <option value="Wall Cleaning">Wall Cleaning</option>
                    <option value="Wall Polishing">Wall Polishing</option>
                    <option value="Wall Puty 1Coat">Wall Puty 1Coat </option>
                    <option value="Wall Puty 2Coat">Wall Puty 2Coat</option>
                  </select>
                </div>
              </div>
              <div className="col-6 d-flex">
                <div className="col-4"> Work Details</div>

                <div className="group pt-1 col-5">
                  <textarea
                    type="text"
                    className="col-md-12 vhs-input-value"
                    style={{ height: "100px" }}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row  mt-2">
              <div className="col-6 d-flex ">
                <div className="col-4">
                  Material Use <span className="text-danger"> *</span>
                </div>
                {/* <div className="col-0">:</div> */}
                <div className="group pt-1 col-5 ml-3">
                  <textarea
                    type="text"
                    className="col-md-12 vhs-input-value"
                    style={{ height: "100px" }}
                    onChange={(e) => setMatrialUse(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-6 d-flex ">
                <div className="col-4">Remark</div>
                {/* <div className="col-0">:</div> */}
                <div className="group pt-1 col-5 ml-3">
                  <textarea
                    type="text"
                    className="col-md-12 vhs-input-value"
                    style={{ height: "100px" }}
                    onChange={(e) => setRemark(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 justify-content-center">
            <div className="col-md-1">
              <button className="vhs-button" onClick={addWork}>
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2 p-3">
          <h5>Work Details</h5>

          <table class="table table-hover table-bordered mt-1">
            <thead>
              <tr className="tr table-secondary  clr">
                <th>#</th>
                <th>Date</th>
                <th>Milestone</th>
                <th>Work Details</th>
                <th>Material Uses</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {workDetails.map((work, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{work?.workDate}</td>
                  <td>{work?.workMileStone}</td>
                  <td>{work?.workDetails}</td>
                  <td>{work?.workMaterialUse}</td>
                  <td>{work?.workRemark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Work;
