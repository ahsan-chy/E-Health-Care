import React from 'react'

const Transactions = () => {
  return (
    <div>
      <div class="content container-fluid">

<div class="page-header">
<div class="row">
<div class="col-sm-12">
<h3 class="page-title">Transactions</h3>
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
<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
  <div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="DataTables_Table_0_length"><label> 
  </label></div></div><div class="col-sm-12 col-md-6"></div></div><div class="row"><div class="col-sm-12"><table class="datatable table table-hover table-center mb-0 dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
<thead>
<tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Invoice Number: activate to sort column descending" >Invoice Number</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Patient ID: activate to sort column ascending" >Patient ID</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Patient Name: activate to sort column ascending" >Patient Name</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Total Amount: activate to sort column ascending" >Total Amount</th><th class="text-center sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" >Status</th><th class="text-end sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" >Actions</th></tr>
</thead>
<tbody>

<tr role="row" class="odd">
<td class="sorting_1"><a href="invoice.html">#IN0001</a></td>
<td>#PT001</td>
<td>
<h2 class="table-avatar">
<a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="/images/p2.jpg" alt="User Image"/></a>
<a href="profile.html">Julio Hart </a>
</h2>
</td>
<td>$100.00</td>
<td class="text-center">
<span class="badge rounded-pill bg-success inv-badge">Paid</span>
</td>
<td class="text-end">
<div class="actions">
<a class="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal">
<i class="fe fe-trash"></i> Delete
</a>
</div>
</td>
</tr>

</tbody>
</table></div></div>
<div class="row"><div class="col-sm-12 col-md-5">
  <div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite"></div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
   </div></div></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
    </div>
  )
}

export default Transactions