import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom'
import Doctorprofile from '../components/doctorprofile/Doctorprofile'
import { getDoctorById } from '../services/doctorsApi';

const DrProfile = () => {
  const [drDetails, setDrDetails] = useState({})
  
  const {id} = useParams();
  const dName = useParams()
  const drDetail = async() => {
    let res = await getDoctorById(id);
    // console.log("Dr detials id",res);
    setDrDetails(res)
  }

  useEffect( ()=>{
    drDetail()
  },[])


  return (
    <div>
        <Doctorprofile drDetails = {drDetails}  key={drDetail._id}/>
        
    </div>
  )
}

export default DrProfile