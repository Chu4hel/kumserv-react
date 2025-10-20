import React from 'react';
import SeoUpdater from '@/components/common/SeoUpdater';
import PageHeader from '@/components/layout/PageHeader';
import Features from '@/components/sections/Features';
import Booking from '@/components/sections/Booking';
import CallToAction from '@/components/sections/CallToAction';

const BookingPage = () => {
    return (
        <>
            <SeoUpdater
                title="Онлайн-запись на ремонт и ТО - Автосервис 'Кумский', Чебоксары"
                description="Запишитесь на диагностику, ремонт или техническое обслуживание вашего автомобиля онлайн. Удобная форма записи в автосервис 'Кумский' в ЮЗР, Чебоксары."
            />
            <PageHeader title="Запись" breadcrumb="Запись"/>
            <Features/>
            <Booking/>
            <CallToAction/>
        </>
    );
};

export default BookingPage;
