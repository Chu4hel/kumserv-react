import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import custom styles
import './Testimonials.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials = () => {
  const testimonialData = [
    {
      img: '/img/testimonial-1.jpg',
      name: 'Елена Иванова',
      service: 'Диагностика подвески',
      text: 'Кумский сервис превзошел все мои ожидания. Персонал был дружелюбным, и мой автомобиль теперь работает как новый. Очень рекомендую их услуги!',
    },
    {
      img: '/img/testimonial-2.jpg',
      name: 'Александр Петров',
      service: 'Замена масла в двигателе',
      text: 'Отличный сервис! Все сделали быстро и качественно. Машина едет как новая. Обязательно приеду еще.',
    },
    {
      img: '/img/testimonial-3.jpg',
      name: 'Дмитрий Сидоров',
      service: 'Шиномонтаж и балансировка',
      text: 'Очень доволен работой мастеров. Все объяснили, показали, сделали на совесть. Теперь только к вам!',
    },
    {
      img: '/img/testimonial-4.jpg',
      name: 'Анна Кузнецова',
      service: 'Ремонт тормозной системы',
      text: 'Спасибо за отличную работу! Быстро, профессионально и по разумной цене. Рекомендую всем!',
    },
  ];

  // Для корректной работы режима `loop` (бесконечная прокрутка) в Swiper,
  // особенно с опцией `centeredSlides` и `slidesPerView: 3`,
  // требуется больше слайдов, чем есть изначально (4).
  // Простое дублирование массива решает эту проблему.
  const testimonials = [...testimonialData, ...testimonialData];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="text-primary text-uppercase">// Отзывы //</h6>
          <h1 className="mb-5">Что говорят наши клиенты!</h1>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={1000}
          spaceBetween={25}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          className="position-relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src={testimonial.img}
                  style={{ width: '80px', height: '80px' }}
                  alt={testimonial.name}
                />
                <h5 className="mb-0">{testimonial.name}</h5>
                <p>{testimonial.service}</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
