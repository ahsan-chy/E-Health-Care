import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { getDoctors } from '../../services/doctorsApi';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

const axios = require('axios').default;

const OurDoctors = () => {
  
// const doctors = exportDoctors();
let [doctors, setDoctors] = useState([]);
const calldoctorapi = async() => {
  let res = await getDoctors();
  console.log(res);
  setDoctors(res)
}
useEffect( ()=>{
  calldoctorapi()
},[])
// useEffect( ()=>{
//     axios.get('http://localhost:4000/doctors')
//       .then(function (response) {
//         // handle success
//         console.log(response);
//         setDoctors(response.data)
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       .then(function () {
//         // always executed
// })}, [])

return (
    <div className='container-fluid my-5 px-4 text-center'>
        <h2 style={{color:"#0E8A8A"}}>Our Doctors</h2>
      <div className="row mt-3">
      <Swiper
        // slidesPerView={4}
        // spaceBetween={3}
        // slidesPerGroup={4}
        loop={true}
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
        className="mySwiper px-4 pb-3 pt-2"
        >
        {
        doctors.map(d=>(
          <SwiperSlide>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 px-2 " key={d.doctorId}>
            <div className="card h-100 shadow-sm bg-body py-1">
              <div style={{width:'100%', height: '190px', margin:'1px 0'}}>
              <img src={d.picture} alt="" className="card-img-top pt-3" style={{width:'auto', height:'100%'}}/>
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{color:"#0E8A8A"}}>{d.doctorName}</h5>
                <p className="card-text text-secondary">{d.experience} Years Experience</p>
                <p className='text-warning ' >
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/> 
                  <span className='text-secondary'>    
                  &nbsp;&nbsp; Ratings 
                  </span>
                </p>
                <div className='main-btn'>
                  <button type="button" className="btn book-btn">
                    <Link to ={`/DrProfile/${d._id}`} className='btn-link'>{" "}Book Appointent{" "}</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))
      }
      </Swiper>
      </div>  
    </div>
  )
}

export default OurDoctors