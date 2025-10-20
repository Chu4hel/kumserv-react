import React from 'react';
import SeoUpdater from '@/components/common/SeoUpdater';

import Carousel from '@/components/sections/Carousel';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Facts from '@/components/sections/Facts';
import Services from '@/components/sections/Services';
import Booking from '@/components/sections/Booking';
import Testimonials from '@/components/sections/Testimonials';

const HomePage = () => {
    return (
        <>
            <SeoUpdater
                title="Кумский Сервис - Автосервис в ЮЗР, Чебоксары | Ремонт и ТО"
                description="Профессиональный ремонт и техническое обслуживание автомобилей в Юго-Западном районе Чебоксар. Диагностика, ремонт двигателя, замена масла. Автосервис 'Кумский' в ЮЗР."
            />
            <Carousel/>
            <Features/>
            <About/>
            <Facts/>
            <Services/>
            <Booking/>
            <Testimonials/>
        </>
    );
};

export default HomePage;
