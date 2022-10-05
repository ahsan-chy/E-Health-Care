import React from 'react'
import './testimonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <>
    <div className="row mt-4 py-3">
          <div className="col-md-12 px-2">
            <div className="section-header text-center mb-4">
              <h2 className='section-heading-title'>Testimonials</h2>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-2 mb-5 mx-1 px-3">
        <Swiper
        // slidesPerView={4}
        // spaceBetween={3}
        // slidesPerGroup={4}
        // loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0:{
            slidesPerView:1
          },
          600:{
            slidesPerView:2
          },
          850:{
            slidesPerView:3
          },
          1150:{
            slidesPerView:4
          },
          1700:{
            slidesPerView:5
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper px-4 pb-5 pt-2"
        >
            <SwiperSlide>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}

export default Testimonial