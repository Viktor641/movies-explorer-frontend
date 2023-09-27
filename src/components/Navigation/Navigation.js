import '../Header/Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <ul className='header__navigation'>
      <li><Link to={props.linkText} className='header__text hover'>{props.text}</Link></li>
      <li><Link to={props.linkTextSave} className='header__text hover'>{props.textSave}</Link></li>
    </ul>
  )
}

export default Navigation;