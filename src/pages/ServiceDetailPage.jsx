import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {servicesData} from '@/data/servicesData';
import PageHeader from '@/components/layout/PageHeader';
import ServiceImage from '@/components/common/ServiceImage';
import SeoUpdater from '@/components/common/SeoUpdater';
import ServiceSchema from '@/components/common/ServiceSchema';

const ServiceDetailPage = () => {
    const {serviceId} = useParams();
    const service = servicesData.find(s => s.slug === serviceId);

    const baseUrl = 'https://xn----dtbikdcfar9bfeeq.xn--p1ai';
    let ogImageUrl = `${baseUrl}/img/og-image.png`; // Default OG image
    if (service && service.image) {
        const imagePath = typeof service.image === 'object' ? service.image.fallback : service.image;
        ogImageUrl = baseUrl + imagePath;
    }

    if (!service) {
        return (
            <>
                <SeoUpdater title="Услуга не найдена - Кумский Сервис"/>
                <PageHeader title="Услуга не найдена"/>
                <div className="container-xxl py-5">
                    <div className="container text-center">
                        <h1 className="display-4">404</h1>
                        <h2>Услуга не найдена</h2>
                        <p>К сожалению, услуга, которую вы ищете, не существует.</p>
                        <Link to="/" className="btn btn-primary">Вернуться на главную</Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <SeoUpdater
                title={`${service.title} - Услуги автосервиса в Чебоксарах | Кумский Сервис`}
                description={service.shortDescription}
                ogType="article"
                ogImage={ogImageUrl}
            />
            <ServiceSchema service={service}/>
            <PageHeader title={service.title}/>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.3s">
                            <h1 className="mb-4">{service.title}</h1>
                            <p className="mb-4 fst-italic">{service.shortDescription}</p>
                            <div className="mb-4">
                                <ServiceImage service={service} className="img-fluid w-100"/>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: service.fullDescription}}></div>
                            <p>Мы используем только качественные запчасти и современное оборудование для достижения
                                наилучших результатов. Наша команда опытных механиков гарантирует, что ваш автомобиль
                                будет обслужен по высшему стандарту.</p>
                            <h3 className="mt-5 mb-3">Ключевые преимущества</h3>
                            <ul>
                                <li><i className="fa fa-check text-success me-2"></i>Гарантия на все виды работ</li>
                                <li><i className="fa fa-check text-success me-2"></i>Использование сертифицированных
                                    запчастей
                                </li>
                                <li><i className="fa fa-check text-success me-2"></i>Соблюдение сроков</li>
                                <li><i className="fa fa-check text-success me-2"></i>Индивидуальный подход к каждому
                                    клиенту
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light p-4 wow fadeInUp" data-wow-delay="0.6s">
                                <h4>Другие услуги</h4>
                                <ul className="list-group list-group-flush">
                                    {servicesData.map(s => (
                                        <li key={s.id}
                                            className={`list-group-item ${s.id === service.id ? 'active' : ''}`}>
                                            <Link to={`/service/${s.slug}`}
                                                  className={s.id === service.id ? 'text-white' : ''}>
                                                <i className="fa fa-arrow-right text-primary me-2"></i>{s.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4">
                                    <Link to="/booking" className="btn btn-primary w-100 py-3">Записаться на
                                        услугу</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailPage;