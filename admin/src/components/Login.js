import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CreateToggle } from "./TogglerProvider";

export function Login() {
  const { toggle, handleshow, handlehide } = useContext(CreateToggle);

  return (
    <div
      className="row justify-content-center m-auto"
      style={{ alignItems: "center" }}
    >
      <div className="col-7 mt-4">
        <Card style={{ boxShadow: "0px 0px 5px 2px lightgray" }}>
          <Form>
            <div style={{ display: "flex" }}>
              <div className="col-6">
                <img
                  src="https://images.pexels.com/photos/7563676/pexels-photo-7563676.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  style={{ width: "100%", height: "500px" }}
                />
              </div>
              <div className="col-6 ">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 5,
                  }}
                >
                  <img
                    src="/images/vhs.png"
                    className="img-fluid"
                    style={{ width: "80px" }}
                  />
                </div>
                <div className="inputlogin">
                  <div
                    class="input-group mb-4 mt-3"
                    style={{
                      display: "block",
                      width: "90%",
                      marginLeft: "40px",
                    }}
                  >
                    <Row className="mb-3">
                      {" "}
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        {!toggle ? (
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="text" placeholder="Password" />
                            <i
                              class="fa-regular fa-eye "
                              style={{
                                position: "relative",
                                left: "90%",
                                bottom: "50%",
                              }}
                              onClick={handlehide}
                            ></i>
                          </Form.Group>
                        ) : (
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control
                              type="password"
                              placeholder="Password"
                            />

                            <i
                              class="fa-solid fa-eye-slash "
                              style={{
                                position: "relative",
                                left: "90%",
                                bottom: "50%",
                              }}
                              onClick={handleshow}
                            ></i>
                          </Form.Group>
                        )}
                      </Row>
                      <Row>
                        <a href="/Settings">Forgot Password?</a>
                      </Row>
                    </Row>
                  </div>
                </div>
                <div class="form-check" style={{ marginLeft: "114px" }}>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Remeber me" />
                  </Form.Group>
                </div>
                <div className="text-center pt-3">
                  <Link to="/home">
                    <Button
                      style={{
                        width: "300px",
                        padding: "4px",
                        backgroundColor: "#a9042e",
                        border: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                  <div style={{ margin: "20px" }}>
                    <Link className="link_but" to="/Signup">
                      or sign up
                    </Link>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Login;
