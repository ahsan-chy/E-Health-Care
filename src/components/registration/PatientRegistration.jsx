import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { RiGoogleFill, RiFacebookFill } from "react-icons/ri";
import "./form.css"

const PatientRegistration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("patient");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const patients = {
          name,
          email,
          phone,
          password,
          role
        };

    const response = await fetch("http://localhost:5501/api/users", {
        method: "POST",
        body: JSON.stringify(patients),
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
        setPassword("");
        console.log("Patient Record added:", json);
        }
        console.log(patients);
    };
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
                    <form onSubmit={handleSubmit} className="row needs-validation" noValidate>

                    <div className="row px-1">
                    <label htmlFor="fullName" className="form-label " style={{color:'#0E8A8A'}}> Full Name  </label>
                        <input 
                        type="text"
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        required
                        />
                    </div>

                    <div className="row px-1 mt-3">
                    <label htmlFor="phone" className="form-label " style={{color:'#0E8A8A'}}> Phone Number </label>
                        <input 
                        type="tel"
                        name="phone" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        required
                        />
                    </div>

                    <div className="row px-1 mt-3">
                        <label htmlFor="email" className="form-label " style={{color:'#0E8A8A'}}>E-Mail</label>
                        <input 
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                        />
                    </div>
                    <div className="px-1 mt-3">
                        <label htmlFor="password" className="form-label " style={{color:'#0E8A8A'}}>Password</label>
                        <input 
                        type="password"
                        value={password}
                        name="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required
                        />
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