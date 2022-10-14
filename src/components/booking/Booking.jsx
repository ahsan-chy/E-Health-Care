import React from 'react'
import './booking.css'
import { FaStar } from "react-icons/fa";
const Booking = () => {
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="booking-doc-info">
                                        <a className="booking-doc-img" href="/template-psychiatrist/patient/doctor-profile">
                                            <img src="/18c43c9107e6f300c0d1b242191cd72f.jpg" alt="User" />
                                        </a>
                                        <div className="booking-info"><h4><a href="/template-psychiatrist/patient/doctor-profile">
                                            Dr. Darren Elder</a></h4><div className="rating">
                                                <FaStar className= "filled"/>
                                                <FaStar className= "filled"/>
                                                <FaStar className= "filled"/>
                                                <FaStar className= "filled"/>
                                                <FaStar className= "filled"/>
                                                <FaStar/>
                                                <span className="d-inline-block average-rating">
                                                    35</span></div><p className="text-muted mb-0">
                                                <i className="fas fa-map-marker-alt">
                                                </i> Newyork, USA</p>
                                        </div></div></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-4 col-md-6">
                                    <h4 className="mb-1">11 November 2019
                                    </h4>
                                    <p className="text-muted">Monday</p>
                                </div>
                                <div className="col-12 col-sm-8 col-md-6 text-sm-right">
                                    <div className="datepicker-icon"><i className="far fa-calendar-alt mr-2">
                                    </i>
                                        <input className="form-control col-4 input-range" type="text" custom="input-range" />
                                        <i className="fas fa-chevron-down ml-2"></i></div></div></div>
                            <div className="card booking-schedule schedule-widget"><div className="schedule-header">
                                <div className="row"><div className="col-md-12"><div className="day-slot">
                                    <ul><li className="left-arrow">
                                        <a href="/template-psychiatrist/patient/booking#0">
                                            <i className="fa fa-chevron-left"></i></a></li><li><span>Mon</span>
                                            <span className="slot-date">11 Nov <small className="slot-year">2019</small>
                                            </span></li><li><span>Tue</span><span className="slot-date">12 Nov
                                                <small className="slot-year">2019</small></span></li><li><span>Wed</span>
                                            <span className="slot-date">13 Nov <small className="slot-year">2019</small>
                                            </span></li><li><span>Thu</span><span className="slot-date">14 Nov
                                                <small className="slot-year">2019</small></span></li><li><span>Fri</span>
                                            <span className="slot-date">15 Nov <small className="slot-year">2019</small>
                                            </span></li><li><span>Sat</span><span className="slot-date">16 Nov
                                                <small className="slot-year">2019</small></span></li><li><span>Sun</span>
                                            <span className="slot-date">17 Nov <small className="slot-year">2019</small></span>
                                        </li><li className="right-arrow"><a href="/template-psychiatrist/patient/booking#0">
                                            <i className="fa fa-chevron-right"></i></a></li></ul></div></div></div></div>
                                <div className="schedule-cont"><div className="row"><div className="col-md-12">
                                    <div className="time-slot"><ul className="clearfix"><li>
                                        <a className="timing" href="/template-psychiatrist/patient/booking#0">
                                            <span>9:00</span> <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0">
                                            <span>10:00</span> <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0">
                                            <span>11:00</span> <span>AM</span></a></li><li><a className="timing" href="/template-psychiatrist/patient/booking#0">
                                            <span>9:00</span> <span>AM</span></a>
                                            <a className="timing" href="/template-psychiatrist/patient/booking#0"><span>10:00</span> <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>11:00</span> <span>AM</span></a></li><li><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>9:00</span> 
                                            <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>10:00</span>
                                             <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>11:00</span> 
                                             <span>AM</span></a></li><li><a className="timing" href="/template-psychiatrist/patient/booking#0">
                                             <span>9:00</span> <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0"
                                             ><span>10:00</span> <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0">
                                             <span>11:00</span> <span>AM</span></a></li><li><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>9:00</span> <span>AM</span></a><a className="timing selected" href="/template-psychiatrist/patient/booking#0"><span>10:00</span> <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>11:00</span> <span>AM</span></a></li><li><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>9:00</span> <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>10:00</span> <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>11:00</span> <span>AM</span></a></li><li><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>9:00</span> <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>10:00</span> <span>AM</span></a><a className="timing" href="/template-psychiatrist/patient/booking#0"><span>11:00</span> <span>AM</span></a></li></ul></div>
                                             </div></div></div></div><div></div>
                                             <div className="submit-section proceed-btn text-right">
                                             <a className="btn btn-primary submit-btn" href="/template-psychiatrist/patient/checkout">Proceed to Pay</a></div>
                                             </div></div></div></div>
        </div>
    )
}

export default Booking
