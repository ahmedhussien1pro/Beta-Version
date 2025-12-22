import React from 'react';

export default function Overview({ usersData, coursesData }) {
  console.log(usersData);

  const normalizeRole = (role) => {
    if (!role) return '';
    return role
      .trim()
      .toLowerCase()
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  const countsUser = {
    total: usersData.length,
    admin: usersData.filter((u) => normalizeRole(u.role) === 'Admin').length,
    user: usersData.filter((u) => normalizeRole(u.role) === 'User').length,
    creator: usersData.filter(
      (u) => normalizeRole(u.role) === 'Content creator'
    ).length,
  };

  return (
    <div className='container '>
      {/* Cards */}
      {
        // #region Users Info
      }
      <h1 style={{ color: 'var(--main-color' }}>Users Info</h1>
      <div className='row mb-4'>
        <div className='col-md-6 mb-3'>
          <div className='card p-3 text-center'>
            <h5>Total Users</h5>
            <h2>{countsUser.total}</h2>
          </div>
        </div>
        <div className='col-md-6 mb-3  '>
          <div className='card p-3 text-center'>
            <h5>Admins</h5>
            <h2>{countsUser.admin}</h2>
          </div>
        </div>
        <div className='col-md-6 mb-3 '>
          <div className='card p-3 text-center'>
            <h5>Content Creators</h5>
            <h2>{countsUser.creator}</h2>
          </div>
        </div>
        <div className='col-md-6 mb-3 '>
          <div className='card p-3 text-center'>
            <h5> Trainees</h5>
            <h2>{countsUser.user}</h2>
          </div>
        </div>
      </div>

      {
        // #region Courses Info
      }
      <h1 style={{ color: 'var(--main-color' }}>Courses Info</h1>
      <div className='row mb-4'>
        <div className='col-md-6 mb-3 '>
          <div className='card p-3 text-center'>
            <h5>Total Courses</h5>
            <h2>15</h2>
          </div>
        </div>
        <div className='col-md-6 mb-3  '>
          <div className='card p-3 text-center'>
            <h5>Ready Courses</h5>
            <h2>10</h2>
          </div>
        </div>
        <div className='col-md-6 mb-3 '>
          <div className='card p-3 text-center'>
            <h5>Courses Creating</h5>
            <h2>3</h2>
          </div>
        </div>
        <div className='col-md-6 mb-3  '>
          <div className='card p-3 text-center'>
            <h5>Courses in Drafts</h5>
            <h2>2</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
