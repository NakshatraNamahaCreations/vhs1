import React,{useState,useEffect} from "react";
import Header from "../layout/Header";
import B2Bnav from "../B2Bnav";
import axios from "axios";
import DataTable from "react-data-table-component";

function B2bsearch() {
  const [b2bname, setname] = useState("");
  const [contactperson, setcontactperson] = useState("");
  const [city, setcity] = useState("");
  const [customertype, setcustomertype] = useState("");
  const [email, setemail] = useState("");
  const [citydata, setcitydata] = useState([]);
  const [b2bdata, setb2bdata] = useState([]);
  const [results, setfilterdata] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getcity();
    getb2b();
  }, []);

  const getcity = async () => {
    let res = await axios.get(apiURL + "/master/getcity");
    if ((res.status = 200)) {
      setcitydata(res.data?.mastercity);
    }
  };
  const getb2b = async () => {
    let res = await axios.get(apiURL + "/getB2B");
    if ((res.status = 200)) {
      setb2bdata(res.data?.B2B);
    }
  };
  useEffect(() => {
    const result = b2bdata.filter((item) => {
      return (
        item.b2bname.toLowerCase().match(b2bname.toLowerCase()) &&
        item.city.toLowerCase().match(city.toLowerCase()) &&
        item.email.toLowerCase().match(email.toLowerCase()) &&
        item.contactperson.toLowerCase().match(contactperson.toLowerCase())
      );
    });
    setfilterdata(result);
  }, [b2bname, city, email, contactperson]);

  let i = 0;
  const columns = [
    {
      name: "B2B name",
      selector: (row) => row.b2bname,
    },
    {
      name: "Contact Person",
      selector: (row) => row.contactperson,
    },
    {
      name: "maincontact",
      selector: (row) => row.maincontact,
    },
    {
      name: "Alternate number",
      selector: (row) => row.alternateno,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Gst",
      selector: (row) => row.gst,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "B2B type",
      selector: (row) => row.b2btype,
    },
    {
      name: "city",
      selector: (row) => row.city,
    },
    {
      name: "Instructions",
      selector: (row) => row.instructions,
    },
    {
      name: "Approach",
      selector: (row) => row.approach,
    },
  ];
  return (
    <div>
      <Header />
      <B2Bnav />

      <div className="row m-auto">
        <div className="col-md-12">
          <div className="card" style={{ marginTop: "32px" }}>
            <div className="card-body p-4">
              <form>
                <div className="row">
                  <div className="vhs-sub-heading text-end">
                    TOTAL B2B COUNT : (26451)
                  </div>
                  <div className="vhs-sub-heading">B2B Basic Information</div>

                  <div className="col-md-4 pt-2">
                    <div className="vhs-input-label">Name</div>
                    <div className="group pt-1">
                      <input
                        type="text"
                        className="col-md-12 vhs-input-value"
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 pt-2">
                    <div className="vhs-input-label"> Contact person.</div>
                    <div className="group pt-1">
                      <input
                        type="text"
                        className="col-md-12 vhs-input-value"
                        onChange={(e) => setcontactperson(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 pt-2">
                    <div className="vhs-input-label">Email</div>
                    <div className="group pt-1">
                      <input
                        type="text"
                        className="col-md-12 vhs-input-value"
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 pt-2">
                  <div className="vhs-input-label">City</div>
                  <div className="group pt-1">
                    <select
                      className="col-md-12 vhs-input-value"
                      onChange={(e) => setcity(e.target.value)}
                    >
                      <option>-select-</option>
                      {citydata.map((item) => (
                        <option value={item.city}>{item.city}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* <div className="row pt-2">
                  <div className="vhs-sub-heading">Search By City</div>
                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Ahmedabad (3)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Bangalore (2740)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Bengaluru (31)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Bhubaneswar (3)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Chennai (574)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Coimbatore (3)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Faridabad (2)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Gurgaon (11)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Gurugram (8)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Hosur (1)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Hyderabad (412)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Kolar District (18)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row pt-2">
                  <div className="vhs-sub-heading">Search By B2B Type</div>
                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Apartment Housekeeping (119)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Apartment Pest Control (77)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Apartment Subscription (17)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Bathroom Cleaning (2)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        General (25701)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Hospital Housekeeping (2)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Hospital Pest Control (20)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Gurgaon (11)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Hotel Cleaning (3)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Hotel Pest Control (397)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Industrial Housekeeping (2)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3 pt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Industrial Pest Control (1)
                      </label>
                    </div>
                  </div>
                </div> */}

                <div
                  className="text-center pt-2"
                  style={{ color: "#848181", fontSize: "14px" }}
                >
                  Input Atleast 1 Filter For Quick Search
                </div>

                {/* <div className="row pt-3 justify-content-center">
                  <div className="col-md-1">
                    <button className="vhs-button">Save</button>
                  </div>
                  <div className="col-md-1">
                    <button className="vhs-button mx-3">Cancel</button>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
        <div className="mt-1 border">
          <DataTable
            columns={columns}
            data={results}
            pagination
            fixedHeader
            selectableRowsHighlight
            subHeaderAlign="left"
            highlightOnHover
          />
        </div>
      </div>
    </div>
  );
}

export default B2bsearch;