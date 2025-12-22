import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoBackButton({
  to = '/content-creator/dashboard',
  label = 'Go Back  ',
}) {
  const navigate = useNavigate();

  return (
    <button className='btn-main-color2 ' onClick={() => navigate(to)}>
      <i className='fa-solid fa-arrow-left '></i>
      <span title='go back'>{label}</span>
    </button>
  );
}
