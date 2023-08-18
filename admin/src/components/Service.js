import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import Button from "react-bootstrap/Button";

import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import DataTable from "react-data-table-component";


import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Services() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(false);
  const [categorydata, setcategorydata] = useState([]);
  const [Servicedata, setServicedata] = useState([]);
  const [postservicename, setpostservicename] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const [ServiceImg, setServiceImg] = useState("");
  const [Category, setCategory] = useState("");
  const [ServiceHour, setServiceHour] = useState("");
  const [ServiceName, setServiceName] = useState("");
  const [ServiceDesc, setServiceDesc] = useState("");
  const [ServicePrice, setServicePrice] = useState("");
  const [ServiceGst, setServiceGst] = useState("");
  const [NofServiceman, setNofServiceman] = useState("");
  const [Image, setImage] = useState("")
  const [search, setsearch] = useState("");
  const formdata = new FormData();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setServiceImg(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };

  const handleactive1 = () => {
    setSelected(true);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [toggle, setToggel] = useState(true);
  const [toggle1, setToggel1] = useState(false);
  const handelgeneralbtn = () => {
    setToggel1(true);
  };
  const handeladvancebtn = () => {
    setToggel1(false);
  };
  const handelsavebtn = () => {
    setToggel(true);
  };
  const handelAddbtn = () => {
    setToggel(false);
  };

  useEffect(() => {
    getcategory();
  }, []);

  const getcategory = async () => {
    let res = await axios.get("http://api.vijayhomeservicebengaluru.in/api/getcategory");
    if ((res.status = 200)) {
      setcategorydata(res.data?.category);
    }
  };
  console.log(Category);
  useEffect(() => {
    getsubcategory();
  }, [Category]);

  const getsubcategory = async () => {
    let res = await axios.post(`http://api.vijayhomeservicebengaluru.in/api/postsubcategory/`, {
      category: Category,
    });
    console.log(Category);
    if ((res.status = 200)) {
      setpostservicename(res.data?.subcategory);
      console.log("service", res.data?.subcategory);
    }
  };

  const postformat = async (e) => {
    if (
      !ServiceImg ||
      !ServiceName ||
      !Category ||
      !ServiceDesc ||
      !ServicePrice
    ) {
      alert("Please fill all mandatory fields");
    } else {
      e.preventDefault();
      formdata.append("serviceImg", Image);
      formdata.append("serviceCategory", Category);
      formdata.append("serviceName", ServiceName);
      formdata.append("servicePrice", ServicePrice);
      // formdata.append("serviceQty", ServiceQty);
      formdata.append("serviceHour", ServiceHour);
      formdata.append("serviceDesc", ServiceDesc);
      formdata.append("serviceGst", ServiceGst);
      formdata.append("NofServiceman", NofServiceman);

      try {
        const config = {
          url: "/userapp/addservices",
          method: "post",
          baseURL: "http://api.vijayhomeservicebengaluru.in/api",
          data: formdata,
        };
        await axios(config).then(function (response) {
          if (response.status === 200) {
            alert("Successfully Added");
            window.location.assign("/Service");
          }
        });
      } catch (error) {
        console.error(error);
        alert("category  Not Added");
      }
    }
  };

  useEffect(() => {
    getservicemanagement();
  }, []);

  const getservicemanagement = async () => {
    let res = await axios.get("http://api.vijayhomeservicebengaluru.in/api/userapp/getservices");
    if ((res.status = 200)) {
      setServicedata(res.data?.service);
      setfilterdata(res.data?.service);
      console.log(res.data?.service);
    }
  };
  const deletecategory = async (id) => {
    axios({
      method: "post",
      url: "http://api.vijayhomeservicebengaluru.in/api/userapp/deleteservices/" + id,
    })
      .then(function (response) {
        //handle success
        console.log(response);
        alert("Deleted successfully");
        window.location.reload();
      })
      .catch(function (error) {
        //handle error
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    const result = categorydata.filter((item) => {
      return item.category.toLowerCase().match(search.toLowerCase());
    });
    setfilterdata(result);
  }, [search]);

  const columns = [
    {
      name: "Sl  No",
      selector: (row,index) => index+1,
    },
    {
      name: "Category",
      selector: (row) => row.serviceCategory,
    },
    {
      name: "Service Name",
      selector: (row) => row.serviceName,
    },
    {
      name: "Service Price",
      selector: (row) => row.servicePrice,
    },
    {
      name: "Service Desc",
      selector: (row) => row.serviceDesc,
    },
    {
      name: "Service Hours",
      selector: (row) => row.serviceHour,
    },
    {
        name: "Action",
        cell: (row) => (
          <div>
         <img src={`http://api.vijayhomeservicebengaluru.in/service/${row.serviceImg}`} width="50px" height="50px"/>
           
          </div>
        ),
      },
    {
      name: "Action",
      cell: (row) => (
        <div>
        
          <a onClick={() => deletecategory(row._id)} className="hyperlink mx-1">
            Delete
          </a>
        </div>
      ),
    },
  ];
  return (
    <div div className="row">
      <div className="col-md-2">
        <Sidenav />
      </div>
      <div className="col-md-10 ">
        <Header />

        {toggle ? (
          <div className="row ">
            <div className="col-md-12">
              <h4 style={{ color: "#a33535" }}>Service Management</h4>
            </div>
           

            <div className="col-md-12">
              <div className="d-flex float-end mt-3 mb-3">
                {/* <Button variant="light" onClick={handleShow}>
                  <i
                    style={{
                      marginRight: "5px",
                      width: "80px",
                      color: "skyblue",
                      fontSize: "20px",
                    }}
                    class="fa-solid fa-filter"
                  ></i>
                </Button> */}

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Offcanvas.Title>Price</Offcanvas.Title>
                    <ul>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">All deals</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">Under ₹500 </a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">₹500 to ₹1,000</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">₹1,000 to ₹2,000</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">₹2,000 to ₹5,000</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">₹5,000 and Above</a>
                      </li>
                    </ul>
                    <Offcanvas.Title>Discount</Offcanvas.Title>
                    <ul>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">All deals</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">10% off or more</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">₹25% off or more</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">50% off or more</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">70% off or more</a>
                      </li>
                    </ul>
                    <Offcanvas.Title>Maximum hour </Offcanvas.Title>
                    <ul>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">All deals</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#"> 4-9 </a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">7-10</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">7-10</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">7-10</a>
                      </li>
                      <li
                        className={selected ? "hyperlink" : "hyperlink active1"}
                      >
                        {" "}
                        <a href="#">7-10</a>
                      </li>
                    </ul>
                  </Offcanvas.Body>

                  <Button
                    variant="danger"
                    style={{
                      width: "200px",
                      fontSize: "15px",
                      textAlign: "center",
                    }}
                  >
                    Filter Apply
                  </Button>
                </Offcanvas>
                <Button
                  type="button"
                  variant="danger"
                  className="btn btn-secondary float-end"
                  onClick={handelAddbtn}
                >
                  <i class="fa-regular fa-plus"></i>
                  Add Service
                </Button>
              </div>

              <div className="mt-5">
            <input
              type="text"
              placeholder="Search here.."
              className="w-25 form-control"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
          <div className="mt-1 border">
            <DataTable
              columns={columns}
              data={filterdata}
              pagination
              fixedHeader
              selectableRowsHighlight
              subHeaderAlign="left"
              highlightOnHover
            />
          </div>
            </div>
          </div>
        ) : (
          <div className="row w-100 float-center card mt-4">
            <h3>Add Service</h3>
            <div className="row m-auto card-body p-6">
              <div className="col-md-3">
                <Card
                  style={{
                    width: "",
                    height: "",
                    padding: "15px",
                    margin: "15px",
                  }}
                >
                  <Card.Title>
                    Service Icon <span className="text-danger"> *</span>
                  </Card.Title>
                  <InputGroup className="mb-3">
                    <Form.Control
                      height={"500px"}
                      type="file"
                      aria-label="Username"
                      onChange={onImageChange}
                    />
                  </InputGroup>
                  <img alt="preview image" src={ServiceImg} />
                  <Card.Body>
                    <Card.Text>
                      <p style={{ fontSize: "12px" }}>
                        {" "}
                        Preferred images size must be less than 5MB
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "",

                    padding: "15px",
                    margin: "15px",
                  }}
                >
                  <Card.Title>Service details</Card.Title>
                  <Form.Label>
                    Service category <span className="text-danger"> *</span>
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <Form.Select
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>---Select Category---</option>
                      {categorydata.map((item) => (
                        <option value={item.category}>{item.category}</option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                  {/* <div style={{ color: "#FF0060", textAlign: "end" }}>
                    <i class="fa-regular fa-plus"></i>
                    create category
                  </div> */}
                  <Form.Label>Service duration</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      aria-label="max_hrbook"
                      aria-describedby="basic-addon1"
                      type="number"
                      placeholder="3-5hr"
                      onChange={(e) => setServiceHour(e.target.value)}
                    ></Form.Control>
                  </InputGroup>
                  <Form.Label>Number of Servicemen </Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      aria-label="maxhr"
                      aria-describedby="basic-addon1"
                      type="number"
                      placeholder="15"
                      onChange={(e) => setNofServiceman(e.target.value)}
                    ></Form.Control>
                  </InputGroup>
                </Card>
              </div>
              <div className="col-md-9 shadow p-3 mb-5 bg-body rounded">
                <div className="d-flex ">
                  <p
                    className={!toggle1 ? "gr mr" : "mr"}
                    onClick={handeladvancebtn}
                  >
                    {" "}
                    General
                  </p>
                  {/* <p
                    className={toggle1 ? "gr mr" : "mr"}
                    onClick={handelAddbtn}
                  >
                    Advanced
                  </p> */}
                </div>

                {toggle1 ? (
                  <div>
                    <Form>
                      <h2> Addon's</h2>
                      <Row className="mb-3">
                        <Form.Label>Addons UST</Form.Label>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Control
                            placeholder="Please enter  service name"
                            name="firstname"
                          />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Control
                            placeholder="Please enter the  price"
                            name="lastname"
                          />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Control
                            placeholder="Please enter the maximum hr"
                            name="lastname"
                          />
                        </Form.Group>
                      </Row>
                      <Button
                        variant="light"
                        className="mb-3"
                        style={{ color: "skyblue" }}
                      >
                        {" "}
                        <i
                          class="fa-regular fa-plus"
                          style={{ color: "skyblue" }}
                        ></i>
                        Add Addon's
                      </Button>{" "}
                    </Form>
                  </div>
                ) : (
                  <div>
                    <Form>
                      <h1>Service Information</h1>
                      <Row className="mb-3">
                        {" "}
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>
                            Service Name <span className="text-danger"> *</span>
                          </Form.Label>
                          <InputGroup className="mb-2">
                            <Form.Select
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              onChange={(e) => setServiceName(e.target.value)}
                            >
                              <option>---Select Category---</option>
                              {postservicename.map((item) => (
                                <option value={item.subcategory}>
                                  {item.subcategory}
                                </option>
                              ))}
                            </Form.Select>
                          </InputGroup>
                        </Form.Group>
                      </Row>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>
                          Service Description{" "}
                          <span className="text-danger"> *</span>
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          onChange={(e) => setServiceDesc(e.target.value)}
                        />
                      </Form.Group>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>
                            Service Price{" "}
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="Price"
                            onChange={(e) => setServicePrice(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>GST Percentage</Form.Label>
                          <Form.Control
                            type="text"
                            name=""
                            onChange={(e) => setServiceGst(e.target.value)}
                          />
                        </Form.Group>
                      </Row>
                    </Form>
                  </div>
                )}

                <Button type="button" variant="outline-primary">
                  Cancel
                </Button>

                <Button
                  type="button"
                  variant="danger"
                  className="btn btn-secondary float-end"
                  onClick={postformat}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
