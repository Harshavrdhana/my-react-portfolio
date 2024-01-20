import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ab9c1yo', 'template_d3itj5w', form.current, 'Pke-_tadVOi5Kf-sp')
    
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
 
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>vardhanun333@gmail.com</h5>
            <a href='mailto:vardhanun333@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href='https://m.me/earnest.achiever' target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>8296295988</h5>
            <a href='https://api.whatsapp.com/send?phone+918296295988' target='_blank'>Send a message</a>
          </article>
        </div>
        {/*End of cotact details*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your full name'
            required
          />
          <input
            type="email"
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder='your Message'
            required
          ></textarea>
          <button
            type='submit'
            className='btn btn-primary'
          >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact