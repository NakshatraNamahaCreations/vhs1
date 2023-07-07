import React from "react";
import Header from "./layout/Header";
import Customersernav from "./Customersernav";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";

function Painting() {
  // console.log("constomer++++",customer )
  // const location=useLocation();
  // const {data}= location.state;

  // const queryParams = new URLSearchParams(window.location.search);
  // const customerParam = queryParams.get("customer");
  // const customer = customerParam ? JSON.parse(decodeURIComponent(customerParam)) : null;

  // console.log("customer0000000",customer)
  // console.log(data);
  return (
    <div>
      <Header />
      <Customersernav />

      <div className="row m-auto">
        <div className="col-md-12">
          <div className="mt-2 p-3">
            <h5>Enquiry Details</h5>

            <table  class="table table-hover table-bordered mt-1">
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
              <tbody></tbody>
            </table>
          </div>
          <div className="mt-2 p-3">
            <h5>Enquiry Followup Details</h5>

            <table  class="table table-hover table-bordered mt-1">
              <thead>
                <tr className="tr clr table-secondary" >
                  <th>#</th>
                  <th>Date</th>
                  <th>Staff</th>
                  <th>Response</th>
                  <th>Description</th>
                  <th>Value</th>
                  <th>Next Foll</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <div className="mt-2 p-3">
            <h5>Quote Details</h5>

            <table  class="table table-hover table-bordered mt-1">
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
              <tbody></tbody>
            </table>
          </div>

          <div className="mt-2 p-3">
            <h5>Work Details</h5>

            <table  class="table table-hover table-bordered mt-1">
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
              <tbody></tbody>
            </table>
          </div>
          <div className="mt-2 p-3">
            <h5>Customer Payment</h5>

            <table  class="table table-hover table-bordered mt-1">
              <thead>
                <tr className="tr clr">
                  <th>#</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Mode</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody></tbody>
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
              <tbody></tbody>
            </table>
          </div>
          <div className="mt-2 p-3">
            <h5>Deep Cleaning Details</h5>

            <table  class="table table-hover table-bordered mt-1">
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
