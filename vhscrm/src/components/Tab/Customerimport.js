import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Customernav from "../Customernav";
import axios from "axios";
import DataTable from "react-data-table-component";
import { CSVLink, CSVDownload } from "react-csv";
import { Button } from "react-bootstrap";

function Customerimport() {
  const [customerdata, setcustomerdata] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    getcustomer();
  }, []);

  const getcustomer = async () => {
    let res = await axios.get(apiURL+"/getcustomer");
    if ((res.status = 200)) {
      setcustomerdata(res.data?.customers);
      console.log(res.data.customers);
    }
  };
  
  const columns = [
    {
      name: "Sl  No",
      cell: (row, i) => <div>{i + 1}</div>,
    },
    {
      name: "Card No",
      selector: (row) => row.cardNo,
    },
    {
      name: "Customer name",
      selector: (row) => row.customerName,
    },
    {
      name: "Contact Person",
      selector: (row) => row.contactPerson,
    },
    {
      name: "Contact",
      selector: (row) => row.mainContact,
    },
    {
      name: "Address",
      cell: (row) => (
        <div>
          <p>{row.rbhf}{row.cnap}{row.lnf}</p>
        </div>
      )
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mainContact,
    },
    {
      name: "Customer type",
      selector: (row) => row.customerType,
    },
  ];
  return (
    <div className="web">
      <Header />
      <Customernav />
      <div className="row m-auto">
        <div className="col-md-12">
          <h6>All Customer Data</h6>
        </div>
        <div className="mt-2">
        <CSVLink data={customerdata}  filename={"customer.csv"}> <Button className="btn btn-secondary">Export</Button></CSVLink>

        </div>
        <div className="mt-1 border">
          <DataTable
            columns={columns}
            data={customerdata}
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

export default Customerimport;
