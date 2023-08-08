import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

function Login() {
  const [emailOrName, setEmailOrName] = useState("");
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
        } else {
          // alert(data.response);
          alert(response.data.error);
        }
      });
    } catch (error) {
      alert("Invalid email and password");
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div
        className="row justify-content-center"
        style={{ alignItems: "center" }}

      >
        <div className="row">
        <div className="col-6">
          <img src="./Images/loginimg.png" style={{width:"100%",height:"150px"}}/>
        </div>
        <div className="col-6">
  
        </div>
        </div>
       
        <div className="col-10" style={{ marginTop: "5%" }}>
         
            <div style={{ display: "flex" }}>
              <div className="col-6 ">
                <img
                  src="https://www.vijayhomeservices.in/crm/login/map.png "
                  style={{ width: "100%", height: "400px" }}
                />
              </div>
              <Card style={{ boxShadow: "0px 0px 5px 1px lightgray" }} className="col-6">
              <div >
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
                  <div className="text-center">
                    <input
                      className="mx-1"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="vhs-sub-heading " for="flexCheckDefault">
                      Remember me
                    </label>

                    <p><b>Never share your login details with anyone.</b></p>
                  </div>
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
              </Card>
            </div>
         
        </div>
      </div>
    </div>
  );
}

export default Login;
