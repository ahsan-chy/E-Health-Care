import React from 'react';
import './doctorcard.css';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaStopwatch, FaVideo, FaClinicMedical, FaRegThumbsUp, FaMicroscope, FaRegCalendarAlt } from "react-icons/fa";

import {exportDoctors} from '../../services/services';

function DoctorCard({doctors}) {

// const doctors = exportDoctors()

  return (
    <>
        <div>
        {
        doctors.map(doc=>(
            <div className='container pb-4 mb-3 px-3 w-100 border shadow-sm rounded' key={doc._id}>
                <div className="row mt-4">
                    {/* ------- Doctor Profile (Img, Title, Description) ------ */}
                    <div className="col-8 ">
                    <div className="container">

                    <div className="row">
                        {/* --- Images --- */}
                        <div className="col-2">
                        <div style={{width:'100%', height: '110px', margin:'-10px 0'}}>
                            <img src={doc.picture} alt="" className="card-img-top pt-3" style={{width:'auto', height:'100%'}}/>
                            </div>
                        </div>

                        {/* --- Headings --- */}
                      <div className="col-10 ps-3">
                     <h4  style={{color:"#0E8A8A"}}>{doc.doctorName}</h4>
                        <h6 className='text-secondary '>{doc.specialist}</h6>
                        <p className='text-warning mt-4' >
                            <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/> 
                            <span className='text-secondary'>    
                            &nbsp;&nbsp; {doc.patientsReviews} Patients reviews 
                            </span>
                        </p>
                        

                        {/* --- Details --- */}
                        <div className="row my-4">
                            <div className="col-4 border-end">
                                <div className="row">
                                    <div className="col-2 text-secondary"><FaStopwatch /></div>
                                    <div className="col-10">
                                        <h6>Under 15 Min</h6>
                                        <span>Wait Time</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 ps-2 border-end">
                                <div className="row">
                                    <div className="col-2 text-secondary"><FaMicroscope /></div>
                                    <div className="col-10">
                                        <h6>{doc.experience} Years</h6>
                                        <span>Experience</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-4 ps-2">
                                <div className="row">
                                    <div className="col-2 text-secondary"><FaRegThumbsUp /></div>
                                    <div className="col-10">
                                        <h6>90% (200)</h6>
                                        {/* <h6>{doc.satisfactionRate} ({doc.patientsReviews})</h6> */}
                                        <span>Satisfied Patients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>

                    </div>
                    </div>

                    </div>

                    {/* ------- Collumn 2 (Buttons) ------ */}
                    <div className="col-4 pt-1 pb-1">
                    <div className='d-grid gap-1 mx-5 buttons'>
                        <button className='btn my-3 white-btn'>
                            <Link to ={`/DrProfile/${doc._id}`} className='btn-link'>View Profile</Link>
                        </button>
                        <button className='btn text-white green-btn' >Book Appointement</button>
                    
                    </div>

                    </div>
                </div>

                {/* ------- Hospital availibility cards ------ */}
                <div className="container mt-1  ">
                    <div className="row">
                    <div className="col-5">
                    <div className="card shadow-sm me-2">
                        <div className="card-body ">
                            <h6 style={{color:"#0E8A8A"}}><FaClinicMedical/> &nbsp; National Hospital (DHA)</h6>
                            <span className='text-secondary'><FaRegCalendarAlt/> Available tomorrow</span>
                            <span className='mx-4'> <strong>Fee: </strong> RS: 3,000</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-5">
                    <div className="card shadow-sm mx-2">
                        <div className="card-body">
                            <h6 style={{color:"#0E8A8A"}}><FaVideo/> &nbsp; Online Video Consultation (Online)</h6>
                            <span className='text-secondary'><FaRegCalendarAlt/> Available tomorrow</span>
                            <span className='mx-4'> <strong>Fee: </strong> RS: 3,000</span>
                        </div>
                    </div>
                    </div>
                    
                    </div>
            </div>
            </div>
             ))
            }
        </div> 
    </>
  )
}

export default DoctorCard