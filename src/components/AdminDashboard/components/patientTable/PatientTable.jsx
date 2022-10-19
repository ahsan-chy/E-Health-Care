import React from 'react'

const PatientTable = () => {
  return (
    <div>
      <div class="content container-fluid">

<div class="page-header">
<div class="row">
<div class="col-sm-12">
<h3 class="page-title">List of Patient</h3>
<ul class="breadcrumb">
</ul>
</div>
</div>
</div>

<div class="row">
<div class="col-sm-12">
<div class="card">
<div class="card-body">
<div class="table-responsive">
<div class="table-responsive">
<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
  <div class="row"><div class="col-sm-12 col-md-6">
    <div class="dataTables_length" id="DataTables_Table_0_length"><label>
      </label></div></div><div class="col-sm-12 col-md-6"></div></div><div class="row"><div class="col-sm-12"><table class="datatable table table-hover table-center mb-0 dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
<thead>
<tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Patient ID: activate to sort column descending" >Patient ID</th>
<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Patient Name: activate to sort column ascending" ></th>
<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" >Age</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Address: activate to sort column ascending" >Address</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Phone: activate to sort column ascending" >Phone</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Last Visit: activate to sort column ascending" >Last Visit</th><th class="text-end sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Paid: activate to sort column ascending" >Paid</th></tr>
</thead>
<tbody>















<tr role="row" class="odd">
<td class="sorting_1">#PT001</td>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p1.jpg" alt="User Image"/></a>
<a href="profile.html">Julio Hart </a>
</h2>
</td>
<td>29</td>
<td>4417 Goosetown Drive, Taylorsville, North Carolina, 28681</td>
<td>8286329170</td>
<td>20 Oct 2020</td>
<td class="text-end">$100.00</td>
</tr>
<tr role="row" class="even">
<td class="sorting_1">#PT002</td>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p2.jpg" alt="User Image"/></a>
<a href="profile.html">Kimberly Klingler </a>
</h2>
</td>
<td>23</td>
<td>4026 Fantages Way, Brunswick, Maine, 04011</td>
<td>2077299974</td>
<td>22 Oct 2020</td>
<td class="text-end">$200.00</td>
</tr>


</tbody>
</table>
</div></div>
<div class="row">
  <div class="col-sm-12 col-md-5"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">
  </div>
    </div><div class="col-sm-12 col-md-7">
      <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
       
                </div></div></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    </div>
  )
}

export default PatientTable