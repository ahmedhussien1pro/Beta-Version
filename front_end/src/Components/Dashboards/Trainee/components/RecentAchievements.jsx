import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const RecentAchievements = React.memo(({ data, level }) => (
  <div className='card-custom p-3 mb-3'>
    <h5 className='mb-3'>Recent Achievements</h5>
    {data.map((ach, index) => (
      <div
        key={index}
        className='p-3 mb-2 rounded'
        style={{ background: 'rgba(255,255,255,0.05)' }}>
        <div className='d-flex align-items-center'>
          <div className='icon-circle me-3' style={{ background: ach.color }}>
            <FontAwesomeIcon icon={faTrophy} className='text-white' />
          </div>
          <div className='flex-grow-1'>
            <h6 className='mb-1'>{ach.name}</h6>
            <small className='text-secondary-text'>{ach.description}</small>
          </div>
          <small className='text-secondary-text'>{ach.date}</small>
        </div>
      </div>
    ))}
    <div className='mt-3 p-3 bg-primary-bg rounded'>
      <h6>Your Level: {level.current}</h6>
      <ProgressBar now={(level.xp / level.next) * 100} className='mb-2' />
      <small>
        {level.xp}/{level.next} XP
      </small>
    </div>
  </div>
));

export default RecentAchievements;
