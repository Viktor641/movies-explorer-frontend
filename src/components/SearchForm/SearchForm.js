import './SearchForm.css';
import React, { useState, useEffect } from 'react';
import SearchIcon from '../../images/SearchIcon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import apiMovies from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";

function SearchForm(props) {
  const [film, setFilm] = useState('');
  const [shortFilm, setShortFilm] = useState(false);
  const [error, setError] = useState('');

  const [isFirstSubmit, setIsFirstSubmit] = useState(false);

  useEffect(() => {
    if (isFirstSubmit) {
      MainApi.getMovies()
        .then((allMovies) => {
          allMovies.movies.forEach((movie) => {
            localStorage.setItem(`like-${movie.movieId}`, 'true');
          });

        })
        .catch((error) => {
          console.error('Ошибка при получении фильмов:', error);
        });
    }
  }, [isFirstSubmit])

  function handleSubmit(e) {
    e.preventDefault();

    if (!film.trim()) {
      setError('Нужно ввести ключевое слово');
      return;
    }
    
    localStorage.setItem('searchTextMovie', film);
    
    setError('');
    
    const isFirstSearch = localStorage.getItem('firstSearch') === 'false';
    
    if (isFirstSearch) {
      setIsFirstSubmit(true);
      apiMovies.getCards()
        .then((newCards) => {
          props.setIsLoading(true);
          localStorage.setItem('AllMovies', JSON.stringify(newCards));
          const filterData = newCards.filter(({ nameRU, nameEN, duration }) =>
            (nameRU.toLowerCase().includes(film.toLowerCase()) || nameEN.toLowerCase().includes(film.toLowerCase())) && (!shortFilm || duration <= 40)
          );

          props.filterCards(filterData);
          localStorage.setItem("filterData", JSON.stringify(filterData));
          localStorage.setItem('firstSearch', 'true');
        })
        .catch(() => {
          props.setErrorMovie(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`);
        })
        .finally(() => {
          props.setIsLoading(false);
        });
    } else if (!isFirstSearch) {

      props.setIsLoading(true);
      const getAllMovies = localStorage.getItem('AllMovies');
      const allMovies = JSON.parse(getAllMovies);

      const filterData = allMovies.filter(({ nameRU, nameEN, duration }) =>
        (nameRU.toLowerCase().includes(film.toLowerCase()) || nameEN.toLowerCase().includes(film.toLowerCase())) && (!shortFilm || duration <= 40)
      );

      props.filterCards(filterData);
      localStorage.setItem("filterData", JSON.stringify(filterData));
      props.setIsLoading(false);
    }
  }

  function handleFilmChange(evt) {
    const newFilmValue = evt.target.value;
    setFilm(newFilmValue);
    localStorage.setItem('searchTextMovie', newFilmValue);
    setError('');
  }

  function handleFilterChange(isChecked) {
    setShortFilm(isChecked);

    const getFilerData = localStorage.getItem('filterData');
    const filerData = JSON.parse(getFilerData);

    const filterDataFil = filerData.filter(({ nameRU, nameEN, duration }) =>
      (nameRU.toLowerCase().includes(film.toLowerCase()) || nameEN.toLowerCase().includes(film.toLowerCase())) && (!isChecked || duration <= 40)
    );

    props.filterCards(filterDataFil);
  }

  useEffect(() => {
    const savedTextMovie = localStorage.getItem('searchTextMovie');
    if (savedTextMovie) {
      setFilm(savedTextMovie);
    }
  }, []);

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
        <FilterCheckbox onCheckboxChange={handleFilterChange} isChecked={shortFilm} />
      </form>
    </section>
  )
}

export default SearchForm;