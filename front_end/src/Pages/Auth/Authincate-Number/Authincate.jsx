import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookie from 'cookie-universal';
import { useNavigate } from 'react-router-dom';
import Preloader from '../../Website/Preloader/Preloader';
import ThemeSwitcher from '../../Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';

export default function Authenticate() {
  const [form, setForm] = useState({
    code: '',
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const cookie = Cookie();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!/^\d{6}$/.test(form.code)) {
      setLoading(false);
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Code',
        text: 'The code must be exactly 6 digits.',
        confirmButtonColor: 'var(--main-color)',
      });
      return;
    }

    try {
      const response = await axios.post(
        'https://digitopia-project-backend.vercel.app/api/authenticate',
        {
          number: form.code,
        }
      );
      setLoading(false);
      const token = response.data.token;
      cookie.set('CuberWeb', token);
      Swal.fire({
        icon: 'success',
        title: 'Authentication Successful!',
        text: 'You are now authenticated.',
        confirmButtonColor: 'var(--main-color)',
        timer: 2000,
      }).then(() => {
        navigate('/home');
      });
    } catch (error) {
      setLoading(false);
      let message = 'An unexpected error occurred.';
      if (error.response && error.response.data && error.response.data.data) {
        message = error.response.data.data;
      }
      Swal.fire({
        icon: 'error',
        title: 'Authentication Failed',
        text: message,
        confirmButtonColor: 'var(--main-color)',
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader loading={loading} />}
      <ThemeSwitcher />
      <section className='auth-form primary-bg'>
        <div className='auth-form__container secondary-bg rounded-3'>
          <div
            className='auth-form__form-box'
            style={{ width: '100%', left: 0, position: 'relative' }}>
            <form onSubmit={handleSubmit} className='auth-form__form'>
              <h1 className='auth-form__heading text-center main-color'>
                Authenticate
              </h1>

              <div className='auth-form__input-box'>
                <input
                  type='text'
                  name='code'
                  value={form.code}
                  onChange={handleChange}
                  placeholder='6-digit code'
                  required
                  maxLength='6'
                  className='auth-form__input'
                  pattern='\d{6}'
                />
                <i className='auth-form__input-icon fa-solid fa-key'></i>
              </div>

              <button
                type='submit'
                className='auth-form__submit-btn btn text-light'
                disabled={loading}>
                {loading ? 'Authenticating...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
