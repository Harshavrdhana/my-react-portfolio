import React from 'react'
import "./inspiration.css"
import data from "./InspirationData"
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

  const testimonialsElements = () => (
    data.map(({ ...data }, index) => (
      <SwiperSlide key={index} className='testimonial '

      >
        <div className='client_avatar'>
          <img src={data.avatar} />
        </div>
        <h5>{data.name}</h5>
        <small className='client_review'>
          {data.review}
        </small>
      </SwiperSlide>

    ))
  )
  return (
    <section id=" testimonial">
      <h5>My Heroes</h5>
      <h2>Inspiration</h2>
      <Swiper className='container testimonials_container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {testimonialsElements()}
      </Swiper>
    </section>
  )
}

export default Testimonials