import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { RiGoogleFill, RiFacebookFill } from "react-icons/ri";

const PatientLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  console.log(errors); 

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 pt-4">
                <div className='container'style={{width:'100%', height: '490px'}}>
                    <img src="/images/online patient.jpg" alt="Login/Registration"  style={{width:'auto', height:'100%'}} />
                </div>
            </div>
            <div className="container col-md-6">
              <div className="mt-5">
                <div className="card px-4 py-3 w-75 mx-auto  shadow-sm">
                <div className="row py-1 mb-4 text-center">
                        <h3 className=" text-center" style={{color:'#0E8A8A'}}>Login</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="row needs-validation" noValidate>

                    <div className="row px-1 mt-1">
                        <label htmlFor="email" className="form-label " style={{color:'#0E8A8A'}}>E-Mail</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        {...register("email",  { required: {value: true, message:"Enter Email"}, 
                        pattern: {value: /^\S+@\S+$/i, message: "The email address you entered is not valid.", },
                        })} 
                        className={ errors.email ? "form-control is-invalid" : "form-control" } 
                        />
                        {errors.email &&(
                        <div className="invalid-feedback">
                            {errors.email.message}
                            </div>
                        )}
                    </div>
                    <div className="px-1 mt-3">
                        <label htmlFor="password" className="form-label " style={{color:'#0E8A8A'}}>Password</label>
                        <input 
                        type="password"
                        id="password"
                        name="password" 
                        {...register("password",  { required: {value: true, message: "Enter Password"} })}
                        className={ errors.phone ? "form-control is-invalid" : "form-control" } 
                        />
                        {
                        errors.password && (
                            <div className="invalid-feedback">
                            {errors.password.message}
                            </div>
                        )
                        }
                    </div>
                    
                    <div className="row px-1 mt-3">
                        <button 
                        className="mt-3 w-100 btn text-white"
                        type="submit"
                        style={{backgroundColor:'#0E8A8A'}}
                        > 
                        Login 
                        </button>
                    </div>
                    <div className="col-md-6 px-1 my-3">
                        <button 
                        className="mt-3 w-100 btn text-white"
                        type="submit"
                        style={{backgroundColor:'#3A559F'}}
                        > <RiFacebookFill /> Facebook 
                        </button>
                    </div>
                    <div className="col-md-6 px-1 my-3">
                        <button 
                        className="mt-3 w-100 btn text-white"
                        type="submit"
                        style={{backgroundColor:'#DD4B39'}}
                        > <RiGoogleFill /> Gmail 
                        </button>
                    </div>
                </form>
                    <div className='text-center mt-2'>
                      <p> Don’t have an account? 
                       <Link className=" text-decoration-none" to="/PatientsRegistration">
                          <span style={{color:'#ff9600', cursor:'pointer'}}> Register</span>
                        </Link>
                      </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default PatientLogin