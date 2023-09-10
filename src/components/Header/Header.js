import './Header.css';
import headerLogo from '../../images/headerLogo.svg';
import AccountIcon from '../../images/AccountIcon.svg';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();

  return (
    <section style={{ backgroundColor: `${props.backgroundColor}` }} className='header'>
      <div className='header__content'>
        <img className='header__icon' src={headerLogo} alt='логотип'></img>
        <div className='header__container'>
          <ul className='header__navigation'>
            <li><Link to={props.linkText} className='header__text hover'>{props.text}</Link></li>
            <li><Link to={props.linkTextSave} className='header__text hover'>{props.textSave}</Link></li>
          </ul>
          <div>
            {location.pathname === '/' ? (
              <>
                <button className='header__sign-up' type="button">{props.signUp}</button>
                <button style={{ backgroundColor: `${props.backgroundColorSignIn}` }} className='header__sign-in' type="button">{props.signIn}</button>
              </>
            ) : null}
            {location.pathname === '/movies' || '/saved-movies' ? (
              <div className='header__container-account'>
                <Link to={props.link} className='header__account hover' type="button">Аккаунт</Link>
                <Link to={props.link} className='header__cover' type="button">
                  <img src={AccountIcon} alt='Аккаунт-иконка' className='header__account-icon hover'></img>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;