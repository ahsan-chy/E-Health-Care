import React from 'react'

const greenColor = {
    backgroundColor:"#0E8A8A"
}

const HealthCare = () => {
  return (
    <div className='mb-4 text-white' style={greenColor}>
        <div className="row py-4">
            <div className="col-md-9">
                <div className="row ps-5">
                    <div className="col-md-2 ps-5">
                        <img src="/images/24-hours-supports.png" alt=""  style={{width:'80px'}}/>
                    </div>
                    <div className="col-md-10 ps-0">
                        <h2>Health Care Center</h2>
                        <p>If you have any Emergency by health problem contact this No. 1234556 or book Appointent</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 py-3 ps-5">
                <button className="btn btn-light rounded-pill px-4 py-2 border border-light" style={{color: "#0E8A8A"}}>Find Doctor</button>
            </div>
        </div>
    </div>
  )
}

export default HealthCare