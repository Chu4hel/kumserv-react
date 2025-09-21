import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import React, {useEffect, lazy, Suspense} from 'react'; // Import useEffect, lazy, Suspense

// Статические импорты
import Topbar from '@/components/layout/Topbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './App.css';

// Ленивые импорты для страниц
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicePage = lazy(() => import('@/pages/ServicePage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const BookingPage = lazy(() => import('@/pages/BookingPage'));
const TestimonialPage = lazy(() => import('@/pages/TestimonialPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));

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

// Компонент-заглушка для Suspense, пока грузится страница
function LoadingFallback() {
    return (
        <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only">Загрузка...</span>
            </div>
        </div>
    );
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
            <Suspense fallback={<LoadingFallback/>}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/service" element={<ServicePage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/booking" element={<BookingPage/>}/>
                    <Route path="/testimonial" element={<TestimonialPage/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;