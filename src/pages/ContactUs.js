import React from 'react'
import { ContactForm } from '../components'

const ContactUs = () => {
  return (
    <div>
        <div className='row mx-4 my-3'>
          <p>Home <span style={{color:"#ff9600"}}>/ Contact Us</span> </p>
          <h4 className='text-secondary'>Contact Us</h4>
        </div>
        <div className=' w-100 '>
            <ContactForm/>
        </div>
    </div>
  )
}

export default ContactUs