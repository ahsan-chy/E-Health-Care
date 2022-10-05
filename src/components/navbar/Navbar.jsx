import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './navbar.css';
import { useState } from 'react';

let mainMenu ={
    fontSize: '16px',
    fontWeight: 500,
}

function Navbar() {
    const [toogleState, setToogleState] = useState(1)

  return (
    <div>
        {/* Top Bar */}
      <div style={{backgroundColor:'#0E8A8A'}}>
        <div className='main-nav-sec p-2'>
            <div className='main-nav-sec1'>
                <FaPhoneAlt className='text-light mx-2'/> 
                <span className='text-light'> Contact Number: +923 068 952 339</span>&nbsp;&nbsp;&nbsp;
                <FaMapMarkerAlt className='text-light mx-2'/>
                <span className='text-light'> Location: 22A, Civil Line Jauharabad </span>
            </div>
            <div className='main-nav-sec2'>
                <div className="text-light">
                    <span className='mx-3'>Follow US: </span>
                   <FaInstagram />
                   <FaTwitter  className='mx-3'/>
                   <FaFacebook />
                </div>
            </div>
        </div>
      </div>

       {/* Main Menu */}
        <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
            <div className="container-fluid">

                <Link className="navbar-brand mx-3" to="/">
                    <img src="/images/hospital.png" alt="hospital" style={{width:'120px'}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse top-nav" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <Link className={ toogleState===1 ? "nav-link text-success active": "nav-link"} onClick={()=>setToogleState(1)} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={ toogleState===2 ? "nav-link text-success active": "nav-link"} onClick={()=>setToogleState(2)} to="/Doctor">Search Doctors</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" style={mainMenu} to="/DrProfile">Doctor Profile</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className={ toogleState===3 ? "nav-link text-success active": "nav-link"} onClick={()=>setToogleState(3)}  to="/AboutUs">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={ toogleState===4 ? "nav-link text-success active": "nav-link"} onClick={()=>setToogleState(4)}  to="/ContactUs">Contact Us</Link>
                    </li>
                </ul>
                    
                <Link className=" text-decoration-none" to="/PatientsRegistration">
                    <button className="btn text-white rounded-pill mx-3 px-3" type="button" style={{fontSize:'14px', backgroundColor:'#ff9600'}}>
                    Login/Signup</button>
                </Link>
                
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar