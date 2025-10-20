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
                                    <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i><a href="mailto:booking@кумский-сервис.рф" className="text-body">booking@кумский-сервис.рф</a>
                                    </p>
                                </div>
                            </div>
                            <div className={`col-md-4 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                                 style={inView ? {animationDelay: '0.5s'} : {}}>
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase">// Общие вопросы //</h5>
                                    <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i><a href="mailto:info@кумский-сервис.рф" className="text-body">info@кумский-сервис.рф</a>
                                    </p>
                                </div>
                            </div>
                            <div className={`col-md-4 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
                                 style={inView ? {animationDelay: '0.7s'} : {}}>
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase">// Техническая поддержка //</h5>
                                    <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i><a href="mailto:tech@кумский-сервис.рф" className="text-body">tech@кумский-сервис.рф</a>
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
                            {/*
                                TODO: Инструкция по активации формы обратной связи.

                                Когда будете готовы включить эту форму, выполните следующие шаги:

                                1. В этом файле (ContactInfo.jsx) импортируйте useState:
                                   import React, { useState } from 'react';

                                2. Внутри компонента ContactInfo добавьте состояния для формы:
                                   const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
                                   const [isConsentChecked, setIsConsentChecked] = useState(false);
                                   const [formMessage, setFormMessage] = useState({ type: '', text: '' });

                                3. Напишите обработчики `handleChange` и `handleSubmit` по аналогии с компонентом Booking.jsx.

                                4. Удалите атрибут `disabled` со всех полей <input> и <textarea>.
                                   Привяжите их `value` и `onChange` к состоянию `formData`.

                                5. Перед кнопкой отправки вставьте этот блок с чекбоксом:
                                   <div className="col-12 mb-3 text-start">
                                       <div className="form-check">
                                           <input
                                               className="form-check-input"
                                               type="checkbox"
                                               id="contactConsentCheck"
                                               checked={isConsentChecked}
                                               onChange={(e) => setIsConsentChecked(e.target.checked)}
                                               required
                                           />
                                           <label className="form-check-label" htmlFor="contactConsentCheck">
                                               Я даю согласие на обработку персональных данных в соответствии с <Link to="/privacy-policy" target="_blank">Политикой конфиденциальности</Link>.
                                           </label>
                                       </div>
                                   </div>

                                6. Замените кнопку отправки на эту, чтобы она зависела от чекбокса:
                                   <button className="btn btn-primary w-100 py-3" type="submit" disabled={!isConsentChecked}>
                                       Отправить сообщение
                                   </button>
                            */}
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
