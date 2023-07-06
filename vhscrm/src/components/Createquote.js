import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Header from "./layout/Header";
import moment from "moment";
import { useLocation } from "react-router-dom";

function Createquote() {
  const location = useLocation();
  const { data } = location.state;
  const [servicedata, setsubcategorydata] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;
  const [contractType, setcontractType] = useState("");
  const [treatment, settreatment] = useState("");
  const [setserviceCharge, setsetserviceCharge] = useState("");
  const [desc, setdesc] = useState("");
  const [serviceFrequency, setserviceFrequency] = useState("");
  const [area, setarea] = useState("");
  const [contractPeriod, setcontractPeriod] = useState("");



  useEffect(() => {
    getsubcategory();
  }, []);

  const getsubcategory = async () => {
    let res = await axios.get(apiURL + "/getsubcategory");
    if ((res.status = 200)) {
      console.log(res);
      setsubcategorydata(res.data?.subcategory);
    }
  };

  return (
    <div className="web">
      <Header />
      <div className="row m-auto">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <div style={{ float: "right" }}>
              <Col sm={12}>
                <Nav variant="pills" className="flex flex-row">
                  <Nav.Item>
                    <Nav.Link eventKey="second" href="/quotesearch">
                      Quote Search
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" href="/quotelist">
                      Quote list
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" href="/quotelist">
                    Details
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="first">Treatment</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </div>
          </Row>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              {" "}
              <div style={{ background: "white", color: "black" }}>
                <div className="card" style={{ marginTop: "20px" }}>
                  <div className="card-body p-4">
                    <h5>Customer billing</h5>
                    <hr />
                    <form>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="vhs-input-label"></div>
                          <div className="">
                            <b>Customer Name: </b>
                            {data.name}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="">
                            <b>Mobile no:</b>
                            {data.contact1}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="">
                            <b>Card no :</b>
                            {data.cardno}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="">
                            <b>Address:</b>
                            {data.address}
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="">
                            <b>Approve status:</b>
                            {data.approve}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="card-body p-4">
                    <h5>Treatment details</h5>
                    <hr />
                    <form>
                      <div className="row">
                        {" "}
                        <div className="col-md-4">
                          <div className="vhs-input-label">
                            Contract type
                            <span className="text-danger">*</span>
                          </div>
                          <div className="group pt-1">
                            <select className="col-md-12 vhs-input-value" onChange={(e)=>setcontractType(e.target.value)}>
                              <option>--select--</option>
                              <option value="One Time">One Time</option>
                              <option value="AMC"> AMC</option>
                            
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="vhs-input-label">
                            Treatment
                            <span className="text-danger">*</span>
                          </div>
                          <div className="group pt-1">
                            <select className="col-md-12 vhs-input-value" onChange={(e)=>settreatment(e.target.value)}>
                              <option>--select--</option>
                              {servicedata.map((item) => (
                                <option value={item.subcategory}>
                                  {item.subcategory}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="vhs-input-label">
                            Service Charges{" "}
                            <span className="text-danger"> *</span>{" "}
                          </div>
                          <div className="group pt-1">
                            <input
                              type="text"
                              className="col-md-12 vhs-input-value"
                              onChange={(e)=>setserviceCharge(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                      <div className="col-md-4 pt-3 ">
                          <div className="vhs-input-label">
                            Service Frequency{" "}
                            <span className="text-danger"> *</span>{" "}
                          </div>
                          <div className="group pt-1">
                            <input
                              type="text"
                              className="col-md-12 vhs-input-value"
                              onChange={(e)=>setserviceFrequency(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 pt-3">
                          <div className="vhs-input-label">Contact period </div>
                          <div className="group pt-1">
                            <input
                              type="text"
                              className="col-md-12 vhs-input-value"
                              onChange={(e)=>setcontractPeriod(e.target.value)}

                            />
                          </div>
                        </div>
                       
                        <div className="col-md-4 pt-3">
                          <div className="vhs-input-label">Area/Size </div>
                          <div className="group pt-1">
                            <input
                              type="text"
                              className="col-md-12 vhs-input-value"
                              onChange={(e)=>setarea(e.target.value)}

                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 pt-3">
                          <div className="vhs-input-label">Description </div>
                          <div className="group pt-1">
                            <textarea
                            rows={10}
                              type="text"
                              className="col-md-12 vhs-input-value"
                              onChange={(e)=>setdesc(e.target.value)}
                            />
                          </div>
                        </div>{" "}
                      <div className="row pt-3 justify-content-center">
                        
                        <div className="col-md-1">
                          <button className="vhs-button mx-5">Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <table class="table table-hover table-bordered mt-5 ">
                  <thead className="">
                    <tr className="table-secondary">
                      <th className="table-head" scope="col">
                        Sr
                      </th>
                      <th className="table-head" scope="col">
                        Cont type
                      </th>
                      <th className="table-head" scope="col">
                        Treatment
                      </th>
                      <th className="table-head" scope="col">
                        Service Freq.
                      </th>
                      <th className="table-head" scope="col">
                        Contract period
                      </th>
                      <th className="table-head" scope="col">
                        Desc
                      </th>
                      <th className="table-head" scope="col">
                        Area
                      </th>
                      <th className="table-head" scope="col">
                        Charges
                      </th>
                      <th className="table-head" scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {filterdata.map((item) => (
                                  <tr className="user-tbale-body">
                                    <td>{i++}</td>
                                    <td>{item.folldate}</td>
                                    <td>{item.staffname}</td>
                                    <td>{item.response}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.value}</td>

                                    <td>{item.nxtfoll}</td>
                                  </tr>
                                ))} */}

                    <tr
                      className="user-tbale-body"
                      style={{
                        backgroundColor: "#eee",
                        height: "40px",
                      }}
                    >
                      <td className="text-center"></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              {" "}
              <div style={{ background: "white", color: "black" }}>hi</div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}

export default Createquote;
