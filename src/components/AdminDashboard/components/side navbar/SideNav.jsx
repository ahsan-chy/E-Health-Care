import React from 'react'
import { FaColumns, FaCalendarWeek ,  FaUserInjured , FaClock , FaFileInvoice , FaRegStar , FaUsersCog  , FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import "../admindashboard.css"

const SideNav = () => {
  return (
    <div className="nav flex-column nav-pills my-side-nav">
        <div className='side-bar'>
        <ul className="navbar-nav">
            <li>
                <NavLink  className="nav-link" to="admin">
                <FaColumns/> &nbsp; Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="specialities">
                <FaUserInjured/>  &nbsp; Specialities 
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="doctorrecord">
                <FaUsersCog/> &nbsp; Doctor Record
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="patientrecord">
                <FaLock/> &nbsp; Patient Record
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="transaction">
                <FaLock/> &nbsp; Transactions
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