import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContinueLearning = React.memo(({ data, setData }) => {
  const [progresses, setProgresses] = useState(data.map((c) => c.progress));

  const handleContinue = (index) => {
    // Simulate progress increase
    const newProgress = Math.min(100, progresses[index] + 10);
    setProgresses((prev) => {
      const newP = [...prev];
      newP[index] = newProgress;
      return newP;
    });
    setData((prev) => ({
      ...prev,
      courses: prev.courses.map((c, i) =>
        i === index ? { ...c, progress: newProgress } : c
      ),
    }));
  };

  return (
    <div className='card-custom mb-3 p-3'>
      <h5 className='mb-3'>Continue Learning</h5>
      {data.map((course, index) => (
        <div
          key={course.name}
          className='d-flex align-items-center p-2 bg-primary-bg rounded my-2'>
          <div
            className='icon-circle me-3'
            style={{ background: course.color }}>
            <FontAwesomeIcon icon={course.icon} className='text-white' />
          </div>
          <div className='flex-grow-1'>
            <h6 className='mb-1'>{course.name}</h6>
            <small className='secondary-text'>Advanced Hooks</small>
            <div className='mt-2'>
              <ProgressBar
                now={progresses[index]}
                className='progress'
                style={{ height: '10px' }}
              />
              <small className='main-color'>{progresses[index]}%</small>
            </div>
          </div>
          <button
            className='btn-main-color2  ms-3 my-0'
            onClick={() => handleContinue(index)}>
            Continue
          </button>
        </div>
      ))}
    </div>
  );
});

export default ContinueLearning;
