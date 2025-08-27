import React, {useState} from 'react';
import {useInView} from 'react-intersection-observer';

const Booking = () => {
    // Единое состояние для всех полей формы.
    // Это делает управление формой централизованным.
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        date: '',
        specialRequest: ''
    });

    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    // Универсальный обработчик для всех полей ввода.
    // Он определяет, какое поле изменилось, по атрибуту `name`
    // и обновляет соответствующее свойство в состоянии `formData`.
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Обработчик отправки формы.
    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы).
        console.log('Form submitted:', formData); // Выводим данные в консоль для демонстрации.
        // В реальном приложении здесь будет отправка данных на сервер.
        alert('Запись отправлена! (Данные в консоли)');
    };

    return (
        <>
            {/* Booking Start */}
            <div
                ref={ref}
                className={`container-fluid bg-secondary booking my-5 ${inView ? 'animated fadeInUp' : 'animate-on-scroll'}`}
                style={inView ? {animationDelay: '0.1s'} : {}}
            >
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 py-5">
                            <div className="py-5">
                                <h1 className="text-white mb-4">Сертифицированный и отмеченный наградами поставщик услуг
                                    по ремонту автомобилей</h1>
                                <p className="text-white mb-0">Мы стремимся предоставлять нашим клиентам лучший сервис
                                    по ремонту автомобилей. Наша команда экспертов всегда готова помочь вам с любыми
                                    потребностями вашего автомобиля. Запишитесь на прием сегодня и почувствуйте
                                    разницу.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className={`bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 ${inView ? 'animated zoomIn' : 'animate-on-scroll'}`}
                                style={inView ? {animationDelay: '0.6s'} : {}}
                            >
                                <h1 className="text-white mb-4">Записаться на услугу</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control border-0"
                                                placeholder="Ваше имя"
                                                style={{height: '55px'}}
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control border-0"
                                                placeholder="Ваш Email"
                                                style={{height: '55px'}}
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select
                                                name="service"
                                                className="form-select border-0"
                                                style={{height: '55px'}}
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                <option value="">Выберите услугу</option>
                                                <option value="Диагностика">Диагностика</option>
                                                <option value="Обслуживание двигателя">Обслуживание двигателя</option>
                                                <option value="Замена шин">Замена шин</option>
                                                <option value="Замена масла">Замена масла</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="date"
                                                name="date"
                                                className="form-control border-0"
                                                style={{height: '55px'}}
                                                value={formData.date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12">
                      <textarea
                          name="specialRequest"
                          className="form-control border-0"
                          placeholder="Особые пожелания"
                          value={formData.specialRequest}
                          onChange={handleChange}
                      ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">Записаться
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Booking End */}
        </>
    );
};

export default Booking;
