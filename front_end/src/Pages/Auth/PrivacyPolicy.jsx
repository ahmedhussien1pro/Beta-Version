import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className='container py-5'>
      <div className='card shadow-lg border-0 p-4'>
        <h1 className='mb-3 text-primary fw-bold'>Privacy Policy</h1>
        <p className='text-muted'>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <hr />

        <h3 className='mt-4 fw-semibold'>1. Introduction</h3>
        <p>
          This Privacy Policy explains how we collect, use, store, and protect
          your personal information when using our website or services.
        </p>

        <h3 className='mt-4 fw-semibold'>2. Information We Collect</h3>
        <ul className='list-group mb-3'>
          <li className='list-group-item'>Name</li>
          <li className='list-group-item'>Email</li>
          <li className='list-group-item'>
            Profile information from OAuth providers (Google, Facebook,
            LinkedIn)
          </li>
          <li className='list-group-item'>
            Any additional data provided by the user
          </li>
        </ul>

        <h3 className='mt-4 fw-semibold'>3. How We Use Your Information</h3>
        <p>Your information may be used for:</p>
        <ul className='list-group mb-3'>
          <li className='list-group-item'>Account authentication</li>
          <li className='list-group-item'>Improving user experience</li>
          <li className='list-group-item'>
            Communication related to your account
          </li>
        </ul>

        <h3 className='mt-4 fw-semibold'>4. Data Protection</h3>
        <p>
          We use modern security practices to protect your data from
          unauthorized access. Passwords are always stored securely.
        </p>

        <h3 className='mt-4 fw-semibold'>5. Sharing Your Information</h3>
        <p>We do not sell or share your personal data except:</p>
        <ul className='list-group mb-3'>
          <li className='list-group-item'>When required by law</li>
          <li className='list-group-item'>
            To authenticate via OAuth providers
          </li>
        </ul>

        <h3 className='mt-4 fw-semibold'>6. Cookies</h3>
        <p>
          Cookies are used to enhance your experience and keep login sessions
          secure.
        </p>

        <h3 className='mt-4 fw-semibold'>7. Data Deletion</h3>
        <p>
          To request the deletion of your data, visit:
          <br />
          <a
            href='/data-deletion'
            className='text-decoration-none fw-bold text-primary'>
            https://your-domain.com/data-deletion
          </a>
        </p>

        <h3 className='mt-4 fw-semibold'>8. Contact Us</h3>
        <p>
          If you have questions, contact us at:
          <br />
          <strong>your-email@example.com</strong>
        </p>
      </div>
    </div>
  );
}
