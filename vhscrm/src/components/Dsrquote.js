import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { da } from "date-fns/locale";
import numberToWords from 'number-to-words';

function Quotationterm() {
  const [tcdata, settcdata] = useState([]);
  const [headerimgdata, setheaderimgdata] = useState([]);
  const [footerimgdata, setfooterimgdata] = useState([]);
  const [bankdata, setbankdata] = useState([]);
  const [treatmentdata, settreatmentdata] = useState([]);
  const location = useLocation();
  const { data } = location.state ||null;
  console.log(data)
  const apiURL = process.env.REACT_APP_API_URL;
  const imgURL = process.env.REACT_APP_IMAGE_API_URL;

  const [section2data, setsection2data] = useState([]);

  
  useEffect(() => {
    gettermsgroup();
  }, []);

  const gettermsgroup = async () => {
    let res = await axios.get(apiURL + "/master/gettermgroup");
    if ((res.status = 200)) {
      settcdata(res.data?.termsgroup);
    }
  };
  const gettermsgroup2 = async () => {
    let res = await axios.get(apiURL + "/master/gettermgroup2");
    if ((res.status = 200)) {
      setsection2data(res.data?.termsgroup2);
    }
  };

  let i = 1;

  useEffect(() => {
    getheaderimg();
    getfooterimg();
    getbank();

    gettermsgroup2();
  }, []);

  const getheaderimg = async () => {
    let res = await axios.get(apiURL + "/master/getheaderimg");
    if ((res.status = 200)) {
      setheaderimgdata(res.data?.headerimg);
    }
  };

  const getfooterimg = async () => {
    let res = await axios.get(apiURL + "/master/getfooterimg");
    if ((res.status = 200)) {
      setfooterimgdata(res.data?.footerimg);
    }
  };

  const getbank = async () => {
    let res = await axios.get(apiURL + "/getbank");
    if ((res.status = 200)) {
      setbankdata(res.data?.bankacct);
    }
  };
  function calculateTotalPrice(data) {
    let totalPrice = 0;
    for (let i = 0; i < data.length; i++) {
      totalPrice += parseInt(data);
    }
    return totalPrice;
  }

  const total = calculateTotalPrice(data);
 
  return (
    <div className="row">
      <Header />

      <div className="row justify-content-center mt-3">
        <div className="col-md-11">
          <div
            className="card shadow  bg-white rounded"
            style={{ border: "none" }}
          >
            {headerimgdata.map((item) => (
              <img
                src={
                  imgURL+"/quotationheaderimg/" + item.headerimg
                }
                height="200px"
                width="100%"
              />
            ))}
            {/* <div className="q-row1">VIJAY HOME SERVICES</div> */}
            <div className="q-row2">QUOTATION</div>

            <div className="row  mt-2">
              <div className="col-md-6 b-col">
                <div className="" style={{ fontWeight: "bold" }}>
                  TO
                </div>
                <div className="" style={{ fontWeight: "bold" }}>
                  {data?.customer[0]?.customerName}
                </div>
                <p>                  {data?.customer[0]?.address}</p>
                {/* <div className="" style={{ fontWeight: "bold" }}>
                  City :{" "}
                  <span style={{ color: "black", fontWeight: 400 }}>
                    Bangalore
                  </span>
                </div> */}
              </div>
              <div className="col-md-6 b-col" style={{ marginLeft: "9px" }}>
                <div className="" style={{ fontWeight: "bold" }}>
                  Quote#{" "}
                  <span style={{ color: "black", fontWeight: 400 }}> {data.cardNo}</span>
                </div>

                <div className="" style={{ fontWeight: "bold" }}>
                  Date :{" "}
                  <span style={{ color: "black", fontWeight: 400 }}>
                    {moment().format("L")}
                  </span>
                </div>

                <div className="" style={{ fontWeight: "bold" }}>
                  Project Type :{" "}
                  <span style={{ color: "black", fontWeight: 400 }}></span>
                </div>

                <div className="" style={{ fontWeight: "bold" }}>
                  Salse Manager :{" "}
                  <span style={{ color: "black", fontWeight: 400 }}>{}</span>
                </div>

                <div className="" style={{ fontWeight: "bold" }}>
                  Contact :{" "}
                  <span style={{ color: "black", fontWeight: 400 }}>
                 {data?.customer[0]?.mainContact}
                  </span>
                </div>
              </div>
            </div>

            <div className="row m-auto mt-2 w-100">
              <div className="col-md-12">
                <table class="table table-bordered border-danger">
                  <thead
                    style={{
                      backgroundColor: "#a9042e",
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                   <tr className="table-secondary">
                      <th className="table-head" scope="col">
                        Sr
                      </th>
                      <th className="table-head" scope="col">
                        Category
                      </th>
                      <th className="table-head" scope="col">
                        Cont.Type
                      </th>
                      <th className="table-head" scope="col">
                        Treatment
                      </th>
                      <th className="table-head" scope="col">
                        Service Freq.
                      </th>
                      {/* <th className="table-head" scope="col">
                        Contract Period
                      </th> */}
                      <th className="table-head" scope="col">
                        Service Date
                      </th>
                      <th className="table-head" scope="col">
                        Description
                      </th>
                      <th className="table-head" scope="col">
                        Charges
                      </th>
                    
                    </tr>
                  </thead>
                  <tbody>
                 
                      <tr>
                        <td>{i++}</td>
                        <td>{data.category}</td>
                        <td>{data.contractType}</td>
                        <td>{data.service}</td>
                        <td>{data.serviceFrequency}</td>
                        <td>{data.dividedDates}</td>
                        <td>{data.desc}</td>
                        <td>{data.serviceCharge}</td>
                      </tr>
       
                  </tbody>
                </table>
                <div className="float-end">
                 
                  <h5>Total :{data.serviceCharge}</h5>
                </div>

                <div
                  className="text-center"
                  style={{ fontWeight: "bold", paddingTop: "23px" }}
                >
                  In Words :{" "}
                  <span style={{ fontWeight: 400 }}>
                 {numberToWords.toWords(data.serviceCharge)} 
                  </span>
                </div>

                <div
                  className="row m-auto mt-3"
                  style={{
                    backgroundColor: "#a9042e",
                    color: "white",
                    fontWeight: "bold",
                    justifyContent: "center",
                    padding: "8px",
                  }}
                >
                  Terms & Condition
                </div>
                <table class="table table-bordered border-danger">
                  <tbody>
                    {tcdata.map((item) => (
                      <tr>
                        <td scope="row">
                          <div class="form-check">
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {item.content}
                            </label>
                          </div>
                        </td>
                        {/* <td className="">{item.content}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div
                  className="row m-auto mt-3"
                  style={{
                    backgroundColor: "#a9042e",
                    color: "white",
                    fontWeight: "bold",
                    justifyContent: "center",
                    padding: "8px",
                  }}
                >
                  Labour Compensation Insurance
                </div>
                <table class="table table-bordered border-danger">
                  <tbody>
                    {section2data.map((item) => (
                      <tr>
                        <td scope="row">
                         {item.content}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mx-5">
              <div>
                <div className="" style={{ fontWeight: "bold" }}>
                  BANK DETAILS
                </div>
              </div>

              {bankdata.map((item) => (
                <div>
                  <div className="pt-2" style={{ fontWeight: "bold" }}>
                    Account Name :{" "}
                    <span style={{ color: "black", fontWeight: 400 }}>
                      {item.accname}
                    </span>
                  </div>

                  <div className="" style={{ fontWeight: "bold" }}>
                    Account Number :{" "}
                    <span style={{ color: "black", fontWeight: 400 }}>
                      {item.accno}
                    </span>
                  </div>

                  <div className="" style={{ fontWeight: "bold" }}>
                    IFSC :{" "}
                    <span style={{ color: "black", fontWeight: 400 }}>
                      {item.ifsccode}
                    </span>
                  </div>

                  <div className="" style={{ fontWeight: "bold" }}>
                    BANK NAME :{" "}
                    <span style={{ color: "black", fontWeight: 400 }}>
                      {item.bankname}
                    </span>
                  </div>
                  <div className="" style={{ fontWeight: "bold" }}>
                    Branch Name :{" "}
                    <span style={{ color: "black", fontWeight: 400 }}>
                      {item.branch}
                    </span>
                  </div>

                  <div className="mt-3" style={{ fontWeight: "bold" }}>
                    Gpay / Phonepe Details
                  </div>

                  <div className="pb-3" style={{ fontWeight: "bold" }}>
                    Mobile No. :{" "}
                    <span style={{ color: "black", fontWeight: 400 }}>
                      {item.upinumber}
                    </span>
                  </div>
                </div>
              ))}

              <div className="row pt-3 pb-3 justify-content-center">
                {/* <div className="col-md-1">
                  <button className="vhs-button">Save</button>
                </div>
                <div className="col-md-1 mx-1">
                  <button className="vhs-button">Cancel</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-md-11">
          <div
            className="card shadow  bg-white rounded"
            style={{ border: "none" }}
          >
            {/* <div className="q-row0 text-center">
              Our Popular Services
              <br />
              <span
                style={{ color: "white", fontWeight: "bold", fontSize: "13px" }}
              >
                Residential & Commercial
              </span>
            </div>
            <div className="q-row1">
              We are Government Approved Chemicals Only
            </div> */}

            <div>
              {footerimgdata.map((item) => (
                <div className="col-md-12">
                  <img
                    src={
                      imgURL+
                      "/quotationfooterimg/" +
                      item.footerimg
                    }
                    height="700px"
                    width="100%"
                  />
                </div>
              ))}
            </div>

        
            <div className="row m-auto">
              <div className="mt-3 text-center" style={{ color: "#a9042e" }}>
                website : www.vijayhomeservices | mail :
                support@vijayhomeservices.com
              </div>

              <div className="mt-2 text-center" style={{ color: "black" }}>
                BANGALORE - HYDERABAD - CHENNAI - PUNE - MUMBAI - AHMEDABAD -
                VADODARA - SURAT - LUCKNOW - NCR - INDIA - GURGAON - FARIDABAD -
                GHAZIABAD - BHUVANESHWAR - KOCHI
              </div>

              <div
                className="mt-2 text-center pb-2"
                style={{ color: "#a9042e" }}
              >
                Customer Care : +91 845 374 8478
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotationterm;
