import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/abrshewube.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
<div className="container header__container " id='home'>
<h5>Hello I'm</h5>
<h1>Abrham Wube</h1>
<h5 className="text-light">Full Stack Developer</h5>
<CTA />
<HeaderSocials />
<div className="me">
    <img  className = "ima" src={ME} alt="abrhamwube"/>
</div>

<a href="#contact" className='scroll__down sco'>Scroll Down</a>
</div>

</header>
  )
}

export default Header