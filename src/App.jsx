import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicePage from '@/pages/ServicePage';
import ContactPage from '@/pages/ContactPage';
import BookingPage from '@/pages/BookingPage';
import TestimonialPage from '@/pages/TestimonialPage';
import Topbar from '@/components/layout/Topbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import React, {useEffect} from 'react'; // Import useEffect
import './App.css';

function App() {
  return (
    <HashRouter>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
    useEffect(() => {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            // Add a small delay to ensure all content is rendered before hiding
            setTimeout(() => {
                spinner.classList.remove('show');
            }, 500); // Adjust delay as needed
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

}

export default App;
