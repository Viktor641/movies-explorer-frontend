import './Portfolio.css';
import React from 'react';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a target="_blank" href="https://github.com/Viktor641/how-to-learn" className="portfolio__link" rel="noreferrer">Статичный сайт<i className='portfolio__link-icon'></i></a>
        </li>
        <li className='portfolio__item'>
          <a target="_blank" href="https://viktor641.github.io/russian-travel/index.html" className="portfolio__link" rel="noreferrer">Адаптивный сайт<i className='portfolio__link-icon'></i></a>
        </li>
        <li className='portfolio__item'>
          <a target="_blank" href="https://sudarkinvmesto.nomoreparties.co" className="portfolio__link" rel="noreferrer">Одностраничное приложение<i className='portfolio__link-icon'></i></a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;