import React from 'react'
import './services.css'
import {FaRegCheckCircle} from 'react-icons/fa'

const Services = props => {
  return (
    <section  className="servicemain" id="services">
      
      <h5>What I offer</h5>
      <h2>Services </h2>
      
      <div className="container container__services">
      <article className='services'>
        <div className="service__head">
          <h3>UI/UX Design</h3>
          </div>
          <ul className='services_list'>
           <li>
            <FaRegCheckCircle  className=' list__icons'/>
            <p>Colours and imagery.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Typography.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Spacing.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>The visual design.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Animations.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Responsive design .</p>
            </li>
            </ul>
        
      </article>
      <article className='services'>
        <div className="service__head">
          <h3>Web Development</h3>
          </div>
          <ul className='services_list'>
           <li>
            <FaRegCheckCircle  className=' list__icons'/>
            <p>HTM.L</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Css.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Javascript.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Angular and React.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>APIs.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Express and Laravel.</p>
            </li>
            </ul>
        
      </article>
      <article className='services'>
        <div className="service__head">
          <h3>Content creation</h3>
          </div>
          <ul className='services_list'>
           <li>
            <FaRegCheckCircle  className=' list__icons'/>
            <p>Audio.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Blog posts.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>E-books.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Social media content.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Videos.</p>
            </li>
            <li>
            <FaRegCheckCircle  className='list__icons'/>
            <p>Images/photos.</p>
            </li>
            </ul>
        
      </article>
      
     
     
      
      </div>
    </section>
  )
}



export default Services