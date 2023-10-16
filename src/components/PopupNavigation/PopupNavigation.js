import '../Header/Header.css';
import './PopupNavigation.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountIcon from '../../images/AccountIcon.svg';

function PopupNavigation(props) {
  return (
    <div className='popup__cover'>
      <div className='popup-burger popup-burger_opened'>
        <button type="button" className='popup-burger__close' onClick={props.onClose}></button>
        <ul className='popup__navigation'>
          <li className='popup__navigation-item'>
            <NavLink to={props.linkMain} className='header__text header__text_popup hover' onClick={props.onClose}>{props.title}</NavLink>
          </li>
          <li className='popup__navigation-item'>
            <NavLink to={props.linkText} className='header__text header__text_popup hover' onClick={props.onClose}>{props.text}</NavLink>
          </li>
          <li className='popup__navigation-item'>
            <NavLink to={props.linkTextSave} className='header__text header__text_popup hover' onClick={props.onClose}>{props.textSave}</NavLink>
          </li>
        </ul>
        <div className='header__container-account header__container-account_popup'>
          <NavLink to={props.linkProfile} className='header__account hover' onClick={props.onClose}>Аккаунт</NavLink>
          <NavLink to={props.linkProfile} className='header__cover' onClick={props.onClose}>
            <img src={AccountIcon} alt='Аккаунт-иконка' className='header__account-icon hover'></img>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default PopupNavigation;