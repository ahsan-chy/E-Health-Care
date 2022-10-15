import React, { useState } from "react";
import "../patientdashboard.css"

const ProfileEditing = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [clinicLocation, setClinicLocation] = useState("");
  const [fee, setFee] = useState("");
  const [picture, setPicture] = useState("");
  const [services, setServices] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctors = {
      name,
      email,
      phone,
      gender,
      address,
      specialization,
      about,
      qualification,
      experience,
      clinicLocation,
      services,
      fee,
      picture,
    };

    const response = await fetch("http://localhost:5501/api/doctors", {
      method: "POST",
      body: JSON.stringify(doctors),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setName("");
      setEmail("");
      setPhone("");
      setGender("");
      setAddress("");
      setSpecialization("");
      setAbout("");
      setQualification("");
      setExperience("");
      setClinicLocation("");
      setFee("");
      setPicture("");
      setServices("");
      console.log("Doctor Record added:", json);
    }
    console.log(doctors);
  };
  return (
    <div className="profile-edit-tab">
      <div className="right-tab">
        <form onSubmit={handleSubmit}>
          <div className="row basic-info">
            <div className="form-head">
              <h2>Basic Information</h2>
            </div>
            <div className="col-md-6 input-sec-1">
              <div className="form-group bio">
                <label className="head-text">
                  Your Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 input-sec-2">
              <div className="form-group bio">
                <label className="head-text">
                  Your Email <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 input-sec-1">
              <div className="form-group">
                <label className="head-text">Phone Number </label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  className="form-control"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6 input-sec-2">
              <div className="form-group">
                <label className="head-text">Gender</label>
                <select className="form-select form-control">
                  <option>Male</option>
                  <option>FeMale</option>
                </select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <label className="head-text">Address </label>
                <textarea
                  className="form-control"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="form-group change-photo-btn">
                <label className="head-text text-white">Upload Image </label>{" "}
                &nbsp;&nbsp;
                <input
                  className="upload"
                  type="file"
                  id="img"
                  name="picture"
                  value={picture}
                  accept="image/*"
                  onChange={(e) => setPicture(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row basic-info">
            <div className="form-head mt-3">
              <h2>Other Details</h2>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <label className="head-text">About </label>
                <textarea
                  className="form-control"
                  name="about"
                  onChange={(e) => setAbout(e.target.value)}
                  rows="2"
                  value={about}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="head-text">Education/ Qualification </label>
                <input
                  type="text"
                  name="qualification"
                  value={qualification}
                  className="form-control"
                  onChange={(e) => setQualification(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="head-text">Specialization </label>
                <input
                  type="text"
                  name="specialization"
                  value={specialization}
                  className="form-control"
                  onChange={(e) => setSpecialization(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="head-text">Experience </label>
                <input
                  type="text"
                  name="experience"
                  value={experience}
                  className="form-control"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="head-text">Hospital Location </label>
                <input
                  type="text"
                  name="clinicLocation"
                  value={clinicLocation}
                  className="form-control"
                  onChange={(e) => setClinicLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="head-text">Fee/ Charges </label>
                <input
                  type="number"
                  name="Fee"
                  value={fee}
                  className="form-control"
                  onChange={(e) => setFee(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button className="btn upload-btn" type="submit">
            Submit Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditing;
