import React from 'react'
import { FaColumns, FaCalendarWeek ,  FaUserInjured , FaClock , FaFileInvoice , FaRegStar , FaUsersCog  , FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import "../docterdashboard.css"

const SideNav = () => {
  return (
    <div className="nav flex-column nav-pills my-side-nav">
        <div className='side-bar'>
        <ul className="navbar-nav">
            <li>
                <NavLink  className="nav-link" to="dashboard">
                <FaColumns/> &nbsp; Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="appointments">
                <FaCalendarWeek/> &nbsp; Appointments
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="mypatients">
                <FaUserInjured/>  &nbsp; My Patients  
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="schedulemeeting">
                <FaClock/> &nbsp; Schedule Timings
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="invoice">
                <FaFileInvoice/> &nbsp; Invoices
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="reviews">
                <FaRegStar/> &nbsp; Reviews
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="profileediting">
                <FaUsersCog/> &nbsp; Profile Settings
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="changepassword">
                <FaLock/> &nbsp; Change Password
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="/Doctor">
                <FaLock/> &nbsp; Logout
                </NavLink>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default SideNav