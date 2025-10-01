import React from 'react';
import {useInView} from 'react-intersection-observer';

const Features = () => {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <>
            {/* Service Start */}
            <div ref={ref} className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div
                            className={`col-lg-4 col-md-6 ${inView ? 'animated fadeInUp' : 'animate-on-scroll'}`}
                            style={inView ? {animationDelay: '0.1s'} : {}}
                        >
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Качественное обслуживание</h5>
                                    <p>Мы гарантируем высокое качество всех выполняемых работ, используя только
                                        проверенные запчасти и материалы.</p>
                                    {/*<a className="text-secondary border-bottom" href="/service">Читать далее</a>*/}
                                </div>
                            </div>
                        </div>
                        <div
                            className={`col-lg-4 col-md-6 ${inView ? 'animated fadeInUp' : 'animate-on-scroll'}`}
                            style={inView ? {animationDelay: '0.3s'} : {}}
                        >
                            <div className="d-flex bg-light py-5 px-4">
                                <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Опытные работники</h5>
                                    <p>Наша команда состоит из высококвалифицированных специалистов с многолетним опытом
                                        работы в сфере авторемонта.</p>
                                    {/*<a className="text-secondary border-bottom" href="/about#about-details">Читать*/}
                                    {/*    далее</a>*/}
                                </div>
                            </div>
                        </div>
                        <div
                            className={`col-lg-4 col-md-6 ${inView ? 'animated fadeInUp' : 'animate-on-scroll'}`}
                            style={inView ? {animationDelay: '0.5s'} : {}}
                        >
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Современное оборудование</h5>
                                    <p>Мы используем только передовое диагностическое и ремонтное оборудование, что
                                        позволяет нам работать с автомобилями любых марок.</p>
                                    {/*<a className="text-secondary border-bottom" href="/service">Читать далее</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    );
};

export default Features;
