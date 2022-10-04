import { Routes, Route} from "react-router-dom";
import React from 'react'
import { AboutUs, ContactUs, Doctor, DrProfile, DrsLogin, DrsRegistration, Home, PatientsLogin, PatientsRegistration } from "../pages";

const Routers = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/DrProfile/:id" element={<DrProfile />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/DrsRegistration" element={<DrsRegistration />} />
        <Route path="/PatientsRegistration" element={<PatientsRegistration />} />
        <Route path="/DrsLogin" element={<DrsLogin />} />
        <Route path="/PatientsLogin" element={<PatientsLogin />} />
      </Routes>
    </div>
  )
}

export default Routers

