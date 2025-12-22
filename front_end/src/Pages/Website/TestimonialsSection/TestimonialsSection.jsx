// TestimonialsSection.jsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import 'swiper/swiper-bundle.css';
import './TestimonialsSection.css';
import testImage1 from '../assets/img/test-img/test1.jpg';
import testImage2 from '../assets/img/test-img/test2.jpg';
import testImage3 from '../assets/img/test-img/test3.jpg';

SwiperCore.use([Autoplay, Pagination]);

const testimonialsData = [
  {
    image: testImage1,
    stars: 5,
    en_data: {
      name: 'Saul Goodman',
      role: 'Ceo & Founder',
      text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam...',
    },
    ar_data: {
      name: 'ساول جودمان',
      role: 'الرئيس التنفيذي والمؤسس',
      text: 'منصة سايبرلاب قدمت لي محتوى احترافي وسهل الفهم، وساعدتني أطور مهاراتي في الأمن السيبراني بشكل أسرع مما توقعت. التجربة كانت ممتازة والدعم رائع.',
    },
  },
  {
    image: testImage2,
    stars: 5,
    en_data: {
      name: 'Sara Wilsson',
      role: 'Designer',
      text: 'Export tempor illum tamen malis malis eram quae irure esse labore...',
    },
    ar_data: {
      name: 'سارة ويلسون',
      role: 'مصممة',
      text: 'المنصة منظمة بشكل ممتاز، والأسلوب التعليمي واضح وسهل. أحببت جدًا الشرح العملي والتمارين اللي بتأكد إن المعلومة تثبت.',
    },
  },
  {
    image: testImage3,
    stars: 5,
    en_data: {
      name: 'Jena Karlis',
      role: 'Store Owner',
      text: 'Enim nisi quem export duis labore cillum quae magna enim sint...',
    },
    ar_data: {
      name: 'جينا كارليس',
      role: 'صاحبة متجر',
      text: 'كنت بدور على منصة تقدم محتوى بسيط وواضح عن الأمن السيبراني، وسايبرلاب كانت أفضل اختيار. أنصح أي حد يبدأ منها.',
    },
  },
  {
    image: testImage1,
    stars: 5,
    en_data: {
      name: 'Matt Brandon',
      role: 'Freelancer',
      text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa...',
    },
    ar_data: {
      name: 'مات براندون',
      role: 'عامل حر',
      text: 'المسارات التعليمية مرتبة بطريقة تسهّل التعلم خطوة بخطوة. قدرت أطبق كتير من اللي اتعلمته في شغلي مباشرة.',
    },
  },
  {
    image: testImage2,
    stars: 5,
    en_data: {
      name: 'John Larson',
      role: 'Entrepreneur',
      text: 'Quis quorum aliqua sint quem legam fore sunt eram irure...',
    },
    ar_data: {
      name: 'جون لارسون',
      role: 'رجل أعمال',
      text: 'محتوى قوي وعملي جدًا، وبيغطي جوانب كتير في السايبر. تجربة ممتازة لأي حد عايز يدخل المجال بشكل احترافي.',
    },
  },
];

const defaultSwiperConfig = {
  loop: true,
  speed: 600,
  autoplay: { delay: 5000, disableOnInteraction: false },
  slidesPerView: 'auto',
  pagination: { clickable: true },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 40 },
    1200: { slidesPerView: 2, spaceBetween: 20 },
  },
};

const TestimonialsSection = () => {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem('lang');
    return stored === 'ar' ? 'ar' : 'en';
  });

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== 'lang') return;
      const newLang = e.newValue === 'ar' ? 'ar' : 'en';
      setLang((prev) => (prev === newLang ? prev : newLang));
    };

    const onLangChange = (e) => {
      const payload = e?.detail ?? localStorage.getItem('lang');
      const newLang = payload === 'ar' ? 'ar' : 'en';
      setLang((prev) => (prev === newLang ? prev : newLang));
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('languageChanged', onLangChange);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('languageChanged', onLangChange);
    };
  }, []);

  const isRtl = lang === 'ar';

  return (
    <section
      id='testimonials'
      className={`testimonials section ${isRtl ? 'rtl' : ''}`}
      lang={isRtl ? 'ar' : 'en'}>
      <div className='courses__header container' data-aos='fade-up'>
        <h2
          className='courses__title'
          ar-data='الشهادات'
          en-data='Testimonials'>
          {isRtl ? 'الشهادات' : 'Testimonials'}
        </h2>
        <p
          className='courses__subtitle'
          ar-data='ماذا يقولون'
          en-data='What are they saying'>
          {isRtl ? 'ماذا يقولون' : 'What are they saying'}
        </p>
      </div>

      <div
        className='testimonials__container container'
        data-aos='fade-up'
        data-aos-delay='100'>
        <Swiper
          key={lang}
          {...defaultSwiperConfig}
          dir={isRtl ? 'rtl' : 'ltr'}
          className='testimonials__slider'>
          {testimonialsData.map((testimonial, index) => {
            const locale = isRtl ? testimonial.ar_data : testimonial.en_data;
            return (
              <SwiperSlide key={index} className='testimonials__slide'>
                <div className='testimonials__wrap'>
                  <div className='testimonials__item'>
                    <img
                      src={testimonial.image}
                      alt={locale.name}
                      className='testimonials__img'
                      ar-data={testimonial.ar_data.name}
                      en-data={testimonial.en_data.name}
                    />
                    <h3
                      className='testimonials__name'
                      ar-data={testimonial.ar_data.name}
                      en-data={testimonial.en_data.name}>
                      {locale.name}
                    </h3>
                    <h4
                      className='testimonials__role'
                      ar-data={testimonial.ar_data.role}
                      en-data={testimonial.en_data.role}>
                      {locale.role}
                    </h4>

                    <div
                      className='testimonials__stars'
                      aria-label={`${locale.stars ?? testimonial.stars} stars`}>
                      {Array.from({
                        length: testimonial.stars ?? (locale.stars || 0),
                      }).map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className='testimonials__star'
                          aria-hidden='true'
                        />
                      ))}
                    </div>

                    <p
                      className='testimonials__text'
                      ar-data={testimonial.ar_data.text}
                      en-data={testimonial.en_data.text}>
                      <i
                        className='fas fa-quote-left testimonials__quote-icon testimonials__quote-icon--left'
                        aria-hidden='true'
                      />
                      <span>{locale.text}</span>
                      <i
                        className='fas fa-quote-right testimonials__quote-icon testimonials__quote-icon--right'
                        aria-hidden='true'
                      />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
