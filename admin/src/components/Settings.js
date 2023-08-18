import React from "react";
import Sidenav from "./Sidenav";
import Header from "./Header";

function Settings() {
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidenav />
      </div>
      <div className="col-md-10">
        <Header />

        <div
          className="shadow-lg p-3 mb-5 bg-white rounded"
          style={{ marginTop: "20px",  }}
        >
          <div className="card-body p-4">
            <form>
              <div className="row mr-4">
                <div className="vhs-sub-heading">Account Setting</div>
                <div className="col-md-4 pt-2">
                  <div className="vhs-input-label">User Name</div>
                  <div className="group pt-1">
                    <input
                      type="text"
                      placeholder="Pankraj"
                      className="col-md-12 vhs-input-value"
                    />
                  </div>
                </div>
                <div className="col-md-4 pt-2">
                  <div className="vhs-input-label">Email Id</div>
                  <div className="group pt-1">
                    <input
                      type="text"
                      placeholder="pankraj@gmail.com"
                      className="col-md-12 vhs-input-value"
                    />
                  </div>
                </div>
                <div className="col-md-4 pt-2">
                  <div className="vhs-input-label">First Name</div>
                  <div className="group pt-1">
                    <input
                      type="text"
                      placeholder="pankraj"
                      className="col-md-12 vhs-input-value"
                    />
                  </div>
                </div>

                <div className="col-md-4 pt-2">
                  <div className="vhs-input-label">Last Name</div>
                  <div className="group pt-1">
                    <input
                      type="text"
                      placeholder="pankraj"
                      className="col-md-12 vhs-input-value"
                    />
                  </div>
                </div>

                <div className="col-md-4 pt-2">
                  <div className="vhs-input-label">About Me</div>
                  <div className="group pt-1">
                    <textarea
                      rows={4}
                      cols={4}
                      className="col-md-12 vhs-input-value"
                      placeholder="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    />
                  </div>
                </div>
              </div>

              <div className="row pt-3 justify-content-center">
                <div className="col-md-1">
                  <button className="vhs-button">Save</button>
                </div>
              </div>

              <div className="row mr-4 pt-3">
                <div className="vhs-sub-heading">Change Password</div>
                <div className="col-md-4 pt-2">
                  <div className="vhs-input-label">Old Password</div>
                  <div className="group pt-1">
                    <input
                      type="text"
                      className="col-md-12 vhs-input-value"
                      placeholder="loremipsum "
                    />
                  </div>
                </div>
                <div className="col-md-4 pt-2">
                  <div className="vhs-input-label">New Password</div>
                  <div className="group pt-1">
                    <input
                      type="text"
                      placeholder="loremipsum "
                      className="col-md-12 vhs-input-value"
                    />
                  </div>
                </div>
                <div className="col-md-4 pt-2">
                  <div className="vhs-input-label">New Password Confirmed</div>
                  <div className="group pt-1">
                    <input
                      type="text"
                      placeholder="loremipsum "
                      className="col-md-12 vhs-input-value"
                    />
                  </div>
                </div>
              </div>

              <div className="row pt-3 justify-content-center">
                <div className="col-md-2">
                  <button className="vhs-button" style={{ width: "140px" }}>
                    Change Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
