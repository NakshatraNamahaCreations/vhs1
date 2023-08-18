import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Header() {
  return (
    <div className="row m-auto">
      <Navbar bg="light">
        <Nav className="">
          <Nav.Link href="#home">
            <div>
              <AccountCircleIcon style={{ color: "black" }} />
            </div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
