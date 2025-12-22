import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecommendedCourses = React.memo(({ data }) => (
  <div className='card-custom p-3'>
    <h6>Recommended for You</h6>
    {data.map((course, index) => (
      <div
        key={index}
        className='d-flex justify-content-between p-3 rounded mb-2'
        style={{ background: 'rgba(255,255,255,0.05)' }}>
        <div className='d-flex align-items-center'>
          <div
            className='icon-circle me-3'
            style={{ background: course.color }}>
            <FontAwesomeIcon icon={course.icon} className='text-white' />
          </div>
          <div>
            <div className='fw-semibold'>{course.name}</div>
            <small className='text-secondary-text'>Backend Development</small>
          </div>
        </div>
        <div>
          <div className='fw-semibold text-main-color'>${course.price}</div>
          <button className='btn btn-link p-0 text-main-color'>View</button>
        </div>
      </div>
    ))}
  </div>
));

export default RecommendedCourses;
