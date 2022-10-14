import React, { useEffect, useState } from "react";
import "./prescription.css";

const Prescription = () => {
  const [medicine, setMedicine] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prescription = { medicine, instructions };

    const response = await fetch("http://localhost:5501/api/prescriptions", {
      method: "POST",
      body: JSON.stringify(prescription),
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
      setMedicine("");
      setInstructions("");
      console.log("new Prescription added:", json);
    }
    console.log(prescription);
  };

  //  const getReviews = async() =>{
  //     const res = await axios.get("http://localhost:5501/api/reviews")
  //     .then(respose=> setReview(respose.data))
  // }

  useEffect(() => {
    // getReviews()
  }, []);
  // console.log(review)
  return (
    <section className="contact-form">
      <div className="container">
        <div className="section-header text-center">
          <h2>Send Prescriptions</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="head-text">Medicine</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setMedicine(e.target.value)}
                      value={medicine}
                      name="medicine"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="head-text">Other Instructions</label>
                    <textarea
                      className="form-control"
                      name="instructions"
                      onChange={(e) => setInstructions(e.target.value)}
                      rows="2"
                      value={instructions}
                    />
                  </div>
                </div>
              </div>
              <button className="btn bg-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prescription;
