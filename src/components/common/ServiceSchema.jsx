import {useEffect} from 'react';
import {useMeta} from './MetaContext';

const ServiceSchema = ({service}) => {
    const {addSchema} = useMeta();

    const getJsonData = (serviceData) => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceData.title,
        "name": serviceData.title,
        "description": serviceData.shortDescription,
        "provider": {
            "@type": "AutoRepair",
            "name": "Кумский Сервис"
        },
        "areaServed": {
            "@type": "City",
            "name": "Чебоксары"
        },
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://xn----dtbikdcfar9bfeeq.xn--p1ai/booking",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                ]
            }
        }
    });

    if (typeof window === 'undefined' && service) {
        addSchema(getJsonData(service));
    }

    // Run in useEffect on the client
    useEffect(() => {
        if (service) {
            addSchema(getJsonData(service));
        }
        // Note: We don't need a cleanup function to remove the schema,
        // as the context will be rebuilt on every page navigation.
    }, [service]);

    return null; // This component doesn't render anything
};

export default ServiceSchema;
