import React from 'react'
import CV from'../../assets/mycv.pdf'
import './header.css'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn la'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let Us Talk</a>

    </div>
  )
}

export default CTA