import './Header.css';
import headerLogo from '../../images/headerLogo.svg';
import React from 'react';

function Header(props) {
  return (
    <section style={{ backgroundColor: `${props.backgroundColor}` }} className='header'>
      <div className='header__content'>
        <img className='header__image' src={headerLogo} alt='логотип'></img>
        <div className='header__container'>
          <ul className='header__navigation'>
            <li><a href="/" className='header__text'>{props.text}</a></li>
            <li><a href="/о-нас" className='header__text'>{props.textSave}</a></li>
          </ul>
          <div>
            <button className='header__sign-up'>Регистрация</button>
            <button className='header__sign-in'>Войти</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;