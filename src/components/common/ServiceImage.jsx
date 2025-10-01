import React from 'react';

/**
 * Компонент для отображения изображения услуги.
 * Поддерживает как обычный путь к изображению (строка),
 * так и объект с несколькими форматами для тега <picture>.
 * @param {object} props - Пропсы компонента.
 * @param {object} props.service - Объект услуги.
 * @param {string | {avif: string, webp: string, fallback: string}} props.service.image - Путь или объект с путями.
 * @param {string} props.service.title - Заголовок услуги для alt-атрибута.
 * @param {string} [props.className] - Дополнительные классы для тега <img>.
 * @param {object} [props.style] - Инлайновые стили.
 */
const ServiceImage = ({ service, className, style }) => {
    const { image, title } = service;

    if (typeof image === 'object' && image.fallback) {
        // Если image - это объект, рендерим <picture>
        return (
            <picture>
                {image.avif && <source srcSet={image.avif} type="image/avif" />}
                {image.webp && <source srcSet={image.webp} type="image/webp" />}
                <img
                    src={image.fallback}
                    alt={title}
                    className={className}
                    style={style}
                />
            </picture>
        );
    }

    // Если image - это строка, рендерим обычный <img>
    return (
        <img
            src={image}
            alt={title}
            className={className}
            style={style}
        />
    );
};

export default ServiceImage;
