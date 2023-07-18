import React, { useState, useEffect, useContext } from "react";
import Header from "../components/layout/Header";
import Surveynav from "../components/Surveynav";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

function Surveydatatable() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchCatagory, setSearchCatagory] = useState("");
  const [searchDateTime, setSearchDateTime] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchContact, setSearchContact] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const [searchReference, setSearchReference] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchInterest, setSearchInterest] = useState("");
  const [searchExecutive, setSearchExecutive] = useState("");
  const [searchAppoDateTime, setSearchAppoDateTime] = useState("");
  const [searchNote, setSearchNote] = useState("");
  const [searchTechnician, setSearchTechnician] = useState("");

  const [reasonforcancel, setreasonforcancel] = useState("");

  const apiURL = process.env.REACT_APP_API_URL;
  const { date, category } = useParams();

  const [show, setShow] = useState(false);

  // const handleShow = () => setShow(true);
  const [showPopup, setShowPopup] = useState({});

  useEffect(() => {
    getenquiry();
  }, []);

  const getenquiry = async () => {
    let res = await axios.get(apiURL + "/getsurveyaggredata");
    if (res.status === 200) {
      const fd = res.data?.enquiryfollowup.filter(
        (i) => i.response === "Survey"
      );
    

      const filteredData = fd.filter(
        (entry) => entry.category === category && entry.nxtfoll === date
      );
      console.log("filteredData", filteredData);
      setFilteredData(filteredData);
      setSearchResults(filteredData);
    }
  };

  const openPop = (data) => {
    setShowPopup(data);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const cancelSurvey = async (e) => {
    e.preventDefault();
    const confirm = window.confirm(
      "Are you sure you want to cancel this survey?"
    );
    if (confirm) {
      try {
        // Cancel the survey
        const config = {
          url: `/canclesurvey/${showPopup._id}`,
          method: "post",
          baseURL: apiURL,
          headers: { "content-type": "application/json" },
          data: {
            userid: showPopup._id,
            reasonForCancel: reasonforcancel,
            cancelStatus: true,
          },
        };
        const response = await axios(config);
        if (response.status === 200) {
          alert("Successfully updates");
          window.location.reload("");
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    }
  };

  // const getUniqueCategories = () => {
  //   const uniqueCategories = new Set();
  //   searchResults.map((item) => uniqueCategories.add(item.category));
  //   return Array.from(uniqueCategories);
  // };

  useEffect(() => {
    const filterResults = () => {
      let results = filteredData;
      if (searchCatagory) {
        results = results.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase().includes(searchCatagory.toLowerCase())
        );
      }
      if (searchDateTime) {
        results = results.filter(
          (item) =>
            (item.enquirydata[0]?.enquirydate &&
              item.enquirydata[0]?.enquirydate
                .toLowerCase()
                .includes(searchDateTime.toLowerCase())) ||
            (item.appoTime &&
              item.appoTime
                .toLowerCase()
                .includes(searchDateTime.toLowerCase()))
        );
      }
      if (searchName) {
        results = results.filter(
          (item) =>
            item.enquirydata[0]?.name &&
            item.enquirydata[0]?.name.toLowerCase().includes(searchName.toLowerCase())
        );
      }
      if (searchContact) {
        results = results.filter(
          (item) =>
            item.enquirydata[0]?.contact1 &&
            item.enquirydata[0]?.contact1.toLowerCase().includes(searchContact.toLowerCase())
        );
      }
      if (searchAddress) {
        results = results.filter(
          (item) =>
            item.enquirydata[0]?.address &&
            item.enquirydata[0]?.address.toLowerCase().includes(searchAddress.toLowerCase())
        );
      }
      if (searchReference) {
        results = results.filter(
          (item) =>
            item.enquirydata[0]?.reference1 &&
            item.enquirydata[0]?.reference1
              .toLowerCase()
              .includes(searchReference.toLowerCase())
        );
      } //
      if (searchCity) {
        results = results.filter(
          (item) =>
            item.enquirydata[0]?.city &&
            item.enquirydata[0]?.city.toLowerCase().includes(searchCity.toLowerCase())
        );
      }
      if (searchInterest) {
        results = results.filter(
          (item) =>
            item.enquirydata[0]?.intrestedfor &&
            item.enquirydata[0]?.intrestedfor
              .toLowerCase()
              .includes(searchInterest.toLowerCase())
        );
      }
      if (searchExecutive) {
        results = results.filter(
          (item) =>
            item.enquirydata[0]?.executive &&
            item.enquirydata[0]?.executive.toLowerCase().includes(searchExecutive.toLowerCase())
        );
      }
      if (searchAppoDateTime) {
        results = results.filter(
          (item) =>
            item.appoDate &&
            item.appoDate
              .toLowerCase()
              .includes(searchAppoDateTime.toLowerCase())
        );
      }
      if (searchNote) {
        results = results.filter(
          (item) =>
            item.comment &&
            item.comment.toLowerCase().includes(searchNote.toLowerCase())
        );
      }
      if (searchTechnician) {
        results = results.filter(
          (item) =>
            item.technicianname &&
            item.technicianname
              .toLowerCase()
              .includes(searchTechnician.toLowerCase())
        );
      }
      // results = results.map((item) => ({
      //   ...item,
      //   category: getUniqueCategories()[item.category],
      // }));
      setSearchResults(results);
    };
    filterResults();
  }, [
    searchCatagory,
    searchName,
    searchDateTime,
    searchContact,
    searchAddress,
    searchReference,
    searchCity,
    searchInterest,
    searchExecutive,
    searchAppoDateTime,
    searchNote,
    searchTechnician,
  ]);

  let i = 1;

  return (
    <div className="web">
      <Header />
      <Surveynav />

      <div className="">
        <div className="col-md-12">
          <table className="m-2" striped bordered hover>
            <thead>
              <tr className="tr ">
                <th scope="col">
                  <input className="vhs-table-input" />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <select
                    value={searchCatagory}
                    onChange={(e) => setSearchCatagory(e.target.value)}
                  >
                    <option value="">Select</option>
                    {searchResults.map((e) => (
                      <option value={e.category} key={e.category}>
                        {e.category}{" "}
                      </option>
                    ))}
                  </select>{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input
                    className="vhs-table-input"
                    placeholder="Enq Date Time"
                    value={searchDateTime}
                    onChange={(e) => setSearchDateTime(e.target.value)}
                  />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input
                    placeholder="Name"
                    className="vhs-table-input"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input
                    placeholder="Contact"
                    className="vhs-table-input"
                    value={searchContact}
                    onChange={(e) => setSearchContact(e.target.value)}
                  />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input
                    placeholder="Address"
                    className="vhs-table-input"
                    value={searchAddress}
                    onChange={(e) => setSearchAddress(e.target.value)}
                  />{" "}
                </th>
                <th scope="col">
                  <select
                    value={searchReference}
                    onChange={(e) => setSearchReference(e.target.value)}
                  >
                    <option value="">Select</option>
                    {searchResults.map((e) => (
                      <option value={e.enquirydata[0]?.reference1} key={e.enquirydata[0]?.reference1}>
                        {e.enquirydata[0]?.reference1}{" "}
                      </option>
                    ))}
                  </select>{" "}
                </th>
                <th scope="col">
                  {" "}
                  <select
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                  >
                    <option value="">Select </option>
                    {searchResults.map((e) => (
                      <option value={e.enquirydata[0]?.city} key={e.enquirydata[0]?.city}>
                        {e.enquirydata[0]?.city}{" "}
                      </option>
                    ))}
                  </select>{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input
                    placeholder="Interested For"
                    className="vhs-table-input"
                    value={searchInterest}
                    onChange={(e) => setSearchInterest(e.target.value)}
                  />
                </th>
                <th scope="col">
                  {" "}
                  <input
                    placeholder="Executive"
                    className="vhs-table-input"
                    value={searchExecutive}
                    onChange={(e) => setSearchExecutive(e.target.value)}
                  />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input
                    placeholder="Appo. Date Time"
                    className="vhs-table-input"
                    value={searchAppoDateTime}
                    onChange={(e) => setSearchAppoDateTime(e.target.value)}
                  />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input
                    placeholder="Note"
                    className="vhs-table-input"
                    value={searchNote}
                    onChange={(e) => setSearchNote(e.target.value)}
                  />{" "}
                </th>
                <th scope="col">
                  <select
                    value={searchTechnician}
                    onChange={(e) => setSearchTechnician(e.target.value)}
                  >
                    <option value="">Select </option>
                    {searchResults.map((e) => (
                      <option value={e.technicianname} key={e.technicianname}>
                        {e.technicianname}{" "}
                      </option>
                    ))}
                  </select>{" "}
                </th>
                <th scope="col">
                  {" "}
                  <select
                  // value={filters.Type} onChange={handleInputChange}
                  >
                    <option>Select</option>
                  </select>{" "}
                </th>
                <th scope="col"></th>
                <th scope="col">Action</th>
              </tr>
              <tr className="tr clr" >
                <th>#</th>
                <th>Category</th>
                <th>Enq Date Time</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Reference</th>
                <th>City</th>
                <th>Interested For</th>
                <th>Executive</th>
                <th>Appo. Date Time</th>
                <th>Note</th>
                <th>Technician</th>
                <th>Type</th>
                <th>Reason for cancel</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((item) => (
                <tr className="trnew">
                  <Link
                    to="/surveydetails"
                    state={{ data: item }}
                    style={{
                      display: "contents",
                      border: "1px solid gray ",
                      color: "black",
                    }}
                  >
                    <td>{i++}</td>
                    <td>{item.category}</td>
                    <td>
                      {item.enquirydata[0]?.enquirydate}
                      <br />
                      {item.enquirydata[0]?.time}
                    </td>

                    <td>{item.enquirydata[0]?.name}</td>
                    <td>{item.enquirydata[0]?.contact1}</td>
                    <td>{item.enquirydata[0]?.address}</td>
                    <td>{item.enquirydata[0]?.reference1}</td>
                    <td>{item.enquirydata[0]?.city}</td>
                    <td>{item.enquirydata[0]?.intrestedfor}</td>
                    <td>{item.enquirydata[0]?.executive}</td>
                    <td>{item.appoDate}<br/>{item.appoTime}</td>
                    <td>{item.enquirydata[0]?.comment}</td>
                    <td>{item.technicianname}</td>
                    <td></td>
                    <td>{item.reasonForCancel}</td>
                  </Link>
               
                  <td>
                    {item?.cancelStatus ? (
                      <p style={{ color: "#a9042e" }}>Survey Cancelled</p>
                    ) : (
                      <button
                      
                        onClick={() => openPop(item)}
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Cancel Survey</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <h5 class="vhs-sub-heading mx-3" for="flexCheckDefault">
                Reason for Cancel
              </h5>
              <textarea
                type="text"
                rows={4}
                cols={70}
                onChange={(e) => setreasonforcancel(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="btn btn-danger" onClick={cancelSurvey}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Surveydatatable;
