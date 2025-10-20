import React from 'react';
import SeoUpdater from '@/components/common/SeoUpdater';
import PageHeader from '@/components/layout/PageHeader';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Facts from '@/components/sections/Facts';

const AboutPage = () => {
    return (
        <>
            <SeoUpdater
                title="О нас - Автосервис 'Кумский' в Чебоксарах (ЮЗР)"
                description="Узнайте больше об автосервисе 'Кумский' в Юго-Западном районе Чебоксар. Наша история, команда профессионалов и гарантии качества. Мы заботимся о вашем автомобиле."
            />
            <PageHeader title="О нас" breadcrumb="О нас"/>
            <Features/>
            <About/>
            <Facts/>
        </>
    );
};

export default AboutPage;
