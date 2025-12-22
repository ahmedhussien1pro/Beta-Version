import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const StudyStreak = React.memo(({ data }) => (
  <div className='card-custom text-center p-3 mb-3'>
    <h6>Hacking Streak</h6>
    <div className='my-3'>
      <div
        className='rounded-circle d-inline-flex align-items-center justify-content-center mx-auto'
        style={{
          width: 80,
          height: 80,
          background: 'linear-gradient(90deg, #ff6b6b, #ee5a24)',
        }}>
        <FontAwesomeIcon icon={faFire} className='text-white fa-2x' />
      </div>
    </div>
    <h4 className='mb-1'>{data.streak} Days</h4>
    <small className='text-secondary-text'>Keep hacking daily!</small>
    <ProgressBar className='mt-3' now={75} />
    <small className='text-secondary-text mt-2 d-block'>
      Unlock Elite badge at 30 days
    </small>
  </div>
));

export default StudyStreak;
