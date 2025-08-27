import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Facts from '@/components/sections/Facts';

const AboutPage = () => {
    return (
        <>
            <PageHeader title="О нас" breadcrumb="О нас"/>
            <Features/>
            <About/>
            <Facts/>
        </>
    );
};

export default AboutPage;
