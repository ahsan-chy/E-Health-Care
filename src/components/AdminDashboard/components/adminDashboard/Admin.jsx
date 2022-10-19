import React from 'react'
import { FaEye , FaCheck , FaTimes} from 'react-icons/fa';
import "../admindashboard.css"

const Admin = () => {
  return (
        <div>
        <div class="row">
<div class="col-md-6 d-flex">

<div class="card card-table flex-fill">
<div class="card-header">
<h4 class="card-title">Doctors List</h4>
</div>
<div class="card-body">
<div class="table-responsive">
<table class="table table-hover table-center mb-0">
<thead>
<tr>
<th>Doctor Name</th>
<th>Speciality</th>
<th>Earned</th>
<th>Reviews</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html">Dr. John Moffett</a>
</h2>
</td>
<td>Psychiatry</td>
<td>$3200.00</td>
<td>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star-o text-secondary"></i>
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html">Dr. Mary Nielson</a>
</h2>
</td>
<td>Psychiatry</td>
<td>$3100.00</td>
<td>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star-o text-secondary"></i>
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html">Dr. Donald Kahn</a>
</h2>
</td>
<td>Neuroradiology</td>
<td>$4000.00</td>
<td>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star-o text-secondary"></i>
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html">Dr. Brady Chambliss</a>
</h2>
</td>
<td>Neuroradiology</td>
<td>$3200.00</td>
<td>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star-o text-secondary"></i>
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html">Dr. Marvin Campbell</a>
</h2>
</td>
<td>Physical stress</td>
<td>$3500.00</td>
<td>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star text-warning"></i>
<i class="fe fe-star-o text-secondary"></i>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>
<div class="col-md-6 d-flex">

<div class="card  card-table flex-fill">
<div class="card-header">
<h4 class="card-title">Patients List</h4>
</div>
<div class="card-body">
<div class="table-responsive">
<table class="table table-hover table-center mb-0">
<thead>
<tr>
<th>Patient Name</th>
<th>Phone</th>
<th>Last Visit</th>
<th>Paid</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html">Julio Hart </a>
</h2>
</td>
<td>8286329170</td>
<td>20 Oct 2020</td>
<td class="text-end">$100.00</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html">Kimberly Klingler </a>
</h2>
</td>
<td>2077299974</td>
<td>22 Oct 2020</td>
<td class="text-end">$200.00</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html">Robert Menard</a>
</h2>
</td>
<td>2607247769</td>
<td>21 Oct 2020</td>
<td class="text-end">$250.00</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html"> Eric Parks</a>
</h2>
</td>
<td>5043686874</td>
<td>21 Sep 2020</td>
<td class="text-end">$150.00</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html">Ashley King</a>
</h2>
</td>
<td>9548207887</td>
<td>18 Sep 2020</td>
<td class="text-end">$350.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>
       </div>
       <div class="row">
<div class="col-md-12">

<div class="card card-table">
<div class="card-header">
<h4 class="card-title">Appointment List</h4>
</div>
<div class="card-body">
<div class="table-responsive">
<table class="table table-hover table-center mb-0">
<thead>
<tr>
<th>Doctor Name</th>
<th>Speciality</th>
<th>Patient Name</th>
<th>Apointment Time</th>
<th>Status</th>
<th class="text-end">Amount</th>
</tr>
</thead>
<tbody>

<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p2.jpg" alt="User Image"/></a>
<a href="profile.html">Dr. Mary Nielson</a>
</h2>
</td>
<td>Psychiatry</td>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p2.jpg" alt="User Image"/></a>
<a href="profile.html">Kimberly Klingler </a>
</h2>
</td>
<td>5 Nov 2020 <span class="text-success d-block">11.00 AM - 11.35 AM</span></td>
<td>
<div className=" d-flex form-check form-switch">
    <input className="form-check-input mx-2" type="checkbox" role="switch" id="switch" />
</div>
</td>
<td class="text-end">
$300.00
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p2.jpg" alt="User Image"/></a>
<a href="profile.html">Dr. Donald Kahn</a>
</h2>
</td>
<td>Neuroradiology</td>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p2.jpg" alt="User Image"/></a>
<a href="profile.html">Robert Menard</a>
</h2>
</td>
<td>11 Nov 2020 <span class="text-success d-block">12.00 PM - 12.15 PM</span></td>
<td>
<div className=" d-flex form-check form-switch">
    <input className="form-check-input mx-2" type="checkbox" role="switch" id="switch" />
</div>
</td>
<td class="text-end">
$150.00
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p2.jpg" alt="User Image"/></a>
<a href="profile.html">Dr. Brady Chambliss</a>
</h2>
</td>
<td>Neuroradiology</td>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p2.jpg" alt="User Image"/></a>
<a href="profile.html"> Eric Parks</a>
</h2>
</td>
<td>7 Nov 2020<span class="text-success d-block">1.00 PM - 1.20 PM</span></td>
<td>
<div className=" d-flex form-check form-switch">
    <input className="form-check-input mx-2" type="checkbox" role="switch" id="switch" />
</div>
</td>
<td class="text-end">
$150.00
 </td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p2.jpg" alt="User Image"/></a>
<a href="profile.html">Dr. Marvin Campbell</a>
</h2>
</td>
<td>Physical stress</td>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p2.jpg" alt="User Image"/></a>
<a href="profile.html">Ashley King</a>
</h2>
</td>
<td>15 Nov 2020 <span class="text-success d-block">1.00 PM - 1.15 PM</span></td>
<td>
<div className=" d-flex form-check form-switch">
    <input className="form-check-input mx-2" type="checkbox" role="switch" id="switch" />
</div>
</td>
<td class="text-end">
$200.00
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>
</div>
        </div>
  )
}

export default Admin