import React from 'react';
import "./docterdashboard.css";
import { FaColumns,FaRegThumbsUp, FaRegThumbsDown, FaCalendarWeek , FaEnvelope  , FaReply , FaPhoneAlt , FaPrint , FaStar , FaUserInjured , FaRegEdit , FaClock , FaFileInvoice , FaPlusCircle , FaRegStar , FaUsersCog , FaShareAlt , FaLock , FaSignOutAlt , FaEye , FaCheck , FaTimes ,FaMapMarker} from 'react-icons/fa';

const DoctorDashboard = () => {
  return (
    <div>
      <div className='row mx-4 my-3'>
          <p>Home <span style={{color:"#ff9600"}}>/ Doctor Dashboard</span> </p>
          <h4 className='text-secondary'>Dashboard</h4>
        </div>
      <div className='container-fluid py-2'>
        <div className='row'>
          <div className='col-md-3 px-1'>
          <div className='profile-sidebar'>
          <div class="widget-profile pro-widget-content">
          <div class="profile-info-widget">
          <a href="#" class="booking-doc-img">
          <img src="/images/doctor-thumb.jpg" alt="User Image"/>
          </a>
          <div class="profile-det-info">
          <h3>Dr. Mary Nielson</h3>
          <div class="patient-details">
          <h5 class="mb-0">D.N.B. (Psychiatry)</h5>
          </div>
          </div>
          </div>
          </div>
          <div class="d-flex align-items-start">
            <div class="nav flex-column nav-pills my-side-nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                <FaColumns/> &nbsp; Dashboard</button>
              <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
               <FaCalendarWeek/> &nbsp; Appointments</button>
              <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
              <FaUserInjured/>  &nbsp; My Patients  </button>
              <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
              <FaClock/> &nbsp; Schedule Timings</button>
              <button class="nav-link" id="v-pills-invoice-tab" data-bs-toggle="pill" data-bs-target="#v-pills-invoice" type="button" role="tab" aria-controls="v-pills-invoice" aria-selected="false">
              <FaFileInvoice/> &nbsp; Invoices</button>
              <button class="nav-link" id="v-pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#v-pills-reviews" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">
              <FaRegStar/> &nbsp; Reviews</button>
              <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <FaUsersCog/> &nbsp; Profile Settings</button>
              <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <FaShareAlt/> &nbsp; Social Media</button>
              <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <FaLock/> &nbsp; Change Password</button>
              <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <FaSignOutAlt/> &nbsp; Logout</button>

            </div>
          </div>
          </div>
          </div>
          <div className='col-md-9 px-3'>
          <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <div class="card dash-card progres-bats">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-4 pe-3">
                        <div class="dash-widget dct-border-rht">
                          <div class="circle-bar circle-bar1">
                            <div class="circle-graph1" >
                            <img src='/images/total-patient.png'></img>
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Total Patient</h6>
                            <h3>1500</h3>
                            <p class="text-muted">Till Today</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 col-lg-4 pe-3">
                        <div class="dash-widget dct-border-rht">
                          <div class="circle-bar circle-bar2">
                          <div class="circle-graph1" >
                            <img src='/images/total-patient.png'></img>
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Today Patient</h6>
                            <h3>160</h3>
                            <p class="text-muted">06, Nov 2020</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 col-lg-4">
                        <div class="dash-widget">
                          <div class="circle-bar circle-bar3">
                          <div class="circle-graph1" >
                            <img src='/images/total-patient.png'></img>
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Appoinments</h6>
                            <h3>85</h3>
                            <p class="text-muted">06, Apr 2020</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-12">
                    <h4 class="mb-4">Patient Appoinments</h4>
                    <div class="appointment-tab">

                      <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                        <li class="nav-item">
                          <a class="nav-link active" href="#upcoming-appointments" data-bs-toggle="tab">Upcoming</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#today-appointments" data-bs-toggle="tab">Today</a>
                        </li>
                      </ul>

                      <div class="tab-content">

                        <div class="tab-pane show active" id="upcoming-appointments">
                          <div class="card card-table mb-0">
                            <div class="card-body">
                              <div class="table-responsive">
                                <table class="table table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Patient Name</th>
                                      <th>Appt Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th class="text-center">Paid Amount</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 class="table-avatar">
                                          <a href="patient-profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" /></a>
                                          <a href="patient-profile.html">Nicolas Flowers <span>#PT0016</span></a>
                                        </h2>
                                      </td>
                                      <td>11 Nov 2020 <span class="d-block text-info">10.00 AM</span></td>
                                      <td>General</td>
                                      <td>New Patient</td>
                                      <td class="text-center">$150</td>
                                      <td class="text-end">
                                        <div class="table-action">
                                          <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                            <FaEye/> View
                                          </a>
                                          <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                           <FaCheck/> Accept
                                          </a>
                                          <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                            <FaTimes/> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 class="table-avatar">
                                          <a href="patient-profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" /></a>
                                          <a href="patient-profile.html">Julio Hart <span>#PT0001</span></a>
                                        </h2>
                                      </td>
                                      <td>3 Nov 2020 <span class="d-block text-info">11.00 AM</span></td>
                                      <td>General</td>
                                      <td>Old Patient</td>
                                      <td class="text-center">$200</td>
                                      <td class="text-end">
                                        <div class="table-action">
                                          <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                            <i class="far fa-eye"></i> View
                                          </a>
                                          <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                            <i class="fas fa-check"></i> Accept
                                          </a>
                                          <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                            <i class="fas fa-times"></i> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div class="tab-pane" id="today-appointments">
                          <div class="card card-table mb-0">
                            <div class="card-body">
                              <div class="table-responsive">
                                <table class="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Patient Name</th>
                                      <th>Appt Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th class="text-center">Paid Amount</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 class="table-avatar">
                                          <a href="patient-profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" /></a>
                                          <a href="patient-profile.html">Mark John <span>#PT0006</span></a>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span class="d-block text-info">6.00 PM</span></td>
                                      <td>Fever</td>
                                      <td>Old Patient</td>
                                      <td class="text-center">$300</td>
                                      <td class="text-end">
                                        <div class="table-action">
                                          <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                            <i class="far fa-eye"></i> View
                                          </a>
                                          <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                            <i class="fas fa-check"></i> Accept
                                          </a>
                                          <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                            <i class="fas fa-times"></i> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 class="table-avatar">
                                          <a href="patient-profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" /></a>
                                          <a href="patient-profile.html">Danny Grizzle <span>#PT0006</span></a>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span class="d-block text-info">5.00 PM</span></td>
                                      <td>General</td>
                                      <td>Old Patient</td>
                                      <td class="text-center">$100</td>
                                      <td class="text-end">
                                        <div class="table-action">
                                          <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                            <i class="far fa-eye"></i> View
                                          </a>
                                          <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                            <i class="fas fa-check"></i> Accept
                                          </a>
                                          <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                            <i class="fas fa-times"></i> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 class="table-avatar">
                                          <a href="patient-profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" /></a>
                                          <a href="patient-profile.html">Erica Anderson <span>#PT0007</span></a>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span class="d-block text-info">3.00 PM</span></td>
                                      <td>General</td>
                                      <td>New Patient</td>
                                      <td class="text-center">$75</td>
                                      <td class="text-end">
                                        <div class="table-action">
                                          <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                            <i class="far fa-eye"></i> View
                                          </a>
                                          <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                            <i class="fas fa-check"></i> Accept
                                          </a>
                                          <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                            <i class="fas fa-times"></i> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
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
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <div class="row row-grid">
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                      <div class="card-body">
                        <div class="pro-widget-content">
                          <div class="profile-info-widget">
                            <a href="patient-profile.html" class="booking-doc-img">
                              <img src="/images/patient4.jpg" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3><a href="patient-profile.html">Nicolas Flowers</a></h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> P0016</h5>
                                <h5 class="mb-0"><FaMapMarker/> Alabama, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 952 001 8563</span></li>
                            <li>Age <span>38 Years, Male</span></li>
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
                            <a href="patient-profile.html" class="booking-doc-img">  
                            <img src="/images/patient4.jpg" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3><a href="patient-profile.html">Julio Hart</a></h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> P0001</h5>
                                <h5 class="mb-0"><FaMapMarker/> North Carolina, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 828 632 9170</span></li>
                            <li>Age <span>29 Years, Female</span></li>
                            <li>Blood Group <span>O+</span></li>
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
                              <h3>Kimberly Klingler </h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> PT0002</h5>
                                <h5 class="mb-0"><FaMapMarker/> Maine, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 207 729 9974</span></li>
                            <li>Age <span>23 Years, Male</span></li>
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
                            <img src="/images/patient4.jpg" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Robert Menard</h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> PT0003</h5>
                                <h5 class="mb-0"><FaMapMarker/> Indiana, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 260 724 7769</span></li>
                            <li>Age <span>32 Years, Male</span></li>
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
                            <img src="/images/patient4.jpg" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Eric Parks</h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> PT0004</h5>
                                <h5 class="mb-0"><FaMapMarker/> Indiana, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 504 368 6874</span></li>
                            <li>Age <span>25 Years, Female</span></li>
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
                            <img src="/images/patient4.jpg" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Ashley King</h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> PT0005</h5>
                                <h5 class="mb-0"><FaMapMarker/> Florida, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 954 820 7887</span></li>
                            <li>Age <span>25 Years, Female</span></li>
                            <li>Blood Group <span>AB-</span></li>
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
                              <h3>Mark John</h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> PT0006</h5>
                                <h5 class="mb-0"><FaMapMarker/> Kentucky, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 315 384 4562</span></li>
                            <li>Age <span>14 Years, Female</span></li>
                            <li>Blood Group <span>O-</span></li>
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
                              <h3>Danny Grizzle</h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> PT0007</h5>
                                <h5 class="mb-0"><FaMapMarker/> California, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 707 2202 603</span></li>
                            <li>Age <span>25 Years, Female</span></li>
                            <li>Blood Group <span>A-</span></li>
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
                              <h3>Erica Anderson</h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> PT0007</h5>
                                <h5 class="mb-0"><FaMapMarker/> New Jersey, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 973 773 9497</span></li>
                            <li>Age <span>28 Years, Male</span></li>
                            <li>Blood Group <span>O+</span></li>
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
                              <h3>James Madrid</h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> PT0009</h5>
                                <h5 class="mb-0"><FaMapMarker/> Florida, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 850 358 4445</span></li>
                            <li>Age <span>28 Years, Male</span></li>
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
                            <img src="/images/patient4.jpg" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Lester Wise</h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> PT0010</h5>
                                <h5 class="mb-0"><FaMapMarker/> California, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 858 259 5285</span></li>
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
                            <img src="/images/patient4.jpg" alt="User Image" />
                            </a>
                            <div class="profile-det-info">
                              <h3>Leonard Withers</h3>
                              <div class="patient-details">
                                <h5><b>Patient ID :</b> PT0011</h5>
                                <h5 class="mb-0"><FaMapMarker/> Colorado, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-info">
                          <ul>
                            <li>Phone <span>+1 303 607 7075</span></li>
                            <li>Age <span>9 Years, Male</span></li>
                            <li>Blood Group <span>A-</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
              <div class="row">
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title">Schedule Timings</h4>
                        <div class="profile-box">
                          <div class="row">
                            <div class="col-lg-4">
                              <div class="form-group">
                                <label>Timing Slot Duration</label>
                                <select class="form-select form-control">
                                  <option>15 mins</option>
                                  <option selected="selected">30 mins</option>
                                  <option>45 mins</option>
                                  <option>1 Hour</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <div class="card schedule-widget mb-0">

                                <div class="schedule-header">

                                  <div class="schedule-nav">
                                    <ul class="nav nav-tabs nav-justified">
                                      <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#slot_sunday">Sunday</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#slot_monday">Monday</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#slot_tuesday">Tuesday</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#slot_wednesday">Wednesday</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#slot_thursday">Thursday</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#slot_friday">Friday</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link active" data-bs-toggle="tab" href="#slot_saturday">Saturday</a>
                                      </li>
                                    </ul>
                                  </div>

                                </div>


                                <div class="tab-content schedule-cont">

                                  <div id="slot_sunday" class="tab-pane fade">
                                    <h4 class="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
                                    </h4>
                                    <p class="text-muted mb-0">Not Available</p>
                                  </div>


                                  <div id="slot_monday" class="tab-pane fade">
                                    <h4 class="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a class="edit-link" data-bs-toggle="modal" href="#edit_time_slot"><FaRegEdit/> Edit</a>
                                    </h4>

                                    <div class="doc-times">
                                      <div class="doc-slot-list">
                                        8:00 pm - 11:30 pm
                                        <a href="javascript:void(0)" class="delete_schedule">
                                    <FaTimes/>
                                        </a>
                                      </div>
                                      <div class="doc-slot-list">
                                        11:30 pm - 1:30 pm
                                        <a href="javascript:void(0)" class="delete_schedule">
                                    <FaTimes/>
                                        </a>
                                      </div>
                                      <div class="doc-slot-list">
                                        3:00 pm - 5:00 pm
                                        <a href="javascript:void(0)" class="delete_schedule">
                                    <FaTimes/>
                                        </a>
                                      </div>
                                      <div class="doc-slot-list">
                                        6:00 pm - 11:00 pm
                                        <a href="javascript:void(0)" class="delete_schedule">
                                    <FaTimes/>
                                        </a>
                                      </div>
                                    </div>

                                  </div>


                                  <div id="slot_tuesday" class="tab-pane fade">
                                    <h4 class="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
                                    </h4>
                                    <p class="text-muted mb-0">Not Available</p>
                                  </div>


                                  <div id="slot_wednesday" class="tab-pane fade">
                                    <h4 class="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
                                    </h4>
                                    <p class="text-muted mb-0">Not Available</p>
                                  </div>


                                  <div id="slot_thursday" class="tab-pane fade">
                                    <h4 class="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
                                    </h4>
                                    <p class="text-muted mb-0">Not Available</p>
                                  </div>


                                  <div id="slot_friday" class="tab-pane fade">
                                    <h4 class="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
                                    </h4>
                                    <p class="text-muted mb-0">Not Available</p>
                                  </div>


                                  <div id="slot_saturday" class="tab-pane fade active show">
                                    <h4 class="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot"><FaPlusCircle/> Add Slot</a>
                                    </h4>
                                    <p class="text-muted mb-0">Not Available</p>
                                  </div>

                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-invoice" role="tabpanel" aria-labelledby="v-pills-invoice-tab">
              <div class="row">
                  <div class="col-sm-12">
                  <div class="card card-table">
                      <div class="card-body">
                        <div class="table-responsive">
                          <table class="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Invoice No</th>
                                <th>Patient</th>
                                <th>Amount</th>
                                <th>Paid On</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <a href="invoice-view.html">#INV-0010</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Nicolas Flowers <span>#PT0016</span></a>
                                  </h2>
                                </td>
                                <td>$450</td>
                                <td>14 Nov 2020</td>
                                <td class="text-end">
                                  <div class="table-action">
                                    <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="invoice-view.html">#INV-0009</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Julio Hart <span>#PT0001</span></a>
                                  </h2>
                                </td>
                                <td>$200</td>
                                <td>13 Nov 2020</td>
                                <td class="text-end">
                                <div class="table-action">
                                    <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="invoice-view.html">#INV-0008</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Kimberly Klingler <span>#PT0002</span></a>
                                  </h2>
                                </td>
                                <td>$100</td>
                                <td>12 Nov 2020</td>
                                <td class="text-end">
                                <div class="table-action">
                                    <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="invoice-view.html">#INV-0007</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Robert Menard <span>#PT0003</span></a>
                                  </h2>
                                </td>
                                <td>$350</td>
                                <td>11 Nov 2020</td>
                                <td class="text-end">
                                <div class="table-action">
                                    <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="invoice-view.html">#INV-0006</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Eric Parks <span>#PT0004</span></a>
                                  </h2>
                                </td>
                                <td>$275</td>
                                <td>10 Nov 2020</td>
                                <td class="text-end">
                                <div class="table-action">
                                    <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="invoice-view.html">#INV-0005</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Ashley King <span>#PT0005</span></a>
                                  </h2>
                                </td>
                                <td>$600</td>
                                <td>9 Nov 2020</td>
                                <td class="text-end">
                                <div class="table-action">
                                    <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="invoice-view.html">#INV-0004</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Mark John <span>#PT0006</span></a>
                                  </h2>
                                </td>
                                <td>$50</td>
                                <td>8 Nov 2020</td>
                                <td class="text-end">
                                <div class="table-action">
                                    <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="invoice-view.html">#INV-0003</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Danny Grizzle <span>#PT0007</span></a>
                                  </h2>
                                </td>
                                <td>$400</td>
                                <td>7 Nov 2020</td>
                                <td class="text-end">
                                <div class="table-action">
                                    <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="invoice-view.html">#INV-0002</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Erica Anderson <span>#PT0008</span></a>
                                  </h2>
                                </td>
                                <td>$550</td>
                                <td>6 Nov 2020</td>
                                <td class="text-end">
                                <div class="table-action">
                                    <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="invoice-view.html">#INV-0001</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">James Madrid <span>#PT0009</span></a>
                                  </h2>
                                </td>
                                <td>$100</td>
                                <td>5 Nov 2020</td>
                                <td class="text-end">
                                <div class="table-action">
                                    <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-reviews" role="tabpanel" aria-labelledby="v-pills-reviews-tab">
              <div class="doc-review review-listing">
                  <ul class="comments-list">
                    <li>
                      <div class="comment">
                        <img class="avatar rounded-circle" alt="User Image" src="/images/patient4.jpg" />
                        <div class="comment-body">
                          <div class="meta-data">
                            <span class="comment-author">Nicolas Flowers</span>
                            <span class="comment-date">Reviewed 2 Days ago</span>
                            <div class="review-count rating">
                              <FaStar class="filled"/>                             
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                              <FaStar class="filled"/> 
                            </div>
                          </div>
                          <p class="recommended"><i class="far fa-thumbs-up"></i> <FaRegThumbsUp/> I recommend the doctor</p>
                          <p class="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation.
                            Curabitur non nulla sit amet nisl tempus
                          </p>
                          <div class="comment-reply">
                            <a class="comment-btn" href="#">
                            <FaReply/> Reply
                            </a>
                            <p class="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" class="like-btn">
                              <FaRegThumbsUp/> Yes
                              </a>
                              <a href="#" class="dislike-btn">
                               <FaRegThumbsDown/> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <ul class="comments-reply">
                        <li>
                          <div class="comment">
                          <img class="avatar rounded-circle" alt="User Image" src="/images/patient4.jpg" />
                            <div class="comment-body">
                              <div class="meta-data">
                                <span class="comment-author">Dr. Mary Nielson</span>
                                <span class="comment-date">Reviewed 3 Days ago</span>
                              </div>
                              <p class="comment-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam.
                                Curabitur non nulla sit amet nisl tempus
                              </p>
                              <div class="comment-reply">
                                <a class="comment-btn" href="#">
                                <FaReply/> Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>

                      </ul>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
