import React from 'react';
import { motion } from 'framer-motion';
import './hero-team.css';
import { FiShield, FiCpu, FiActivity, FiTarget } from 'react-icons/fi';

export default function HeroTeam() {
  return (
    <section className='hero-team-section py-5'>
      <div className='container'>
        <div className='row align-items-center'>
          {/* Left Side – Text */}
          <motion.div
            className='col-lg-6'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <h1
              className='hero-title'
              ar-data='تعرف على الفريق وراء CyberLabs'
              en-data='Meet the Team Behind CyberLabs'>
              Meet the Team Behind CyberLabs
            </h1>
            <p
              className='hero-subtitle'
              ar-data='نحن المبدعون وراء CyberLabs — منصة تم بناؤها برؤية قوية: لتوفير تعلم عملي وحقيقي في مجال الأمن السيبراني مصمم لإعدادك لتحديات العالم الحقيقي.'
              en-data='We are the creators behind CyberLabs — a platform built with a
              strong vision: to provide real, practical, hands-on cybersecurity
              learning designed to prepare you for real-world challenges.'>
              We are the creators behind CyberLabs — a platform built with a
              strong vision: to provide real, practical, hands-on cybersecurity
              learning designed to prepare you for real-world challenges.
            </p>

            <p
              className='hero-text'
              ar-data='مهمتنا هي بناء مختبرات عملية، وسيناريوهات واقعية، وتجربة تعلم حديثة تساعد المتعلمين على دخول مجال الأمن السيبراني من الباب الصحيح — بمهارات حقيقية، وليس نظرية فقط.'
              en-data='Our mission is to build practical labs, realistic scenarios, and a
              modern learning experience that helps learners enter the
              cybersecurity field through the right door — with real skills, not
              theory only.'>
              Our mission is to build practical labs, realistic scenarios, and a
              modern learning experience that helps learners enter the
              cybersecurity field through the right door — with real skills, not
              theory only.
            </p>
          </motion.div>

          {/* Right Side – Animated Grid */}
          <motion.div
            className='col-lg-6'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <div className='team-preview-grid position-relative'>
              {/* Top-left */}
              <motion.div
                className='preview-item'
                initial={{ opacity: 0, x: -40, y: -40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6 }}>
                <FiShield size={40} color='#0d6efd' />
              </motion.div>

              {/* Top-right */}
              <motion.div
                className='preview-item'
                initial={{ opacity: 0, x: 40, y: -40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}>
                <FiCpu size={40} color='#0d6efd' />
              </motion.div>

              {/* Center circle */}
              <div className='preview-item-center position-absolute'></div>

              {/* Bottom-left */}
              <motion.div
                className='preview-item'
                initial={{ opacity: 0, x: -40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <FiActivity size={40} color='#0d6efd' />
              </motion.div>

              {/* Bottom-right */}
              <motion.div
                className='preview-item'
                initial={{ opacity: 0, x: 40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}>
                <FiTarget size={40} color='#0d6efd' />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
