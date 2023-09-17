import './Promo.css';
import React from 'react';
import promoLogo from '../../images/PromoLogo.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__text'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__image' src={promoLogo} alt='промо логотип'></img>
      </div>
    </section>
  )
}

export default Promo;