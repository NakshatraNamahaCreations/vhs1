import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import Customersernav from "./Customersernav";
import Table from "react-bootstrap/Table";
import { Link, NavLink, useLocation } from "react-router-dom";
import axios from "axios";

function Painting() {
  const location = useLocation();
  const locationData = location.state;
  console.log("paintingData==", locationData);
  const [workDetails, setWorkDetails] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [customerPayments, setCustomerPayments] = useState([]);
  const [vendorPayments, setVendorPayments] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;

  const getPaymentById = async () => {
    try {
      const customerId = locationData.data.customerData[0]._id;
      console.log("Customer ID:", customerId);
      let res = await axios.get(
        apiURL + `/getPaymentByCustomerId/${customerId}`
      );
      if (res.status === 200) {
        console.log("PaymentDetails", res);
        setPaymentDetails(res.data?.payments);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const getWorkById = async () => {
    try {
      const customerId = locationData.data.customerData[0]._id;
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
    getPaymentById();
    getWorkById();
  }, []);

  useEffect(() => {
    // Filter payments by paymentType
    const customerPayments = paymentDetails.filter(
      (payment) => payment.paymentType === "Customer"
    );
    const vendorPayments = paymentDetails.filter(
      (payment) => payment.paymentType === "Vendor"
    );

    setCustomerPayments(customerPayments);
    setVendorPayments(vendorPayments);
  }, [paymentDetails]);

  var i = 1;
  // var index = 1;
  return (
    <div>
      <Header />
      {/* <Customersernav data={locationData}   /> */}
      <div>
        <div className="row">
          <div className="navbar">
            <ul className="nav-tab-ul">
              <li>
                <Link
                  to="/customeradd"
                  activeClassName="active"
                  state={{ data: locationData }}
                >
                  Customeradd
                </Link>
              </li>
              <li>
                <Link
                  to="/customersearchdetails"
                  activeClassName="active"
                  state={{ data: locationData }}
                >
                  Treatment
                </Link>
              </li>
              <li>
                <Link
                  to="/painting"
                  activeClassName="active"
                  state={{ data: locationData }}
                >
                  Painting
                </Link>
              </li>
              <li>
                <Link
                  to="/payment"
                  activeClassName="active"
                  state={{ data: locationData }}
                >
                  Payment
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  activeClassName="active"
                  state={{ data: locationData }}
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
      {/* <div  > */}

      {/* </div> */}
      <div
        style={{
          border: "1px solid color(srgb 0.855 0.855 0.855)",
          width: "95%",
          margin: "0px 28px",
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        <b>
          Customer Painting Details &gt;
          {/* &#8827;{" "}  */}{" "}
          {locationData.data.customerData[0].customerName
            .charAt(0)
            .toUpperCase() +
            locationData.data.customerData[0].customerName.slice(1)}
        </b>
      </div>
      <div className="row m-auto">
        <div className="col-md-12">
          <div className="mt-2 p-3">
            <h5>Enquiry Details</h5>

            <table class="table table-hover table-bordered mt-1">
              <thead>
                <tr className="tr table-secondary clr">
                  <th scope="col">
                    <input className="vhs-table-input" />{" "}
                  </th>
                  <th scope="col">
                    {" "}
                    <select>
                      <option value="">Select</option>
                    </select>{" "}
                  </th>
                  <th scope="col">
                    {" "}
                    <input
                      className="vhs-table-input"
                      placeholder="Enq Date "
                    />{" "}
                  </th>
                  <th scope="col">
                    {" "}
                    <input
                      className="vhs-table-input"
                      placeholder="Enq Time"
                    />{" "}
                  </th>
                  <th scope="col">
                    {" "}
                    <input
                      placeholder="Name"
                      className="vhs-table-input"
                    />{" "}
                  </th>
                  <th scope="col">
                    {" "}
                    <input
                      placeholder="Contact"
                      className="vhs-table-input"
                    />{" "}
                  </th>
                  <th scope="col">
                    {" "}
                    <input
                      placeholder="Address"
                      className="vhs-table-input"
                    />{" "}
                  </th>
                  <th scope="col">
                    <input
                      placeholder="Reference"
                      className="vhs-table-input"
                    />{" "}
                  </th>
                  <th scope="col">
                    <input
                      placeholder="Reference"
                      className="vhs-table-input"
                    />{" "}
                  </th>
                  <th scope="col">
                    {" "}
                    <select>
                      <option value="">Select </option>
                    </select>{" "}
                  </th>
                  <th scope="col">
                    {" "}
                    <input
                      placeholder="Interested For"
                      className="vhs-table-input"
                    />
                  </th>
                  <th scope="col">
                    {" "}
                    <input
                      placeholder="Executive"
                      className="vhs-table-input"
                    />{" "}
                  </th>
                </tr>
                <tr className="tr clr">
                  <th>#</th>
                  <th>Category</th>
                  <th>En.Date</th>
                  <th>Executive</th>
                  <th>Name</th>
                  <th>Contact1</th>
                  <th>Contact2</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Reference</th>
                  <th>Interested for</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="user-tbale-body">
                  <td>{i++} </td>
                  <td> {locationData?.data.enquiryData[0]?.category} </td>
                  <td> {locationData.data.enquiryData[0]?.enquirydate} </td>
                  <td> {locationData.data.enquiryData[0]?.executive} </td>
                  <td> {locationData?.data.enquiryData[0]?.name} </td>
                  <td> {locationData.data.enquiryData[0]?.contact1} </td>
                  <td>{locationData.data.enquiryData[0]?.contact2} </td>
                  <td> {locationData.data.enquiryData[0]?.email} </td>
                  <td> {locationData.data.enquiryData[0]?.address}</td>
                  <td> {locationData.data.enquiryData[0]?.reference1} </td>
                  <td>
                    <td> {locationData.data.enquiryData[0]?.intrestedfor} </td>
                  </td>
                  <td> {locationData.data.enquiryData[0]?.comment} </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 p-3">
            <h5>Enquiry Followup Details</h5>

            <table class="table table-hover table-bordered mt-1">
              <thead>
                <tr className="tr clr table-secondary">
                  <th>#</th>
                  <th> Date</th>
                  <th>Staff</th>
                  <th>Response</th>
                  <th>Description</th>
                  <th>Value</th>
                  <th>Next Foll</th>
                </tr>
              </thead>
              {/* {locationData.data?.enquiryFollowupData?.length > 0 ?( */}
              <tbody>
                {locationData.data?.enquiryFollowupData?.map(
                  (followup, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{followup?.folldate}</td>
                      <td>{followup?.staffname}</td>
                      <td>{followup?.response}</td>
                      <td>{followup?.desc}</td>
                      <td>{followup?.value}</td>
                      <td>{followup?.nxtfoll}</td>
                    </tr>
                  )
                )}
              </tbody>
              {/* ):""} */}
            </table>
          </div>
          <div className="mt-2 p-3">
            <h5>Quote Details</h5>

            <table class="table table-hover table-bordered mt-1">
              <thead>
                <tr className="tr clr table-secondary">
                  <th>#</th>
                  <th>Region</th>
                  <th>Material</th>
                  <th>Job</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-2 p-3">
            <h5>Work Details</h5>

            <table class="table table-hover table-bordered mt-1">
              <thead>
                <tr className="tr clr table-secondary">
                  <th>#</th>
                  <th>Date</th>
                  <th>Milestone</th>
                  <th>Work Details</th>
                  <th>Material Use</th>
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
          <div className="mt-2 p-3">
            <h5>Customer Payment</h5>

            <table class="table table-hover table-bordered mt-1">
              <thead>
                <tr className="tr clr">
                  <th>#</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Mode</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {customerPayments.map((payment, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{payment?.paymentDate}</td>
                    <td>{payment?.amount}</td>
                    <td>{payment?.paymentMode}</td>
                    <td>{payment?.Comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 p-3">
            <h5>Vendor Payment</h5>

            <table class="table table-hover table-bordered mt-1">
              <thead>
                <tr className="tr table-secondary clr">
                  <th>#</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Mode</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {vendorPayments.map((payment, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{payment?.paymentDate}</td>
                    <td>{payment?.amount}</td>
                    <td>{payment?.paymentMode}</td>
                    <td>{payment?.Comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 p-3">
            <h5>Deep Cleaning Details</h5>

            <table class="table table-hover table-bordered mt-1">
              <thead>
                <tr className="tr table-secondary clr">
                  <th>#</th>
                  <th>Date</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Painting;
