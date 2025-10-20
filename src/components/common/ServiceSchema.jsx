import { useEffect } from 'react';

const ServiceSchema = ({ service }) => {
  useEffect(() => {
    if (!service) return;

    const scriptId = 'service-schema-script';
    let script = document.getElementById(scriptId);

    const jsonData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": service.title,
      "name": service.title,
      "description": service.shortDescription,
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
    };

    if (script) {
      script.textContent = JSON.stringify(jsonData);
    } else {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonData);
      document.head.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
            scriptToRemove.remove();
        }
    };

  }, [service]);

  return null; // This component doesn't render anything
};

export default ServiceSchema;
