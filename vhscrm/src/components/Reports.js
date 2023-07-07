import React from "react";
import Header from "./layout/Header";
import moment from "moment";

function Reports() {
  const startDate = moment("07-07-2023", "DD-MM-YYYY");
  const expiryDate = moment("28-07-2023", "DD-MM-YYYY");
  const serviceCharge = 25000;
  const serviceFrequency = 4;

  const totalDays = Math.ceil(expiryDate.diff(startDate, "days"));
  const interval = Math.ceil(totalDays / serviceFrequency);
  const dividedServiceCharge = Math.ceil(serviceCharge / serviceFrequency);

  const dividedDates = [];
  const dividedCharges = [];

  for (let i = 0; i < serviceFrequency; i++) {
    const date = startDate.clone().add(interval * i, "days");
    dividedDates.push(date);

    const charge = i === serviceFrequency - 1 ? serviceCharge - (dividedServiceCharge * (serviceFrequency - 1)) : dividedServiceCharge;
    dividedCharges.push(charge);
  }

  return (
    <div className="web">
      <Header />

      {dividedDates.map((date, index) => (
        <div key={index}>
          <div>Date: {date.format("DD-MM-YYYY")}</div>
          <div>Service Charge: {dividedCharges[index]}</div>
        </div>
      ))}
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
