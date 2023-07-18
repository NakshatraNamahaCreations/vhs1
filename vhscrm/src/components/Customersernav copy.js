// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";

// function Customersernav() {

//   return (
//     <div className="web">
//       <div className="navbar">
//         <ul className="nav-tab-ul">
//         <li>
//             <NavLink to="/customeradd" activeClassName="active" > 
//               Customeradd
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/customersearchdetails" activeClassName="active">
//               Treatment
//             </NavLink>
//           </li>
//           <li>
//             <NavLink  activeClassName="active" >
//               Painting
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/payment" activeClassName="active">
//               Payment
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/work" activeClassName="active">
//               Work
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/cservices" activeClassName="active">
//               Services
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Customersernav;
import React from "react";
import { NavLink, useLocation, Routes, Route } from "react-router-dom";

import CustomerAdd from "../components/Tab/Customeradd";
import CustomerSearchDetails from "../components/Customersearchdetails";
import Painting from "./Painting";
import Payment from "./Payment";
import Work from "./Work";
// import CServices from "./CServices";

function Customersernav(props) {
  const data = props.data;
  // const location = useLocation();
  // const { data } = location.state;

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
            <NavLink to="/painting" activeClassName="active">
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
          {/* <li>
            <NavLink to="/cservices" activeClassName="active">
              Services
            </NavLink>
          </li> */}
        </ul>
      </div>
      {/* Routes component */}
      <Routes>
        <Route path="/customeradd" element={<CustomerAdd data={data} />} />
        <Route
          path="/customersearchdetails"
          element={<CustomerSearchDetails data={data} />}
        />
        <Route path="/painting" element={<Painting data={data} />} />
        <Route path="/payment" element={<Payment data={data} />} />
        {/* <Route path="/cservices" element={<CServices data={data} />} /> */}
      </Routes>
    </div>
  );
}

export default Customersernav;

