import React from 'react'
import { useEffect, useState } from 'react';
import HealthCare from '../components/homecomponents/HealthCare';
import Hero from '../components/herosection/Hero';
import OurBenefits from '../components/homecomponents/OurBenefits';
import OurDoctors from '../components/homecomponents/OurDoctors';
import Ourservices from '../components/homecomponents/Ourservices'
import Testimonial from '../components/testimonial/Testimonial';
import HeroSection from '../components/homecomponents/HeroSection';


function Home() {
  
  const [doc, setDoc] = useState("");

  useEffect(()=>{
    // const doctors = exportDoctors();
    // setDoc(doctors);
  },[])

  return (
    <div >
      {/* <Hero/> */}
      <HeroSection/>
      <Ourservices />
      <OurBenefits />
      <OurDoctors />
      <HealthCare />
      <Testimonial/>
      

    </div>
  )
}

export default Home