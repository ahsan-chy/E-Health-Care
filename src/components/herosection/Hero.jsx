import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div>
      <section className="section home-banner">
        <div className="container-fluid">
          <div className="row banner-wrapper">
            <div className="col-md-12">
              <div className="banner-header">
                <h3>Be Hear Healthy</h3>
                <h1>The correct assistance at the perfect time</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the indstandard
                  dummy text ever
                </p>
                <a className="btn btn-primary mt-5 mx-1">Read More</a>
                <a className="btn btn-secondary mt-5 mx-1">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero