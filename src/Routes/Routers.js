import { Routes, Route} from "react-router-dom";
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { AboutUs, ContactUs, Doctor, DrDashboard, DrProfile, DrsLogin, DrsRegistration, ErrorPage, Home, PatientsLogin, PatientsRegistration, ServerError } from "../pages";
import ScrollToTop from "../components/ScrollToTop";
import {Appointments, ChangePassword, Dashboard, Invoice, MyPatients, ProfileEditing, Reviews, ScheduleMeeting } from "../components/DoctorDashboard/components";
import DoctorDashboard from "../components/DoctorDashboard/pages/DoctorDashboard";
import Review from "../components/reviews/Review";
import Prescription from "../components/presription/Prescription";
import Booking from "../components/booking/Booking";
import Checkout from "../components/checkout/Checkout";
import Success from "../components/success/Success";


const Routers = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar/>
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
        <Route path="/servererror" element={<ServerError />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<ErrorPage />} />
        
        {/* Doctor's Routes */}
        <Route path="/DoctorDashboard/" element={<DoctorDashboard />}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="appointments" element={<Appointments/>}/>
          <Route path="mypatients" element={<MyPatients/>}/>
          <Route path="schedulemeeting" element={<ScheduleMeeting/>}/>
          <Route path="invoice" element={<Invoice/>}/>
          <Route path="reviews" element={<Reviews/>}/>
          <Route path="profileediting" element={<ProfileEditing/>}/>
          <Route path="changepassword" element={<ChangePassword/>}/>
        </Route>

        {/* Patient's Routes */}
        
        <Route path="/sendreview" element={<Review />} />
        <Route path="/prescription" element={<Prescription/>} />

      </Routes>
    <Footer/>
    </div>
  )
}

export default Routers

