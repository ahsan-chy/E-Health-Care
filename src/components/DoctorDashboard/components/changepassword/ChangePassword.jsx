import React from 'react'
import { useForm } from "react-hook-form";
import "../docterdashboard.css"

const ChangePassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      console.log(data);
  }
  return (
    <div class="password-tab ">
      <div class="row">
          <div className='col-lg-12 col-md-12'>
          <form onSubmit={handleSubmit(onSubmit)} className="row needs-validation" noValidate>

          <div className="input-sec">
              <label htmlFor="password">Old Password</label>
              <input 
              type="password"
              id="password"
              name="password" 
              {...register("password",  { required: {value: true, message: "Please Valid Password"} })}
              className={ errors.phone ? "form-control is-invalid" : "form-control" } 
              />
              {
              errors.password && (
                  <div className="invalid-feedback">
                  {errors.password.message}
                  </div>
              )}
          </div>
          <div className="input-sec">
              <label htmlFor="password">New Password</label>
              <input 
              type="password"
              id="password"
              name="password" 
              {...register("password",  { required: {value: true, message: "Please Fill Password Field"} })}
              className={ errors.phone ? "form-control is-invalid" : "form-control" } 
              />
              {
              errors.password && (
                  <div className="invalid-feedback">
                  {errors.password.message}
                  </div>
              )}
          </div>
          <div className="input-sec">
              <label htmlFor="password">Confirm Password</label>
              <input 
              type="password"
              id="password"
              name="password" 
              {...register("password",  { required: {value: true, message: "Please Fill Password Field"} })}
              className={ errors.phone ? "form-control is-invalid" : "form-control" } 
              />
              {
              errors.password && (
                  <div className="invalid-feedback">
                  {errors.password.message}
                  </div>
              )}
          </div>

          <div className="row px-1 mt- confirm-btn">
              <button 
              className="btn"
              type="submit"
              > 
              Save Password 
              </button>
          </div>
          </form>
          </div>
      </div>
    </div>
  )
}

export default ChangePassword