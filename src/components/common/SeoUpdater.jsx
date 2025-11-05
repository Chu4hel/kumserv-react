import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useMeta} from './MetaContext';

const SeoUpdater = ({title, description, ogType = 'website', ogImage}) => {
    const {setMeta} = useMeta();
    const location = useLocation();

    const getMetaData = () => {
        const canonicalUrl = `https://xn----dtbikdcfar9bfeeq.xn--p1ai${location.pathname}`;
        const imageUrl = ogImage || 'https://xn----dtbikdcfar9bfeeq.xn--p1ai/img/og-image.png';

        return {
            title,
            description,
            canonicalUrl,
            og: {
                type: ogType,
                url: canonicalUrl,
                title,
                description,
                image: imageUrl,
            },
        };
    };

    if (typeof window === 'undefined') {
        setMeta(getMetaData());
    }

    useEffect(() => {
        setMeta(getMetaData());
    }, [title, description, ogType, ogImage, location.pathname]); // `setMeta` is stable

    return null; // This component doesn't render anything
};

export default SeoUpdater;