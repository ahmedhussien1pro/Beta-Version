import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurpSuitLab2.css';
import GoBack from '../../../../Components/GoBack_Btn/GoBack_Btn';
import ShowHint from '../../../../Components/ShowHint_Btn/ShowHint_Btn';
import ThemeSwitcher from '../../../../Components/ThemeSwitcher/ThemeSwitcher';

export default function BurpSuitLab2() {
  const hintMessage = `<p>Use Burp Suite Intruder with username admin and the provided <mark>WordList </mark> to brute-force the password and identify the correct one.</p>`;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://digitopia-project-backend.vercel.app/api/brokenAuthLab1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send data to the server');
      }

      const data = await response.json();

      if (data.message === 'success') {
        setMessage('success!');
      }
      if (data.username === username && data.password !== password) {
        setMessage('pass! invalid, try again');
      }
      if (data.username !== username) {
        setMessage('try with valid user');
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setMessage('An error occurred while sending data to the server.');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <GoBack />
      <ShowHint hintText={hintMessage} />
      <ThemeSwitcher />
      <div className='bs-lab2-container'>
        <div className='bs-lab2-card'>
          <h3 className='bs-lab2-title'>Secure Login Portal</h3>

          <form onSubmit={handleSubmit} className='bs-lab2-form'>
            <div className='bs-lab2-input-group'>
              <input
                type='text'
                className='bs-lab2-input'
                id='bs-lab2-username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor='bs-lab2-username' className='bs-lab2-input-label'>
                Username
              </label>
            </div>

            <div className='bs-lab2-input-group'>
              <input
                type='password'
                className='bs-lab2-input'
                id='bs-lab2-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor='bs-lab2-password' className='bs-lab2-input-label'>
                Password
              </label>
            </div>

            <button type='submit' className='bs-lab2-submit'>
              Authenticate
            </button>
          </form>

          {message && (
            <div
              className={`bs-lab2-feedback ${
                message === 'success!' ? 'bs-lab2-success' : 'bs-lab2-error'
              }`}>
              <span className='bs-lab2-feedback-icon'>
                {message === 'success!' ? '✓' : '✗'}
              </span>
              {message}
            </div>
          )}

          <div className='bs-lab2-cred-hint'>
            <p className='bs-lab2-cred-item'>
              <span className='bs-lab2-cred-label'>Test Username:</span>
              <code className='code-bs'>admin</code>
            </p>
            <p className='bs-lab2-cred-item'>
              <span className='bs-lab2-cred-label'>Wordlist:</span>
              <code className='code-bs'>Seclist-10000 Common Credentials</code>
            </p>
          </div>

          <Link
            to='/words-list'
            target='_blank'
            className='bs-lab2-wordlist-link'>
            <span className='bs-lab2-link-icon'>🔗</span>
            View Wordlist Documentation
          </Link>
        </div>
      </div>
    </>
  );
}
