import React,{useState,useEffect} from "react";
import Header from "../layout/Header";
import B2Bnav from "../B2Bnav";
import axios from "axios";
import DataTable from "react-data-table-component";
import { CSVLink, CSVDownload } from "react-csv";
import { Button } from "react-bootstrap";

function Importexport() {
  const [b2bdata, setb2bdata] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getb2b();
  }, []);

  const getb2b = async () => {
    let res = await axios.get(apiURL+"/getB2B");
    if ((res.status = 200)) {
      setb2bdata(res.data?.B2B);

    }
  };
  
  const columns = [
    {
      name: "Sl  No",
      selector: (row, index) => index + 1,
    },
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
    <div className="web">
      <Header />
      <B2Bnav />

      <div className="row m-auto">
        <div className="col-md-12">
          <h6>All B2B Data</h6>
        </div>
        <div className="mt-2">
        <CSVLink data={b2bdata}  filename={"B2b.csv"}> <Button className="btn btn-secondary">Export</Button></CSVLink>

        </div>
        <div className="mt-1 border">
          <DataTable
            columns={columns}
            data={b2bdata}
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

export default Importexport;
