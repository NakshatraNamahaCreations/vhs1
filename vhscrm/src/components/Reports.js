import React from "react";
import Header from "./layout/Header";

function Reports() {
  return (
    <div className="web">
      <Header />

      {/* <div className="row m-auto mt-2">
        <div className="col-md-12">
          <div className="card sticky">
            <div className="card-body">
              <div>MIS Report > Category</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row m-auto mt-3">
        <div className="col-md-3">
          <div className="card home-col">
            <div className="card-body">
              <div className="home-content">Category</div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card home-col">
            <div className="card-body">
              <div className="home-content">DSR</div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card home-col">
            <div className="card-body">
              <div className="home-content">Enquiry Report</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card home-col">
            <div className="card-body">
              <div className="home-content">Survey</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-auto pt-3">
        <div className="col-md-3">
          <div className="card home-col">
            <div className="card-body">
              <div className="home-content">Quotation</div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card home-col">
            <div className="card-body">
              <div className="home-content">Running Projects</div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card home-col">
            <div className="card-body">
              <div className="home-content">Closed Projects</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 "></div>
      </div>
      <div className="row m-auto">
        <div className="col-md-3"></div>

        <div className="col-md-3"></div>

        <div className="col-md-3"></div>
        <div className="col-md-3 "></div>
      </div>
    </div>
  );
}

export default Reports;
