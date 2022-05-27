import React from 'react'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {
  const {t} = useTranslation();
  return (
    <div className='contact-container'>
      <form action="" className='form-contanier'>
        <input type="text" placeholder={t ('form_name')} required />
        <input type="email" name="email" placeholder='E-mail' required />
        <input type="text" placeholder={t ('form_message')} required />
        <button>{t ('submit')}</button>
      </form>
      <div className='mail'>
        <h3>{t ('mail_Us')}</h3>
        <p>vegagamedesign@gmail.com</p>
      </div>
    </div>
  )
}

export default ContactUs