import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LearningProgress = React.memo(({ data }) => (
  <div className='card-custom p-3'>
    <h5 className='mb-4'>Course Progress</h5>
    {data.map((course, index) => (
      <div key={index} className='mb-4 p-3 bg-primary-bg rounded'>
        <div className='d-flex justify-content-between align-items-center mb-2'>
          <div className='d-flex align-items-center'>
            <div
              className='icon-circle me-3'
              style={{ background: course.color }}>
              <FontAwesomeIcon icon={course.icon} className='text-white' />
            </div>
            <div>
              <h6>{course.name}</h6>
              <small className='text-secondary-text'>24 lessons</small>
            </div>
          </div>
          <span className='fw-bold text-success'>{course.progress}%</span>
        </div>
        <ProgressBar
          now={course.progress}
          variant='success'
          className='progress'
        />
      </div>
    ))}
  </div>
));

export default LearningProgress;
