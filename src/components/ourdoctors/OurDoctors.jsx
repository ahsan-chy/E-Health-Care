import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { getDoctors } from '../../services/doctorsApi';
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
    <div className='container my-5 text-center'>
        <h2 style={{color:"#0E8A8A"}}>Our Doctors</h2>
      <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">
        {
        doctors.slice(1,5).map(d=>(
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-2 " key={d.doctorId}>
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
                <button type="button" className="btn rounded-pill px-3" style={{color:'#0E8A8A' ,border:"1px solid #0E8A8A"}}>{" "}Book Appointent{" "}</button>
              </div>
            </div>
          </div>
        ))
      }
      </div>  
    </div>
  )
}

export default OurDoctors