import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faClock,
  faCheck,
  faZap,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HERO_IMAGE from './In-progress.png';
import ThemeSwitcher from '../UserHome/Components/ThemeSwitcher/ThemeSwitcher';

export default function ComingSoon() {
  const SHEET_URL =
    'https://script.google.com/macros/s/AKfycbzfwJkG0kuAhBBcChXAivsQvGSUjWJFZ6DFjxE7gW1WAgWifzE7WO4tnqqgAROLSLn0sA/exec';

  async function subscribe(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const note = document.getElementById('note')?.value || '';

    if (!email) {
      toast.error('Please enter a valid email.');
      return;
    }

    const form = new FormData();
    form.append('email', email);
    form.append('note', note);

    await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: form,
    });
    toast.success(
      'Thanks! You’ll be notified when the new version is released.✅',
      {
        autoClose: 4000,
      }
    );
    e.target.reset();
  }
  return (
    <div className='min-vh-100 primary-bg text-white d-flex align-items-center position-relative overflow-hidden'>
      <ThemeSwitcher />
      <ToastContainer />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className='position-absolute opacity-10 d-none d-md-block'
        style={{ top: '-15%', left: '-15%' }}>
        <FontAwesomeIcon icon={faGear} size='10x' color='var(--main-color)' />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        className='position-absolute opacity-10 d-none d-md-block'
        style={{ bottom: '-20%', right: '-20%' }}>
        <FontAwesomeIcon icon={faGear} size='10x' color='var(--main-color)' />
      </motion.div>

      <div className='container position-relative z-10'>
        <div className='row align-items-center g-5 flex-column flex-lg-row-reverse'>
          <div className='col-lg-6 text-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.5,
                type: 'spring',
                stiffness: 90,
              }}
              className='position-relative d-inline-block '>
              <img
                src={HERO_IMAGE}
                alt='Coming Soon - Work in Progress'
                className='img-fluid in-progress-hero-image'
              />

              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='position-absolute d-none d-md-block'
                style={{ top: '-60px', left: '-60px' }}>
                <FontAwesomeIcon
                  icon={faZap}
                  size='4x'
                  color='var(--main-color)'
                  className='opacity-80'
                />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className='position-absolute d-none d-md-block'
                style={{ top: '10%', right: '-50px' }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  size='4x'
                  color='var(--main-color)'
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='position-absolute d-none d-md-block'
                style={{
                  bottom: '-70px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}>
                <FontAwesomeIcon
                  icon={faClock}
                  size='5x'
                  color='var(--main-color)'
                  className='opacity-90'
                />
              </motion.div>
            </motion.div>
          </div>
          <div className='col-lg-6'>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}>
              <h1 className='display-4 fw-bold mb-4 text-center text-lg-start primary-text'>
                {' '}
                <span className='main-color'>Hold Tight!</span>
                <br />
                We're Building Something{' '}
                <span className='main-color'>Awesome</span>
              </h1>

              <p className='lead primary-text mb-3 opacity-90 text-center text-lg-start'>
                Our team is hard at work crafting a new experience for you.
                <br />
                Stay tuned for updates and be the first to know when we launch!
              </p>

              <div className='mb-4'>
                <div className='d-flex justify-content-between align-items-center mb-3 flex-column flex-md-row'>
                  {' '}
                  <span className='fw-bold main-color fs-4 mb-2 mb-md-0'>
                    {' '}
                    <FontAwesomeIcon icon={faGear} spin className='me-2' />
                    In Development
                  </span>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                    className='main-color display-6 fw-bold'>
                    95%
                  </motion.span>
                </div>

                <div
                  className='progress secondary-bg'
                  style={{ height: '24px', borderRadius: '50px' }}>
                  <motion.div
                    className='progress-bar bg-primary progress-bar-striped progress-bar-animated'
                    initial={{ width: 0 }}
                    animate={{ width: '95%' }}
                    transition={{ duration: 2.8, ease: 'easeOut' }}
                    style={{ borderRadius: '50px' }}
                  />
                </div>
              </div>

              <motion.form
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className='d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start'
                onSubmit={subscribe}>
                <input
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                  className='form-control rounded-pill px-3 secondary-bg primary-text border-0 shadow-sm notify-input'
                  required
                />
                <button type='submit' title='Notify Me' className='notify-btn'>
                  <FontAwesomeIcon icon={faMailBulk} />
                  Notify Me
                </button>
              </motion.form>

              <motion.small
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className='primary-text opacity-70 d-block mt-4 text-center text-lg-start ms-lg-3'>
                Join 28,000+ excited users waiting for launch
              </motion.small>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
