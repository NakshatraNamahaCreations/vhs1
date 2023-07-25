import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Card } from "react-bootstrap";
import * as XLSX from "xlsx";

function Report_RunningProjects() {
  const apiURL = process.env.REACT_APP_API_URL;
  const [runningProjectData, setRunningProject] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [daysToComplete, setDaysToComplete] = useState("");
  const [executive, setExecutive] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [closeWindow, setCloseWindow] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [worker, setWorker] = useState("");

  const getRunningProject = async () => {
    let res = await axios.get(apiURL + "/getrunningdata");
    if (res.status === 200) {
      const data = res.data?.runningdata;
      console.log("RunningProjects", data);
      setRunningProject(data);
      setFilteredData(data);
    }
  };

  useEffect(() => {
    getRunningProject();
  }, []);

  const handleSearch = () => {
    setFilteredData(runningProjectData);
    setSearchValue("");
    setShowMessage(true);
    const filteredResults = runningProjectData.filter((item) => {
      const itemType =
        item.enquirydata?.[0]?.intrestedfor
          ?.toLowerCase()
          .includes(type.toLowerCase()) ?? true;

      const itemCity =
        item.customer[0]?.city?.toLowerCase().includes(city.toLowerCase()) ??
        true;

      const itemExcuitive =
        item.customer[0]?.serviceExecute
          ?.toLowerCase()
          .includes(executive.toLowerCase()) ?? true;

      const itemFromDate =
        item.date?.toLowerCase().includes(fromDate.toLowerCase()) ?? true;

      const itemToDate =
        item.date?.toLowerCase().includes(toDate.toLowerCase()) ?? true;

      const itemProjectManager =
        item.dsrdata[0]?.techName
          ?.toLowerCase()
          .includes(projectManager.toLowerCase()) ?? true;

      const itemDaysToComplete =
        item.dsrdata[0]?.daytoComplete
          ?.toLowerCase()
          .includes(daysToComplete.toLowerCase()) ?? true;

      const itemWorker =
        item.dsrdata[0]?.workerName
          ?.toLowerCase()
          .includes(worker.toLowerCase()) ?? true;
      return (
        itemProjectManager &&
        itemDaysToComplete &&
        itemFromDate &&
        itemToDate &&
        itemExcuitive &&
        itemCity &&
        itemType &&
        itemWorker
      );
    });
    setFilteredData(filteredResults);
    setSearchValue(
      type ||
        city ||
        executive ||
        fromDate ||
        toDate ||
        projectManager ||
        daysToComplete ||
        worker
    );
    setShowMessage(false);
  };

  const handleSearchClick = () => {
    handleSearch();
    setButtonClicked(true);
  };

  const exportData = () => {
    const fileName = "dsr_data.xlsx";
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Category Data");
    XLSX.writeFile(workbook, fileName);
  };

  const columns = [
    {
      name: "Sl  No",
      selector: (row, index) => index + 1,
    },
    {
      name: "Cr.Date",
      selector: (row) => (row.date ? row.date : "-"),
    },
    {
      name: "Project Manager",
      selector: (row) =>
        row.dsrdata[0]?.techName ? row.dsrdata[0]?.techName : "-",
    },
    {
      name: "Sales Executive",
      selector: (row) =>
        row.customer[0]?.serviceExecute ? row.customer[0]?.serviceExecute : "-",
    },
    {
      name: "Customer",
      selector: (row, index) =>
        row.customer[0]?.customerName ? row.customer[0]?.customerName : "-",
    },
    {
      name: "Contact",
      selector: (row) =>
        row.customer[0]?.mainContact ? row.customer[0]?.mainContact : "-",
    },
    {
      name: "Address",
      selector: (row) => (
        <>
          {row.customer[0]?.rbhf ? row.customer[0]?.rbhf : "-"},
          {row.customer[0]?.lnf ? row.customer[0]?.lnf : "-"},
          {row.customer[0]?.cnap ? row.customer[0]?.cnap : "-"} -
          {row.customer[0]?.pinCode ? row.customer[0]?.pinCode : "-"}
        </>
      ),
    },
    {
      name: "City",
      selector: (row) => (row.customer[0]?.city ? row.customer[0]?.city : "-"),
    },
    {
      name: "Quote No",
      selector: (row) =>
        // row.enquirydata[0]?.intrestedfor
        //   ? row.enquirydata[0]?.intrestedfor
        //   :
        "-",
    },
    {
      name: "Project Type",
      selector: (row) => (row.service ? row.service : "-"),
    },
    {
      name: "Day To Complete",
      selector: (row) =>
        row.dsrdata[0]?.daytoComplete ? row.dsrdata[0]?.daytoComplete : "-",
    },
    {
      name: "Worker",
      selector: (row) =>
        row.dsrdata[0]?.workerName ? row.dsrdata[0]?.workerName : "-",
    },
    {
      name: "Vendor Payment	",
      selector: (row) =>
        row.paymentData[0]?.amount ? row.paymentData[0]?.amount : "-",
    },
    {
      name: "Charges",
      selector: (row) =>
        row.dsrdata[0]?.workerAmount ? row.dsrdata[0]?.workerAmount : "-",
    },

    {
      name: "Quote Value",
      selector: (row) => (row.serviceCharge ? row.serviceCharge : "-"),
    },
    {
      name: "Payment",
      selector: (row) => "0.00",
    },
    {
      name: "TYPE",
      selector: (row) => "RUNNING PROJECTS",
    },
    // {
    //   name: "Deep Clean Details",
    //   selector: (row) => "-",
    // },
  ];

  return (
    <div style={{ backgroundColor: "#f9f6f6" }} className="web">
      <div>
        <Header />
      </div>
      <div className="p-5 border">
        {closeWindow && (
          <>
            <Card className="p-2">
              <div
                className="pt-2 pe-3"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <i
                  class="fa-solid fa-circle-xmark report-font-hover"
                  title="Close"
                  style={{ color: "#bdbdbd", fontSize: "27px" }}
                  onClick={() => setCloseWindow(!closeWindow)}
                ></i>
              </div>
              <div className="p-4 row">
                <div className="col-md-1"></div>
                <div className="col-md-6">
                  <p>
                    <b>Running Project Report &gt; Filter</b>{" "}
                  </p>
                  <div className="row">
                    <div className="col-md-4">From Date</div>
                    <div className="col-md-1 ms-4">:</div>
                    <div className="col-md-5 ms-4">
                      <input
                        className="report-select"
                        onChange={(e) => setFromDate(e.target.value)}
                        type="date"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-4">Days To Complete</div>
                    <div className="col-md-1 ms-4">:</div>
                    <div className="col-md-5 ms-4">
                      <input
                        className="report-select"
                        onChange={(e) => setDaysToComplete(e.target.value)}
                        type="date"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-4">Project Manager </div>
                    <div className="col-md-1 ms-4">:</div>
                    <div className="col-md-5 ms-4">
                      <select
                        className="report-select"
                        onClick={(e) => setProjectManager(e.target.value)}
                      >
                        <option>Select</option>
                        {runningProjectData.map((item) => (
                          <option>{item.dsrdata[0]?.techName}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-4">TYPE </div>
                    <div className="col-md-1 ms-4">:</div>
                    <div className="col-md-5 ms-4">
                      <select
                        className="report-select"
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option>Select</option>

                        <option>RUNNING PROJECTS</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  {/* <div className="row">
                    <div className="col-md-4"> Interested For </div>
                    <div className="col-md-1 ms-4">:</div>
                    <div className="col-md-5 ms-4">
                      <textarea
                        className="report-select"
                        onChange={(e) => setType(e.target.value)}
                      />
                    </div>
                  </div> */}
                  <br />
                </div>
                <div className="col-md-5">
                  <br />
                  <div className="row"></div>
                  <div className="row mt-3">
                    <div className="col-md-4"> To Date</div>
                    <div className="col-md-1 ms-4">:</div>
                    <div className="col-md-5 ms-4">
                      <input
                        className="report-select"
                        onChange={(e) => setToDate(e.target.value)}
                        type="date"
                      />
                    </div>
                  </div>
                  <br />
                  {/* <div className="row">
                    <div className="col-md-4 ">Status </div>
                    <div className="col-md-1 ms-4">:</div>
                    <div className="col-md-5 ms-4">
                      <select
                        className="report-select"
                        onClick={(e) => setResponse(e.target.value)}
                      >
                        <option>All</option>
                        {runningProjectData.map((item) => (
                          <option>{item.response}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <br /> */}
                  <div className="row">
                    <div className="col-md-4">City </div>
                    <div className="col-md-1 ms-4">:</div>
                    <div className="col-md-5 ms-4">
                      <select
                        className="report-select"
                        onClick={(e) => setCity(e.target.value)}
                      >
                        <option>Select</option>
                        {runningProjectData.map((item) => (
                          <option>{item.customer[0]?.city}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-4">Sales Executive </div>
                    <div className="col-md-1 ms-4">:</div>
                    <div className="col-md-5 ms-4">
                      <select
                        className="report-select"
                        onClick={(e) => setExecutive(e.target.value)}
                      >
                        <option>Select</option>
                        {runningProjectData.map((item) => (
                          <option>{item.customer[0]?.serviceExecute}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-4"> Worker</div>
                    <div className="col-md-1 ms-4">:</div>
                    <div className="col-md-5 ms-4">
                      <textarea
                        className="report-select"
                        onChange={(e) => setWorker(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                </div>
                <p style={{ justifyContent: "center", display: "flex" }}>
                  <button
                    className="ps-3 pt-2 pb-2 pe-3"
                    style={{
                      border: 0,
                      color: "white",
                      backgroundColor: "#a9042e",
                      borderRadius: "5px",
                    }}
                    // onClick={() => {
                    //   filterData();
                    //   setButtonClicked(true);
                    // }}
                    onClick={handleSearchClick}
                  >
                    Show
                  </button>
                  {"   "}
                  <button
                    className="ps-3 pt-2 pb-2 pe-3 ms-2"
                    style={{
                      border: 0,
                      color: "white",
                      backgroundColor: "#a9042e",
                      borderRadius: "5px",
                    }}
                    onClick={exportData}
                  >
                    <i
                      class="fa-solid fa-download"
                      title="Download"
                      // style={{ color: "white", fontSize: "27px" }}
                    ></i>{" "}
                    Export
                  </button>
                </p>
                <p>
                  {showMessage && buttonClicked && (
                    <div
                      style={{
                        textAlign: "center",
                        marginBottom: "10px",
                        color: "#a9042e",
                      }}
                    >
                      Please enter a category to search!
                    </div>
                  )}
                </p>
              </div>
            </Card>
            <br />
          </>
        )}
        <div>
          <div
            className="p-2"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "white",
            }}
          >
            <div className="ms-3">
              <i
                class="fa-solid fa-print report-font-hover"
                title="Print"
                style={{ color: "#bdbdbd", fontSize: "27px" }}
                onClick={() => window.print()}
              ></i>
            </div>{" "}
            <div className="ms-3">
              <i
                class="fa-solid fa-house report-font-hover"
                title="Home"
                style={{ color: "#bdbdbd", fontSize: "27px" }}
                onClick={() => window.location.assign("/home")}
              ></i>
            </div>{" "}
            <div className="ms-3">
              <i
                class="fa-solid fa-rotate-right report-font-hover"
                title="Reload"
                style={{ color: "#bdbdbd", fontSize: "27px" }}
                onClick={() => window.location.reload()}
              ></i>
            </div>
          </div>
          <br />
        </div>
        <div>
          <Card
            className="ps-3 p-2"
            style={{ color: "white", backgroundColor: "#a9042e" }}
          >
            <h5>
              Vijay Home Services | Running Project Report {`, ${searchValue}`}
            </h5>
          </Card>
        </div>{" "}
        <br />
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          fixedHeader
          selectableRowsHighlight
          subHeaderAlign="left"
          highlightOnHover
        />
      </div>
    </div>
  );
}

export default Report_RunningProjects;