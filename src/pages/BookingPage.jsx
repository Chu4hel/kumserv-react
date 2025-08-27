import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Features from '@/components/sections/Features';
import Booking from '@/components/sections/Booking';
import CallToAction from '@/components/sections/CallToAction';

const BookingPage = () => {
    return (
        <>
            <PageHeader title="Запись" breadcrumb="Запись"/>
            <Features/>
            <Booking/>
            <CallToAction/>
        </>
    );
};

export default BookingPage;
