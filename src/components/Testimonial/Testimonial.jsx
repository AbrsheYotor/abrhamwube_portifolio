import React from 'react'
import './testimonial.css'
import AVATAR from '../../assets/tom.jpg'
import AVATAR2 from '../../assets/chuchu.jpg'
import AVATAR3 from '../../assets/chuchu2.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';





import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonial = () => {
  return (
    <section className="testimonials" id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonial</h2>
      
        <Swiper className=" container testimonial__container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}

      
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='testimonial'>
      <div className="client__avatar">
        <img src={AVATAR} alt="hello" />
        </div>
        <h5 className='client__name'>Thomas Wondwosen</h5>
        <small className='client__review'>
          Abrham is a diligent web developer with a great set of abilities and skills. He design me a personal website 
          that help me to post my blogs. He made the design as I told him.To sum up he is a well experienced 
          well developer.
    </small>
    
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
      <div className="client__avatar">
        <img src={AVATAR2} alt="hello" />
        </div>
        <h5 className='client__name'>Abeselom Ayalew</h5>
        <small className='client__review'>
        Abrham is an experienced content creator with a great set of abilities and skills. He built me 
        excellent contents that help me to increase my customers satisfication. We are currently working
        on developing more versatile contents and I am happy by his work.
        </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
      <div className="client__avatar">
        <img src={AVATAR3} alt="hello" />
        </div>
        <h5 className='client__name'>Mekonnen Tesfaye</h5>
        <small className='client__review'>
          Abrham is a well experienced Ui designer. I asked him to prepare a landing page design for my
          personal  and he did it amazingly. He also helped me in changing the figma design to real code.
          He is just amzing man in his ability.
        </small>
      </SwiperSlide>
      
    </Swiper>
    <h4 className='swi'>Swipe the above box to see what client says about me</h4>
</section>
)
}

export default Testimonial