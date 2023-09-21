import './SearchForm.css';
import React from 'react';
import SearchIcon from '../../images/SearchIcon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__container'>
          <img src={SearchIcon} alt='поисковая лупа' className='search__icon'></img>
          <input
            className='search__input'
            type="text"
            placeholder="Фильм"
          />
          <div className='search__button-cover'>
            <button type='submit' className='search__button'>Найти</button>
          </div>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;