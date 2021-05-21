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
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={true}
                className="mySwiper"
            >
                <SwiperSlide>
                <img className="work_img"  alt="work images" src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                <img className="work_img"  alt="work images" src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                <img  className="work_img" alt="work images" src={img3} />
                </SwiperSlide>
            </Swiper>
        </Container>
        </div>
    )
}

export default Work
