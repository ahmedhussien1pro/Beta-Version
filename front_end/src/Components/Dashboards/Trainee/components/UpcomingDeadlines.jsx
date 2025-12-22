import React from 'react';

const UpcomingDeadlines = React.memo(({ data }) => (
  <div className='card-custom p-3 mb-3'>
    <h6>Upcoming Deadlines</h6>
    {data.map((deadline, index) => (
      <div
        key={index}
        className='d-flex align-items-center p-2 mb-2 rounded'
        style={{ background: deadline.bg }}>
        <div
          className='badge-dot me-2'
          style={{ background: deadline.color }}></div>
        <div className='flex-grow-1'>
          <div className='fw-semibold'>{deadline.name}</div>
          <small className='secondary-text'>Due in {deadline.due}</small>
        </div>
      </div>
    ))}
  </div>
));

export default UpcomingDeadlines;
