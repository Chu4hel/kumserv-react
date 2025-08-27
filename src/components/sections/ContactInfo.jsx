import React from 'react';
import {useInView} from 'react-intersection-observer';

const ContactInfo = () => {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className="container-xxl py-5">
            <div className="container">
                <div
                    className={`text-center ${inView ? 'animated fadeInUp' : 'animate-on-scroll'}`}
                    style={inView ? {animationDelay: '0.1s'} : {}}
                >
                    <h6 className="text-primary text-uppercase">// Свяжитесь с нами //</h6>
                    <h1 className="mb-5">Свяжитесь с нами по любому вопросу</h1>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className={`col-md-4 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                                 style={inView ? {animationDelay: '0.3s'} : {}}>
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase">// Запись //</h5>
                                    <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>booking@кумский-сервис.рф
                                    </p>
                                </div>
                            </div>
                            <div className={`col-md-4 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                                 style={inView ? {animationDelay: '0.5s'} : {}}>
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase">// Общие вопросы //</h5>
                                    <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>info@кумский-сервис.рф
                                    </p>
                                </div>
                            </div>
                            <div className={`col-md-4 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                                 style={inView ? {animationDelay: '0.7s'} : {}}>
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase">// Техническая поддержка //</h5>
                                    <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>tech@кумский-сервис.рф
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                         style={inView ? {animationDelay: '0.1s'} : {}}>
                        <iframe className="position-relative rounded w-100 h-100"
                                src="https://yandex.ru/map-widget/v1/?ll=47.195323%2C56.111997&z=14.0&oid=105941030853&ol=biz"
                                frameBorder="0" style={{minHeight: '350px', border: 0}} allowFullScreen=""
                                tabIndex="0"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className={`${inView ? 'animated fadeInUp' : 'animate-on-scroll'}`}
                             style={inView ? {animationDelay: '0.2s'} : {}}>
                            <p className="mb-4"><b>Внимание:</b> форма обратной связи временно не работает. Пожалуйста,
                                свяжитесь с нами по телефону <a href="tel:+79278581708">+7 (927) 858-17-08</a> или
                                напишите в <a href="https://t.me/Oleg_Andriyanovich" target="_blank"
                                              rel="noopener noreferrer">Telegram</a>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Ваше имя"
                                                   disabled/>
                                            <label htmlFor="name">Ваше имя</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email"
                                                   placeholder="Ваш Email" disabled/>
                                            <label htmlFor="email">Ваш Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Тема"
                                                   disabled/>
                                            <label htmlFor="subject">Тема</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Оставьте сообщение здесь"
                                                      id="message" style={{height: '100px'}} disabled></textarea>
                                            <label htmlFor="message">Сообщение</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" disabled>Отправить
                                            сообщение
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
