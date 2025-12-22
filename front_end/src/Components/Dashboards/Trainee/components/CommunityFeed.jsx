import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const CommunityFeed = React.memo(({ data }) => (
  <div className='card-custom p-3'>
    <h6>Community Feed</h6>
    {data.map((post, index) => (
      <div key={index} className='p-2 border-bottom border-gray pb-2 mb-2'>
        <div className='fw-semibold'>{post.author}</div>
        <div>{post.post}</div>
        <small className='text-secondary-text'>{post.time}</small>
      </div>
    ))}
    <button className='btn-main-color w-100'>
      <FontAwesomeIcon icon={faComment} className='me-2' /> Join Discussion
    </button>
  </div>
));

export default CommunityFeed;
