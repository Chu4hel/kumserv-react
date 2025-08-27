import React from 'react';
import {NavLink, useNavigate, useLocation} from 'react-router-dom';

const CustomNavLink = ({to, className, children, ...props}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
        e.preventDefault();

        // Ничего не делаем, если мы уже на этой странице
        if (location.pathname === to) {
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Ждем завершения плавной прокрутки перед переходом
        setTimeout(() => {
            navigate(to);
        }, 500); // Таймаут можно настроить под длительность анимации скролла
    };

    return (
        <NavLink to={to} className={className} onClick={handleClick} {...props}>
            {children}
        </NavLink>
    );
};

export default CustomNavLink;
