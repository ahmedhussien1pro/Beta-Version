import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import ThemeSwitcher from '../../Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';
import './style.css';
import axios from 'axios';
import Cookie from 'cookie-universal';
import Preloader from '../../Website/Preloader/Preloader';

export default function AuthForm() {
  const navigate = useNavigate();
  const cookie = Cookie();
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePanel = () => {
    setIsActive(!isActive);
    setForm({ username: '', email: '', password: '', confirmPassword: '' });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    setLoading(true);

    if (type === 'login') {
      try {
        const res = await axios.post(
          'https://digitopia-project-backend.vercel.app/api/login',
          { email: form.email, password: form.password }
        );
        setLoading(false);
        const token = res.data.data.token;
        cookie.set('CuberWeb', token);
        Swal.fire({
          icon: 'success',
          title: 'Welcome Back!',
          text: `Hi ${form.email}!`,
          confirmButtonColor: 'var(--main-color)',
          timer: 2000,
        }).then(() => {
          navigate('/home');
        });
      } catch (error) {
        setLoading(false);
        let message = 'An error occurred. Please try again.';
        if (error.response) {
          const status = error.response.status;
          const msg = error.response.data;
          if (status === 404 && msg === 'Not a user') {
            message = 'User does not exist. Please check your email.';
          } else if (status === 401 && msg === 'Invalid name or password') {
            message = 'Invalid email or password. Please try again.';
          } else if (status === 401 && msg === 'User not verified') {
            message =
              'Your account is not verified yet. Please check your email for verification.';
          } else {
            message = 'Login failed. Please try again later.';
          }
        } else {
          message = 'Network error. Please check your connection.';
        }
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: message,
          confirmButtonColor: 'var(--main-color)',
        });
      }
    } else {
      if (form.password.length < 6) {
        setLoading(false);
        Swal.fire({
          icon: 'warning',
          title: 'Weak Password',
          text: 'Password must be at least 6 characters long.',
          confirmButtonColor: 'var(--main-color)',
        });
        return;
      }

      if (form.password !== form.confirmPassword) {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Password Mismatch',
          text: 'Passwords do not match. Please try again.',
          confirmButtonColor: 'var(--main-color)',
        });
        return;
      }

      try {
        const res = await axios.post(
          'https://digitopia-project-backend.vercel.app/api/register',
          {
            name: form.username,
            email: form.email,
            password: form.password,
          }
        );
        setLoading(false);
        const token = res.data.token;
        cookie.set('CuberWeb', token);
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: `Welcome ${form.username}!`,
          confirmButtonColor: 'var(--main-color)',
          timer: 2000,
        }).then(() => {
          navigate('/authenticate');
        });
      } catch (error) {
        setLoading(false);
        let message =
          'An error occurred during registration. Please try again.';
        if (error.response && error.response.status === 409) {
          message =
            'This email has already been taken. Please use a different email.';
        } else if (error.response) {
          message =
            error.response.data ||
            'Registration failed. Please check your details.';
        } else {
          message = 'Network error. Please check your connection.';
        }
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: message,
          confirmButtonColor: 'var(--main-color)',
        });
      }
    }

    setForm({ username: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <>
      {loading && <Preloader loading={loading} />}
      <ThemeSwitcher />
      <section className='auth-form primary-bg'>
        <div
          className={`auth-form__container secondary-bg rounded-3 ${
            isActive ? 'auth-form__container--active' : ''
          }`}>
          {/* Login Form */}
          <div className='auth-form__form-box auth-form__form-box--login'>
            <form
              onSubmit={(e) => handleSubmit(e, 'login')}
              className='auth-form__form'>
              <h1 className='auth-form__heading text-center main-color'>
                Login
              </h1>

              <div className='auth-form__input-box'>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='Email'
                  required
                  className='auth-form__input'
                  autoComplete='email'
                />
                <i className='auth-form__input-icon fa-solid fa-envelope'></i>
              </div>

              <div className='auth-form__input-box'>
                <input
                  type='password'
                  name='password'
                  value={form.password}
                  onChange={handleChange}
                  placeholder='Password'
                  required
                  className='auth-form__input'
                  autoComplete='current-password'
                />
                <i className='auth-form__input-icon fa-solid fa-lock'></i>
              </div>

              <div className='auth-form__forgot-link'>
                <Link to='/forgot-password'>Forgot password?</Link>
              </div>

              <button
                type='submit'
                className='auth-form__submit-btn btn  text-light'
                disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>

              <p className='auth-form__divider text-center'>
                or login with social media
              </p>

              <div className='auth-form__social-icons'>
                <Link
                  to='#'
                  className='auth-form__social-link'
                  aria-label='Login with Google'>
                  <i className='fa-brands fa-google'></i>
                </Link>
                <Link
                  to='#'
                  className='auth-form__social-link'
                  aria-label='Login with Facebook'>
                  <i className='fa-brands fa-facebook-f'></i>
                </Link>
                <Link
                  to='#'
                  className='auth-form__social-link'
                  aria-label='Login with GitHub'>
                  <i className='fa-brands fa-github'></i>
                </Link>
                <Link
                  to='#'
                  className='auth-form__social-link'
                  aria-label='Login with LinkedIn'>
                  <i className='fa-brands fa-linkedin-in'></i>
                </Link>
              </div>

              <div className='auth-form__switch-link d-md-none'>
                Don't have an account?{' '}
                <Link
                  to='#'
                  onClick={(e) => {
                    e.preventDefault();
                    togglePanel();
                  }}>
                  Register
                </Link>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div className='auth-form__form-box auth-form__form-box--register'>
            <form
              onSubmit={(e) => handleSubmit(e, 'register')}
              className='auth-form__form'>
              <h1 className='auth-form__heading text-center main-color'>
                Register
              </h1>

              <div className='auth-form__input-box'>
                <input
                  type='text'
                  name='username'
                  value={form.username}
                  onChange={handleChange}
                  placeholder='Username'
                  required
                  className='auth-form__input'
                  autoComplete='username'
                />
                <i className='auth-form__input-icon fa-solid fa-user'></i>
              </div>

              <div className='auth-form__input-box'>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='Email'
                  required
                  className='auth-form__input'
                  autoComplete='email'
                />
                <i className='auth-form__input-icon fa-solid fa-envelope'></i>
              </div>

              <div className='auth-form__input-box'>
                <input
                  type='password'
                  name='password'
                  value={form.password}
                  onChange={handleChange}
                  placeholder='Password (min 6 characters)'
                  required
                  className='auth-form__input'
                  autoComplete='new-password'
                  minLength='6'
                />
                <i className='auth-form__input-icon fa-solid fa-lock'></i>
              </div>

              <div className='auth-form__input-box'>
                <input
                  type='password'
                  name='confirmPassword'
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder='Confirm Password'
                  required
                  className='auth-form__input'
                  autoComplete='new-password'
                />
                <i className='auth-form__input-icon fa-solid fa-lock'></i>
              </div>

              <button
                type='submit'
                className='auth-form__submit-btn btn text-light'
                disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
              </button>

              <p className='auth-form__divider text-center'>
                or register with social media
              </p>

              <div className='auth-form__social-icons'>
                <Link
                  to='#'
                  className='auth-form__social-link'
                  aria-label='Register with Google'>
                  <i className='fa-brands fa-google'></i>
                </Link>
                <Link
                  to='#'
                  className='auth-form__social-link'
                  aria-label='Register with Facebook'>
                  <i className='fa-brands fa-facebook-f'></i>
                </Link>
                <Link
                  to='#'
                  className='auth-form__social-link'
                  aria-label='Register with GitHub'>
                  <i className='fa-brands fa-github'></i>
                </Link>
                <Link
                  to='#'
                  className='auth-form__social-link'
                  aria-label='Register with LinkedIn'>
                  <i className='fa-brands fa-linkedin-in'></i>
                </Link>
              </div>

              <div className='auth-form__switch-link d-md-none'>
                Already have an account?{' '}
                <Link
                  to='#'
                  onClick={(e) => {
                    e.preventDefault();
                    togglePanel();
                  }}>
                  Login
                </Link>
              </div>
            </form>
          </div>

          {/* Toggle Panels - Desktop Only */}
          <div className='auth-form__toggle-box d-none d-md-block'>
            <div className='auth-form__toggle-panel auth-form__toggle-panel--left'>
              <h1 className='auth-form__toggle-heading'>Hello, Welcome!</h1>
              <p className='auth-form__toggle-text'>Don't have an account?</p>
              <button
                onClick={togglePanel}
                className='auth-form__toggle-btn'
                type='button'>
                Register
              </button>
            </div>

            <div className='auth-form__toggle-panel auth-form__toggle-panel--right'>
              <h1 className='auth-form__toggle-heading'>Welcome Back!</h1>
              <p className='auth-form__toggle-text'>Already have an account?</p>
              <button
                onClick={togglePanel}
                className='auth-form__toggle-btn '
                type='button'>
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
