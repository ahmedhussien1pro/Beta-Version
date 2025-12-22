import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import TeamMember1 from './imgs/ahmed.png';
import TeamMember2 from './imgs/emad.png';
import TeamMember3 from './imgs/nasar.png';
import TeamMember4 from './imgs/laila.jpg';
import TeamMember5 from "./imgs/mo'men.jpg";
import './team-section.css';

const members = [
  {
    enData: {
      name: 'Ebrahim Nasar',
      desig: 'Founder & Penetration Tester',
      bio: 'Penetration tester focused on offensive security, vulnerability assessment, and practical attack methods. Supports building CyberLabs’ hands-on labs and ensuring strong technical accuracy.',
    },
    arData: {
      name: 'إبراهيم نصار',
      desig: 'المؤسس ومختبر الاختراق',
      bio: 'مختبر اختراق يركز على الأمن الهجومي، وتقييم الثغرات، وطرق الهجوم العملية. يدعم بناء مختبرات CyberLabs العملية وضمان دقة تقنية قوية.',
    },
    img: TeamMember3,
    links: {
      fb: 'https://www.facebook.com/',
      twit: 'https://www.twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },

  {
    enData: {
      name: 'Mohamed Emad',
      desig: 'Co-Founder & SOC Analyst',
      bio: 'SOC analyst with strong analytical skills and interest in security operations. Manages marketing direction, brand communication, and user engagement to grow CyberLabs’ community.',
    },
    arData: {
      name: 'محمد عماد',
      desig: 'المؤسس المشارك ومحلل SOC',
      bio: 'محلل SOC ذو مهارات تحليلية قوية واهتمام بعمليات الأمن. يدير اتجاه التسويق، والتواصل العلامي، وتفاعل المستخدمين لتنمية مجتمع CyberLabs.',
    },
    img: TeamMember2,
    links: {
      fb: 'https://www.facebook.com/',
      twit: 'https://www.twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },

  {
    enData: {
      name: "Mo'men Mustafa",
      desig: 'Backend Developer',
      bio: 'Backend developer experienced in Node.js, API design, and service scalability. Interested in DevOps practices and improving automation, deployment pipelines, and overall system reliability.',
    },
    arData: {
      name: 'مؤمن مصطفى',
      desig: 'مطور الواجهة الخلفية  ',
      bio: 'مطور Backend ذو خبرة في Node.js وتصميم API وقابلية توسعة الخدمات. مهتم بممارسات DevOps وتحسين الأتمتة، وخطوط نشر التطبيقات، والموثوقية العامة للنظام.',
    },
    img: TeamMember5,
    links: {
      fb: 'https://www.facebook.com/',
      twit: 'https://www.twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },

  {
    enData: {
      name: 'Laila Mosbah',
      desig: 'Frontend Developer',
      bio: 'Frontend engineer skilled in React, Next.js, and TypeScript. Focused on performance, clean UI development, and building modern, user-friendly interface architectures.',
    },
    arData: {
      name: 'ليلى مصباح',
      desig: 'مطورة الواجهة الأمامية',
      bio: 'مهندسة واجهة أمامية ماهرة في React و Next.js  و TypeScript. تركز على الأداء، وتطوير واجهات مستخدم نظيفة، وبناء هياكل واجهات حديثة وسهلة الاستخدام.',
    },
    img: TeamMember4,
    links: {
      fb: 'https://www.facebook.com/',
      twit: 'https://www.twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    enData: {
      name: 'Ahmed Hussien',
      desig: 'Co-Founder, CEO & Full-Stack Developer',
      bio: 'Tech-driven leader with solid full-stack experience, guiding product direction, system architecture, and platform strategy at CyberLabs. Focused on scalable solutions and delivering impactful, real-world learning experiences.',
    },
    arData: {
      name: 'أحمد حسين',
      desig: 'المؤسس المشارك، المدير التنفيذي ومطور Full-Stack',
      bio: 'قائد مدفوع بالتكنولوجيا ذو خبرة قوية في Full-Stack، يوجه اتجاه المنتج، وهندسة النظام، واستراتيجية المنصة في CyberLabs. يركز على حلول قابلة للتوسع وتقديم تجارب تعلم مؤثرة وعملية.',
    },
    img: TeamMember1,
    links: {
      fb: 'https://www.facebook.com/',
      twit: 'https://www.twitter.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

export default function TeamSection() {
  return (
    <section className='team__section overflow-hidden'>
      <div className='team__gradient team__gradient--1'></div>
      <div className='team__gradient team__gradient--2'></div>
      <div className='container'>
        <motion.div
          className='row gy-4 justify-content-center'
          initial='hidden'
          animate='visible'
          variants={{
            visible: { transition: { staggerChildren: 0.27 } },
          }}>
          {members.map((member, index) => (
            <motion.div
              key={index}
              className='col-xl-3 col-lg-4 col-md-6'
              variants={cardVariants}>
              <div className='team__card p-3 position-relative overflow-hidden'>
                <div className='team__img'>
                  <img src={member.img} alt={member['enData'].name} />
                </div>
                <div className='team__content'>
                  <h3
                    className='team__title'
                    ar-data={member['arData'].name}
                    en-data={member.enData.name}>
                    {member.enData.name}
                  </h3>
                  <span
                    className='team__desig'
                    ar-data={member.arData.desig}
                    en-data={member.enData.desig}>
                    {member.enData.desig}
                  </span>
                  <div className='team__social'>
                    <a
                      href={member.links.fb}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <FaFacebookF />
                    </a>
                    <a
                      href={member.links.twit}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <FaTwitter />
                    </a>
                    <a
                      href={member.links.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className='team__hover'>
                  <div className='team__content'>
                    <h3
                      className='team__title'
                      ar-data={member.arData.name}
                      en-data={member.enData.name}>
                      {member.enData.name}
                    </h3>
                    <span
                      className='team__desig'
                      ar-data={member.arData.desig}
                      en-data={member.enData.desig}>
                      {member.enData.desig}
                    </span>
                    <p
                      className='team__text'
                      ar-data={member.arData.bio}
                      en-data={member.enData.bio}>
                      {member.enData.bio}
                    </p>
                    <div className='team__social'>
                      <a
                        href={member.links.fb}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaFacebookF />
                      </a>
                      <a
                        href={member.links.twit}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaTwitter />
                      </a>
                      <a
                        href={member.links.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
