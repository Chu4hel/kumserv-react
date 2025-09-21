import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicePage from '@/pages/ServicePage';
import ContactPage from '@/pages/ContactPage';
import BookingPage from '@/pages/BookingPage';
import TestimonialPage from '@/pages/TestimonialPage';
import Topbar from '@/components/layout/Topbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomNavLink from '@/components/layout/CustomNavLink'; // Ensure this is imported if used
import React, {useEffect} from 'react'; // Import useEffect
import './App.css';

// Компонент для отслеживания, который мы вставим внутрь BrowserRouter
function PageTracker() {
    const location = useLocation();

    useEffect(() => {
        // Проверяем, что объект ym (Яндекс.Метрика) уже загрузился
        if (window.ym) {
            // Отправляем "просмотр страницы" с указанием нового URL
            // 104227617 - ID счетчика
            window.ym(104227617, 'hit', window.location.href);
        }
    }, [location]); // Этот эффект будет срабатывать каждый раз, когда меняется location

    return null; // Компонент ничего не рендерит, он просто выполняет логику
}


function App() {
    useEffect(() => {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            // Add a small delay to ensure all content is rendered before hiding
            setTimeout(() => {
                spinner.classList.remove('show');
            }, 500); // Adjust delay as needed
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <BrowserRouter>
            <PageTracker/>

            <Topbar/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/service" element={<ServicePage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/booking" element={<BookingPage/>}/>
                <Route path="/testimonial" element={<TestimonialPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;