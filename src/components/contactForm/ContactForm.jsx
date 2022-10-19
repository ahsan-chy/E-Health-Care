import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contactform.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4yj8vf5",
        "template_o3uq3rd",
        form.current,
        "8VsIvJho7KuCq8Tmp"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Form Submited Successfully")
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
      <div className="container-fluid">
        {/* cards section starts */}
        <section className="contact-section">
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-12 text-center">
                <h3 className="mb-4">Contact Us</h3>
                <p>Great doctor if you need your family member to get effective immediate assistance, emergency
                  treatment or a simple consultation.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex mt-2">
                <div className="contact-box w-100 d-flex flex-wrap">
                  <div className="infor-img">
                    <div className="image-circle">
                      <FaPhoneAlt />
                    </div>
                  </div>
                  <div className="infor-details text-center">
                    <label class="head-text">Phone Number</label>
                    <p>+923 146 604 298</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex px-2 mt-2">
                <div className="contact-box w-100 d-flex flex-wrap">
                  <div className="infor-img">
                    <div className="image-circle" style={{backgroundColor: '#ff9600 !important'}}>
                      <FaEnvelope />
                    </div>
                  </div>
                  <div className="infor-details text-center">
                    <label class="head-text">Email</label>
                    <p>mvirtualhospital@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex mt-2">
                <div className="contact-box w-100 d-flex flex-wrap">
                  <div className="infor-img">
                    <div className="image-circle">
                      <FaMapMarkerAlt />
                    </div>
                  </div>
                  <div className="infor-details text-center">
                    <label class="head-text">Location</label>
                    <p>  22A, Civil Line Jauharabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cards section ends */}
        <section className="contact-form">
          <div className="container">
            <div className="section-header text-center">
              <h2>Get in touch!</h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6 pe-1">
                      <div className="form-group">
                        <label class="head-text">Your Name <span>*</span></label>
                        <input type="text" name="username" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6 ps-1">
                      <div className="form-group">
                        <label class="head-text">Your Email <span>*</span></label>
                        <input type="email" name="useremail" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label class="head-text">Subject</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label class="head-text">Comments <span>*</span></label>
                        <textarea className="form-control"  name="message" />
                      </div>
                    </div>
                  </div>
                  <button className="btn bg-primary" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    
  );
}

export default ContactForm