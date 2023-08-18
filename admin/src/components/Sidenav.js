import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebar,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <ProSidebar>
      <div className="row justify-content-center mt-2">
        <img
          src="/images/vhs.png"
          className="img-fluid"
          style={{ width: "80px" }}
        />
        <h6
          className="text-center pt-1"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Vijay Home Services
        </h6>
      </div>
      <Menu iconShape="square">
        <MenuItem>
          {/* <i className="fa-solid fa-gauge"></i> */}
          Dashboard <Link to="/home" />
        </MenuItem>
         <MenuItem>
          {/* <i className="fa-solid fa-gauge"></i> */}
          Banner <Link to="/banner" />
        </MenuItem>
        <MenuItem>
          {/* <i class="fa-solid fa-users"></i> */}
          User Management <Link to="/userManagement" />
        </MenuItem>
        <MenuItem>
          {/* <i class="fa-solid fa-users"></i> */}
          Category <Link to="/category" />
        </MenuItem>
        <MenuItem>
          Services<Link to="/subcategory" />
          </MenuItem>
        <MenuItem>
          {/* <i class="fa-solid fa-wrench"></i>  */}
          Services Management <Link to="/Service" />
        </MenuItem>
        {/* <span> <i class="fa-solid fa-book"></i></span> */}
        {/* <SubMenu title="Services Booking"> */}
          <MenuItem>
          Services Booking<Link to="/ServiceBooking" />
          </MenuItem>
        
          {/* <MenuItem>
            Subcategory <Link to="/SSubcategory" />
          </MenuItem> */}
        {/* </SubMenu> */}
        {/* <SubMenu title="Create Management">
          <MenuItem>
            Category <Link to="/Createcategory" />
          </MenuItem>
          <MenuItem>
            Subcategory <Link to="/CreateSubcategory" />
          </MenuItem>
        </SubMenu> */}
        <MenuItem>
          Voucher and Discount <Link to="/voucher" />
        </MenuItem>
        <MenuItem>
          Payments and Reports
          <Link to="/Paymentsreports" />
        </MenuItem>
        <MenuItem>
          Review Management <Link to="/review" />{" "}
        </MenuItem>
        {/* <MenuItem>
          Content <Link to="/content" />
        </MenuItem> */}
        <MenuItem>
          Vendors use Management <Link to="/vendor" />
        </MenuItem>
        <MenuItem>
          wallet <Link to="/Wallets" />{" "}
        </MenuItem>
        <MenuItem>
          Settings <Link to="/settings" />{" "}
        </MenuItem>
        <MenuItem>
          Logout
          <Link to="/" />
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Sidenav;
