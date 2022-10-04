
import { fetchWrapper } from '../apiIntercepter/intercepter';

export async function getDoctors(){
    let url = "http://localhost:4000/doctors";
    return await fetchWrapper(url, "GET", false);
}

export async function addDoctors(data){
    let url = "http://localhost:4000/doctors";
    return await fetchWrapper(url, "POST", false, data,);
}


export async function getDoctorById(id){
    let doctorsData = await getDoctors()
    // const doct = doctorsData.find((d) => parseInt(d._id) === id);  // Poor Coding Technique /
    const doct = doctorsData.find((d) => d._id === id)
    // console.log("doctors Data", doctorsData)
    // console.log("doctors doct ID data", doct)
    // console.log("Argument ID", id)
    return doct
}
