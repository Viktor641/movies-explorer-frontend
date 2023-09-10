import './MovieCardListDropdown.css';
import React from 'react';

function MovieCardListDropdown(props) {
  return (
    <button type='button' style={props.style} className='cards__button'>Ещё</button>
  )
}

export default MovieCardListDropdown;