import { useEffect } from 'react';
import './Login_page.css';
import axios from 'axios';
import React, { useState } from 'react';
import Cookie from 'cookie-universal';
import { useNavigate } from 'react-router-dom';
import GoBackBtn from '../../../Components/GoBack_Btn/GoBack_Btn';
import ShowHintBtn from '../../../Components/ShowHint_Btn/ShowHint_Btn';
import Preloader from '../../../../Preloader/Preloader';

export default function CookiesLogin({ CookieName, ApiEnd, labName, values }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const cookie = Cookie();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');
  const Cookievar = cookie.get(CookieName);
  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr('');
    try {
      const res = await axios.post(
        `https://digitopia-project-backend.vercel.app/api/${ApiEnd}`,
        form
      );
      setLoading(false);
      if (CookieName === 'role') {
        const role = res.data.role;
        cookie.set('role', role);
      } else if (CookieName === 'userId') {
        const userID = res.data.userId;
        cookie.set('userId', userID);
      }
      if (Cookievar === 'admin') {
        navigate(`/cookies/cookies_lab/${labName}/admin`, { replace: true });
      } else if (Cookievar === 'support') {
        navigate(`/cookies/cookies_lab/${labName}/support`, { replace: true });
      } else {
        navigate(`/cookies/cookies_lab/${labName}/login`, { replace: true });
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        if (error.response.status === 401) {
          setErr('Wrong Email or Password');
        } else {
          setErr('Internal server error');
        }
        console.error(error.response.data);
      } else {
        setErr('Network Error');
        console.error(error);
      }
    }
  }
  useEffect(() => {
    if (Cookievar === values[0]) {
      navigate(`/cookies/cookies_lab/${labName}/admin`, { replace: true });
    } else if (Cookievar === values[1]) {
      navigate(`/cookies/cookies_lab/${labName}/support`, { replace: true });
    } else {
      navigate(`/cookies/cookies_lab/${labName}/login`, { replace: true });
    }
  }, [Cookievar, navigate, values, labName]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Preloader loading={loading} />}
      <div className='login-page'>
        <GoBackBtn />
        <ShowHintBtn
          hintText={'<p>click inspect and cheak cookies value</p>'}
        />
        <div className='container-login'>
          <div className='cookies__login-form'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className='cookies__login__form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder='Enter Your Email..'
                />
              </div>
              <div className='cookies__login__form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  placeholder='Enter Your Password..'
                />
              </div>
              <div className='cookies__login__form-group'>
                <button type='submit' className='btn-login'>
                  Login
                </button>
              </div>
              {err !== '' && <span className='error'>{err}</span>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
