import React from 'react';
// We will use Link from react-router-dom later for navigation
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>Кумский Сервис</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active">Главная</a>
            <a href="/about" className="nav-item nav-link">О нас</a>
            <a href="/service" className="nav-item nav-link">Услуги</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Страницы</a>
              <div className="dropdown-menu fade-up m-0">
                <a href="/booking" className="dropdown-item">Запись</a>
                <a href="/testimonial" className="dropdown-item">Отзывы</a>
              </div>
            </div>
            <a href="/contact" className="nav-item nav-link">Контакты</a>
          </div>
          <a href="/booking" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Записаться<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
