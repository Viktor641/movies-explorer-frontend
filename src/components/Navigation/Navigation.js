import '../Header/Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <ul className='header__navigation'>
      <li><NavLink to={props.linkText} className='header__text hover'>{props.text}</NavLink></li>
      <li><NavLink to={props.linkTextSave} className='header__text hover'>{props.textSave}</NavLink></li>
    </ul>
  )
}

export default Navigation;