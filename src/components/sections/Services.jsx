import React, {useState} from 'react';
import {useInView} from 'react-intersection-observer';
import {Link} from 'react-router-dom';
import {servicesData} from '@/data/servicesData';
import ServiceImage from '@/components/common/ServiceImage';

const Services = () => {
    // Состояние для отслеживания активной вкладки. Значение - ID вкладки.
    const [activeTab, setActiveTab] = useState(servicesData[0].id);

    // Хук для отслеживания видимости компонента на экране.
    // `triggerOnce: true` означает, что анимация сработает только один раз.
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    // Стиль для всех панелей вкладок, чтобы они занимали одну и ту же область в гриде.
    const tabPaneStyle = {
        gridArea: '1 / 1',
    };

    return (
        <>
            <div ref={ref} className="container-xxl service py-5">
                <div className="container">
                    <div
                        className={`text-center ${inView ? 'animated fadeInUp' : 'animate-on-scroll'}`}
                        style={inView ? {animationDelay: '0.1s'} : {}}
                    >
                        <h6 className="text-primary text-uppercase">// Наши услуги //</h6>
                        <h1 className="mb-5">Наши популярные услуги в Чебоксарах</h1>
                    </div>
                    <div
                        className={`row g-4 ${inView ? 'animated fadeInUp' : 'animate-on-scroll'}`}
                        style={inView ? {animationDelay: '0.3s'} : {}}
                    >
                        <div className="col-lg-4">
                            <div className="nav w-100 nav-pills me-4">
                                {servicesData.map(service => (
                                    <button
                                        key={service.id}
                                        className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === service.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(service.id)}
                                        type="button"
                                    >
                                        <i className={`fa ${service.icon} fa-2x me-3`}></i>
                                        <h4 className="m-0">{service.title}</h4>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100" style={{display: 'grid'}}>
                                {servicesData.map(service => (
                                    <div
                                        key={service.id}
                                        className={`tab-pane fade ${activeTab === service.id ? 'show active' : ''}`}
                                        style={tabPaneStyle}
                                    >
                                        <div className="row g-4">
                                            <div className="col-md-6" style={{minHeight: '350px'}}>
                                                <div className="position-relative h-100">
                                                    <ServiceImage
                                                        service={service}
                                                        className="position-absolute img-fluid w-100 h-100"
                                                        style={{objectFit: 'cover'}}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-3">{service.title}</h3>
                                                <p className="mb-4">{service.shortDescription}</p>
                                                <p><i className="fa fa-check text-success me-3"></i>
                                                    Качественное обслуживание
                                                </p>
                                                <p><i className="fa fa-check text-success me-3"></i>
                                                    Опытные работники
                                                </p>
                                                <p><i className="fa fa-check text-success me-3"></i>
                                                    Современное оборудование
                                                </p>
                                                <Link
                                                    to={`/service/${service.slug}`}
                                                    className="btn btn-primary py-3 px-5 mt-3"
                                                >
                                                    Читать далее
                                                    <i className="fa fa-arrow-right ms-3"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
