import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import ContactInfo from '@/components/sections/ContactInfo';

const ContactPage = () => {
    return (
        <>
            <PageHeader title="Контакты" breadcrumb="Контакты"/>
            <ContactInfo/>
        </>
    );
};

export default ContactPage;
