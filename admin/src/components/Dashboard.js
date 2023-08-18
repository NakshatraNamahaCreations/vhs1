import React, { useState, PureComponent } from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import Chart from "react-apexcharts";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { CreateToggle } from "./TogglerProvider";

function Dashboard() {
  const { light } = useContext(CreateToggle);
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];
  const [state, setState] = useState({
    options: {
      colors: ["#8cd68cd1", "#ffc0cb"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Aprl",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        // name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 101, 111, 121, 131],
      },
      {
        // name: "People Died",
        data: [3, 60, 35, 80, 49, 70, 20, 81, 91, 101, 111, 121],
      },
    ],
  });
  return (
    <div className={light ? "row black container_box" : "row "}>
      <div className="col-md-2 ">
        <Sidenav />
      </div>
      <div className="col-md-10 ">
        <Header />

        <div className="row m-auto  mt-3" style={{ marginLeft: "-72px" }}>
          <div className="col-md-3">
            <div className="card home-col shadow p-3 mb-5  rounded">
              <div className="card-body">
                <div className="home-content">Customer</div>
                <div className="home-desc">1800</div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card home-col shadow p-3 mb-5  rounded">
              <div className="card-body">
                <div className="home-content">Services</div>
                <div className="home-desc">500</div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card home-col shadow p-3 mb-5  rounded">
              <div className="card-body">
                <div className="home-content">Vendor</div>
                <div className="home-desc">700</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="card home-col shadow p-3 mb-5  rounded">
              <div className="card-body">
                <div className="home-content">Earnings</div>
                <div className="home-desc">2500</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-auto pt-5">
          <div className="col-md-12">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
