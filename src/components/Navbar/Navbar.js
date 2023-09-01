import "./Navbar.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../css/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-section">
      <div className="navbar-nav">
        <div className="navbar-item navbar-logo">
          <img
            className="uno-logo"
            src="https://www.unomaha.edu/university-communications/downloadables/campus-icon-the-o/uno-icon-color.png"
            width="100"
            height="100"
            alt="uno logo"
          />
        </div>
        <div className="navbar-items">
          <div className="navbar-item">
            <Link to="/home">Home</Link>
          </div>
          <div className="navbar-item">
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
        {/* <div className="navbar-signin"></div> */}
      </div>
    </div>
  );
}

export default Navbar;
