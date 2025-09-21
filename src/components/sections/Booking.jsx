import React, {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import {Link} from 'react-router-dom'; // Импортируем Link
import {createBooking, getServices} from '@/api/serviceFlow';
import {siteInfo} from '@/data/siteInfo';

const Booking = () => {
    const [services, setServices] = useState([]);
    const [isApiDown, setIsApiDown] = useState(false);
    const [workStart, workEnd] = siteInfo.workingHours.weekdays.hours.split(' - ');

    const [formData, setFormData] = useState({
        client_name: '',
        client_email: '',
        client_phone: '',
        service_id: '',
        date: '',
        time: '',
        notes: ''
    });
    const [formMessage, setFormMessage] = useState({type: '', text: ''});
    const [isConsentChecked, setIsConsentChecked] = useState(false);
    const today = new Date().toISOString().split('T')[0];
    const [minTime, setMinTime] = useState(workStart);

    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const servicesData = await getServices();
                setServices(servicesData);
                setIsApiDown(false);
            } catch (error) {
                console.error("Failed to load services:", error);
                setIsApiDown(true);
                const defaultServices = [
                    {id: 'default-1', name: 'Техническое обслуживание'},
                    {id: 'default-2', name: 'Диагностика'},
                    {id: 'default-3', name: 'Шиномонтаж'}
                ];
                setServices(defaultServices);
                setFormMessage({
                    type: 'error',
                    text: 'Форма временно не работает. Пожалуйста, для записи воспользуйтесь телефоном.'
                });
            }
        };
        fetchServices();
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        let newFormData = {...formData, [name]: value};
        let newMinTime = minTime;

        if (name === 'date') {
            const todayStr = new Date().toISOString().split('T')[0];
            if (value === todayStr) {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                newMinTime = `${hours}:${minutes}`;
            } else {
                newMinTime = workStart;
            }

            if (newFormData.time && newFormData.time < newMinTime) {
                newFormData.time = '';
            }
            setMinTime(newMinTime);
        }

        setFormData(newFormData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isApiDown) {
            setFormMessage({
                type: 'error',
                text: 'Форма временно не работает. Пожалуйста, для записи воспользуйтесь телефоном.'
            });
            return;
        }

        setFormMessage({type: '', text: ''});

        if (!formData.service_id || !formData.date || !formData.time) {
            setFormMessage({type: 'error', text: 'Пожалуйста, выберите услугу, дату и время.'});
            return;
        }

        const booking_time = `${formData.date}T${formData.time}:00`;

        const bookingData = {
            ...formData,
            service_id: parseInt(formData.service_id, 10),
            booking_time,
        };
        delete bookingData.date;
        delete bookingData.time;

        try {
            await createBooking(bookingData);
            setFormMessage({
                type: 'success',
                text: 'Спасибо за запись! Мы с вами свяжемся насчет уточнения времени записи. Вы также можете позвонить нам сами.'
            });
            setFormData({
                client_name: '',
                client_email: '',
                client_phone: '',
                service_id: '',
                date: '',
                time: '',
                notes: ''
            });
            setIsConsentChecked(false); // Сброс чекбокса после успешной отправки
        } catch (error) {
            console.error('Booking submission failed:', error);
            setFormMessage({type: 'error', text: `Ошибка отправки: ${error.message}`});
        }
    };

    return (
        <>
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
                                                name="client_name"
                                                className="form-control border-0"
                                                placeholder="Ваше имя"
                                                style={{height: '55px'}}
                                                value={formData.client_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="email"
                                                name="client_email"
                                                className="form-control border-0"
                                                placeholder="Ваш Email (необязательно)"
                                                style={{height: '55px'}}
                                                value={formData.client_email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="tel"
                                                name="client_phone"
                                                className="form-control border-0"
                                                placeholder="Ваш телефон"
                                                style={{height: '55px'}}
                                                value={formData.client_phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select
                                                name="service_id"
                                                className="form-select border-0"
                                                style={{height: '55px'}}
                                                value={formData.service_id}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Выберите услугу</option>
                                                {services.map(service => (
                                                    <option key={service.id} value={service.id}>
                                                        {service.name}
                                                    </option>
                                                ))}
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
                                                min={today}
                                                required
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="time"
                                                name="time"
                                                className="form-control border-0"
                                                style={{height: '55px'}}
                                                value={formData.time}
                                                onChange={handleChange}
                                                min={minTime}
                                                max={workEnd}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                name="notes"
                                                className="form-control border-0"
                                                placeholder="Особые пожелания"
                                                value={formData.notes}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        {formMessage.text && (
                                            <div className="col-12">
                                                <div
                                                    className={`alert alert-${formMessage.type === 'error' ? 'danger' : 'success'}`}>
                                                    {formMessage.text}
                                                </div>
                                            </div>
                                        )}
                                        <div className="col-12 mb-3 text-start text-white">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="consentCheck"
                                                    checked={isConsentChecked}
                                                    onChange={(e) => setIsConsentChecked(e.target.checked)}
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="consentCheck" style={{fontSize: '0.8rem'}}>
                                                    Я даю согласие на обработку персональных данных в соответствии с <Link to="/privacy-policy" target="_blank" className="text-white"><u>Политикой конфиденциальности</u></Link>.
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-secondary w-100 py-3" type="submit"
                                                    disabled={isApiDown || !isConsentChecked}>
                                                Записаться
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;
