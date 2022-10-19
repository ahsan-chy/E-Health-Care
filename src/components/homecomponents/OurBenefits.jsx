import React from 'react'
import './home.css'

const OurBenefits = () => {
  return (
    <div>
        <section className="our-benefits">
        <div className="row m-0">
          <div className="col-md-12 col-lg-6 benefits-text">
            <div className='benefit-top'>
              <h3 className="top-title">Our Benefits</h3>
              <h2 className="section-title">Specialists Team for Treatment of Your Health</h2>
              <p className="mb-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <h4>BEST PROCEDURES</h4>
                <p className="para-text mt-3">We will provide you best  procedures for you health.</p>
              </div>
              <div className="col-md-6 mb-3">
                <h4>ANALYZING TOGETHER</h4>
                <p className="para-text mt-3">Understanding you is our first priority so that we give you best advice.</p>
              </div>
              <div className="col-md-6 mb-3">
                <h4>UNDERSTANDING YOU</h4>
                <p className="para-text mt-3">We analyze your disease that there is hope, even when your brain tells you there isn’t.</p>
              </div>
              <div className="col-md-6 mb-3">
                <h4>LIGHT AT THE END</h4>
                <p className="para-text mt-3">The art of medicine consists of amusing the patient while nature cures the disease.</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 p-0">
            <div className="bene-img">
              <img src="/images/our-benefits.jpg" alt="Our Benefits" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurBenefits