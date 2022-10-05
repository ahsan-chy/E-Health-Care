import React from 'react';
import './doctorprofile.css';
import { FaRegDotCircle, FaRegComment, FaRegBookmark, FaPhoneAlt, FaVideo, FaMapMarkerAlt, 
  FaRegMoneyBillAlt, FaRegThumbsUp, FaMicroscope, FaStopwatch, FaStar, FaRegStar, FaBrain, FaLongArrowAltRight } from "react-icons/fa";


const Doctorprofile = ({drDetails}) => {
  return (
    <div>
        <div className='row mx-4 my-3'>
          <p>Home <span style={{color:"#ff9600"}}>/ Doctor Profile</span> </p>
          <h4 className='text-secondary'>Doctor Profile</h4>
        </div>
        <div className='container w-100 '>
          <div className="row my-3 px-2 py-4 border shadow-sm rounded">
            <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-2 me-3">
                <div style={{width:'100%', height: '110px', margin:'0 20px 0'}}>
                    <img src={drDetails.picture} alt="contorimage" style={{width:'auto', height:'100%',}}/>
                </div>
              </div>
              <div className="col-lg-8">
                <div className='pb-3'>
                  <h4  style={{color:"#0E8A8A"}}>{drDetails.doctorName}</h4>
                  <p style={{color:"#63636D"}}><FaBrain style={{color:"#0E8A8A"}}/> &nbsp; {drDetails.specialization} (Specialist)</p>
                  
                  <h6 className='text-warning'> 
                      <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/> 
                      <span className='text-secondary'>    
                      &nbsp;&nbsp; 1500 Patients hourss
                      </span>
                  </h6>
                </div>
                {/* --- Details --- */}
                <div className="row mt-5 mb-4 me-5">
                  <div className="col-4 border-end">
                      <div className="row">
                          <div className="col-2 text-secondary"><FaStopwatch  style={{color:"#0E8A8A"}}/></div>
                          <div className="col-10">
                              <h6>Under 15 Min</h6>
                              <span>Wait Time</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-4 ps-2 border-end">
                      <div className="row">
                          <div className="col-2 text-secondary"><FaMicroscope  style={{color:"#0E8A8A"}}/></div>
                          <div className="col-10">
                              <h6>{drDetails.experience} Years</h6>
                              <span>Experience</span>
                          </div>
                      </div>
                  </div>
                  
                  <div className="col-4 ps-2">
                      <div className="row">
                          <div className="col-2 text-secondary"><FaRegThumbsUp  style={{color:"#0E8A8A"}}/></div>
                          <div className="col-10">
                              <h6>99% (1500)</h6>
                              <span>Satisfied Patients</span>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>

            </div>
              
            </div>
            <div className="col-lg-2">
              <div className="dr-details">
                <h6 style={{color:"#63636D"}}><FaRegThumbsUp  style={{color:"#0E8A8A"}}/> &nbsp; 99%</h6>
                <h6 style={{color:"#63636D"}}><FaRegComment  style={{color:"#0E8A8A"}}/> &nbsp; 35 Feedback</h6>
                <h6 style={{color:"#63636D"}}><FaMapMarkerAlt  style={{color:"#0E8A8A"}}/> &nbsp; Sargodha DHA</h6>
                <h6 style={{color:"#63636D"}}><FaRegMoneyBillAlt  style={{color:"#0E8A8A"}}/> &nbsp; RS. 1000 </h6>
              </div>
              <div className="save-icons text-center ">
                <div className="border"><FaRegBookmark className='single-icon'/></div>
                <div className="border"><FaRegComment className='single-icon'/></div>
                <div className="border"><FaPhoneAlt className='single-icon'/></div>
                <div className="border"><FaVideo className='single-icon'/></div>
              </div>

              <button className='btn text-white' style={{backgroundColor:"#FF9600"}}>Book Appointement</button>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="row mb-4 px-2 pb-2 border shadow-sm rounded btm-nav">
           <nav>
            <div className="nav nav-tabs nav-tabs-bottom nav-justified " id="nav-tab" role="tablist">
              <button className="nav-link active text-dark" id="nav-overview-tab" data-bs-toggle="tab" data-bs-target="#nav-overview" type="button" role="tab" aria-controls="nav-overview" aria-selected="true">Overview</button>
              <button className="nav-link " id="nav-location-tab" data-bs-toggle="tab" data-bs-target="#nav-location" type="button" role="tab" aria-controls="nav-location" aria-selected="false">Locations</button>
              <button className="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Reviews</button>
              <button className="nav-link" id="nav-hours-tab" data-bs-toggle="tab" data-bs-target="#nav-hours" type="button" role="tab" aria-controls="nav-hours" aria-selected="false">Available Hours</button>
              
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
              {/* Overview  */}
              <div className="tab-pane fade show active ps-3" id="nav-overview" role="tabpanel" aria-labelledby="nav-overview-tab" tabIndex="0">
                <h5 className='pt-4'>About Me</h5>
                <p className='w-75'>
                  {drDetails.about}
                </p> 
                <div>        
                  <h5 className='pt-4'>Education</h5>
                  <ul className='custom-navs'>
                    <li className='mt-3'>
                      <div className='dot'><FaRegDotCircle className='circleicon' /></div>
                      <h6>American Psychiatry Medical University</h6>
                      <span>DNB. (Psychiatry)</span> <br/>
                      <span>1998 - 2003</span>
                    </li>
                    <li className='mt-3'>
                      <div className='dot'><FaRegDotCircle className='circleicon' /></div>
                      <h6>American Psychiatry Medical University</h6>
                      <span>DNB. (Psychiatry)</span> <br/>
                      <span>1998 - 2003</span>
                    </li>
                  </ul>
                </div>
                <div>        
                  <h5 className='pt-4'>Work & Experience</h5>
                  <ul className='custom-navs'>
                    <li className='mt-3'>
                      <div className='dot'><FaRegDotCircle className='circleicon' /></div>
                      <h6>American Psychiatry Study Medical Clinic</h6>
                      <span>2010 - Present</span><br/>
                      <span> (10 Years)</span>
                    </li>
                    <li className='mt-3'>
                      <div className='dot'><FaRegDotCircle className='circleicon' /></div>
                      <h6>Confort Care Psychiatry Clinic</h6>
                      <span>2007 - 2010</span><br/>
                      <span> (3 Years)</span>
                    </li>
                    <li className='mt-3'>
                      <div className='dot'><FaRegDotCircle className='circleicon' /></div>
                      <h6>Dream Care Center</h6>
                      <span>2005 - 2007</span><br/>
                      <span> (2 Years)</span>
                    </li>
                  </ul>
                </div>
                <div>        
                  <h5 className='pt-4'>Awards</h5>
                  <ul className='custom-navs'>
                    <li className='mt-3'>
                      <div className='dot'><FaRegDotCircle className='circleicon' /></div>
                      <span style={{color:"#ff9600"}}>July 2020</span>
                      <h6>Humanitarian Award</h6>
                      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. </span>
                      <span> (10 Years)</span>
                    </li>
                    <li className='mt-3'>
                      <div className='dot'><FaRegDotCircle className='circleicon' /></div>
                      <span style={{color:"#ff9600"}}>July 2020</span>
                      <h6>Certificate for Intrnation Volunteer Service</h6>
                      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. </span>
                      <span> (3 Years)</span>
                    </li>
                    <li className='mt-3'>
                      <div className='dot'><FaRegDotCircle className='circleicon' /></div>
                      <span style={{color:"#ff9600"}}>July 2020</span>
                      <h6>The Psychiatry Professional of Then Year Award</h6>
                      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. </span>
                      <span> (2 Years)</span>
                    </li>
                  </ul>
                </div>
                <h5 className='pt-5'>Services</h5>
                <div className="row w-75">
                  <div className="col-lg-4 py-2"><FaLongArrowAltRight className='arrow' /> &nbsp; Neuroradiology</div>
                  <div className="col-lg-4"><FaLongArrowAltRight className='arrow' /> &nbsp; Physical Stress</div>
                  <div className="col-lg-4"><FaLongArrowAltRight className='arrow' /> &nbsp; Implants</div>
                  <div className="col-lg-4 py-2"><FaLongArrowAltRight className='arrow' /> &nbsp; Composite Bonding</div>
                  <div className="col-lg-4"><FaLongArrowAltRight className='arrow' /> &nbsp; Fissure Sealants</div>
                  <div className="col-lg-4"><FaLongArrowAltRight className='arrow' /> &nbsp; Surgical Extractions</div>
                </div>
                <h5 className='pt-5'>Specializations</h5>
                <div className="row w-75 mb-4">
                  <div className="col-lg-4 py-2"><FaLongArrowAltRight className='arrow' /> &nbsp; Psycho Spiritual Stress</div>
                  <div className="col-lg-4"><FaLongArrowAltRight className='arrow' /> &nbsp; Physical stress</div>
                  <div className="col-lg-4"><FaLongArrowAltRight className='arrow' /> &nbsp; Social Psychology</div>
                  <div className="col-lg-4 py-2"><FaLongArrowAltRight className='arrow' /> &nbsp; Nutrition</div>
                  <div className="col-lg-4"><FaLongArrowAltRight className='arrow' /> &nbsp; Surgery & Radiology</div>
                  <div className="col-lg-4"><FaLongArrowAltRight className='arrow' /> &nbsp; Surgical Extractions</div>
                </div>

              </div>

              {/* Location  */}
              <div className="tab-pane fade ps-3" id="nav-location" role="tabpanel" aria-labelledby="nav-location-tab" tabIndex="0">
                <div className="container">
                  <div className="row py-4">
                    <div className="col-lg-6 pe-5">
                      <h5 className='pb-2'>Civil Hospital Jauharabad</h5>
                      <h6 style={{color:"#63636D"}}><FaMapMarkerAlt  style={{color:"#0E8A8A"}}/> &nbsp; 77JQ+GFX, Jauharabad, Khushab, Punjab, Pakistan </h6>
                      <div className='map-location mt-4'>
                        <p className='m-5 p-5 text-danger'> map will be Here</p>
                      </div>  
                    </div>
                    <div className="col-lg-4">
                      <strong>Mon-Sat</strong>
                      <p className='pt-2'>10:00 AM - 2:00 PM</p>
                      <p>10:00 AM - 2:00 PM</p>
                      </div>
                    <div className="col-lg-2">
                      <strong> FEE: &nbsp; </strong>
                      <span> $300</span>
                      </div>
                  </div>
                </div>
              </div>
              {/* Review  */}
              <div className="tab-pane fade px-3" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabIndex="0">
                <div className="container py-4">
                  <div className="row mb-3 border rounded-3 shadow-sm py-3">
                    <div className="col-lg-1 ps-4">
                      <FaRegThumbsUp  style={{color:"#0E8A8A", fontSize:'24px'}}/> &nbsp;
                    </div>
                    <div className="col-lg-11 w-75">
                      <h6>Varified Patient</h6>
                      <p style={{color:"#63636D"}}>Anynymous Patient</p>
                      <span style={{color:"#ff9600"}}>5 Days Ago</span>

                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illo quia, non, iste incidunt tenetur pariatur, suscipit dolorum voluptate esse animi! Accusantium, unde fugiat. Quam quia sunt eaque sint at!</p>
                      <h6>Patient Remarks:</h6>
                       <div className="remarks">
                        <div className="remarks-box">Satisfied</div>
                        <div className="remarks-box">Satisfied with Dignose</div>
                        <div className="remarks-box">Satisfied with Environment</div>
                       </div>
                    </div>
                  </div>
                  <div className="row mb-3 border rounded-3 shadow-sm py-3">
                    <div className="col-lg-1 ps-4">
                      <FaRegThumbsUp  style={{color:"#0E8A8A", fontSize:'24px'}}/> &nbsp;
                    </div>
                    <div className="col-lg-11 w-75">
                      <h6>Varified Patient</h6>
                      <p style={{color:"#63636D"}}>Anynymous Patient</p>
                      <span style={{color:"#ff9600"}}>5 Days Ago</span>

                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illo quia, non, iste incidunt tenetur pariatur, suscipit dolorum voluptate esse animi! Accusantium, unde fugiat. Quam quia sunt eaque sint at!</p>
                      <h6>Patient Remarks:</h6>
                       <div className="remarks">
                        <div className="remarks-box">Satisfied</div>
                        <div className="remarks-box">Satisfied with Dignose</div>
                        <div className="remarks-box">Satisfied with Environment</div>
                       </div>
                    </div>
                  </div>
                  <div className="row mb-3 border rounded-3 shadow-sm py-3">
                    <div className="col-lg-1 ps-4">
                      <FaRegThumbsUp  style={{color:"#0E8A8A", fontSize:'24px'}}/> &nbsp;
                    </div>
                    <div className="col-lg-11 w-75">
                      <h6>Varified Patient</h6>
                      <p style={{color:"#63636D"}}>Anynymous Patient</p>
                      <span style={{color:"#ff9600"}}>5 Days Ago</span>

                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illo quia, non, iste incidunt tenetur pariatur, suscipit dolorum voluptate esse animi! Accusantium, unde fugiat. Quam quia sunt eaque sint at!</p>
                      <h6>Patient Remarks:</h6>
                       <div className="remarks">
                        <div className="remarks-box">Satisfied</div>
                        <div className="remarks-box">Satisfied with Dignose</div>
                        <div className="remarks-box">Satisfied with Environment</div>
                       </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* Hours  */}
              <div className="tab-pane fade ps-3" id="nav-hours" role="tabpanel" aria-labelledby="nav-hours-tab" tabIndex="0">
              <div className="container my-5 w-50 border rounded-3 shadow-sm p-3">
                <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col"> 
                        <h6 style={{color:"#0E8A8A"}}><FaMapMarkerAlt/> &nbsp;Available Tomorrow</h6>
                    </th>
                    <th scope="col">01:00 PM</th>
                    <th scope="col">10:00 PM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Monday</th>
                    <td>01:00 PM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Tuesday</th>
                    <td>01:00 PM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Wednesday</th>
                    <td>01:00 PM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Thursday</th>
                    <td>01:00 PM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Friday</th>
                    <td>01:00 PM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Saturday</th>
                    <td>01:00 PM</td>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Sunday</th>
                    <td>-------</td>
                    <td>-------</td>
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

export default Doctorprofile