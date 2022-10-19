import React from 'react'
import {FaPrint ,FaEye } from 'react-icons/fa';
import "../docterdashboard.css"

const Invoice = () => {
  return (
    <div class="invoice-tab">
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
                                  <a href="#/">#INV-0010</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/patient.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Romaisa Khan <span>#PT0016</span></a>
                                  </h2>
                                </td>
                                <td>1500</td>
                                <td>14 Nov 2022</td>
                                <td class="text-end">
                                  <div class="table-action">
                                    <a href="#/" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="#/" class="btn btn-sm bg-primary-light">
                                      <FaPrint/> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#/">#INV-0010</a>
                                </td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                                      <img class="avatar-img rounded-circle" src="/images/p4.jpg" alt="User Image" />
                                    </a>
                                    <a href="patient-profile.html">Ajmal Shazad <span>#PT0018</span></a>
                                  </h2>
                                </td>
                                <td>1500</td>
                                <td>14 Nov 2022</td>
                                <td class="text-end">
                                  <div class="table-action">
                                    <a href="#/" class="btn btn-sm bg-info-light">
                                      <FaEye/> View
                                    </a>
                                    <a href="#/" class="btn btn-sm bg-primary-light">
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
  )
}

export default Invoice