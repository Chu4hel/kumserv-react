import React from 'react';

const Facts = () => {
  return (
    <>
      {/* Fact Start */}
      <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
              <i className="fa fa-certificate fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">15</h2>
              <p className="text-white mb-0">Лет опыта</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
              <i className="fa fa-wrench fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">50</h2>
              <p className="text-white mb-0">Видов услуг</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
              <i className="fa fa-users fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">500</h2>
              <p className="text-white mb-0">Довольных клиентов</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
              <i className="fa fa-car fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">1000</h2>
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
