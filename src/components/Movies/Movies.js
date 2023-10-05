import './Movies.css';
import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MovieCardListDropdown from '../MovieCardListDropdown/MovieCardListDropdown';

function Movies(props) {
  const [cards, setCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);

  const [errorMovie, setErrorMovie] = useState('');
  const [isNotFound, setIsNotFound] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [visibleCards, setVisibleCards] = useState(0);

  function filterData(filterData) {
    setFilterCards(filterData);
    setVisibleCards(handleVisibleCards());
  }

  const handleVisibleCards = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1280) {
      return 16;
    } else if (windowWidth >= 930) {
      return 12;
    } else if (windowWidth >= 620) {
      return 8;
    } else {
      return 5;
    }
  }

  useEffect(() => {
    setVisibleCards(handleVisibleCards());
  }, []);

  const handleLoadMore = () => {
    const windowWidth = window.innerWidth;
    let addRow = 0;

    if (windowWidth >= 1280) {
      addRow = 4;
    } else if (windowWidth >= 930) {
      addRow = 3;
    } else if (windowWidth >= 620) {
      addRow = 2;
    } else if (windowWidth >= 320) {
      addRow = 2;
    }

    setVisibleCards((visibleCards) => visibleCards + addRow);
  };

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        const resizeCards = handleVisibleCards();
        setVisibleCards(resizeCards);
      }, 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const localStorageMovies = localStorage.getItem('filterData');
    const filteredMovies = JSON.parse(localStorageMovies);
    if (filteredMovies) {
      setCards(filteredMovies);
      setFilterCards(filteredMovies);
      if(filteredMovies.length === 0) {
        setIsNotFound('Ничего не найдено');
      }
    } else {
      setIsNotFound('');
    }

  }, []);

  return (
    <main className='content'>
      <section className='movies'>
        <div>
          <SearchForm setErrorMovie={setErrorMovie} cards={cards} setCards={setCards} setFilterCards={setFilterCards} filterCards={filterData} setIsLoading={setIsLoading} />
        </div>
          {isLoading ? (
            <div className='movies__container'>
              <Preloader />
            </div>
          ) : (
            <MoviesCardList
              cards={filterCards.slice(0, visibleCards)}
              errorMovie={errorMovie}
              loading={isLoading}
              onAddCardToSaved={props.onAddCardToSaved}
              onRemoveCardMovieCard={props.onRemoveCardMovieCard}
              savedCards={props.savedCards}
              setSavedCards={props.setSavedCards}
              isNotFound={isNotFound}
            />
          )
        }
        {filterCards.length > visibleCards && (
          <MovieCardListDropdown handleLoadMore={handleLoadMore} />
        )}
      </section>
    </main>
  )
}

export default Movies;