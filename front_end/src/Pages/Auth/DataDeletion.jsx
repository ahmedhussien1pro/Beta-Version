import React from 'react';

export default function DataDeletion() {
  return (
    <div className='container py-5'>
      <div className='card shadow-lg border-0 p-4'>
        <h1 className='text-danger fw-bold'>Request Data Deletion</h1>
        <p className='text-muted mb-4'>
          You can request deletion of all personal data stored in our system.
        </p>

        <hr />

        <h3 className='mt-4 fw-semibold'>How to Request Deletion</h3>
        <p>
          To request deletion of your account and all associated data, please
          email:
        </p>

        <p className='alert alert-info fw-bold'>your-email@example.com</p>

        <p>
          Your request will be reviewed and processed within{' '}
          <strong>30 days</strong>.
        </p>

        <h3 className='mt-4 fw-semibold'>What Data Will Be Deleted?</h3>
        <ul className='list-group mb-3'>
          <li className='list-group-item'>Account information (name, email)</li>
          <li className='list-group-item'>OAuth connected accounts</li>
          <li className='list-group-item'>Stored tokens</li>
          <li className='list-group-item'>Profile data</li>
        </ul>

        <p>
          If you can’t access your account, include your email and proof of
          ownership in the request.
        </p>
      </div>
    </div>
  );
}
