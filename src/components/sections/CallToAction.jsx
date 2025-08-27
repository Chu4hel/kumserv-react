import React from 'react';
import {Link} from 'react-router-dom';
import {useInView} from 'react-intersection-observer';

const CallToAction = () => {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className={`container-xxl py-5 ${inView ? 'animated fadeInUp' : 'animate-on-scroll'}`}
             style={inView ? {animationDelay: '0.1s'} : {}}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8 col-md-6">
                        <h6 className="text-primary text-uppercase">// Призыв к действию //</h6>
                        <h1 className="mb-4">Есть вопросы перед записью?</h1>
                        <p className="mb-0">Если у вас есть какие-либо вопросы или вы хотите уточнить детали перед
                            записью на сервис, не стесняйтесь обращаться к нам. Наша команда всегда готова помочь и
                            предоставить всю необходимую информацию. Мы ценим ваше время и стремимся сделать процесс
                            обслуживания максимально простым и удобным для вас.</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-primary d-flex flex-column justify-content-center text-center h-100 p-4">
                            <h3 className="text-white mb-4"><i className="fa fa-phone-alt me-3"></i>+7 (927) 858-17-08
                            </h3>
                            <Link to="/contact" className="btn btn-secondary py-3 px-5">Связаться с нами<i
                                className="fa fa-arrow-right ms-3"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
