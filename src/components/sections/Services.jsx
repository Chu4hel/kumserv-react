import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('tab-pane-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const tabPaneStyle = {
    gridArea: '1 / 1',
  };

  return (
    <>
      {/* Service Start */}
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Наши услуги //</h6>
            <h1 className="mb-5">Наши популярные услуги</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-1' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-1')}
                  type="button"
                >
                  <i className="fa fa-car-side fa-2x me-3"></i>
                  <h4 className="m-0">Диагностика</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-2' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-2')}
                  type="button"
                >
                  <i className="fa fa-car fa-2x me-3"></i>
                  <h4 className="m-0">Обслуживание двигателя</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-3' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-3')}
                  type="button"
                >
                  <i className="fa fa-cog fa-2x me-3"></i>
                  <h4 className="m-0">Замена шин</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-0 ${activeTab === 'tab-pane-4' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-4')}
                  type="button"
                >
                  <i className="fa fa-oil-can fa-2x me-3"></i>
                  <h4 className="m-0">Замена масла</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100" style={{ display: 'grid' }}>
                <div className={`tab-pane fade ${activeTab === 'tab-pane-1' ? 'show active' : ''}`} style={tabPaneStyle}>
                  {/* Content for tab 1 */}
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: '350px' }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/img/service-1.jpg" style={{ objectFit: 'cover' }} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Комплексная диагностика автомобиля</h3>
                      <p className="mb-4">Наша команда предоставляет точные диагностические услуги для выявления любых проблем с вашим автомобилем. Мы используем передовые инструменты для обеспечения точной и эффективной диагностики.</p>
                      <p><i className="fa fa-check text-success me-3"></i>Качественное обслуживание</p>
                      <p><i className="fa fa-check text-success me-3"></i>Опытные работники</p>
                      <p><i className="fa fa-check text-success me-3"></i>Современное оборудование</p>
                      <a href="/service#diagnostic" className="btn btn-primary py-3 px-5 mt-3">Читать далее<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab-pane-2' ? 'show active' : ''}`} style={tabPaneStyle}>
                  {/* Content for tab 2 */}
                   <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="/img/service-2.jpg"
                                            style={{objectFit: "cover"}} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">Профессиональное обслуживание двигателя</h3>
                                    <p className="mb-4">Наши специалисты обеспечат качественное обслуживание двигателя вашего автомобиля, используя современные технологии и материалы для продления его срока службы.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Качественное обслуживание</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Опытные работники</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Современное оборудование</p>
                                    <a href="/service#engine" className="btn btn-primary py-3 px-5 mt-3">Читать далее<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab-pane-3' ? 'show active' : ''}`} style={tabPaneStyle}>
                  {/* Content for tab 3 */}
                  <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="/img/service-3.jpg"
                                            style={{objectFit: "cover"}} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">Быстрая и качественная замена шин</h3>
                                    <p className="mb-4">Мы предлагаем быструю и профессиональную замену шин, а также балансировку колес для обеспечения вашей безопасности и комфорта на дороге.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Качественное обслуживание</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Опытные работники</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Современное оборудование</p>
                                    <a href="/service#tires" className="btn btn-primary py-3 px-5 mt-3">Читать далее<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab-pane-4' ? 'show active' : ''}`} style={tabPaneStyle}>
                  {/* Content for tab 4 */}
                  <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="/img/service-4.jpg"
                                            style={{objectFit: "cover"}} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">Надежная замена масла</h3>
                                    <p className="mb-4">Регулярная замена масла — залог долгой и бесперебойной работы двигателя. Мы используем только рекомендованные производителями масла и фильтры.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Качественное обслуживание</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Опытные работники</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Современное оборудование</p>
                                    <a href="/service#oil" className="btn btn-primary py-3 px-5 mt-3">Читать далее<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
};

export default Services;
