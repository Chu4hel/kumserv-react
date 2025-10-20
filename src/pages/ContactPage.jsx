import React from 'react';
import SeoUpdater from '@/components/common/SeoUpdater';
import PageHeader from '@/components/layout/PageHeader';
import ContactInfo from '@/components/sections/ContactInfo';

const ContactPage = () => {
    return (
        <>
            <SeoUpdater
                title="Контакты - Автосервис 'Кумский' в Чебоксарах (ЮЗР)"
                description="Свяжитесь с автосервисом 'Кумский' в Чебоксарах. Адрес: бульвар Миттова, 21А. Телефон: +7 (927) 858-17-08. Мы находимся в Юго-Западном районе."
            />
            <PageHeader title="Контакты" breadcrumb="Контакты"/>
            <ContactInfo/>
        </>
    );
};

export default ContactPage;
