import {HashRouter, Routes, Route} from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicePage from '@/pages/ServicePage';
import ContactPage from '@/pages/ContactPage';
import Topbar from '@/components/layout/Topbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './App.css';

function App() {
    return (
        <HashRouter>
            <Topbar/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/service" element={<ServicePage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                {/* We can add routes for booking and testimonials later if they become separate pages */}
            </Routes>
            <Footer/>
        </HashRouter>
    );
}

export default App;
