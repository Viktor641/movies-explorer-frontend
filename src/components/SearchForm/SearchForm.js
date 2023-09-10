import './SearchForm.css';
import React from 'react';
import SearchIcon from '../../images/SearchIcon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search'>
      <form className='search__form'>
        <img src={SearchIcon} alt='' className='search__icon'></img>
        <input
          className='search__input'
          type="text"
          placeholder="Фильм"
        />
        <div className='search__button-cover'>
          <button className='search__button'>Найти</button>
        </div>
      </form>
      <FilterCheckbox />
    </div>
  )
}

export default SearchForm;