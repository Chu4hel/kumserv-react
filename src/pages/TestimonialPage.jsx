import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Testimonials from '@/components/sections/Testimonials';

const TestimonialPage = () => {
    return (
        <>
            <PageHeader title="Отзывы" breadcrumb="Отзывы"/>
            <Testimonials/>
        </>
    );
};

export default TestimonialPage;
