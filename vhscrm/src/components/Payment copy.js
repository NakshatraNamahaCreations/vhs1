import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import Customersernav from "./Customersernav";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Payment() {
  const location = useLocation();
  const paymentData = location && location.state ? location.state : {};
  // const paymentData = location?.state?.data?.data?.customerData?.[0] || {};
  console.log("payment Page", paymentData);
  const apiURL = process.env.REACT_APP_API_URL;

  const [paymentDetails, setPaymentDetails] = useState([]);
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [paymentComments, setPaymentComments] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [customerPayments, setCustomerPayments] = useState([]);
  const [vendorPayments, setVendorPayments] = useState([]);

  const addPayment = async () => {
    try {
      const config = {
        url: "/addPayment",
        method: "post",
        baseURL: apiURL,
        headers: { "content-type": "application/json" },
        data: {
          paymentDate: paymentDate,
          paymentType: paymentType,
          paymentMode: paymentMode,
          amount: paymentAmount,
          Comment: paymentComments,
          customerId: paymentData?.data?.data?.customerData[0]._id,
        },
      };
      await axios(config).then(function (response) {
        if (response.status === 200) {
          alert("Payment Added");
          window.location.reload("");
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const getPaymentById = async () => {
    try {
      const customerId = paymentData?.data?.data?.customerData[0]._id;
      let res = await axios.get(
        apiURL + `/getPaymentByCustomerId/${customerId}`
      );
      if (res.status === 200) {
        console.log("paymentDetails", res);
        setPaymentDetails(res.data?.payments);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    getPaymentById();
  }, []);

  useEffect(() => {
    // Filter payments by paymentType
    const customerPayments = paymentDetails.filter(payment => payment.paymentType === 'Customer');
    const vendorPayments = paymentDetails.filter(payment => payment.paymentType === 'Vendor');

    setCustomerPayments(customerPayments);
    setVendorPayments(vendorPayments);
  }, [paymentDetails]);

  return (
    <div className="web">
      <Header />
      <div className="row">
        <div className="navbar">
          <ul className="nav-tab-ul">
            <li>
              <Link
                to="/customeradd"
                activeClassName="active"
                state={{ data: paymentData }}
              >
                Customeradd
              </Link>
            </li>
            <li>
              <Link
                to="/customersearchdetails"
                activeClassName="active"
                state={{ data: paymentData }}
              >
                Treatment
              </Link>
            </li>
            <li>
              <Link
                to="/painting"
                activeClassName="active"
                state={{ data: paymentData }}
              >
                Painting
              </Link>
            </li>
            <li>
              <Link
                to="/payment"
                activeClassName="active"
                state={{ data: paymentData }}
              >
                Payment
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                activeClassName="active"
                state={{ data: paymentData }}
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
          {paymentData.data.data.customerData[0].customerName
            .charAt(0)
            .toUpperCase() +
            paymentData.data.data.customerData[0].customerName.slice(1)}
        </b>
      </div>
      <div className="m-3">
        <div className="card p-2">
          <div className="card-body p-4">
            <div className="row  ">
              <div className="col-6 d-flex ">
                <div className="col-4">
                  Payment Date <span className="text-danger"> *</span>
                </div>
                {/* <div className="col-0">:</div> */}
                <div className="group pt-1 col-5 ml-3">
                  <input
                    type="date"
                    className="col-md-12 vhs-input-value"
                    onChange={(e) => setPaymentDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-6 d-flex">
                <div className="col-4">
                  {" "}
                  Amount <span className="text-danger"> *</span>
                </div>

                <div className="group pt-1 col-5">
                  <input
                    type="text"
                    placeholder="amounts"
                    className="col-md-12 vhs-input-value"
                    onChange={(e) => setPaymentAmount(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row  mt-2">
              <div className="col-6 d-flex ">
                <div className="col-4">
                  Payment Type <span className="text-danger"> *</span>
                </div>
                {/* <div className="col-0">:</div> */}
                <div className="group pt-1 col-5 ml-3">
                  <select
                    className="col-md-12 vhs-input-value"
                    onChange={(e) => setPaymentType(e.target.value)}
                  >
                    <option value="">--select--</option>
                    <option value="Customer">Customer</option>
                    <option value="Vendor">Vendor</option>
                  </select>
                </div>
              </div>
              <div className="col-6 d-flex">
                <div className="col-4"> Comment</div>

                <div className="group pt-1 col-5">
                  <textarea
                    type="text"
                    className="col-md-12 vhs-input-value"
                    placeholder="Comments"
                    style={{ height: "100px" }}
                    onChange={(e) => setPaymentComments(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row  mt-2">
              <div className="col-6 d-flex ">
                <div className="col-4">
                  Payment Mode <span className="text-danger"> *</span>
                </div>
                {/* <div className="col-0">:</div> */}
                <div className="group pt-1 col-5 ml-3">
                  <select
                    className="col-md-12 vhs-input-value"
                    onChange={(e) => setPaymentMode(e.target.value)}
                  >
                    <option value="">--select--</option>
                    <option value="Cash">Cash</option>
                    <option value="Cheque">Cheque</option>
                    <option value="Paytm">Paytm</option>
                    <option value="PhonePe">PhonePe</option>
                    <option value="Google Pay">Google Pay</option>
                    <option value="NEFT">NEFT</option>
                    <option value="IMPS">IMPS</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 justify-content-center">
            <div className="col-md-1">
              <button className="vhs-button" onClick={addPayment}>
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2 p-3">
          <h5>Customer Payment</h5>

          <table class="table table-hover table-bordered mt-1">
            <thead>
              <tr className="tr clr">
                <th scope="col">
                  <input className="vhs-table-input" />{" "}
                </th>

                <th scope="col">
                  {" "}
                  <input className="vhs-table-input" />{" "}
                </th>

                <th scope="col">
                  {" "}
                  <input className="vhs-table-input" />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input className="vhs-table-input" />{" "}
                </th>
                <th scope="col">
                  <input className="vhs-table-input" />{" "}
                </th>
                <th scope="col">
                  <input className="vhs-table-input" />{" "}
                </th>
              </tr>
              <tr className="tr table-secondary  clr">
                <th>#</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Mode</th>
                <th>Comment</th>
                <th>Action</th>
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
                 <td>{payment?.value}</td>
                 <td>{payment?.nxtfoll}</td>
               </tr>
                ))}
              </tbody>
          </table>
        </div>

        <div className="mt-2 p-3">
          <h5>Vendor Payment</h5>

          <table class="table table-hover table-bordered mt-1">
            <thead>
              <tr className="tr clr">
                <th scope="col">
                  <input className="vhs-table-input" />{" "}
                </th>

                <th scope="col">
                  {" "}
                  <input className="vhs-table-input" />{" "}
                </th>

                <th scope="col">
                  {" "}
                  <input className="vhs-table-input" />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input className="vhs-table-input" />{" "}
                </th>
                <th scope="col">
                  <input className="vhs-table-input" />{" "}
                </th>
                <th scope="col">
                  <input className="vhs-table-input" />{" "}
                </th>
              </tr>
              <tr className="tr table-secondary  clr">
                <th>#</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Mode</th>
                <th>Comment</th>
                <th>Active</th>
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
                    <td>{payment?.value}</td>
                    <td>{payment?.nxtfoll}</td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Payment;
