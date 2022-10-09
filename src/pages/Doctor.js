import { useEffect, useState } from 'react';
import DoctorCard from '../components/doctorcard/DoctorCard';
import FilterDoctors from '../components/filterDoctors/FilterDoctors';
import { getDoctors } from '../services/doctorsApi';

const SearchDoctor = () => {
  let [doctors, setDoctors] = useState([]);
  
  const callDoctorApi = async() => {
    let res = await getDoctors();
    // console.log("Response data",res);
    setDoctors(res)
  }
  useEffect( ()=>{
    callDoctorApi()
  },[])
    // let rDoctors =getDoctors()
    // console.log(rDoctors)
  // console.log("doctors data",doctors)

  return (
    <div className=''>
        {/* Top navigation */}
        <div className='row mx-4 my-3'>
            <div className="col-9">
                <p>Home <span style={{color:"#ff9600"}}>/ Search</span> </p>
                <h4 className='text-secondary'>Search Doctor</h4>
            </div>
            <div className="col-3 px-3">
            <div className="container my-4">
              <select className="form-select">
                <option value="1" disabled>Filter</option>
                <option value="1">Rating</option>
                <option value="2">Popular</option>
                <option value="3">Low to High Price</option>
              </select>
            </div>
            </div>
        </div>

        {/* Filter and Doctors */}
        <div className="row mx-4">
            {/* Filters */}
            <div className="col-3 pe-3">
                <FilterDoctors />
            </div>

            {/* Doctors */}
            <div className="col-9 ">
                <DoctorCard doctors={doctors} />
            </div>
        </div>
        

    </div>
  )
}

export default SearchDoctor