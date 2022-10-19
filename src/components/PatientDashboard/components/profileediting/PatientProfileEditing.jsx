import React, { useState } from "react";
import "../patientdashboard.css"

const ProfileEditing = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [picture, setPicture] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctors = {
      name,
      email,
      phone,
      gender,
      address,
      age,
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
      setPicture("");
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

            <div className="col-md-6">
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
            <div className="col-md-6 input-sec-2">
              <div className="form-group">
                <label className="head-text">Age </label>
                <input
                  type="number"
                  name="age"
                  value={age}
                  className="form-control"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            
            <div className="col-md-6 mb-3">
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


          <button className="btn upload-btn" type="submit">
            Submit Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditing;
