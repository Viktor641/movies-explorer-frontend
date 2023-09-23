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
    <header style={{ backgroundColor: `${props.backgroundColor}` }} className='header'>
      <div className='header__content'>
        <Link to={props.iconLink}>
          <img className='header__icon' src={headerLogo} alt='логотип проекта'></img>
        </Link>
        <div className='header__container'>
          <nav className='header__nav'>
            <Navigation
              text="Фильмы"
              textSave="Сохранённые фильмы"
              linkText="/movies"
              linkTextSave="/saved-movies"
            />
            <ul className={location.pathname === '/' ? 'header__rap' : 'header__rap-show'}>
              {location.pathname === '/' ? (
                <>
                  <li><Link to={props.linkSignUp} className='header__sign-up'>{props.signUp}</Link></li>
                  <li><Link to={props.linkSignIn} className='header__sign-in'>{props.signIn}</Link></li>
                </>
              ) :
                <div className='header__container-account'>
                  <Link to={props.linkProfile} className='header__account hover'>Аккаунт</Link>
                  <Link to={props.linkProfile} className='header__cover'>
                    <img src={AccountIcon} alt='Аккаунт-иконка' className='header__account-icon hover'></img>
                  </Link>
                </div>
              }
            </ul>
          </nav>
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
          <div className={location.pathname === '/' ? 'header__menu-hidden' : 'header__menu'} onClick={PopupNavigationOpen}>
            <span className='header__line'></span>
            <span className='header__line'></span>
            <span className='header__line'></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;