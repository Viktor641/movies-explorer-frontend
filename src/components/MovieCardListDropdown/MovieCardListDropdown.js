import './MovieCardListDropdown.css';
import React from 'react';

function MovieCardListDropdown(props) {
  return (
      <button type='button' style={props.style} className='button-more' onClick={props.handleLoadMore}>Ещё</button>
  )
}

export default MovieCardListDropdown;