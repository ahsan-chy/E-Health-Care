import React from "react";
import { Link, NavLink, Outlet, useNavigate, useRouter } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

let mainMenu = {
  fontSize: "16px",
  fontWeight: 500,
};

function Navbar() {
    let navigate = useNavigate();
  return (
    <div>
      {/* Top Bar */}
      <div style={{ backgroundColor: "#0E8A8A" }}>
        <div className="main-nav-sec p-2">
          <div className="main-nav-sec1">
            <FaPhoneAlt className="text-light mx-2" />
            <span className="text-light">
              {" "}
              Contact Number: +923 146 604 298
            </span>
            &nbsp;&nbsp;&nbsp;
            <FaMapMarkerAlt className="text-light mx-2" />
            <span className="text-light">
              {" "}
              Location: 22A, Civil Line Jauharabad{" "}
            </span>
          </div>
          <div className="main-nav-sec2">
            <div className="text-light">
              <span className="mx-3">Follow US: </span>
              <FaInstagram />
              <FaTwitter className="mx-3" />
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <nav className="navbar navbar-expand-md shadow-sm">
        <div className="container-fluid header-bar">
          <Link className="navbar-brand mx-3" to="/">
            <img
              src="/images/hospital.png"
              alt="hospital"
              style={{ width: "120px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu />
          </button>
          <div
            className="collapse navbar-collapse top-nav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link nav-button" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-button" to="/Doctor">
                  Search Doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-button" to="/AboutUs">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-button" to="/ContactUs">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            {localStorage.getItem("isLoggedIn") ? (
              <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {localStorage.getItem("userName")}
              </Dropdown.Toggle>
        
              <Dropdown.Menu>
               <Dropdown.Item href="/PatientDashboard/patient">Profile</Dropdown.Item>
                <Dropdown.Item onClick={()=>{
                    localStorage.clear()
                    navigate("/Doctor", { replace: true })
                }}>LogOut</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ) : (
              <Link
                className=" text-decoration-none"
                to="/PatientsRegistration"
              >
                <button
                  className="btn text-white rounded-pill mx-3 px-3"
                  type="button"
                  style={{ fontSize: "14px", backgroundColor: "#ff9600" }}
                >
                  Login/Signup
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
