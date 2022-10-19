import React from 'react'
import { FaMapMarker} from 'react-icons/fa';
import "../docterdashboard.css"

const MyPatients = () => {
  return (
    <div class="patients-tab">
              <div class="row row-grid">
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                      <div class="card-body">
                        <div class="pro-widget-content">
                          <div class="profile-info-widget">
                            <a href="#/" class="booking-doc-img">
                              <img src="/images/T5.png" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3><a href="#/">Ayesa</a></h3>
                              <div class="patient-details">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Email <span>ayesha@gmail.com</span></li>
                            <li>Age <span>38 Years, FeMale</span></li>
                            <li>Blood Group <span>AB+</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                      <div class="card-body">
                        <div class="pro-widget-content">
                          <div class="profile-info-widget">
                            <a href="#" class="booking-doc-img">
                            <img src="/images/patient4.jpg" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Hafsa Mubeen</h3>
                              <div class="patient-details">
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Email <span>Hafsa@gmail.com</span></li>
                            <li>Age <span>28 Years, FeMale</span></li>
                            <li>Blood Group <span>A+</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                      <div class="card-body">
                        <div class="pro-widget-content">
                          <div class="profile-info-widget">
                            <a href="#" class="booking-doc-img">
                            <img src="/images/patient3.jpg" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Qurban Ijaz</h3>
                              <div class="patient-details">
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Email <span>Qurban@gmail.com</span></li>
                            <li>Age <span>19 Years, Male</span></li>
                            <li>Blood Group <span>B+</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                      <div class="card-body">
                        <div class="pro-widget-content">
                          <div class="profile-info-widget">
                            <a href="#" class="booking-doc-img">
                            <img src="/images/patient5.jpg" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Mahtab</h3>
                              <div class="patient-details">
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Email <span>Mahtab</span></li>
                            <li>Age <span>19 Years, Male</span></li>
                            <li>Blood Group <span>A-</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default MyPatients