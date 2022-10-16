import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { RiGoogleFill, RiFacebookFill } from "react-icons/ri";
import "./form.css"

const PatientLogin = () => {
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        login({
            email:email.current.value,
            password:password.current.value
        })
    }
    const login = async (user) => {
        // debugger
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(user)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch(`http://localhost:5501/api/login`, requestOptions)
            .then(response => response.text())
            .then(result => {
                let response = JSON.parse(result)
                console.log(result);
                console.log("response", response);
                if(response.message == "success" ){
                    localStorage.setItem('userName', response.user.name);
                    localStorage.setItem('email', response.user.email);
                    localStorage.setItem('userRole', response.user.role);
                    localStorage.setItem('isLoggedIn', true);
                    // Navigate to Patient Dashboard
                    window.open('PatientDashboard/patient', "_self");
                }
                else{
                    alert(response.message)
                }
            })
            .catch(error => {});
    }
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
                    <div className="col-md-6">
                        <h4 className=" text-start" style={{color:'#0E8A8A'}}>Patient Login</h4>
                    </div>
                    <div className="col-md-6 pt-2 pe-1">
                        <h6 className=" text-end"><Link className=" text-decoration-none" to="/DrsLogin"  style={{color:'#ff9600'}}>Login as Doctor ?</Link></h6>
                    </div>
                </div>
                    <form onSubmit={handleSubmit} className="row needs-validation" noValidate>

                    <div className="row px-1 mt-1">
                        <label htmlFor="email" className="form-label " style={{color:'#0E8A8A'}}>E-Mail</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                        ref={email}
                        />
                        
                    </div>
                    <div className="px-1 mt-3">
                        <label htmlFor="password" className="form-label " style={{color:'#0E8A8A'}}>Password</label>
                        <input 
                        type="password"
                        id="password"
                        name="password" 
                        className="form-control" 
                        required
                        ref={password}
                        />
                        
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
                    {/* <div className="col-md-6 px-1 my-3">
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
                    </div> */}
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