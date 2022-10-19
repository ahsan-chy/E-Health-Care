import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'


const HealthCare = () => {
  return (
    <div className='mb-4 text-white health-sec'>
        <div className="row py-4 find-section">
            <div className="col-md-9 card-section">
                <div className="row ps-5">
                    <div className="col-md-2 ps-5">
                        <img src="/images/24-hours-supports.png" alt=""  style={{width:'80px'}}/>
                    </div>
                    <div className="col-md-10 ps-0">
                        <h2>Health Care Center</h2>
                        <p>If you have any Emergency by health problem contact Us Instanly</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 py-3 ps-5 card-section">
                <button className="btn">
                    <Link className="find-btn" to="/ContactUs">Contact Us</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HealthCare