import React from 'react';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      {/* Footer Start */}
      <div
        ref={ref}
        className={`container-fluid bg-dark text-light footer pt-5 mt-5 ${inView ? 'animated fadeIn' : 'animate-on-scroll'}`}
        style={inView ? { animationDelay: '0.1s' } : {}}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Адрес</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Чебоксары бул. Анатолия Миттова, 21А, Чебоксары г-ж 58</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+7 (927) 858-17-08</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@кумский-сервис.рф</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="https://t.me/KUMSKIYSTO" target="_blank" rel="noopener noreferrer" title="Telegram Канал"><i className="fab fa-telegram-plane"></i></a>
                <a className="btn btn-outline-light btn-social" href="https://t.me/Oleg_Andriyanovich" target="_blank" rel="noopener noreferrer" title="Написать в Telegram"><i className="far fa-comment-alt"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Часы работы</h4>
              <h6 className="text-light">Понедельник - Пятница:</h6>
              <p className="mb-4">09.00 - 19.00</p>
              <h6 className="text-light">Суббота - Воскресенье:</h6>
              <p className="mb-0">09.00 - 14.00</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Услуги</h4>
              <a className="btn btn-link" href="/service#diagnostic">Диагностика</a>
              <a className="btn btn-link" href="/service#engine">Обслуживание двигателя</a>
              <a className="btn btn-link" href="/service#tires">Замена шин</a>
              <a className="btn btn-link" href="/service#oil">Замена масла</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Рассылка</h4>
              <p>Подпишитесь на нашу рассылку, чтобы первыми узнавать о специальных предложениях и акциях.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Ваш email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Подписаться</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="/">Кумский сервис</a>, 2025 Все права защищены.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Главная</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
};

export default Footer;
