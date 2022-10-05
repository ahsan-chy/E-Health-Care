import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

const HeroSection = () => {
  return (
    <div>
        <section className="hero-section">
        <div className="row m-0">
          <div className="col-md-12 col-lg-5 hero-text">
            <h4 className="top-title">Easy way to connect Doctor</h4>
            <h2 className="section-title"><span className='heading'>Connect</span> with our best doctors at your <span className='heading'>home</span></h2>
            <p className="mt-4 mb-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            <Link className="filled-btn" to="/">Find Doctor</Link>
            <Link className="outline-btn" to="/">Contact Us</Link>
          </div>
          <div className="col-md-12 col-lg-7 p-0">
            <div className="hero-img">
              <img src="/images/online dr.jpg" alt="Our Benefits" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection