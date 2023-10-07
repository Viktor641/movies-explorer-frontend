import './NotFound.css';
import React from 'react';

function NotFound() {
  const handleHistoryBack = () => {
    window.history.back();
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