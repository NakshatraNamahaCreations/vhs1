import React, { useState, useEffect, useContext } from "react";
import Header from "../layout/Header";
import Enquiryfollowupnav from "../Enquiryfollowupnav";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";

function Ethisweek() {
  const navigate=useNavigate();
  const [filterdata, setfilterdata] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;


  useEffect(() => {
    getenquiry();
  }, []);

  let i = 0;
  const getenquiry = async () => {
    let res = await axios.get(apiURL + "/getcalllateraggredata");
    if ((res.status = 200)) {
      setfilterdata(
        res.data?.enquiryfollowup);
    }
  };
  const enquirydetail = (data) => {
    console.log(data.EnquiryId);
    navigate(`/enquirydetail/${data.EnquiryId}`);
  };

// Function to calculate the start and end dates of the previous week
const getLastWeekDates = () => {
  const today = new Date();
  const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() - 6));
  const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  const startDate = firstDayOfWeek.toISOString().split('T')[0];
  const endDate = lastDayOfWeek.toISOString().split('T')[0];
  return { startDate, endDate };
};

// Get the start and end dates of the previous week
const { startDate, endDate } = getLastWeekDates();

// Filter the data based on the previous week's dates
const filteredData = filterdata.filter(item => item.nxtfoll >= startDate && item.nxtfoll <= endDate);



  return (
    <div>
      <Header />
      <Enquiryfollowupnav />

      <div className="row m-auto">
        <div className="col-md-12">
          <Table striped bordered hover>
            <thead>
            <tr className="tr">
                <th>#</th>
                <th>Category</th>
                <th>Date</th>

                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>City</th>
                <th>Reference2</th>

                <th>Interested for</th>
                <th>Foll Date</th>
                <th>Staff</th>
                <th>Response</th>
                <th>Desc</th>
                <th>Nxt Foll</th>
              </tr>
            </thead>
            <tbody>
            {filteredData.map((item) => (
                <a onClick={() => enquirydetail(item)} className="tbl">
                  <tr key={i} className="trnew">
                    <td>{i++}</td>
                    <td>{item.category}</td>
                    <td>{item.enquirydata[0]?.enquirydate}</td>

                    <td>{item.enquirydata[0]?.name}</td>
                    <td>{item.enquirydata[0]?.contact1}</td>
                    <td>{item.enquirydata[0]?.address}</td>
                    <td>{item.enquirydata[0]?.city}</td>

                    <td>{item.enquirydata[0]?.reference2}</td>
                    <td>{item.enquirydata[0]?.intrestedfor}</td>
                    <td>{item.folldate}</td>
                    <td>{item.staffname}</td>
                    <td>{item.response}</td>
                    <td>{item.desc}</td>
                    <td>{item.nxtfoll}</td>
                  </tr>
                </a>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Ethisweek;
