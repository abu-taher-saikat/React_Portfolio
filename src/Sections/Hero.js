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

            </Swiper>
        </div>
    )
}

export default Hero
