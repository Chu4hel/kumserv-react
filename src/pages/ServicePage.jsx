import React from 'react';
import SeoUpdater from '@/components/common/SeoUpdater';
import PageHeader from '@/components/layout/PageHeader';
import Services from '@/components/sections/Services';
import Booking from '@/components/sections/Booking';
import Testimonials from '@/components/sections/Testimonials';

const ServicePage = () => {
    return (
        <>
            <SeoUpdater
                title="Услуги автосервиса в Чебоксарах (ЮЗР) - Кумский Сервис"
                description="Полный спектр услуг по ремонту и обслуживанию автомобилей в Чебоксарах. Диагностика, ремонт двигателя, ходовой, электрики, шиномонтаж и многое другое в автосервисе 'Кумский'."
            />
            <PageHeader title="Услуги" breadcrumb="Услуги"/>
            <Services/>
            <Booking/>
            <Testimonials/>
        </>
    );
};

export default ServicePage;
