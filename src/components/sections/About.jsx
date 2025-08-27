import React from 'react';
import {useInView} from 'react-intersection-observer';
import './About.css'; // CSS для скрытия элементов до анимации

const About = () => {
    // Хук для отслеживания видимости. `ref` цепляется к корневому элементу секции.
    const {ref, inView} = useInView({
        threshold: 0.2, // Сработает, когда 20% элемента видно
        triggerOnce: true, // Сработает только один раз
    });

    return (
        // Устанавливаем ref на контейнер, чтобы отслеживать его появление на экране
        <div ref={ref} className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
                        {/*
              Применяем анимацию, когда компонент видим (`inView` === true).
              `animate-on-scroll` делает элемент невидимым до начала анимации, чтобы избежать "мерцания".
              `animationDelay` используется для создания эффекта каскадного появления.
            */}
                        <div
                            className={`position-relative h-100 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                            style={inView ? {animationDelay: '0.1s'} : {}}
                        >
                            <img className="position-absolute img-fluid w-100 h-100" src="/img/about.jpg"
                                 style={{objectFit: 'cover'}} alt=""/>
                            <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                                 style={{background: 'rgba(0, 0, 0, .08)'}}>
                                <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Лет</span></h1>
                                <h4 className="text-white">Опыта</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={inView ? 'animated fadeIn' : 'animate-on-scroll'}
                             style={inView ? {animationDelay: '0.3s'} : {}}>
                            <h6 className="text-primary text-uppercase">// О нас //</h6>
                            <h1 className="mb-4"><span className="text-primary">Кумский сервис</span> - лучшее место для
                                вашего авто</h1>
                            <p className="mb-4">В Кумском сервисе мы стремимся предоставлять исключительные услуги по
                                ремонту автомобилей. Наша команда опытных механиков использует только высококачественные
                                запчасти и современное оборудование для обеспечения наилучшего ухода за вашим
                                автомобилем. Мы гордимся своей работой и стремимся превзойти ваши ожидания при каждом
                                посещении.</p>
                        </div>
                        <div className="row g-4 mb-3 pb-3">
                            <div
                                className={`col-12 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                                style={inView ? {animationDelay: '0.5s'} : {}}
                            >
                                <div className="d-flex">
                                    <div
                                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                        style={{width: '45px', height: '45px'}}>
                                        <span className="fw-bold text-secondary">01</span>
                                    </div>
                                    <div className="ps-3">
                                        <h6>Профессионалы и эксперты</h6>
                                        <span>Наша команда состоит из высококвалифицированных техников, которые являются экспертами в своих областях.</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`col-12 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                                style={inView ? {animationDelay: '0.7s'} : {}}
                            >
                                <div className="d-flex">
                                    <div
                                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                        style={{width: '45px', height: '45px'}}>
                                        <span className="fw-bold text-secondary">02</span>
                                    </div>
                                    <div className="ps-3">
                                        <h6>Качественный сервис-центр</h6>
                                        <span>Наш сервис-центр оснащен по последнему слову техники для предоставления качественных услуг.</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`col-12 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                                style={inView ? {animationDelay: '0.9s'} : {}}
                            >
                                <div className="d-flex">
                                    <div
                                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                        style={{width: '45px', height: '45px'}}>
                                        <span className="fw-bold text-secondary">03</span>
                                    </div>
                                    <div className="ps-3">
                                        <h6>Сотрудники, отмеченные наградами</h6>
                                        <span>Наши сотрудники получили множество наград за выдающееся обслуживание клиентов и техническое мастерство.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/about"
                           className={`btn btn-primary py-3 px-5 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                           style={inView ? {animationDelay: '1.1s'} : {}}>Читать далее<i
                            className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
