import React from 'react';
import "./contact.css"
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';


function Contact() {

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hassanshazaibte24@gmail.com</h5>
            <a href="mailto:hassanshazaibte24@gmail.com" >Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>123-456-789</h5>
            <a href="/#" >Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="10" required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
