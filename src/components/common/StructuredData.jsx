import {useEffect} from 'react';
import {useMeta} from './MetaContext';

const StructuredData = () => {
    const {addSchema} = useMeta();

    const getJsonData = () => ({
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Кумский Сервис",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "бульвар Миттова, 21А",
            "addressLocality": "Чебоксары",
            "addressRegion": "Чувашская Республика",
            "addressCountry": "RU"
        },
        "telephone": "+79278581708",
        "url": "https://xn----dtbikdcfar9bfeeq.xn--p1ai/",
        "image": "https://xn----dtbikdcfar9bfeeq.xn--p1ai/img/og-image.png",
        "openingHours": [
            "Mo-Fr 09:00-19:00",
            "Sa-Su 10:00-17:00"
        ]
    });

    // Run synchronously on the server
    if (typeof window === 'undefined') {
        addSchema(getJsonData());
    }

    // Run in useEffect on the client to add the schema once
    useEffect(() => {
        addSchema(getJsonData());
    }, []); // Empty dependency array ensures it runs only once

    return null; // This component doesn't render anything
};

export default StructuredData;
