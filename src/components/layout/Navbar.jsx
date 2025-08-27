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
        </NavLink>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link">Главная</NavLink>
            <NavLink to="/about" className="nav-item nav-link">О нас</NavLink>
            <NavLink to="/service" className="nav-item nav-link">Услуги</NavLink>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Страницы</a>
              <div className="dropdown-menu fade-up m-0">
                {/* These can also be NavLinks if they are separate pages */}
                <NavLink to="/booking" className="dropdown-item">Запись</NavLink>
                <NavLink to="/testimonial" className="dropdown-item">Отзывы</NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link">Контакты</NavLink>
          </div>
          <NavLink to="/booking" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Записаться<i className="fa fa-arrow-right ms-3"></i></NavLink>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
