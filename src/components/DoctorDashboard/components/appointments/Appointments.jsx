import React from 'react'
import {FaEnvelope  , FaPhoneAlt , FaClock , FaEye , FaCheck , FaTimes ,FaMapMarker} from 'react-icons/fa';
import "../docterdashboard.css"

const Appointments = () => {
  return (
    <div class="appoint-tab">
      <div class="appointments">
          <div class="appointment-list">
            <div class="profile-info-widget">
              <a href="#/" class="booking-doc-img">
                <img src="/images/p3.jpg" alt="User Image" />
              </a>
              <div class="profile-det-info">
                <h3><a href="#/">Ahmed But</a></h3>
                <div class="patient-details">
                  <h5><FaClock/> 17 Sep 2022, 10.00 AM</h5>
                  <h5><FaEnvelope/> wwe4809226@gmail.com</h5>
                </div>
              </div>
            </div>
            <div class="appointment-action">
              <a href="#" class="btn btn-sm bg-info-light" data-bs-toggle="modal" data-bs-target="#appt_details">
              <FaEye/>  View
              </a>
              <a href="#/" class="btn btn-sm bg-success-light">
              <FaCheck/> Accept
              </a>
              <a href="#/" class="btn btn-sm bg-danger-light">
              <FaTimes/>Cancel
              </a>
            </div>
          </div>
          <div class="appointment-list">
            <div class="profile-info-widget">
              <a href="#/" class="booking-doc-img">
                <img src="/images/p5.jpg" alt="User Image" />
              </a>
              <div class="profile-det-info">
                <h3><a href="#/">Aftab</a></h3>
                <div class="patient-details">
                  <h5><FaClock/> 17 Sep 2022, 10.00 AM</h5>
                  <h5><FaEnvelope/> wwe4809226@gmail.com</h5>
                </div>
              </div>
            </div>
            <div class="appointment-action">
              <a href="#" class="btn btn-sm bg-info-light" data-bs-toggle="modal" data-bs-target="#appt_details">
              <FaEye/>  View
              </a>
              <a href="#/" class="btn btn-sm bg-success-light">
              <FaCheck/> Accept
              </a>
              <a href="#/" class="btn btn-sm bg-danger-light">
              <FaTimes/>Cancel
              </a>
            </div>
          </div>
          <div class="appointment-list">
            <div class="profile-info-widget">
              <a href="#/" class="booking-doc-img">
                <img src="/images/p4.jpg" alt="User Image" />
              </a>
              <div class="profile-det-info">
                <h3><a href="#/">Faizan</a></h3>
                <div class="patient-details">
                  <h5><FaClock/> 17 Sep 2022, 10.00 AM</h5>
                  <h5><FaEnvelope/> wwe4809226@gmail.com</h5>
                </div>
              </div>
            </div>
            <div class="appointment-action">
              <a href="#" class="btn btn-sm bg-info-light" data-bs-toggle="modal" data-bs-target="#appt_details">
              <FaEye/>  View
              </a>
              <a href="#/" class="btn btn-sm bg-success-light">
              <FaCheck/> Accept
              </a>
              <a href="#/" class="btn btn-sm bg-danger-light">
              <FaTimes/>Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Appointments