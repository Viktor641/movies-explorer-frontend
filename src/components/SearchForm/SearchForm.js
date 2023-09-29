import './SearchForm.css';
import React, { useState } from 'react';
import SearchIcon from '../../images/SearchIcon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const [film, setFilm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const filterData = props.cards.filter(({ nameRU }) =>
      nameRU.toLowerCase().includes(film.toLowerCase())
    );

    props.filterCards(filterData);
    localStorage.setItem("filterData", JSON.stringify(filterData));
  }

  function handleFilmChange(evt) {
    setFilm(evt.target.value);
  }

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__container'>
          <img src={SearchIcon} alt='поисковая лупа' className='search__icon'></img>
          <input
            className='search__input'
            type="text"
            placeholder="Фильм"
            value={film || ''}
            onChange={handleFilmChange}
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