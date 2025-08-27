import React from 'react';

const Topbar = () => {
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-light p-0">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2"></small>
                            <small>Чебоксары бул. Анатолия Миттова, 21А, Чебоксары г-ж 58</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <small className="far fa-clock text-primary me-2"></small>
                            <small>Пн - Пт : 09.00 - 21.00</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-phone-alt text-primary me-2"></small>
                            <small>+7 (927) 858-17-08</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn btn-sm-square bg-white text-primary me-1" href="https://t.me/KUMSKIYSTO"
                               target="_blank" rel="noopener noreferrer" title="Telegram Канал"><i
                                className="fab fa-telegram-plane"></i></a>
                            <a className="btn btn-sm-square bg-white text-primary me-0"
                               href="https://t.me/Oleg_Andriyanovich" target="_blank" rel="noopener noreferrer"
                               title="Написать в Telegram"><i className="far fa-comment-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
        </>
    );
};

export default Topbar;
