import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SeoUpdater = ({ title, description, ogType = 'website', ogImage }) => {
    const location = useLocation();
    const canonicalUrl = `https://xn----dtbikdcfar9bfeeq.xn--p1ai${location.pathname}`;

    useEffect(() => {
        // Helper function to create or update a meta tag by property or name
        const updateMetaTag = (attr, attrValue, content) => {
            let element = document.querySelector(`meta[${attr}='${attrValue}']`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, attrValue);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Update Title
        if (title) {
            document.title = title;
            updateMetaTag('property', 'og:title', title);
        }

        // Update Description
        if (description) {
            updateMetaTag('name', 'description', description);
            updateMetaTag('property', 'og:description', description);
        }

        // Update other OG tags
        updateMetaTag('property', 'og:type', ogType);
        updateMetaTag('property', 'og:url', canonicalUrl);

        // Update OG Image - use default if not provided
        const imageUrl = ogImage || 'https://xn----dtbikdcfar9bfeeq.xn--p1ai/img/og-image.png';
        updateMetaTag('property', 'og:image', imageUrl);

    }, [title, description, ogType, ogImage, canonicalUrl]);

    return null; // This component doesn't render anything
};

export default SeoUpdater;