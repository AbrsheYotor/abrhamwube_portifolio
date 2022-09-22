import React from 'react'
import './about.css'
import EF from '../../assets/abrsheyotor.png'
import {FaAward} from 'react-icons/fa'
import {RiFolderAddFill} from 'react-icons/ri'
import {RiProjectorLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={EF} alt="here is me" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <FaAward  className='about__icons'/>
              <h5>Experience</h5>
              <small>2 years working</small>
            </article>
            <article className='about__card'>
            <RiFolderAddFill className='about__icons'/>
              <h5>Clients</h5>
              <small>200 + clients </small>
            </article>
            <article className='about__card'>
            <RiProjectorLine className='about__icons'/>
              <h5>Projects</h5>
              <small>20 plus</small>
            </article>
          </div>
          <p>
            I started learning web developent since I was grade 12. I have a great passion for web development
            since that time. After joing university I have learned many new skills. I often have a great desire to 
            make something new that has a potential to solve a real world problems. I also engage myself in adapting
            new technlogies. To sum up I am a curious person to do something different.
          </p>
           <a href='#contact' className='btn btn-primary'>Let Us Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About