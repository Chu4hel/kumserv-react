import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


// import required modules
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';

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
                <SwiperSlide>
                    <img className="w-100" src="/img/carousel-bg-1.webp" alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Обслуживание
                                        автомобилей //</h6>
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Центр по
                                        обслуживанию легковых авто</h1>
                                    <a href="/service" className="btn btn-primary py-3 px-5 animated slideInDown">Узнать
                                        больше<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <picture>
                                        <source srcSet="/img/carousel-1.webp" type="image/webp"/>
                                        <source srcSet="/img/carousel-1.png" type="image/png"/>
                                        <img className="img-fluid" src="/img/carousel-1.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-100" src="/img/carousel-bg-2.webp" alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Обслуживание
                                        автомобилей //</h6>
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Впервые у нас?
                                        Диагностика авто в подарок</h1>
                                    <a href="/service" className="btn btn-primary py-3 px-5 animated slideInDown">Узнать
                                        больше<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <picture>
                                        <source srcSet="/img/carousel-2.webp" type="image/webp"/>
                                        <source srcSet="/img/carousel-2.png" type="image/png"/>
                                        <img className="img-fluid" src="/img/carousel-2.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img className="w-100" src="/img/carousel-bg-3.webp" alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Обслуживание
                                        автомобилей //</h6>
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Заказываете
                                        масло у нас? Замена в подарок</h1>
                                    <a href="/service" className="btn btn-primary py-3 px-5 animated slideInDown">Узнать
                                        больше<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <picture>
                                        <source srcSet="/img/carousel-2.webp" type="image/webp"/>
                                        <source srcSet="/img/carousel-2.png" type="image/png"/>
                                        <img className="img-fluid" src="/img/carousel-2.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
