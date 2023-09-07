import './Portfolio.css';
import React from 'react';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <a target="_blank" href="https://github.com/Viktor641/how-to-learn" className="portfolio__link" rel="noreferrer">Статичный сайт<i className='portfolio__link_icon'></i></a>
      <a target="_blank" href="https://viktor641.github.io/russian-travel/index.html" className="portfolio__link" rel="noreferrer">Адаптивный сайт<i className='portfolio__link_icon'></i></a>
      <a target="_blank" href="https://sudarkinvmesto.nomoreparties.co" className="portfolio__link" rel="noreferrer">Одностраничное приложение<i className='portfolio__link_icon'></i></a>
    </section>
  )
}

export default Portfolio;