import "./Navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";
import { useState } from "react";
function Navbar() {
  const [sideMenuActive, setSideMenuActive] = useState(false);
  const [rightNavbarShow, setRightNavbarShow] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuActive(!sideMenuActive);
    setRightNavbarShow(false);
    console.log(sideMenuActive);
  };

  const closeSideMenu = () => {
    setSideMenuActive(false);
  };

  const toggleRightNavbar = () => {
    setRightNavbarShow(!rightNavbarShow);
  };

  return (
    <header class="cursor-light">
      <nav class="navbar navbar-top-default left-logo navbar-expand-lg navbar-simple navbar-dark nav-box-round">
        <div class="container">
          <a href="javascript:void(0)" title="Logo" class="logo scroll"></a>

          <div class="collapse navbar-collapse" id="wexim">
            <div class="navbar-nav w-100 alt-font">
              <a
                class="nav-link scroll"
                href="index.html#home"
                style={{ paddingLeft: "35px", paddingRight: "35px" }}
              >
                <font color="#004867">Home</font>
              </a>
              <a
                class="nav-link scroll"
                href="people.html"
                style={{ paddingRight: "35px" }}
              >
                <font color="#004867">People</font>
              </a>
              <a
                class="nav-link scroll"
                href="research.html"
                style={{ paddingRight: "35px" }}
              >
                <font color="#004867">Research</font>
              </a>
              <a
                class="nav-link scroll"
                href="resources.html"
                style={{ paddingRight: "35px" }}
              >
                <font color="#004867">Resources</font>
              </a>
              <a
                class="nav-link scroll"
                href="outreach.html"
                style={{ paddingRight: "35px" }}
              >
                <font color="#004867">Outreach</font>
              </a>
              <a class="nav-link scroll" href="announcements.html">
                <font color="#ef4523">Announcements</font>
              </a>
              <span class="menu-line">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <a
            className="d-inline-block sidemenu_btn"
            id="sidemenu_toggle"
            onClick={toggleSideMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </nav>
      {sideMenuActive && (
        <div class="side-menu">
          <div class="inner-wrapper">
            <span class="btn-close link" id="btn_sideNavClose"></span>
            <nav class="side-nav w-100">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link link scroll" href="index.html#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link scroll" href="people.html">
                    People
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link scroll" href="research.html">
                    Research
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link " href="resources.html">
                    Resources
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link" href="outreach.html">
                    Outreach
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link" href="announcements.html">
                    Announcements
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
      <a id="close_side_menu" href="javascript:void(0);"></a>
    </header>
  );
}

export default Navbar;
