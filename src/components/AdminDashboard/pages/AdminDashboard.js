import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideNav} from '../components';
import '../components/admindashboard.css'


const PatientDashboard = () => {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="row mx-4 my-3">
        <p>
          Home <span style={{ color: "#ff9600" }}>/ Admin Dashboard</span>{" "}
        </p>
        <h4 className="text-secondary">Dashboard</h4>
      </div>

      {/* Dashboard Components */}
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-md-3 px-1">
            {/* Doctor Side Navbar */}
            <div className="profile-sidebar">
              <div class="widget-profile pro-widget-content">
                <div class="profile-info-widget">
                  <a href="#" class="booking-doc-img">
                    <img src="/images/admin1.jpg" alt="User Image" />
                  </a>
                  <div class="profile-det-info">
                    <h3>Salman Saeed</h3>
                    <div class="patient-details">
                      <h5 class="mb-0">Admin</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-start">
                {/* <DrSideMenu/> */}
                <SideNav />
              </div>
            </div>
          </div>

          {/*  inside Doctor Dashboard Components*/}
          <div className="col-md-9 right-tab">
            <div class="tab-content">
                
            <Outlet />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default PatientDashboard