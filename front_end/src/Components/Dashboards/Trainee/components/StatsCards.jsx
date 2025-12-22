import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StatsCards = React.memo(({ data }) => (
  <div className='row g-3 mb-4'>
    {data.map((stat, index) => (
      <div key={index} className='col-xl-2 col-md-4 col-6'>
        <div className='card-custom h-100 p-3'>
          <div className='d-flex justify-content-between align-items-start'>
            <div>
              <small className='text-secondary-text'>{stat.title}</small>
              <h4 className='mb-0 text-primary-text'>{stat.value}</h4>
            </div>
            <div
              className='icon-circle'
              style={{ background: stat.bg, color: stat.color }}>
              <FontAwesomeIcon icon={stat.icon} />
            </div>
          </div>
          <small className='main-color bold'>
            <b>{stat.change}</b>
          </small>
        </div>
      </div>
    ))}
  </div>
));

export default StatsCards;
