import React from "react";
import "./about.css";
import { FaBed, FaUserCheck } from "react-icons/fa";
import Testimonial from "../testimonial/Testimonial";

const About = () => {
  return (
    <div>
      <div className="row mx-4 my-3">
        <p>
          Home <span style={{ color: "#ff9600" }}>/ About Us</span>{" "}
        </p>
        <h4 className="text-secondary">About Us</h4>
      </div>
      <div className="container-fluid  ">
        <div className="about-banner">
          <div className="row mx-5">
            <div className="col-md-6">
              <button className="btn text-white green-btn">
                Book Appointement
              </button>
              <h4 className="text-secondary ps-1 pt-4">About Us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                porta luctus est interdum pretium. Fusce id tortor fringilla,
                suscipit turpis ac, varius ex. Cras vel metus ligula. Nam enim
                ligula, bibendum a iaculis ut, cursus id augue. Proin vitae
                purus id tortor vehicula scelerisque non in libero.
                <br />
                <br />
                Nulla non turpis sit amet purus pharetra sollicitudin. Proin
                rutrum urna ut suscipit ullamcorper. Proin sapien felis,
                dignissim non finibus eget, luctus vel purus. Pellentesque
                efficitur congue orci ornare accumsan. Nullam ultrices libero
                vel imperdiet scelerisque. Donec vel mauris eros.
              </p>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      {/* docters cards */}
      <div className="container clear-section">
        <div className="row">
          <div className="col-md-4 category-col">
            <div className="category-subox pb-0 d-flex flex-wrap ">
              <h4>Visit a Doctor</h4>
              <p>
                We hire the best specialists to deliver top-notch diagnostic
                services for you.
              </p>
              <div className="subox-img">
                <div className="subox-circle">
                  <FaBed className="icon-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 category-col">
            <div className="category-subox pb-0 d-flex flex-wrap ">
              <h4>Visit a Doctor</h4>
              <p>
                We hire the best specialists to deliver top-notch diagnostic
                services for you.
              </p>
              <div className="subox-img">
                <div className="subox-circle">
                  <FaBed className="icon-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 category-col">
            <div className="category-subox pb-0 d-flex flex-wrap ">
              <h4>Visit a Doctor</h4>
              <p>
                We hire the best specialists to deliver top-notch diagnostic
                services for you.
              </p>
              <div className="subox-img">
                <div className="subox-circle">
                  <FaBed className="icon-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* patient record */}
      <div className="container-fluid patient-record">
        <div className="under-lay">
          <div className="row py-5 text-white">
            <div className="col-md-3">
              <h3 className="heading-element ms-4">
                Numbers of Patient's we Treated.
              </h3>
            </div>
            <div className="col-md-3 text-center">
              <h1 className="heading-element ">10+</h1>
              <span>Active Patient</span>
            </div>
            <div className="col-md-3 text-center">
              <h1 className="heading-element ">40+ </h1>
              <span>Active Patient</span>
            </div>
            <div className="col-md-3 text-center">
              <h1 className="heading-element ">1,400+</h1>
              <span>Active Patient</span>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="mt-5">
        <Testimonial />
        {/* slider */}
        
        
      </div>
    </div>
  );
};

export default About;
