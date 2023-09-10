import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox() {
  return (
    <div className='filter__toggle'>
      <div className='filter__line'></div>
      <label className='filter__label' aria-label="Короткометражки">
        <input type="checkbox" className='filter__checkbox' />
        <span className='filter__slider' />
      </label>
      <p className='filter__films'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;