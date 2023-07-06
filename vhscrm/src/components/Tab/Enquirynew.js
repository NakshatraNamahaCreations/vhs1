import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Enquirynav from "../Enquirynav";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Enquirynew(props) {
  const navigate=useNavigate();
  const [enquiryadddata, setenquiryadddata] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;
  const [searchCatagory, setSearchCatagory] = useState("");
  const [searchDateTime, setSearchDateTime] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchContact, setSearchContact] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const [searchReference, setSearchReference] = useState("");
  const [searchReference2, setSearchReference2] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchInterest, setSearchInterest] = useState("");
  const [searchExecutive, setSearchExecutive] = useState("");
  const [searchAppoDateTime, setSearchAppoDateTime] = useState("");
  const [searchNote, setSearchNote] = useState("");
  const [searchTechnician, setSearchTechnician] = useState("");
  const [SearchTime, setSearchTime] = useState("")

  useEffect(() => {
    getenquiryadd();

  }, []);

  const getenquiryadd = async () => {
    let res = await axios.get(apiURL + "/getenquiry");
    if ((res.status = 200)) {
      setenquiryadddata(res.data?.enquiryadd);
      setSearchResults(res.data?.enquiryadd);
    }
  };


  let i = 1;

  const enquirydetail=(data)=>{
    console.log(data.EnquiryId);
    navigate(`/enquirydetail/${data.EnquiryId}`)
  }

  useEffect(() => {
    const filterResults = () => {
      let results = enquiryadddata;
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
            (item.enquirydate &&
              item.enquirydate
                .toLowerCase()
                .includes(searchDateTime.toLowerCase())) 
        );
      }
      if (SearchTime) {
        results = results.filter(
          (item) =>
            (item.time &&
              item.time
                .toLowerCase()
                .includes(SearchTime.toLowerCase())) 
        );
      }
      if (searchName) {
        results = results.filter(
          (item) =>
            item.name &&
            item.name.toLowerCase().includes(searchName.toLowerCase())
        );
      }
      if (searchContact) {
        results = results.filter(
          (item) =>
            item.contact1 &&
            item.contact1.toLowerCase().includes(searchContact.toLowerCase())
        );
      }
      if (searchAddress) {
        results = results.filter(
          (item) =>
            item.address &&
            item.address.toLowerCase().includes(searchAddress.toLowerCase())
        );
      }
      if (searchReference) {
        results = results.filter(
          (item) =>
            item.reference1 &&
            item.reference1
              .toLowerCase()
              .includes(searchReference.toLowerCase())
        );
      } //
      if (searchReference2) {
        results = results.filter(
          (item) =>
            item.reference2 &&
            item.reference2
              .toLowerCase()
              .includes(searchReference2.toLowerCase())
        );
      } //
      if (searchCity) {
        results = results.filter(
          (item) =>
            item.city &&
            item.city.toLowerCase().includes(searchCity.toLowerCase())
        );
      }
      if (searchInterest) {
        results = results.filter(
          (item) =>
            item.intrestedfor &&
            item.intrestedfor
              .toLowerCase()
              .includes(searchInterest.toLowerCase())
        );
      }
      if (searchExecutive) {
        results = results.filter(
          (item) =>
            item.executive &&
            item.executive.toLowerCase().includes(searchExecutive.toLowerCase())
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
  return (
    <div className="web">
      <Header />
      <Enquirynav />

  
      <div className="row m-auto">
        <div className="col-md-12">
          <Table striped bordered hover>
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
                    placeholder="Enq Date "
                    value={searchDateTime}
                    onChange={(e) => setSearchDateTime(e.target.value)}
                  />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <input
                    className="vhs-table-input"
                    placeholder="Enq Time"
                    value={SearchTime}
                    onChange={(e) => setSearchTime(e.target.value)}
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
                <input
                    placeholder="Reference"
                    className="vhs-table-input"
                    value={searchReference}
                    onChange={(e) => setSearchReference(e.target.value)}
                  />{" "}
                 
                </th>
                <th scope="col">
                <input
                    placeholder="Reference"
                    className="vhs-table-input"
                    value={searchReference2}
                    onChange={(e) => setSearchReference2(e.target.value)}
                  />{" "}
                </th>
                <th scope="col">
                  {" "}
                  <select
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                  >
                    <option value="">Select </option>
                    {searchResults.map((e) => (
                      <option value={e.city} key={e.city}>
                        {e.city}{" "}
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
                

              </tr>
              <tr className="tr clr">
                <th>#</th>
                <th>Category</th>
                <th>Date</th>
                <th>Time</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Reference1</th>
                <th>Reference2</th>
        
                <th>City</th>

                <th>Interested for</th>
                <th>Executive</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((item) => (
                <a
                 onClick={()=>enquirydetail(item)}
                 className="tbl"
                >
                  <tr className="trnew" key={searchResults["id"]}>
                    <td>{i++}</td>
                    <td>{item.category}</td>
                    <td>{item.enquirydate}</td>
                    <td>{item.time}</td>
                    <td>{item.name}</td>
                    <td>{item.contact1}</td>
                    <td>{item.address}</td>
                    <td>{item.reference1}</td>
                    <td>{item.reference2}</td>
           
                    <td>{item.city}</td>
                    <td>{item.intrestedfor}</td>
                    <td>{item.executive}</td>
                  </tr>
                </a>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Enquirynew;
