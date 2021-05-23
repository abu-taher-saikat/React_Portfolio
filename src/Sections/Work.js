import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Container} from 'react-bootstrap';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// Import Images
import img1 from '../Assets/images/p1-1.jpg'
import img2 from '../Assets/images/p2-2.jpg'
import img3 from '../Assets/images/p3-3.jpg'

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";


// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Work = () => {
    
  return (
    <div className="work">
    <Container>
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
    "rotate": 50,
    "stretch": 0,
    "slidesPerView" : 3,
    "depth": 100,
    "modifier": 3,
    "slideShadows": true
    }} pagination={true} className="mySwiper">
    <SwiperSlide><img alt="" src={img1} /></SwiperSlide>
    <SwiperSlide><img alt="" src={img2} /></SwiperSlide>
    <SwiperSlide><img alt="" src={img3} /></SwiperSlide>
    <SwiperSlide><img alt="" src={img1} /></SwiperSlide>
    <SwiperSlide><img alt="" src={img2} /></SwiperSlide>
    <SwiperSlide><img alt="" src={img3} /></SwiperSlide>
    {/* <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide> */}
    {/* <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide> */}
    {/* <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
    <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
    <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide> */}
    {/* <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
    <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
    <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide>
    <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide>
    <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide>
    <SwiperSlide><img alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide> */}
    </Swiper>
    </Container>
    </div>
  )
}

export default Work
