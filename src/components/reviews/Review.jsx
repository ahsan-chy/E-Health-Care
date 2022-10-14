import React, { useEffect, useState } from 'react'
import "./review.css";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import axios from 'axios';

const Review = () => {
 const [comments, setComments] = useState('')
 const [error, setError] = useState(null)

 
 const handleSubmit = async (e) => {
    e.preventDefault()

    const review = {comments}
    
    const response = await fetch('http://localhost:5501/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        setError(json.error)
      }
      if (response.ok) {
        setError(null)
        setComments("")
        console.log('new review added:', json)
      }
      console.log(review)
  
}

useEffect(()=>{
    // getReviews()

},[])
// console.log(review)
  return (
    <section className="contact-form">
      <div className="container">
        <div className="section-header text-center">
          <h2>Send your Feedback</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="head-text">Write Your Review <span>*</span></label>
                    <textarea
                      className="form-control"
                      name="comments"
                      onChange={(e) => setComments(e.target.value)}
                      rows="2"
                      value={comments}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="recommend-btn">
                    <span className="head-text">Recommend?</span>
                    <div className="up-tmb">
                      Yes &nbsp;
                      <FaRegThumbsUp />
                    </div>
                    <div className="down-tmb">
                      No &nbsp;
                      <FaRegThumbsDown />
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review