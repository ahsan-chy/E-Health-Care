import React from 'react'
import './success.css'
import { FaStar , FaCheck } from "react-icons/fa";

function Success() {
  return (
    <div>
    <div className="content success-page-cont">
    <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="col-lg-6"><div className="card success-card">
    <div className="card-body"><div className="success-cont">
    <FaCheck className="i"/><h3>Appointment booked Successfully!</h3>
    <p>Appointment booked with <strong>Dr. Darren Elder</strong>
    <br/> on <strong>12 Nov 2019 5:00PM to 6:00PM</strong></p>
    <a className="btn btn-primary view-inv-btn" href="/template-psychiatrist/pages/invoice-view">
    View Invoice</a>
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
