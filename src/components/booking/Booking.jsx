import React from 'react'
import './booking.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import DateTimePick from '../dateTimePicker/DateTimePick';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
const Booking = () => {
    return (
        <div className='row'>
            <div className="ps-3 col-md-7" >
              <div className="container my-5 w-75 border rounded-3 shadow-sm p-3">
                <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col"> 
                        <h6 style={{color:"#0E8A8A"}}><FaMapMarkerAlt/> &nbsp;Available Hours</h6>
                    </th>
                    <th scope="col">08:00 AM</th>
                    <th scope="col">10:00 PM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Monday</th>
                    <td>08:00 AM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Tuesday</th>
                    <td>08:00 AM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Wednesday</th>
                    <td>08:00 AM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Thursday</th>
                    <td>08:00 AM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Friday</th>
                    <td>08:00 AM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Saturday</th>
                    <td>08:00 AM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Sunday</th>
                    <td>-------</td>
                    <td>-------</td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>
            <div className='col-md-5 text-center my-5'>
            <h6 style={{color:"#0E8A8A", marginBottom:"40px", fontSize:"1.5rem"}}> &nbsp;Pick Date and Time</h6>
                <DateTimePick/>
                <button className='btn book-card' >
                <Link className="confirm-book" type='submit' to="/success">
                    Confirm Appointment
                </Link>
                </button>
            </div>
    </div>
    )
}

export default Booking
