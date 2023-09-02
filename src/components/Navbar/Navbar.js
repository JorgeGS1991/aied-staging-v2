import "./Navbar.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../redux/actions/userActions";
import { useState } from "react";
function Navbar({ user, logOut }) {
  const [isActive, setActive] = useState(false);
  const toggleDropdown = () => {
    setActive(!isActive);
  };

  const handleLogout = () => {
    logOut();
  };
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
          <div
            className="navbar-item"
            style={{ borderLeft: " 1px solid #555" }}
          >
            <Link to="/home">Home</Link>
          </div>
          <div className="navbar-item">
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="navbar-item">
            {user ? (
              <>
                <a href="#" onClick={toggleDropdown}>
                  {user}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="0.8em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                </a>
                <div
                  class="dropdown-container"
                  style={{ display: isActive ? "block" : "none" }}
                >
                  <div className="navbar-item-logout">
                    <a className="navbar-logout" onClick={handleLogout}>
                      Logout
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
        {/* <div className="navbar-signin"></div> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { logOut })(Navbar);
