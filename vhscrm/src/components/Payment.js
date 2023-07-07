import React from "react";
import Header from "./layout/Header";
import Customersernav from "./Customersernav";

function Payment() {
  return (
    <div className="web">
      <Header />
      <Customersernav />
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
                  <input type="text" className="col-md-12 vhs-input-value" />
                </div>
              </div>

              <div className="col-6 d-flex">
                <div className="col-4">
                  {" "}
                  Amount <span className="text-danger"> *</span>
                </div>

                <div className="group pt-1 col-5">
                  <input type="text" className="col-md-12 vhs-input-value" />
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
                  <select className="col-md-12 vhs-input-value">
                    <option>--select--</option>
                    <option>Customer</option>
                    <option>Vendor</option>
                  </select>
                </div>
              </div>
              <div className="col-6 d-flex">
                <div className="col-4"> Comment</div>

                <div className="group pt-1 col-5">
                  <textarea type="text" className="col-md-12 vhs-input-value" />
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
                  <input type="text" className="col-md-12 vhs-input-value" />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 justify-content-center">
            <div className="col-md-1">
              <button className="vhs-button">Save</button>
            </div>
          </div>
        </div>

        <div className="mt-2 p-3">
          <h5>Enquiry Details</h5>

          <table class="table table-hover table-bordered mt-1">
            <thead>
              <tr className="tr clr">
                <th scope="col">
                  <input className="vhs-table-input" />{" "}
                </th>
               
                <th scope="col">
                  {" "}
                  <input
                    className="vhs-table-input"
             
                  />{" "}
                </th>
               
                <th scope="col">
                  {" "}
                  <input
              
                    className="vhs-table-input"
                  />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input
                  
                    className="vhs-table-input"
                  />{" "}
                </th>
                <th scope="col">
                  <input  className="vhs-table-input" />{" "}
                </th>
                <th scope="col">
                  <input  className="vhs-table-input" />{" "}
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
            <tbody></tbody>
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
                  <input
                    className="vhs-table-input"
            
                  />{" "}
                </th>
               
                <th scope="col">
                  {" "}
                  <input
                  
                    className="vhs-table-input"
                  />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input
                  
                    className="vhs-table-input"
                  />{" "}
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
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Payment;
