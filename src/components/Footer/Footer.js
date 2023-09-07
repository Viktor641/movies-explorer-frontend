import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <section className='footer'>
      <h4 className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className='footer__copyright'>
        <p className='footer__date'>&copy;2023.</p>
        <div className='footer__container'>
          <p className='footer__paragraph'>Яндекс.Практикум</p>
          <p className='footer__paragraph'>Github</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;