
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4s5de4h', 'template_gmbw6ur', form.current, 'VrIcrS0UWMoGCbN2W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <AiOutlineMail  className='contact__option-icons' />
            <h4>Email</h4>
            <h5>abrshefru1427@gmail.com</h5>
          <a href="mailto:abrhamwube085@gmail.com" >Send a message</a>
          </article>
          <article className='contact__option'>
          <BsMessenger className='contact__option-icons' />
            <h4>Messanger</h4>
            <h5>abrshe</h5>
          <a href="https://www.facebook.com/" >Send a message</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icons' />
            <h4>Whatsup</h4>
            <h5>abrham wube</h5>
          <a href="https://faq.whatsapp.com/452366545421244/?locale=kk_KZ" >Send a message</a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required /><br /><br />
          <input type="email" name="email" placeholder='Your email' required /><br /><br />
          <textarea name="message" rows="7" placeholder='Your full message' required></textarea><br /><br />
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact 