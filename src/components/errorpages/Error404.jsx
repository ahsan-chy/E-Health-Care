import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaExclamationTriangle } from "react-icons/fa";
import "./error.css"

const Error404 = () => {
  return (
    <div className='error-box'>
      <h1>404</h1>
      <h3 className='mb-3'> <FaExclamationTriangle className='warning-icon'/> Oops! Page not found!</h3>
      <p className='font-fontWeight-normal'>The page you requested was not found.</p>
      <NavLink to="/">
        <button className='filled-btn'>Back to Home</button>
      </NavLink>
    </div>
  )
}

export default Error404