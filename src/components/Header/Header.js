import './Header.css';
import headerLogo from '../../images/headerLogo.svg';
import AccountIcon from '../../images/AccountIcon.svg';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import PopupNavigation from '../PopupNavigation/PopupNavigation';

function Header(props) {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  function PopupNavigationOpen() {
    setOpen(true);
  }

  function closePopup() {
    setOpen(false);
  }

  return (
    <section style={{ backgroundColor: `${props.backgroundColor}` }} className='header'>
      <div className='header__content'>
        <Link to={props.iconLink}>
          <img className='header__icon' src={headerLogo} alt='логотип'></img>
        </Link>
        <div className='header__container'>
          <Navigation
            text="Фильмы"
            textSave="Сохранённые фильмы"
            linkText="/movies"
            linkTextSave="/saved-movies"
          />
          <div className='header__rap'>
            {location.pathname === '/' ? (
              <>
                <Link to={props.linkSignUp} className='header__sign-up'>{props.signUp}</Link>
                <Link to={props.linkSignIn} className='header__sign-in'>{props.signIn}</Link>
              </>
            ) :
              <div className='header__container-account'>
                <Link to={props.linkProfile} className='header__account hover'>Аккаунт</Link>
                <Link to={props.linkProfile} className='header__cover'>
                  <img src={AccountIcon} alt='Аккаунт-иконка' className='header__account-icon hover'></img>
                </Link>
              </div>
            }
          </div>
          {isOpen && (
            <PopupNavigation
              text="Фильмы"
              textSave="Сохранённые фильмы"
              linkText="/movies"
              linkTextSave="/saved-movies"
              linkProfile="/profile"
              title="Главная"
              linkMain="/"
              onClose={closePopup}
            />
          )}
          <div className='header__menu' onClick={PopupNavigationOpen}>
            <span className='header__line'></span>
            <span className='header__line'></span>
            <span className='header__line'></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;