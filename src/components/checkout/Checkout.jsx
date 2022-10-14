import React from 'react'
import './checkout.css'
import { FaStar } from "react-icons/fa";
function Checkout() {
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="info-widget"><h4 className="card-title">Personal Information</h4>
                                            <div className="row"><div className="col-md-6 col-sm-12"><div className="form-group card-label">
                                                <label>First Name</label><input className="form-control" type="text" /></div></div>
                                                <div className="col-md-6 col-sm-12"><div className="form-group card-label">
                                                    <label>Last Name</label><input className="form-control" type="text" />
                                                </div></div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group card-label"><label>Email</label>
                                                        <input className="form-control" type="email" /></div></div>
                                                <div className="col-md-6 col-sm-12"><div className="form-group card-label"><label>Phone</label>
                                                    <input className="form-control" type="text" /></div></div></div><div className="exist-customer">
                                                Existing Customer?<a href="/template-psychiatrist/patient/checkout">Click here to login</a></div></div>
                                        <div className="submit-section mt-4">
                                            <button type="submit" className="btn btn-primary submit-btn">
                                                Confirm and Pay</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4 theiaStickySidebar"><div className="card booking-card">
                            <div className="card-header"><h4 className="card-title">Booking Summary</h4></div><div className="card-body">
                                <div className="booking-doc-info"><a className="booking-doc-img" href="/template-psychiatrist/patient/doctor-profile">
                                    <img src="" alt="User" /></a><div className="booking-info"><h4>
                                        <a href="/template-psychiatrist/patient/doctor-profile">Dr. Darren Elder</a>
                                    </h4><div className="rating">
                                            <FaStar className="filled" />
                                            <FaStar className="filled" />
                                            <FaStar className="filled" />
                                            <FaStar className="filled" />
                                            <FaStar className="filled" /><span className="d-inline-block average-rating">35</span></div><div className="clinic-details">
                                            <p className="doc-location"><i className="fas fa-map-marker-alt"></i> Newyork, USA</p></div></div>

                                </div><div className="booking-summary"><div className="booking-item-wrap"><ul className="booking-date">
                                    <li>Date <span>16 Nov 2019</span></li><li>Time <span>10:00 AM</span></li></ul><ul className="booking-fee">
                                        <li>Consulting Fee <span>$100</span></li><li>Booking Fee <span>$10</span></li><li>Video Call
                                            <span>$50</span></li></ul><div className="booking-total"><ul className="booking-total-list"><li><span>Total</span>
                                                <span className="total-cost">$160</span></li></ul></div></div></div></div></div></div></div></div>
            </div>

        </div>

    )
}

export default Checkout
