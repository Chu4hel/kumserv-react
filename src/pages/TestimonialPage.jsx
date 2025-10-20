import React from 'react';
import SeoUpdater from '@/components/common/SeoUpdater';
import PageHeader from '@/components/layout/PageHeader';
import Testimonials from '@/components/sections/Testimonials';

const TestimonialPage = () => {
    return (
        <>
            <SeoUpdater
                title="Отзывы клиентов - Автосервис 'Кумский' в Чебоксарах"
                description="Читайте отзывы реальных клиентов о работе автосервиса 'Кумский' в Чебоксарах. Узнайте, почему нам доверяют свои автомобили."
            />
            <PageHeader title="Отзывы" breadcrumb="Отзывы"/>
            <Testimonials/>
        </>
    );
};

export default TestimonialPage;
