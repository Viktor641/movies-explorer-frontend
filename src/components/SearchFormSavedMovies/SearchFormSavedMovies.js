import '../SearchForm/SearchForm.css';
import React, { useState } from 'react';
import SearchIcon from '../../images/SearchIcon.svg'
import FilterCheckboxSavedMovies from '../FilterCheckboxSavedMovies/FilterCheckboxSavedMovies';

function SearchFormSavedMovies(props) {
  const [film, setFilm] = useState('');
  const [shortFilm, setShortFilm] = useState(false);
  const [error, setError] = useState('');

  const getSavedMovies = localStorage.getItem('savedMovies')
  const savedMovies = JSON.parse(getSavedMovies) || [];

  const handleFilterChange = (isChecked) => {
    setShortFilm(isChecked);

    const filterData = savedMovies.filter(({ nameRU, nameEN, duration }) =>
      (nameRU.toLowerCase().includes(film.toLowerCase()) || nameEN.toLowerCase().includes(film.toLowerCase())) && (!isChecked || duration <= 40)
    );

    props.filterSaveCards(filterData);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!film.trim()) {
      setError('Нужно ввести ключевое слово');
      return;
    }

    setError('');

    const filterData = savedMovies.filter(({ nameRU, nameEN, duration }) =>
      (nameRU.toLowerCase().includes(film.toLowerCase()) || nameEN.toLowerCase().includes(film.toLowerCase())) && (!shortFilm || duration <= 40)
    );

    props.filterSaveCards(filterData);
  }

  function handleFilmChange(evt) {
    const newFilmValue = evt.target.value;
    setFilm(newFilmValue);
    setError('');
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
        <FilterCheckboxSavedMovies onCheckboxChange={handleFilterChange} isChecked={shortFilm} />
      </form>
    </section>
  )
}

export default SearchFormSavedMovies;