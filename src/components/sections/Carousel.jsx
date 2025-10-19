import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


// import required modules
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules';
import {carouselData} from '../../data/carouselData.js';

const Carousel = () => {
    return (
        <div className="container-fluid p-0 mb-5">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                autoplay={{delay: 5000, disableOnInteraction: false}}
                loop={true}
                effect={'fade'}
            >
                {carouselData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img className="w-100" src={slide.bgImage} alt="Фон карусели"/>
                        <div className="carousel-caption d-flex align-items-center">
                            <div className="container">
                                <div className="row align-items-center justify-content-center justify-content-lg-start">
                                    <div className="col-10 col-lg-7 text-center text-lg-start">
                                        <h6 className="text-white text-uppercase mb-3 animated slideInDown">{slide.subtitle}</h6>
                                        <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                                            {typeof slide.title === 'object' ? (
                                                <>
                                                    <span
                                                        className="d-none d-lg-block">{slide.title.desktop}</span>
                                                    <span className="d-lg-none">{slide.title.mobile}</span>
                                                </>
                                            ) : (
                                                slide.title
                                            )}
                                        </h1>
                                        <a href={slide.button.link}
                                           className="btn btn-primary py-3 px-5 animated slideInDown">
                                            {slide.button.text}<i className="fa fa-arrow-right ms-3"></i>
                                        </a>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                        <picture>
                                            <source srcSet={slide.mainImage.webp} type="image/webp"/>
                                            <source srcSet={slide.mainImage.png} type="image/png"/>
                                            <img className="img-fluid" src={slide.mainImage.png}
                                                 alt={slide.mainImage.alt}/>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;