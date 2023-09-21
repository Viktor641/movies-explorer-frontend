import './NotFound.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  return (
    <main className='content'>
      <div className='notFound'>
        <h1 className='notFound__title'>404</h1>
        <p className='notFound__subtitle'>Страница не найдена</p>
        <button type='button' className='notFound__button-back' onClick={navigateBack}>Назад</button>
      </div>
    </main>
  )
}

export default NotFound;