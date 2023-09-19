import '../Header/Header.css';
import './PopupNavigation.css'
import React from 'react';
import { Link } from 'react-router-dom';
import AccountIcon from '../../images/AccountIcon.svg';

function PopupNavigation(props) {
  return (
    <div className='popup__cover'>
      <div className='popup popup_opened'>
        <button type="button" className='popup__close' onClick={props.onClose}></button>
        <ul className='popup__navigation'>
          <li className='popup__navigation-item'>
            <Link to={props.linkMain} className='header__text header__text_popup hover' onClick={props.onClose}>{props.title}</Link>
          </li>
          <li className='popup__navigation-item'>
            <Link to={props.linkText} className='header__text header__text_popup hover' onClick={props.onClose}>{props.text}</Link>
          </li>
          <li className='popup__navigation-item'>
            <Link to={props.linkTextSave} className='header__text header__text_popup hover' onClick={props.onClose}>{props.textSave}</Link>
          </li>
        </ul>
        <div className='header__container-account header__container-account_popup'>
          <Link to={props.linkProfile} className='header__account hover' onClick={props.onClose}>Аккаунт</Link>
          <Link to={props.linkProfile} className='header__cover' onClick={props.onClose}>
            <img src={AccountIcon} alt='Аккаунт-иконка' className='header__account-icon hover'></img>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopupNavigation;