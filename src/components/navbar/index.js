import React from "react";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <img alt="CAMETRONIX" src={logo}></img>
      </div>
      <div className="nav-menu">
        <ul>
          <li>WHO ARE WE</li>
          <li>WHAT WE DO</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
