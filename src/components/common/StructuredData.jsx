import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    const scriptId = 'structured-data-schema';
    let script = document.getElementById(scriptId);

    const jsonData = {
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

    // No cleanup needed on unmount for this, as it should persist
  }, []);

  return null; // This component doesn't render anything
};

export default StructuredData;
