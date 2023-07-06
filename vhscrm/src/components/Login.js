import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

function Login() {
  const [emailOrName, setEmailOrName] = useState("");
  // const [createpassword, setcreatepassword] = useState("");
  // const [confirmpassword, setconfirmpassword] = useState("");
  const [password, setpassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const apiURL = process.env.REACT_APP_API_URL;

  const Login = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/master/loginuser",
        method: "post",
        baseURL: apiURL,
        headers: { "content-type": "application/json" },
        data: { loginnameOrEmail: emailOrName, password: password },
      };
      await axios(config).then(function (response) {
        if (response.status === 200) {
          alert("Login Success");
          sessionStorage.setItem("admin", JSON.stringify(response.data.user));

          window.location.assign("/home");
        }
      });
    } catch (error) {
      console.error(error);
      alert("Invalid email and password");
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div
        className="row justify-content-center"
        style={{ alignItems: "center" }}
      >
        <div className="col-7" style={{ marginTop: "5%" }}>
          <Card style={{ boxShadow: "0px 0px 5px 2px lightgray" }}>
            <div style={{ display: "flex" }}>
              <div className="col-6 ">
                <img
                  src="/images/761.jpg"
                  style={{ width: "100%", height: "400px" }}
                />
              </div>
              <div className="col-6 ">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 25,
                  }}
                >
                  <img src="/images/vhs.png" style={{ width: "80px" }} />
                </div>
                <div className="inputlogin">
                  <div
                    class="input-group mb-4 mt-3"
                    style={{ display: "block", width: "100%" }}
                  >
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email/Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      style={{
                        width: "60%",
                        marginLeft: "20%",
                        borderRadius: "3px",
                        borderLeft: "2px solid #a9042e",
                      }}
                      onChange={(e) => setEmailOrName(e.target.value)}
                    />
                    <input
                      type="password"
                      class="form-control mt-4"
                      placeholder="Password"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      style={{
                        width: "60%",
                        marginLeft: "20%",
                        borderRadius: "3px",
                        borderLeft: "2px solid #a9042e",
                      }}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  class="form-check"
                  style={{ marginLeft: "114px", display: "flex" }}
                >
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="vhs-sub-heading " for="flexCheckDefault">
                      Remember me
                    </label>
                  </div>
                  {/* <div>
                    <p
                      onClick={handleShow}
                      style={{
                        marginLeft: "25px",
                        fontSize: "13px",
                        marginTop: "4px",
                      }}
                    >
                      <b>Sign up</b>
                    </p>
                  </div> */}
                </div>
                <div className="text-center pt-3">
                  <Button
                    style={{
                      width: "200px",
                      padding: "4px",
                      backgroundColor: "#a9042e",
                      border: "none",
                      fontWeight: "bold",
                    }}
                    onClick={Login}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Admin Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="adlogin">
              <input
                type="email"
                placeholder="Email/Name"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="adlogin">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setcreatepassword(e.target.value)}
              />
            </div>
            <div className="adlogin">
              <input
                type="password"
                placeholder="CPassword"
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={signup}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </div>
  );
}

export default Login;