import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import image1 from '../../assets/images/image-1.webp';
import image2 from '../../assets/images/image-2.webp';
import image3 from '../../assets/images/image-3.webp';
import image4 from '../../assets/images/image-4.webp';
import image5 from '../../assets/images/image-5.webp';
import image6 from '../../assets/images/image-6.webp';

const Banner = () => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={image1} alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} alt="Image 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image4} alt="Image 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image5} alt="Image 5" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image6} alt="Image 6" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
