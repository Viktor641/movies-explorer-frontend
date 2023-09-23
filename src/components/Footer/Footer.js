import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <h4 className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className='footer__copyright'>
        <p className='footer__date'>&copy;2023.</p>
        <nav className='footer__nav'>
          <ul className='footer__container'>
            <li className='footer__nav-item'>
              <a className='footer__link' href="https://practicum.yandex.ru/profile/web/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className='footer__nav-item'>
              <a className='footer__link' href="https://github.com/Viktor641" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;