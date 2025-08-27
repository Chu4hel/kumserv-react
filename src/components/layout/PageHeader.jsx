import React from 'react';
import {Link} from 'react-router-dom';
import {useInView} from 'react-intersection-observer';

const PageHeader = ({title, breadcrumb}) => {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className="container-fluid page-header mb-5 p-0"
             style={{backgroundImage: 'url(/img/carousel-bg-1.webp)'}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center">
                    <h1 className={`display-3 text-white mb-3 ${inView ? 'animated slideInDown' : 'animate-on-scroll'}`}>{title}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link to="/">Главная</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">{breadcrumb}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
