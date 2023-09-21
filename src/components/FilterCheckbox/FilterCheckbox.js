import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox() {
  return (
    <div className='search__toggle'>
      <label className='search__label' aria-label="Короткометражки">
        <input type="checkbox" className='search__checkbox' />
        <span className='search__slider' />
      </label>
      <p className='search__films'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;