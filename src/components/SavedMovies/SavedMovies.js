import './SavedMovies.css';
import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchFormSavedMovies from '../SearchFormSavedMovies/SearchFormSavedMovies';
import MainApi from "../../utils/MainApi";
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
  const [savedCards, setSavedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [filterSaveCards, setFilterSaveCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    MainApi.getMovies()
      .then((allMovies) => {
        setIsLoading(false);
        setSavedCards(allMovies.movies);
      })
      .catch((error) => {
        console.error('Ошибка при получении фильмов:', error);
      });
  }, []);

  const handleRemoveCardFromSaved = (movieId) => {
    MainApi.deleteMovie(movieId)
      .then(() => {
        setSavedCards((m) => m.filter((card) => card._id !== movieId));
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
        <SearchFormSavedMovies savedCards={savedCards} filterSaveCards={filterData} />
        {isLoading && (
          <div className='saved-movies__container'>
            <Preloader />
          </div>
        )}
        <div className={filterSaveCards.length === 0 ? 'saved-movies__container' : 'saved-movies__cards'}>
          {filterSaveCards.length === 0 && !isLoading ? (
            <div className='saved-movies__error'>Ничего не найдено</div>
          ) : (
            filterSaveCards.map((movies, id) => (
              <MoviesCard
                key={id}
                link={movies.image}
                name={movies.nameRU}
                duration={movies.duration}
                trailer={movies.trailerLink}
                savedCards={savedCards}
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