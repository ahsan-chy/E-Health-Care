import React from 'react'
import {FaEnvelope  , FaPhoneAlt , FaClock , FaEye , FaCheck , FaTimes ,FaMapMarker} from 'react-icons/fa';
import "../docterdashboard.css"

const Appointments = () => {
  return (
    <div class="appoint-tab">
      <div class="appointments">
          <div class="appointment-list">
            <div class="profile-info-widget">
              <a href="patient-profile.html" class="booking-doc-img">
                <img src="/images/patient5.jpg" alt="User Image" />
              </a>
              <div class="profile-det-info">
                <h3><a href="patient-profile.html">Nicolas Flowers</a></h3>
                <div class="patient-details">
                  <h5><FaClock/> 14 Nov 2020, 10.00 AM</h5>
                  <h5><FaMapMarker/> Newyork, United States</h5>
                  <h5><FaEnvelope/> richard@example.com</h5>
                  <h5 class="mb-0"><FaPhoneAlt/> +1 923 782 4575</h5>
                </div>
              </div>
            </div>
            <div class="appointment-action">
              <a href="#" class="btn btn-sm bg-info-light" data-bs-toggle="modal" data-bs-target="#appt_details">
              <FaEye/>  View
              </a>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
              <FaCheck/> Accept
              </a>
              <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
              <FaTimes/>Cancel
              </a>
            </div>
          </div>
          <div class="appointment-list">
            <div class="profile-info-widget">
              <a href="patient-profile.html" class="booking-doc-img">
                <img src="/images/patient5.jpg" alt="User Image" />
              </a>
              <div class="profile-det-info">
                <h3><a href="patient-profile.html">Nicolas Flowers</a></h3>
                <div class="patient-details">
                  <h5><FaClock/> 14 Nov 2020, 10.00 AM</h5>
                  <h5><FaMapMarker/> Newyork, United States</h5>
                  <h5><FaEnvelope/> richard@example.com</h5>
                  <h5 class="mb-0"><FaPhoneAlt/> +1 923 782 4575</h5>
                </div>
              </div>
            </div>
            <div class="appointment-action">
              <a href="#" class="btn btn-sm bg-info-light" data-bs-toggle="modal" data-bs-target="#appt_details">
              <FaEye/>  View
              </a>
              <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
              <FaCheck/> Accept
              </a>
              <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
              <FaTimes/>Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Appointments