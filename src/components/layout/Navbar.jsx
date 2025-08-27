import React, { useState, useEffect } from 'react';
import CustomNavLink from './CustomNavLink'; // Импортируем наш кастомный компонент

const Navbar = () => {
  // Состояние для отслеживания, должен ли навбар "прилипнуть" к верху.
  const [isSticky, setIsSticky] = useState(false);

  // Эффект, который выполняется один раз при монтировании компонента.
  useEffect(() => {
    // Обработчик события прокрутки.
    const handleScroll = () => {
      // Если прокрутка больше 300px, делаем навбар "прилипшим".
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Добавляем слушатель события прокрутки.
    window.addEventListener('scroll', handleScroll);

    // Функция очистки. Удаляет слушатель при размонтировании компонента,
    // чтобы избежать утечек памяти.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Пустой массив зависимостей означает, что эффект сработает только один раз.

  // The dropdown logic will be handled later
  return (
    <>
      {/* Navbar Start */}
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
        style={{ top: isSticky ? '0px' : '-100px' }}
      >
        <CustomNavLink to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>Кумский Сервис</h2>
        </CustomNavLink>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <CustomNavLink to="/" className="nav-item nav-link">Главная</CustomNavLink>
            <CustomNavLink to="/about" className="nav-item nav-link">О нас</CustomNavLink>
            <CustomNavLink to="/service" className="nav-item nav-link">Услуги</CustomNavLink>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Страницы</a>
              <div className="dropdown-menu fade-up m-0">
                <CustomNavLink to="/booking" className="dropdown-item">Запись</CustomNavLink>
                <CustomNavLink to="/testimonial" className="dropdown-item">Отзывы</CustomNavLink>
              </div>
            </div>
            <CustomNavLink to="/contact" className="nav-item nav-link">Контакты</CustomNavLink>
          </div>
          <CustomNavLink to="/booking" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Записаться<i
            className="fa fa-arrow-right ms-3"></i></CustomNavLink>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
