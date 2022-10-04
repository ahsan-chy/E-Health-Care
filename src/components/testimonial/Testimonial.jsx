import React from 'react'
import './testimonial.css';

const Testimonial = () => {
  return (
    <>
    <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center mb-4">
              <h2 className='section-heading-title'>Testimonials</h2>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 mb-5 mx-5">
          <div className="col-md-3">
          <div className="testimonial-item text-center mx-auto" style={{width: "90%", display: "block"}}>
            <div className="testimonial-img">
            <img src="/images/patient1.jpg" className="img-fluid" alt="Speciality"/>
            </div>
            <div className="testimonial-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="user-name">- Jennifer Robinson</p>
            <p className="user-location mb-0">Leland, USA</p>
            </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="testimonial-item text-center mx-auto" style={{width: "90%", display: "block"}}>
            <div className="testimonial-img">
            <img src="/images/patient2.jpg" className="img-fluid" alt="Speciality"/>
            </div>
            <div className="testimonial-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="user-name">- Jennifer Robinson</p>
            <p className="user-location mb-0">Leland, USA</p>
            </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="testimonial-item text-center mx-auto" style={{width: "90%", display: "block"}}>
            <div className="testimonial-img">
            <img src="/images/t5.png" className="img-fluid" alt="Speciality"/>
            </div>
            <div className="testimonial-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="user-name">- Jennifer Robinson</p>
            <p className="user-location mb-0">Leland, USA</p>
            </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="testimonial-item text-center mx-auto" style={{width: "90%", display: "block"}}>
            <div className="testimonial-img">
            <img src="/images/patient3.jpg" className="img-fluid" alt="Speciality"/>
            </div>
            <div className="testimonial-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="user-name">- Jennifer Robinson</p>
            <p className="user-location mb-0">Leland, USA</p>
            </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="testimonial-item text-center mx-auto" style={{width: "90%", display: "block"}}>
            <div className="testimonial-img">
            <img src="/images/t5.png" className="img-fluid" alt="Speciality"/>
            </div>
            <div className="testimonial-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="user-name">- Jennifer Robinson</p>
            <p className="user-location mb-0">Leland, USA</p>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Testimonial