import React from 'react';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import {Image} from 'react-bootstrap';

import sliderImage from '../Assets/images/slider3.jpg';



// install Swiper modules
SwiperCore.use([Pagination]);


const Hero = () => {
    return (
        <div className="hero">
            <Swiper direction={'vertical'} pagination={{
            "clickable": true
            }} className="mySwiper">
                <SwiperSlide>
                    <Image className="hero-image" src={sliderImage} ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="hero-image" src={sliderImage} ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="hero-image" src={sliderImage} ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="hero-image" src={sliderImage} ></Image>
                </SwiperSlide>
                <div class="overlay-wrap section-head">
                        <span class="mb-2">Hello, I am</span>
                        <h1>Justin Lee</h1>
                </div>
            </Swiper>
        </div>
    )
}

export default Hero
