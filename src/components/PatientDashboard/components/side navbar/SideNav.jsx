import React from 'react'
import { FaColumns, FaCalendarWeek ,  FaUserInjured , FaClock , FaFileInvoice , FaRegStar , FaUsersCog  , FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import "../patientdashboard.css"

const SideNav = () => {
  return (
    <div className="nav flex-column nav-pills my-side-nav">
        <div className='side-bar'>
        <ul className="navbar-nav">
            <li>
                <NavLink  className="nav-link" to="patient">
                <FaColumns/> &nbsp; Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="favourites">
                <FaUserInjured/>  &nbsp; Favourites  
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="patientprofileedit">
                <FaUsersCog/> &nbsp; Profile Settings
                </NavLink>
            </li>
            <li>
                <NavLink  className="nav-link" to="patientchangepassword">
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