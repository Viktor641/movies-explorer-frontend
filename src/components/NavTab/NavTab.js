import './NavTab.css';
import React from 'react';

function NavTab(props) {
  return (
    <h2 className='navTab'>{props.title}</h2>
  )
}

export default NavTab;