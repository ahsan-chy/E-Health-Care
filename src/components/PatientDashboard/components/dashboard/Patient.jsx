import React from 'react'
import { FaEye , FaCheck , FaTimes} from 'react-icons/fa';
import "../patientdashboard.css"

const Patient = () => {
  return (
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
                            <h3>50</h3>
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
                            <h3>3</h3>
                            <p class="text-muted">06, Sep 2022</p>
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
                            <h3>3</h3>
                            <p class="text-muted">06, Apr 2022</p>
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

                        <div class="tab-pane patients-card show active" id="upcoming-appointments">
                          <div class="card card-table mb-0">
                            <div class="card-body">
                              <div class="table-responsive">
                                <table class="table table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Patient Name</th>
                                      <th>Appt Date</th>
                                      <th>Purpose</th>
                                       
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
                                      <td>11 Sep 2022 <span class="d-block text-info">10.00 AM</span></td>
                                      <td>General</td>
                                       
                                      <td class="text-center">2000</td>
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
                                          <a href="patient-profile.html">Nicolas Flowers <span>#PT0016</span></a>
                                        </h2>
                                      </td>
                                      <td>11 Sep 2022 <span class="d-block text-info">10.00 AM</span></td>
                                      <td>General</td>
                                       
                                      <td class="text-center">2000</td>
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
                                          <a href="patient-profile.html">Nicolas Flowers <span>#PT0016</span></a>
                                        </h2>
                                      </td>
                                      <td>11 Sep 2022 <span class="d-block text-info">10.00 AM</span></td>
                                      <td>General</td>
                                       
                                      <td class="text-center">2000</td>
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
                                      <td>14 Sep 2022 <span class="d-block text-info">6.00 PM</span></td>
                                      <td>Fever</td>
                                      
                                      <td class="text-center"> 1500</td>
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
                                          <a href="patient-profile.html">Danny Grizzle <span>#PT0006</span></a>
                                        </h2>
                                      </td>
                                      <td>14 Sep 2022 <span class="d-block text-info">5.00 PM</span></td>
                                      <td>General</td>
                                      
                                      <td class="text-center"> 1500</td>
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
                                          <a href="patient-profile.html">Erica Anderson <span>#PT0007</span></a>
                                        </h2>
                                      </td>
                                      <td>14 Sep 2022 <span class="d-block text-info">3.00 PM</span></td>
                                      <td>General</td>
                                       
                                      <td class="text-center"> 1500</td>
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
  )
}

export default Patient