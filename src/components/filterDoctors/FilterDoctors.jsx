import React from 'react';
import {exportspecialists} from '../../services/services';


const FilterDoctors = () => {

const specialist = exportspecialists();
let submitdata =(e) => {
    e.preventDefault();
    }

  return (
    <div className='container border rounded-2'>
        <div className="row px-4 py-2 ">
            <h4>Search Filter</h4>
        </div>
          <div className="row px-4 py-4 border-top">
            <input type="search" id="form1" className="form-control" placeholder='Search Doctor'/>
            <form onSubmit={submitdata}>
                <h5 className='mt-4 mb-3'>Gender</h5>
                <div className="form-check my-2">
                    <input className="form-check-input" type="checkbox" value="" id="gendermale" />
                    <label className="form-check-label text-secondary" htmlFor="gendermale">
                        Male Doctor
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="genderfemale" />
                    <label className="form-check-label text-secondary" htmlFor="genderfemale">
                        Female Doctor
                    </label>
                </div>

                <h5 className='mt-5 mb-3'>Select Specialist</h5>
                {specialist.map(spe=>(
                    <div className="form-check my-2" key={spe.specialistiD}>
                        <input className="form-check-input" type="checkbox" value="" id={spe.specialistTitle} />
                        <label className="form-check-label text-secondary" htmlFor={spe.specialistTitle}>
                            {spe.specialistTitle}
                        </label>
                    </div>
                ))
                }

                <div className='d-grid'>
                <button type="submit"  className="btn btn-warning my-4 ">Search</button>
                </div>
            </form>
            </div>
       
         

        
    </div>
  )
}

export default FilterDoctors