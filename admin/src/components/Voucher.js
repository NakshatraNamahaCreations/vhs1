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
function Voucher() {
  const [selected, setSelected] = useState(0);
  const handleClick = (divNum) => () => {
    setSelected(divNum);
  };
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidenav />
      </div>
      <div className="col-md-10">
        <Header />

        <div className="d-flex float-end  mb-3">
          <button
            className="btn-primary-button mx-2"
            style={selected == 1 ? active : inactive}
            onClick={handleClick(1)}
          >
            Add Voucher
          </button>

          <button
            style={selected == 0 ? active : inactive}
            onClick={handleClick(0)}
            className="btn-secondary-button"
          >
            All Voucher
          </button>
        </div>

        <div className="row w-100" style={{ marginLeft: "-32px" }}>
          <div className="col-md-12">
            {selected == 0 ? (
              <>
                {" "}
                <table class="table table-hover table-bordered mt-5">
                  <thead className="">
                    <tr className="table-secondary">
                      <th className="table-head" scope="col">
                        S.No
                      </th>
                      <th className="table-head" scope="col">
                        Voucher Code
                      </th>
                      <th className="table-head" scope="col">
                        Description
                      </th>

                      <th className="table-head" scope="col">
                        Discount Percentage
                      </th>
                      <th className="table-head" scope="col">
                        Category
                      </th>
                      <th className="table-head" scope="col">Start Date</th>
                      <th className="table-head" scope="col">validity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="user-tbale-body">
                      <td className="text-center">1</td>
                      <td className="text-center">JDJ3832</td>
                      <td className="text-center">Hospital Cleaning</td>
                      <td className="text-center">10%</td>
                      <td>Home Cleaning</td>
                      <td className="text-center">02-06-2023</td>
                      <td>04-09-2023</td>
                    </tr>
                  </tbody>
                </table>{" "}
              </>
            ) : (
              <>
                {" "}
                <div className="card mt-4">
                  <div className="card-body p-3">
                    {/* <div className="vhs-sub-heading pb-2">Add New Record</div> */}

                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label> Voucher Code</Form.Label>
                          <Form.Control placeholder=" Voucher code " />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label> Description</Form.Label>
                          <Form.Control placeholder=" Description " />
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label> Discount Percentage</Form.Label>
                          <Form.Control placeholder=" Discount " />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label> Category</Form.Label>
                          <Form.Control placeholder=" Category Type " />
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label> Start Date</Form.Label>
                          <Form.Control placeholder=" start date " />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>validity till</Form.Label>
                          <Form.Control type='' placeholder=" validity " />
                        </Form.Group>
                      </Row>
                      <div className="row pt-3 justify-content-center">
                        <div className="col-md-1">
                          <button className="vhs-button">Save</button>
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
    </div>
  );
}
export default Voucher;
