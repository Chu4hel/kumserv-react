import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Services from '@/components/sections/Services';
import Booking from '@/components/sections/Booking';
import Testimonials from '@/components/sections/Testimonials';

const ServicePage = () => {
    return (
        <>
            <PageHeader title="Услуги" breadcrumb="Услуги"/>
            <Services/>
            <Booking/>
            <Testimonials/>
        </>
    );
};

export default ServicePage;
