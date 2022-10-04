import React from 'react'
import { useEffect, useState } from 'react';
import BeHealthy from '../components/behealthy/BeHealthy';
import HealthCare from '../components/healthcare/HealthCare';
import Hero from '../components/herosection/Hero';
import OurBenefits from '../components/ourbenefits/OurBenefits';
import OurDoctors from '../components/ourdoctors/OurDoctors';
import Ourservices from '../components/ourservices/Ourservices'
import Testimonial from '../components/testimonial/Testimonial';


function Home() {
  
  const [doc, setDoc] = useState("");

  useEffect(()=>{
    // const doctors = exportDoctors();
    // setDoc(doctors);
  },[])

  return (
    <div >
      <Hero/>
      <Ourservices />
      <OurBenefits />
      <OurDoctors />
      <HealthCare />
      {/* <BeHealthy /> */}
      <Testimonial/>
      

    </div>
  )
}

export default Home