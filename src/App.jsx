import {Route, Routes, useLocation} from 'react-router-dom';
import React, {useEffect} from 'react';

// Статические импорты
import Topbar from '@/components/layout/Topbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/common/StructuredData';
import './App.css';

// Прямые импорты страниц
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicePage from '@/pages/ServicePage';
import ContactPage from '@/pages/ContactPage';
import BookingPage from '@/pages/BookingPage';
import TestimonialPage from '@/pages/TestimonialPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';

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
    return (
        <>
            <PageTracker/>
            <StructuredData/>

            <Topbar/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/service" element={<ServicePage/>}/>
                <Route path="/service/:serviceId" element={<ServiceDetailPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/booking" element={<BookingPage/>}/>
                <Route path="/testimonial" element={<TestimonialPage/>}/>
                <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;