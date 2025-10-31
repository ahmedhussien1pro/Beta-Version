import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "./TestimonialsSection.css";
import testImage1 from "../assets/img/test-img/test1.jpg";
import testImage2 from "../assets/img/test-img/test2.jpg";
import testImage3 from "../assets/img/test-img/test3.jpg";

SwiperCore.use([Autoplay, Pagination]);

const testimonialsData = [
  {
    image: testImage1,
    ar_name: "سول جودمان",
    en_name: "Saul Goodman",
    ar_role: "الرئيس التنفيذي والمؤسس",
    en_role: "Ceo & Founder",
    stars: 5,
    ar_text:
      "انضمامي إلى أكاديمية السايبر غير مسار حياتي المهنية تمامًا. ساعدتني المختبرات العملية ومحاكاة الهجمات الحقيقية في الحصول على أول وظيفة لي في مجال الأمن السيبراني خلال أشهر. إنها ليست مجرد نظرية - إنها تدريب واقعي.",
    en_text:
      "Joining the Cyber Academy completely changed my career path. The hands-on labs and real attack simulations helped me land my first cybersecurity job within months. It’s not just theory — it’s real-world training.",
  },
  {
    image: testImage2,
    ar_name: "سارة ويلسون",
    en_name: "Sara Wilsson",
    ar_role: "مصممة",
    en_role: "Designer",
    stars: 5,
    ar_text:
      "لقد التحقت بالعديد من الدورات التدريبية عبر الإنترنت من قبل، لكن لم تكن أي منها عملية بهذا الشكل. يشرح المدربون مواضيع معقدة مثل القرصنة الأخلاقية وأمن الشبكات بطريقة بسيطة ومنظمة للغاية. أوصي بها بشدة للمبتدئين!",
    en_text:
      "I’ve taken many online courses before, but none were this practical. The instructors explain complex topics like ethical hacking and network security in such a simple, structured way. Highly recommended for beginners!",
  },
  {
    image: testImage3,
    ar_name: "جينا كارليس",
    en_name: "Jena Karlis",
    ar_role: "مالك المتجر",
    en_role: "Store Owner",
    stars: 5,
    ar_text:
      "مشاريع الفريق الأحمر والفريق الأزرق في الأكاديمية منحتني فهمًا عميقًا لكيفية عمل الهجمات والدفاعات في الحياة الواقعية. عززت ثقتي وأدائي في العمل على الفور.",
    en_text:
      "The Academy’s red team and blue team projects gave me a deep understanding of how attacks and defenses work in real life. It boosted my confidence and performance at work instantly.",
  },
  {
    image: testImage1,
    ar_name: "مات براندون",
    en_name: "Matt Brandon",
    ar_role: "مستقل",
    en_role: "Freelancer",
    stars: 5,
    ar_text:
      "ما أحببته أكثر هو التوجيه والتغذية الراجعة المستمرة. الفريق يهتم حقًا بتقدمك - لن تشعر أبدًا بأنك ضائع أو عالق.",
    en_text:
      "What I loved most was the mentorship and constant feedback. The team truly cares about your progress — you never feel lost or stuck.",
  },
  {
    image: testImage2,
    ar_name: "جون لارسن",
    en_name: "John Larson",
    ar_role: "رائد أعمال",
    en_role: "Entrepreneur",
    stars: 5,
    ar_text:
      "جعلت أكاديمية السايبر الأمن السيبراني ممتعًا وسهل الوصول إليه. ساعدني المخطط الهيكلي من الأساسيات إلى المواضيع المتقدمة على الانتقال بسلاسة إلى هذا المجال.",
    en_text:
      "Cyber Academy made cybersecurity fun and accessible. The structured roadmap from basics to advanced topics helped me transition smoothly into the field.",
  },
];

const swiperConfig = {
  loop: true,
  speed: 600,
  autoplay: { delay: 5000 },
  slidesPerView: "auto",
  pagination: { clickable: true },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
};

const TestimonialsSection = () => {
  const [isArabic, setIsArabic] = useState(
    localStorage.getItem("lang") === "ar"
  );

  useEffect(() => {
    const updateLang = () => setIsArabic(localStorage.getItem("lang") === "ar");
    window.addEventListener("langChange", updateLang);
    return () => window.removeEventListener("langChange", updateLang);
  }, []);
  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Header */}
      <div className="courses__header container" data-aos="fade-up">
        <h2
          className="courses__title"
        >
          {isArabic ? "الشهادات" : "Testimonials"}
        </h2>
        <p
          className="courses__subtitle"
        >
          {isArabic ? "ماذا يقولون" : "What are they saying"}
        </p>
      </div>

      <div
        className="testimonials__container container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Swiper {...swiperConfig} className="testimonials__slider">
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonials__slide">
              <div className="testimonials__wrap">
                <div className="testimonials__item">
                  <img
                    src={testimonial.image}
                    alt={testimonial.en_name}
                    className="testimonials__img"
                  />
                  <h3
                    className="testimonials__name"
                  >
                    {isArabic ? testimonial.ar_name : testimonial.en_name}
                  </h3>
                  <h4
                    className="testimonials__role"
                  >
                    {isArabic ? testimonial.ar_role : testimonial.en_role}
                  </h4>
                  <div className="testimonials__stars">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <i key={i} className="fas fa-star testimonials__star"></i>
                    ))}
                  </div>
                  <p className="testimonials__text">
                    <i className="fas fa-quote-left testimonials__quote-icon testimonials__quote-icon--left"></i>
                    <span
                    >
                      {isArabic ? testimonial.ar_text : testimonial.en_text}
                    </span>
                    <i className="fas fa-quote-right testimonials__quote-icon testimonials__quote-icon--right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
