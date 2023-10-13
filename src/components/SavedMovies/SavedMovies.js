import './SavedMovies.css';
import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchFormSavedMovies from '../SearchFormSavedMovies/SearchFormSavedMovies';
import MainApi from "../../utils/MainApi";
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [filterSaveCards, setFilterSaveCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const filterDataSavedMovies = localStorage.getItem('filterDataSavedMovies');
    if (filterDataSavedMovies || ![]) {
      const filteredMovies = JSON.parse(filterDataSavedMovies);
      setFilterSaveCards(filteredMovies);
      setIsLoading(false);
    } else {
      MainApi.getMovies()
        .then((allMovies) => {
          console.log(allMovies.movies);
          setIsLoading(false);
          localStorage.setItem('savedMovies', JSON.stringify(allMovies.movies));
          setFilterSaveCards(allMovies.movies);
        })
        .catch((error) => {
          console.error('Ошибка при получении фильмов:', error);
        });
    }
  }, []);

  const getSavedMovies = localStorage.getItem('savedMovies')
  const savedMovies = JSON.parse(getSavedMovies) || [];

  const handleRemoveCardFromSaved = (movieId) => {
    MainApi.deleteMovie(movieId)
      .then(() => {
        const savedMoviesId = filterSaveCards.findIndex((movie) => movie._id === movieId);
        localStorage.setItem(`like-${savedMovies[savedMoviesId].movieId}`, 'false');

        const updatedSavedMovies = filterSaveCards.filter((movie) => movie._id !== movieId);
        localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        localStorage.setItem('filterDataSavedMovies', JSON.stringify(updatedSavedMovies));
        setFilterSaveCards(updatedSavedMovies);
      })
      .catch((error) => {
        console.error('Ошибка при удалении фильма:', error);
      });
  };

  function filterData(filterData) {
    setFilterSaveCards(filterData);
  }

  return (
    <main className='content'>
      <section className='saved-movies' >
        <SearchFormSavedMovies savedCards={props.savedCards} filterSaveCards={filterData} />
        {isLoading && (
          <div className='saved-movies__container'>
            <Preloader />
          </div>
        )}
        <div className={props.savedCards.length === 0 && filterSaveCards.length === 0 ? 'saved-movies__container' : 'saved-movies__cards'}>
          {props.savedCards.length === 0 && filterSaveCards.length === 0 && !isLoading ? (
            <div className='saved-movies__error'>Ничего не найдено</div>
          ) : (
            savedMovies.map((movies, id) => (
              <MoviesCard
                key={id}
                link={movies.image}
                name={movies.nameRU}
                duration={movies.duration}
                trailer={movies.trailerLink}
                onRemoveCardFromSaved={() => handleRemoveCardFromSaved(movies._id)}
              />
            ))
          )}
        </div>
      </section>
    </main>
  )
}
export default SavedMovies;