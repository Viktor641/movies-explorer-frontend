import '../Header/Header.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation(props) {
  const location = useLocation();

  return (
    <ul className='header__navigation'>
      {location.pathname === '/' ? (
        <>
          <li><Link className='header__text hover'></Link></li>
          <li><Link className='header__text hover'></Link></li>
        </>
      ) : (
        <>
          <li><Link to={props.linkText} className='header__text hover'>{props.text}</Link></li>
          <li><Link to={props.linkTextSave} className='header__text hover'>{props.textSave}</Link></li>
        </>
      )}
    </ul>
  )
}

export default Navigation;