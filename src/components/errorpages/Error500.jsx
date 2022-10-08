import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegFileCode } from "react-icons/fa";
import "./error.css"

const Error500 = () => {
  return (
    <div className='error-box'>
      <h1>500</h1>
      <h3 className='mb-3'> <FaRegFileCode className='warning-icon'/> Internal Server Error</h3>
      <p className='font-fontWeight-normal'>Please Check Server and Reload the page</p>
      <NavLink to="/">
        <button className='filled-btn'>Back to Home</button>
      </NavLink>
    </div>
  )
}

export default Error500