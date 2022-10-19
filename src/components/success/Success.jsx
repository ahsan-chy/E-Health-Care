import React from 'react'
import './success.css'
import { FaStar , FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className='mt-5'>
    <div className="content success-page-cont">
    <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="col-lg-6"><div className="card success-card">
    <div className="card-body"><div className="success-cont">
    <FaCheck className="i"/><h3>Appointment booked Successfully!</h3>
    <p>Appointment booked with <strong>Dr. Sadia Ahmad</strong>
    <br/> at <strong>17 Nov 2022 12:00PM </strong></p>
    <Link className="btn btn-primary view-inv-btn" to="/PatientDashboard/favourites">
    Back to Profile</Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Success
