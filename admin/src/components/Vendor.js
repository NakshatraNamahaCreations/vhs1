import React, { useState } from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
const active = {
  backgroundColor: "rgb(169, 4, 46)",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
};
const inactive = { color: "black", backgroundColor: "white" };

function Vendor() {
  const [selected, setSelected] = useState(0);
  const handleClick = (divNum) => () => {
    setSelected(divNum);
  };
  return (
    <div div className="row">
      <div className="col-md-2">
        <Sidenav />
      </div>
      <div className="col-md-10">
        <Header />

        <div className="d-flex float-end mt-3 mb-3">
          <button
            className="btn-primary-button mx-2"
            style={selected == 1 ? active : inactive}
            onClick={handleClick(1)}
          >
            Vendor Add
          </button>

          <button
            style={selected == 0 ? active : inactive}
            onClick={handleClick(0)}
            className="btn-secondary-button"
          >
            All Vendors
          </button>
        </div>

        <div className="row w-100" style={{ marginLeft: "-31px" }}>
          {selected == 0 ? (
            <>
              {" "}
              <table class="table table-hover table-bordered pt-1">
                <thead className="">
                  <tr className="table-secondary">
                    <th className="table-head" scope="col">
                      Sr
                    </th>
                    <th className="table-head" scope="col">
                      Vendor Name
                    </th>
                    <th className="table-head" scope="col">
                      Contact Person
                    </th>
                    <th scope="col" className="table-head">
                      Contact
                    </th>
                    <th scope="col" className="table-head">
                      Email Id
                    </th>
                    <th scope="col" className="table-head">
                      Address
                    </th>
                    <th scope="col" className="table-head">
                      City
                    </th>
                    <th scope="col" className="table-head">
                      Instruction
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="user-tbale-body text-center">
                    <td>1</td>
                    <td>Salman Blr VV</td>
                    <td>Salman</td>
                    <td>8899663565</td>
                    <td>NA</td>
                    <td>BOMMENAHALLI, BOMMENAHALLI, BANGALORE</td>
                    <td>Bangalore</td>
                    <td width={"200px"}>
                      Before you start going room to room, pause first to put on
                      some great, lively music. That’s better. Now pick up
                      clutter, and as you go, feel free to second-guess your
                      belongings. The less you have, the less you have to put
                      away, clean, and dust: scrutinize books, magazines,
                      newspapers, DVDs, furniture, toys the kids have outgrown,
                      old computers you’ve outgrown, old clothes and shoes in
                      the closets…is it time to donate and recycle? Turn off
                      light bulbs and ceiling fans as you go for the upcoming
                      dusting work.
                    </td>
                  </tr>
                </tbody>
              </table>{" "}
            </>
          ) : (
            <>
              {" "}
              <div className="card" style={{ marginTop: "20px" }}>
                <div className="card-body p-4">
                  <Form>
                    <Row className="mb-3">
                      <div className="vhs-sub-heading">
                        Vendor Basic Information
                      </div>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> Vendor Name</Form.Label>
                        <Form.Control placeholder=" Service Type " />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> Email</Form.Label>
                        <Form.Control placeholder=" Service Type " />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <div className="vhs-sub-heading">
                        Vendor Contact & GST Information
                      </div>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> Main Contact</Form.Label>
                        <Form.Control placeholder=" Service Type " />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> Alternate Contact</Form.Label>
                        <Form.Control placeholder=" Service Type " />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>GST</Form.Label>
                        <Form.Control required />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> Address</Form.Label>
                        <Form.Control placeholder=" Service Type " />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> Pin code. </Form.Label>
                        <Form.Control />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> City</Form.Label>
                        <Form.Control placeholder=" Service Type " />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Instructions </Form.Label>
                        <Form.Control />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>State</Form.Label>
                        <Form.Select>
                          <option>Select State</option>
                          <option>Andra Pradesh</option>
                          <option>Arunachal Pradesh</option>
                          <option>Assam</option>
                          <option>Bihar</option>
                          <option>Chhattisgarh</option>
                          <option>Goa</option>
                          <option>Gujarat</option>
                          <option>Haryana</option>
                          <option>Himachal Pradesh</option>
                          <option>Jammu and Kashmir</option>
                          <option>Jharkhand</option>
                          <option>Karnataka</option>
                          <option>Kerala</option>
                          <option>Madya Pradesh</option>
                          <option>Maharashtra</option>
                          <option>Manipur</option>
                          <option>Meghalaya</option>
                          <option>Mizoram</option>
                          <option>Nagaland</option>
                          <option>Orissa</option>
                          <option>Punjab</option>
                          <option>Rajasthan</option>
                          <option>Sikkim</option>
                          <option>Tamil Nadu</option>
                          <option>Telangana</option>
                          <option>Tripura</option>
                          <option>Uttaranchal</option>
                          <option>Uttar Pradesh</option>
                          <option>West Bengal</option>
                          <option
                            disabled
                            style={{ backgroundColor: "#aaa", color: "#fff" }}
                          >
                            UNION Territories
                          </option>
                          <option>Andaman and Nicobar Islands</option>
                          <option>Chandigarh</option>
                          <option>Dadar and Nagar Haveli</option>
                          <option>Daman and Diu</option>
                          <option>Delhi</option>
                          <option>Lakshadeep</option>
                          <option>Pondicherry</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <div className="row pt-3 justify-content-center">
                      <div className="col-md-1">
                        <button className="vhs-button">Save</button>
                      </div>
                      <div className="col-md-1">
                        <button className="vhs-button mx-3">Cancel</button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Vendor;
