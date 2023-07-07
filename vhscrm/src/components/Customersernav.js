import React from "react";
import { NavLink } from "react-router-dom";

function Customersernav({customer}) {
 console.log("customer=======",customer)
  return (
    <div className="web">
      <div className="navbar">
        <ul className="nav-tab-ul">
        <li>
            <NavLink to="/customeradd" activeClassName="active">
              Customeradd
            </NavLink>
          </li>
          <li>
            <NavLink to="/customersearchdetails" activeClassName="active">
              Treatment
            </NavLink>
          </li>
          <li>
            <NavLink to="/painting" activeClassName="active" >
              Painting
            </NavLink>
          </li>
          <li>
            <NavLink to="/payment" activeClassName="active">
              Payment
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" activeClassName="active">
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/cservices" activeClassName="active">
              Services
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Customersernav;
