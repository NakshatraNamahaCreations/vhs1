import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function DSRnav() {
  return (
    <div className="web">
      <div className="navbar">
        <ul className="nav-tab-ul">
          <li>
            <NavLink to="/dsrcategory" activeClassName="active">
              DSR calendar view
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/dsrtoday" activeClassName="active">
              Today
            </NavLink>
          </li>
          <li>
            <NavLink to="/dsrtommorow" activeClassName="active">
              Tomorrow
            </NavLink>
          </li>
          <li>
            <NavLink to="/dsryesterday" activeClassName="active">
              Yesterday
            </NavLink>
          </li>
          <li>
            <NavLink to="/dsrsearch" activeClassName="active">
              Search
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default DSRnav;
