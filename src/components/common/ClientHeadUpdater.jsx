import {useEffect} from 'react';
import {useMeta} from './MetaContext';

// Этот компонент отслеживает изменения в MetaContext и обновляет заголовок документа (head) на стороне клиента.
const ClientHeadUpdater = () => {
    const {meta} = useMeta();

    useEffect(() => {
        // Вспомогательная функция для создания/обновления мета-тега по его атрибуту name или property
        const updateMetaTag = (attr, attrValue, content) => {
            if (content === undefined) return; // Не создаем тег для неопределенного содержимого
            let element = document.head.querySelector(`meta[${attr}='${attrValue}']`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, attrValue);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Вспомогательная функция для создания/обновления тега link
        const updateLinkTag = (rel, href) => {
            if (!href) return;
            let element = document.head.querySelector(`link[rel='${rel}']`);
            if (!element) {
                element = document.createElement('link');
                element.setAttribute('rel', rel);
                document.head.appendChild(element);
            }
            element.setAttribute('href', href);
        };

        // --- Обновление заголовка документа (head) ---
        if (meta.title) {
            document.title = meta.title;
        }

        updateMetaTag('name', 'description', meta.description);
        updateLinkTag('canonical', meta.canonicalUrl);

        if (meta.og) {
            updateMetaTag('property', 'og:title', meta.og.title);
            updateMetaTag('property', 'og:description', meta.og.description);
            updateMetaTag('property', 'og:type', meta.og.type);
            updateMetaTag('property', 'og:url', meta.og.url);
            updateMetaTag('property', 'og:image', meta.og.image);
        }

    }, [meta]);

    return null;
};

export default ClientHeadUpdater;