import './NotFound.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const handleHistoryBack = () => {
    navigate(-1);
  };

  return (
    <main className='content'>
      <div className='notFound'>
        <h1 className='notFound__title'>404</h1>
        <p className='notFound__subtitle'>Страница не найдена</p>
        <button className='notFound__button-back' onClick={handleHistoryBack}>Назад</button>
      </div>
    </main>
  )
}

export default NotFound;