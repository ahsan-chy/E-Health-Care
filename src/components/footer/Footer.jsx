import React from 'react';
import './footer.css'
import { FaAngleRight , FaMapMarkerAlt,FaEnvelope,FaMobileAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
     {/* Footer */}
     <footer className="text-center text-lg-start  text-white footer">
      
        {/* Section: Links  */}
        <section className="py-1">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                
                  <img src='/images/hospitalwhite.png' className='footer-logo'/>                
            
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">For Docters </h6>
                <p>
                  <FaAngleRight/><Link to="/" className="text-reset">Appointments</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="/DrsLogin" className="text-reset">Login</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="/DrsRegistration" className="text-reset">Register</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="/DoctorDashboard/dashboard" className="text-reset">Docter Dashboard</Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  For Patients
                </h6>
                <p>
                  <FaAngleRight/><a href="#!" className="text-reset">Search fo Docters</a>
                </p>
                <p>
                  <FaAngleRight/><a href="#!" className="text-reset">Login</a>
                </p>
                <p>
                  <FaAngleRight/><a href="#!" className="text-reset">Register</a>
                </p>
                <p>
                  <FaAngleRight/><a href="#!" className="text-reset">Patient Dashboard</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p><FaMapMarkerAlt/> &nbsp; Virtual Medical Center Jauharabad</p>
                <p>
                  <FaEnvelope /> &nbsp; 
                  mvirtualhospital@gmail.com
                </p>
                <p><FaMobileAlt/> &nbsp;  + 92 346 567 88</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2022 Copyright: 
          <a className="text-reset fw-bold" href="#!"> E-HealthCare.com</a>
        </div>
        {/* Copyright */}
      </footer>
    </>
  )
}

export default Footer