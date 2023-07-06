import React, { useState } from "react";
import Header from "../layout/Header";
import { Link } from "react-router-dom";

function Communitypayment() {
  const [selected, setSelected] = useState(0);
  const handleClick = (divNum) => () => {
    setSelected(divNum);
  };
  return (
    <div className="row">
      <Header />

      <div className="row m-auto mt-2">
        <div className="col-md-12">
          <div className="card sticky">
            <div className="card-body">
              <div>1 Community Payment > Test</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-auto">
        <div className="col-md-12">
          <div className="d-flex float-end pt-3">
            <Link to="/community">
              <button
                className="btn-primary-button mx-2"
                onClick={handleClick(1)}
              >
                1 Community Add
              </button>
            </Link>

            <Link to="/community">
              <button onClick={handleClick(0)} className="btn-secondary-button">
                1 Community View
              </button>
            </Link>
          </div>
          <div className="card" style={{ marginTop: "62px" }}>
            <div className="card-body p-4">
              <form>
                <div className="row">
                  <div className="col-md-4 pt-2">
                    <div className="vhs-input-label">
                      Payment Date
                      <span className="text-danger"> *</span>
                    </div>
                    <div className="group pt-1">
                      <input
                        type="date"
                        className="col-md-12 vhs-input-value"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 pt-2">
                    <div className="vhs-input-label">
                      Amount
                      <span className="text-danger"> *</span>
                    </div>
                    <div className="group pt-1">
                      <input
                        type="text"
                        className="col-md-12 vhs-input-value"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 pt-2">
                    <div className="vhs-input-label">Payment Mode</div>
                    <div className="group pt-1">
                      <select className="col-md-12 vhs-input-value">
                        <option>--select--</option>
                        <option>Cash</option>
                        <option>Cheque</option>
                        <option>Card</option>
                        <option>Paytm</option>
                        <option>Phonepay</option>
                        <option>Googlepay</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4 pt-2">
                    <div className="vhs-input-label">Comment</div>
                    <div className="group pt-1">
                      <textarea
                        className="col-md-12 vhs-input-value"
                        rows={3}
                        cols={6}
                      />
                    </div>
                  </div>
                </div>

                <div className="row pt-3 justify-content-center">
                  <div className="col-md-1">
                    <button className="vhs-button">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-5 vhs-sub-heading">1 Community Payment</div>
          <table class="table table-hover table-bordered mt-1">
            <thead className="">
              <tr className="table-secondary">
                <th className="table-head" scope="col">
                  Sr
                </th>
                <th className="table-head" scope="col" style={{ width: "16%" }}>
                  Date
                </th>
                <th className="table-head" scope="col">
                  Amount
                </th>
                <th scope="col" className="table-head">
                  Payment Mode
                </th>
                <th scope="col" className="table-head">
                  Comment
                </th>
                <th scope="col" className="table-head">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="user-tbale-body">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>{" "}
          <div className="mt-3 vhs-sub-heading">1 Community Payment</div>
          <div className="row" style={{ textAlign: "end" }}>
            <div className="col-md-12">
              <div className="vhs-desc">TOTAL 1 COMMUNITY AMOUNT : 87.98</div>
              <div className="vhs-desc">TOTAL PAID AMOUNT : 0</div>
              <div className="vhs-sub-heading pt-2">
                TOTAL PENDING AMOUNT : 87.98
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communitypayment;
