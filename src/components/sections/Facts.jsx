import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';

const Facts = () => {
    // Этот хук отслеживает, находится ли компонент в области видимости.
    // `ref` нужно присвоить DOM-элементу, за которым мы следим.
    // `inView` будет `true`, когда элемент появится на экране.
    const {ref, inView} = useInView({
        threshold: 0.5, // Анимация сработает, когда 50% элемента будет видно.
        triggerOnce: true, // Анимация сработает только один раз.
    });

    return (
        <>
            {/* Fact Start */}
            {/* Присваиваем `ref` контейнеру, чтобы отслеживать его видимость. */}
            <div className="container-fluid fact bg-dark my-5 py-5" ref={ref}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-certificate fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2">
                                {/* Компонент CountUp рендерится только когда секция Facts видима,
                    чтобы анимация начиналась в нужный момент. */}
                                {inView && <CountUp end={15} duration={2}/>}
                            </h2>
                            <p className="text-white mb-0">Лет опыта</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-wrench fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2">
                                {inView && <CountUp end={50} duration={2}/>}
                            </h2>
                            <p className="text-white mb-0">Видов услуг</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-users fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2">
                                {inView && <CountUp end={500} duration={2}/>}
                            </h2>
                            <p className="text-white mb-0">Довольных клиентов</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <i className="fa fa-car fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2">
                                {inView && <CountUp end={1000} duration={2}/>}
                            </h2>
                            <p className="text-white mb-0">Выполненных работ</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fact End */}
        </>
    );
};

export default Facts;
