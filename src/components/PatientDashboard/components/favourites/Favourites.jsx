import React from 'react'
import { FaMapMarker} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../patientdashboard.css"

const Favourites = () => {
  return (
    <div class="patients-tab">
              <div class="row row-grid">
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                      <div class="card-body">
                        <div class="pro-widget-content">
                          <div class="profile-info-widget">
                            <a href="patient-profile.html" class="booking-doc-img">
                              <img src="/images/d2.png" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Dr. Umer</h3>
                              <div class="patient-details">
                                <h5>  Child Specilist</h5>
                                <h5 class="mb-0"><FaMapMarker/> Civil Line, Jauharabad</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            
                            <li>Experience<span>7 Years  </span></li>
                            <li>Fee<span>1500</span></li>
                          </ul>
                        </div>
                        <div className='main-btn'>
                            <button type="button" className="btn book-btn">
                                <Link to ={"/Doctor"} className='btn-link'>{" "}Book Appointent{" "}</Link>
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                      <div class="card-body">
                        <div class="pro-widget-content">
                          <div class="profile-info-widget">
                            <a href="patient-profile.html" class="booking-doc-img">  
                            <img src="/images/d1.png" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Dr. Fahd Aziz</h3>
                              <div class="patient-details">
                                <h5>  Gastroenterologist </h5>
                                <h5 class="mb-0"><FaMapMarker/> Civil Line, Jauharabad</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            
                            <li>Experience<span>16 Years  </span></li>
                            <li>Fee<span>1500</span></li>
                          </ul>
                        </div>
                        <div className='main-btn'>
                            <button type="button" className="btn book-btn">
                                <Link to ={"/Doctor"} className='btn-link'>{" "}Book Appointent{" "}</Link>
                            </button>
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
                            <img src="/images/d4.png" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Dr. Sadia Ahmad</h3>
                              <div class="patient-details">
                                <h5>  Gynecologist </h5>
                                <h5 class="mb-0"><FaMapMarker/> Civil Line, Jauharabad</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            
                            <li>Experience<span>18 Years  </span></li>
                            <li>Fee<span>1500</span></li>
                          </ul>
                        </div>
                        <div className='main-btn'>
                            <button type="button" className="btn book-btn">
                                <Link to ={"/Doctor"} className='btn-link'>{" "}Book Appointent{" "}</Link>
                            </button>
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
                            <img src="/images/d8.png" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Dr. Fawad Ahmed</h3>
                              <div class="patient-details">
                                <h5>  Child Specilist</h5>
                                <h5 class="mb-0"><FaMapMarker/> Civil Line, Jauharabad</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            
                            <li>Experience<span>4 Years  </span></li>
                            <li>Fee<span>1500</span></li>
                          </ul>
                        </div>
                        <div className='main-btn'>
                            <button type="button" className="btn book-btn">
                                <Link to ={"/Doctor"} className='btn-link'>{" "}Book Appointent{" "}</Link>
                            </button>
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
                            <img src="/images/d6.png" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Dr. Sania Ashraf</h3>
                              <div class="patient-details">
                                <h5>  Neurologist </h5>
                                <h5 class="mb-0"><FaMapMarker/> Civil Line, Jauharabad</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            
                            <li>Experience<span>10 Years  </span></li>
                            <li>Fee<span>1500</span></li>
                          </ul>
                        </div>
                        <div className='main-btn'>
                            <button type="button" className="btn book-btn">
                                <Link to ={"/Doctor"} className='btn-link'>{" "}Book Appointent{" "}</Link>
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Favourites