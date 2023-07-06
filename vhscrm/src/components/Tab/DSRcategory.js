import { Scheduler } from "@aldabil/react-scheduler";
import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import DSRnav from "../DSRnav";
import axios from "axios";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function DSRcategory() {
  const [servicedata, setservicedata] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;
  const [categorydata, setcategorydata] = useState([]);
  const [category, setcategory] = useState([]);
  const localizer = momentLocalizer(moment);
  const navigate = useNavigate();
 
  const [dsrdata, setdsrdata] = useState([]);
  const [dsrnewdata, setdsrnewdata] = useState([]);


  useEffect(() => {
    getcategory();
    getAlldsr();
  }, []);


  const getAlldsr = async () => {
    let res = await axios.get(apiURL + "/getalldsrlist");
    if (res.status === 200) {
      setdsrdata(res.data.addcall);
   
    }
  };

  useEffect(() => {
    postAllJobs();
  }, [category]);

  const postAllJobs = async () => {
    try {
      const res = await axios.post(apiURL + "/postdsrcategory", {
        category: category,
      });

      if (res.status === 200) {
        console.log("servicedata", res);
        setdsrnewdata(res.data?.addcall);
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const getcategory = async () => {
    let res = await axios.get(apiURL + "/getcategory");
    if (res.status === 200) {
      console.log("catagory", res);
      setcategorydata(res.data?.category);
    }
  };

 

  const eventCounts = dsrnewdata.reduce((counts, item) => {
    const date = item.appoDate;
    counts[date] = (counts[date] || 0) + 1;
    return counts;
  }, {});

  const myEventsList = Object.keys(eventCounts).map((date) => ({
    title: `${eventCounts[date]} DSR`,
    start: new Date(date),
    end: new Date(date),
    count: eventCounts[date],
  }));

  const handleSelectEvent = (event) => {
    const selectedDate = moment(event.start).format("YYYY-MM-DD");
    const selectedData = dsrdata.filter(
      (item) => item.appoDate === selectedDate
    );
    console.log("selectedDatainDSRCatagory", selectedData); // Add this line to check the value
    navigate(`/dsrcallist/${selectedDate}/${category}`, {
      state: { data: selectedData },
    });
  };

  function calculateTotalCount(array) {
    let totalCount = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i].hasOwnProperty("appoDate")) {
        totalCount++;
      }
    }

    return totalCount;
  }
  const totalCount = calculateTotalCount(dsrdata);

  console.log("totalCount===", totalCount);
console.log("category",category);
  return (
    <div className="web">
      <Header />
      {/* <DSRnav /> */}

      <div className="row m-auto">
        <div className="col-md-12">
          <div className="card" style={{ marginTop: "30px" }}>
            <div className="card-body p-3">
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <div className="vhs-input-label">Category</div>
                    <div className="group pt-1">
                      <select
                        className="col-md-12 vhs-input-value"
                        onChange={(e) => setcategory(e.target.value)}
                      >
                        <option>-select-</option>
                        {categorydata.map((item) => (
                          <option value={item.category}>{item.category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div style={{ width: "94%", margin: "3%" }}>
            <Calendar
              localizer={localizer}
              events={myEventsList}
              startAccessor="start"
              endAccessor="end"
              selectable
              onSelectEvent={handleSelectEvent}
              style={{ height: 500 }}
            />
            <br />
            <div
              style={{
                backgroundColor: "rgb(169, 4, 46)",
                textAlign: "center",
              }}
            >
              <p class="header-text">DSR - {totalCount} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DSRcategory;
