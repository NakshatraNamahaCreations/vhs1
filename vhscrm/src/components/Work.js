import React from "react";
import Header from "./layout/Header";
import Customersernav from "./Customersernav";

function Work() {
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
                  Date <span className="text-danger"> *</span>
                </div>
                {/* <div className="col-0">:</div> */}
                <div className="group pt-1 col-5 ml-3">
                  <input type="date" className="col-md-12 vhs-input-value" />
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
                  <select className="col-md-12 vhs-input-value">
                    <option>--select--</option>
                    <option>50% Work Complete</option>
                    <option>75% Work Complete</option>
                    <option>Complete</option>
                    <option>Final Touch Pending</option>
                    <option>Wall Cleaning</option>
                    <option>Wall Polishing</option>
                    <option>Wall Puty 1Coat </option>
                    <option>Wall Puty 2Coat</option>
                  </select>
                </div>
              </div>
              <div className="col-6 d-flex">
                <div className="col-4"> Work Details</div>

                <div className="group pt-1 col-5">
                  <textarea type="text" className="col-md-12 vhs-input-value"/>
                </div>
              </div>
            </div>
            <div className="row  mt-2">
              <div className="col-6 d-flex ">
                <div className="col-4">
                Material Use  <span className="text-danger"> *</span>
                </div>
                {/* <div className="col-0">:</div> */}
                <div className="group pt-1 col-5 ml-3">
                  <textarea type="text" className="col-md-12 vhs-input-value" />
                </div>
              </div>
              <div className="col-6 d-flex ">
                <div className="col-4">
                Remark 
                </div>
                {/* <div className="col-0">:</div> */}
                <div className="group pt-1 col-5 ml-3">
                  <textarea type="text" className="col-md-12 vhs-input-value" />
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
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Work;
