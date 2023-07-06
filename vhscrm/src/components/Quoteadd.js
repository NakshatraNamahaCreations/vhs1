import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";

import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import Surveynav from "./Surveynav";
import Quotenav from "./Quotenav";

function Quotelist() {
  const navigate=useNavigate();
  const [enquiryflwdata, setenquiryflwdata] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;

  console.log(enquiryflwdata);
  // Get today's date
  const today = new Date();
  useEffect(() => {
    getenquiryadd();
  }, []);

  const getenquiryadd = async () => {
    let res = await axios.get(apiURL + "/getallquote");
    if ((res.status = 200)) {
      setenquiryflwdata(res.data?.quote);
    }
  };
  let i = 0;

  function isSameDay(d1, d2) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth()
    );
  }

  const click =(data)=>{
    navigate(`/quotedetails/${data.EnquiryId}`);
  }
  return (
    <div className="web">
      <Header />
      <Quotenav />

      <div className="row m-auto">
        <div className="col-md-12">
          <Table striped bordered hover>
            <thead>
              <tr className="tr">
                <th>#</th>
                <th>Category</th>
                <th>QId</th>

                <th>Q Dt-Tm</th>

                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>

                <th>City</th>
                <th>Service</th>
                <th>QAmt</th>
                <th>Executive</th>
                <th>Booked by</th>

                <th>Last F/W Dt</th>
                <th>Next F/W Dt</th>

                <th>Desc</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {enquiryflwdata.map((item) => (
                // <Link
                //   to=`/quotedetails`
                //   state={{ data: item }}
                //   style={{
                //     display: "contents",
                //     border: "1px solid gray ",
                //     color: "black",
                //   }}
                // >
                <a onClick={()=>click(item)} className="tbl">

                
                  <tr className="trnew">
                    <td>{i++}</td>
                    <td>{item.enquirydata[0]?.category}</td>
                    <td>{item.quoteId}</td>
                    <td>
                      {item.date}
                      <br />
                      {item.time}
                    </td>
                    <td>{item.enquirydata[0]?.name}</td>
                    <td>{item.enquirydata[0]?.contact1}</td>
                    <td>{item.enquirydata[0]?.address}</td>
                    
                    <td>{item.enquirydata[0]?.city}</td>
                    <td>{item.enquirydata[0]?.intrestedfor}</td>
                    <td>{item.total}</td>
                    <td>{item.enquirydata[0]?.executive}</td>
                    <td>{item.response}</td>
                    <td>{item.enquirydata[0]?.enquirydate}</td>
                    <td>{item.nxtfoll}</td>
                    <td>{item.enquirydata[0]?.comment}</td>
                    <td>{item.nxtfoll}</td>
                  </tr>
                  </a>
                // </Link>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Quotelist;
