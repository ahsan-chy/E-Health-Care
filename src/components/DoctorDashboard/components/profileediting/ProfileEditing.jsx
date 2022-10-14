import React from 'react'
import "../docterdashboard.css"

const ProfileEditing = () => {
  return (
    <div class="profile-edit-tab">
      <div class="right-tab">
      <form  onSubmit="">
        <div className="row basic-info">
          <div className="col-md-6 input-sec-1">
            <div className="form-group bio">
              <label class="head-text">Your Name <span>*</span></label>
              <input type="text" name="doctorname" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 input-sec-2">
            <div className="form-group bio">
              <label class="head-text">Your Email <span>*</span></label>
              <input type="email" name="useremail" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 input-sec-1">
            <div className="form-group">
              <label class="head-text">Phone Number </label>
              <input type="text" name="phone" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 input-sec-2">
            <div className="form-group">
              <label class="head-text">Gender</label>
              <select class="form-select form-control">
                        <option selected="selected">Male</option>
                        <option>FeMale</option>
                      </select>
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="form-group">
              <label class="head-text">Address <span>*</span></label>
              <textarea className="form-control"  name="address" />
            </div>
          </div>
        </div>
        <button className="btn bg-primary" type="submit">Send Message</button>
      </form>
      </div>  
    </div>
  )
}

export default ProfileEditing