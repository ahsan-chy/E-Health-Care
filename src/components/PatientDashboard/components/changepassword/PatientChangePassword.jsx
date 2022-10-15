import React from 'react'
import { useForm } from "react-hook-form";
import "../patientdashboard.css"

const PatientChangePassword = () => {
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
              <label htmlFor="password" className="form-label "> Old Password  </label>
                <input 
                  type="password"
                  id="oldPassword"
                  name="oldPassword" 
                  className={ errors.oldPassword ? "form-control is-invalid" : "form-control" }
                  {...register("oldPassword",  { required: {value: true, message: "Please Enter Valid Password"},
                  minLength: {value:6, message: "Password should be greater then 6 characters"}, 
                  maxLength: {value:20, message: "Password should no longer then 20 characters"},
                })} 
                  />

                  {errors.oldPassword && ( 
                    <div className="invalid-feedback">
                      {errors.oldPassword.message}
                      </div>
                    )}
          </div>
          
          <div className="input-sec">
              <label htmlFor="newPassword" className="form-label "> New Password  </label>
                <input 
                  type="password"
                  id="newPassword"
                  name="newPassword" 
                  className={ errors.newPassword ? "form-control is-invalid" : "form-control" }
                  {...register("newPassword",  { required: {value: true, message: "Please Enter Valid Password"},
                  minLength: {value:6, message: "Password should be greater then 6 characters"},
                  maxLength: {value:20, message: "Password should no longer then 20 characters"},
                })} 
                  />

                  {errors.newPassword && ( 
                    <div className="invalid-feedback">
                      {errors.newPassword.message}
                      </div>
                    )}
          </div>

          <div className="input-sec">
              <label htmlFor="confirmPassword" className="form-label "> Confirm Password  </label>
                <input 
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword" 
                  className={ errors.confirmPassword ? "form-control is-invalid" : "form-control" }
                  {...register("confirmPassword",  { required: {value: true, message: "Please Enter Valid Password"},
                  minLength: {value:6, message: "Password should be greater then 6 characters"}, 
                  maxLength: {value:20, message: "Password should no longer then 20 characters"},
                })} 
                  />

                  {errors.confirmPassword && ( 
                    <div className="invalid-feedback">
                      {errors.confirmPassword.message}
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

export default PatientChangePassword