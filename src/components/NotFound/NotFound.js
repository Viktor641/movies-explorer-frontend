import './NotFound.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  return (
    <div className='notFound'>
      <h2 className='notFound__title'>404</h2>
      <p className='notFound__subtitle'>Страница не найдена</p>
      <button className='notFound__button-back' onClick={navigateBack}>Назад</button>
    </div>
  )
}

export default NotFound;