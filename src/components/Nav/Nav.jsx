import React from 'react'
import './nav.css'
import {BiHomeCircle} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {RiServiceLine } from 'react-icons/ri'
import {BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'



const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
     <a href="#home" onclick={()=>setActiveNav('#')} className={activeNav==='#'? 'active':''}><BiHomeCircle className='ico'/></a>
     <a href="#about" onclick={()=>setActiveNav('#about')}className={activeNav==='#about'? 'active':''}><BiUserCircle className='ico'/></a>
     <a href="#experience" onclick={()=>setActiveNav('#experience')}className={activeNav==='#experience'? 'active':''}><BsBookmarkCheckFill className='ico'/></a>
     <a href="#services" onclick={()=>setActiveNav('#services')}className={activeNav==='#services'? 'active':''}><RiServiceLine className='ico' /></a>
     <a href="#contact" onclick={()=>setActiveNav('#contact')}className={activeNav==='#contact'? 'active':''}><BiMessageDetail className='ico'/></a>

     

    </nav>
  )
}

export default Nav