import React from 'react'

const ContactUs = () => {
  return (
    <div className='contact-container'>
      <form action="" className='form-contanier'>
        <input type="text" placeholder='Name' required />
        <input type="email" name="email" placeholder='E-mail' required />
        <input type="text" placeholder='Message' required />
        <button>Submit</button>
      </form>
      <div className='mail'>
        <h3>Mail Us</h3>
        <p>vegagamedesign@gmail.com</p>
      </div>
    </div>
  )
}

export default ContactUs