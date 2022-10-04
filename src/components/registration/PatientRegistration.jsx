import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { RiGoogleFill, RiFacebookFill } from "react-icons/ri";

const PatientRegistration = () => {
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
            <div className="col-md-6">
              <div className="my-5">
                <div className="card px-4 py-3 w-75 mx-auto  shadow-sm">
                <div className="row py-1 mb-4 text-center">
                        <div className="col-md-6">
                            <h4 className=" text-start" style={{color:'#0E8A8A'}}>Patient Register</h4>
                        </div>
                        <div className="col-md-6 pt-2 pe-1">
                            <h6 className=" text-end"><Link className=" text-decoration-none" to="/DrsRegistration"  style={{color:'#ff9600'}}>Are you a Doctor ?</Link></h6>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="row needs-validation" noValidate>

                    <div className="row px-1">
                    <label htmlFor="fullName" className="form-label " style={{color:'#0E8A8A'}}> Full Name  </label>
                        <input 
                        type="text"
                        id="fullname"
                        name="fullname" 
                        className={ errors.fullname ? "form-control is-invalid" : "form-control" }
                        {...register("fullname",  { required: {value: true, message: "Enter Name"}, 
                        maxLength: {value:20, message: "Name should no longer then 20 characters"},
                        })} 
                        />

                        {errors.fullname && ( 
                            <div className="invalid-feedback">
                            {errors.fullname.message}
                            </div>
                            )}
                    </div>

                    <div className="row px-1 mt-3">
                    <label htmlFor="phone" className="form-label " style={{color:'#0E8A8A'}}> Phone Number </label>
                        <input 
                        type="tel"
                        id="phone"
                        name="phone" 
                        {...register("phone", { required: {value: true, message: "Enter Phone No"},} )} 
                        className={ errors.phone ? "form-control is-invalid" : "form-control" }
                        />
                        {errors.phone && (
                        <div className="invalid-feedback">
                            {errors.phone.message}
                        </div>
                        )
                        }

                    </div>

                    <div className="row px-1 mt-3">
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
                        Signup 
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
                        <p> Already have an account 
                            <Link className=" text-decoration-none" to="/PatientsLogin">
                                <span style={{color:'#ff9600', cursor:'pointer'}}> Login</span>
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

export default PatientRegistration