import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/fitness.png'
import IMG2 from '../../assets/archees.jpg'
import IMG3 from '../../assets/port2.jpg'

const data=[
  {
id:1,
image:IMG1,
title:'Ecommerce-Website',
github: 'https://github.com',
demo: 'https://best-nike-shopping-website.netlify.app'
},
{
  id:2,
  image:IMG2,
  title:'Archtecture-Website',
  github: 'https://github.com',
  demo: 'https://archtecture-website.netlify.app'
  },
  {
    id:3,
    image:IMG3,
    title:'Tutorial-website',
    github: 'https://github.com',
    demo: 'https://www.w3schools.com/'
    } ,
    
            
]



const Portfolio = () => {
  return (
    <section id="portfolio"  className='porto'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
          return (
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
          <img src={image} alt={title} />
          </div>
              <h3>{title}</h3>
             <div className="portfolio__item-ctn">
             <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' >Live Demo</a>
             </div>
              
        </article>
          )
    })
        }
      </div>
    </section>
  )
}

export default Portfolio