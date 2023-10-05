import './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className='content'>
      <div className='notFound'>
        <h1 className='notFound__title'>404</h1>
        <p className='notFound__subtitle'>Страница не найдена</p>
        <Link to={'/'} className='notFound__button-back'>Назад</Link>
      </div>
    </main>
  )
}

export default NotFound;