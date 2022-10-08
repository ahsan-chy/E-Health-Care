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
  )
}

export default Invoice