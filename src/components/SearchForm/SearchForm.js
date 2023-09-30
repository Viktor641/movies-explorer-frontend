import './SearchForm.css';
import React, { useState } from 'react';
import SearchIcon from '../../images/SearchIcon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const [film, setFilm] = useState('');
  const [shortFilm, setShortFilm] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!film.trim()) {
      setError('Нужно ввести ключевое слово');
      return;
    }

    setError('');

    const filterData = props.cards.filter(({ nameRU, nameEN, duration }) =>
      (nameRU.toLowerCase().includes(film.toLowerCase()) || nameEN.toLowerCase().includes(film.toLowerCase())) && (!shortFilm || duration <= 40)
    );

    props.filterCards(filterData);
    localStorage.setItem("filterData", JSON.stringify(filterData));
  }

  function handleFilmChange(evt) {
    setFilm(evt.target.value);
    setError('');
  }

  function handleCheckboxChange(checked) {
    setShortFilm(checked);
  }

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__container'>
          <img src={SearchIcon} alt='поисковая лупа' className='search__icon'></img>
          <input
            className='search__input'
            type="text"
            placeholder={error || "Фильм"}
            value={film || ''}
            onChange={handleFilmChange}
          />
          <div className='search__button-cover'>
            <button type='submit' className='search__button'>Найти</button>
          </div>
        </div>
        <FilterCheckbox onCheckboxChange={handleCheckboxChange} />
      </form>
    </section>
  )
}

export default SearchForm;