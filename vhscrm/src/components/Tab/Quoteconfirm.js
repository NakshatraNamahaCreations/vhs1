import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Quotefollowupnav from "../Quotefollowupnav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Quoteconfirmed() {
  const navigate = useNavigate();
  const [filterdata, setfilterdata] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getquotefollow();
  }, []);

  let i = 0;
  const getquotefollow = async () => {
    let res = await axios.get(apiURL + "/getenquirydata");
    if ((res.status = 200)) {
      setfilterdata(res.data?.quotefollowup.filter((i)=>i.response === "Confirmed"));
    }
  };

  const quotedetails = (data) => {
    console.log(data.EnquiryId);
    navigate(`/quotedetails/${data.EnquiryId}`);
  };

// Function to calculate the start and end dates of the current week
const getThisWeekDates = () => {
  const today = new Date();
  const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
  const startDate = firstDayOfWeek.toISOString().split('T')[0];
  const endDate = lastDayOfWeek.toISOString().split('T')[0];
  return { startDate, endDate };
};

// Get the start and end dates of the current week
const { startDate, endDate } = getThisWeekDates();

// Filter the data based on the current week's dates
const filteredData = filterdata.filter(item => item.nxtfoll >= startDate && item.nxtfoll <= endDate);

  return (
    <div>
      <Header />
      <Quotefollowupnav />

      <div className="row m-auto">
        <div className="col-md-12">
          <table class="table table-hover table-bordered mt-1">
            <thead className="">
              <tr>
                <th scope="col">
                  <input type="text" className="vhs-table-input" />
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
                <th scope="col">
                  <input type="text" className="vhs-table-input" />
                </th>
                <th scope="col">
                  <select className="vhs-table-input">
                    <option>-select-</option>
                    <option>bangalore</option>
                    <option>hydrabad</option>
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
                <th scope="col">
                  <select className="vhs-table-input">
                    <option>-select-</option>
                    <option>Bharath</option>
                    <option>annapurna</option>
                  </select>
                </th>
                <th scope="col">
                  <select className="vhs-table-input">
                    <option>-select-</option>
                    <option>call later</option>
                  </select>
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
                  Sr
                </th>
                <th className="table-head" scope="col">
                  Q Id
                </th>
                <th className="table-head" scope="col">
                  Q Dt-Tm
                </th>
                <th className="table-head" scope="col">
                  Customer Name
                </th>

                <th scope="col" className="table-head">
                  Contact
                </th>
                <th scope="col" className="table-head">
                  Address
                </th>
                <th scope="col" className="table-head">
                  City
                </th>

                <th scope="col" className="table-head">
                  Services
                </th>
                <th scope="col" className="table-head">
                  Q Amt
                </th>
                <th scope="col" className="table-head">
                  Last Followup Date
                </th>
                <th scope="col" className="table-head">
                  Response
                </th>
                <th scope="col" className="table-head">
                  Description
                </th>
                <th scope="col" className="table-head">
                  Next Followup Date
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <a onClick={() => quotedetails(item)} className="tbl">
                  <tr className="user-tbale-body">
                    <td>{i++}</td>
                    <td>{item.quotedata[0]?.quoteId}</td>
                    <td>
                      {item.quotedata[0]?.date}
                      <br />
                      {item.quotedata[0]?.time}
                    </td>
                    <td>{item.enquirydata[0]?.name}</td>
                    <td>{item.enquirydata[0]?.contact1}</td>
                    <td>{item.enquirydata[0]?.address}</td>
                    <td>{item.enquirydata[0]?.city}</td>
                    <td>{item.enquirydata[0]?.intrestedfor}</td>

                    <td>{item.quotedata[0]?.netTotal}</td>

                    <td>{item.enquirydata[0]?.enquirydate}</td>
                    <td>{item.response}</td>
                    <td>{item.enquirydata[0]?.comment}</td>
                    <td>{item.nxtfoll}</td>
                  </tr>
                </a>
              ))}
            </tbody>
          </table>{" "}
        </div>
      </div>
    </div>
  );
}

export default Quoteconfirmed;
