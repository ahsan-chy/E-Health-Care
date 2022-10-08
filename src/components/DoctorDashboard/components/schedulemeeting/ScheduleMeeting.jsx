import React from 'react'
import {  FaRegEdit, FaPlusCircle , FaTimes } from 'react-icons/fa';
import "../docterdashboard.css"

const ScheduleMeeting = () => {
  return (
    <div class="meeting-tab" >
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
  )
}

export default ScheduleMeeting