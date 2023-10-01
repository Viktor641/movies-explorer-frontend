import './Movies.css';
import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import apiMovies from "../../utils/MoviesApi";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MovieCardListDropdown from '../MovieCardListDropdown/MovieCardListDropdown';

function Movies(props) {
  const [cards, setCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);

  const [errorMovie, setErrorMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [visibleCards, setVisibleCards] = useState(0);

  function filterData(filterData) {
    setFilterCards(filterData);
  }

  useEffect(() => {
    setIsLoading(true);

    apiMovies.getCards()
      .then((cards) => {
        setIsLoading(false);
        setCards(cards);
      })
      .catch(() => {
        setIsLoading(false);
        setErrorMovie(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`);
      })
  }, [filterCards])

  const handleLoadMore = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1280) {
      setVisibleCards((visibleCards) => visibleCards + 4);
    } else if (windowWidth >= 930) {
      setVisibleCards((visibleCards) => visibleCards + 3);
    } else if (windowWidth >= 620) {
      setVisibleCards((visibleCards) => visibleCards + 2);
    } else if (windowWidth >= 320) {
      setVisibleCards((visibleCards) => visibleCards + 2);
    }
  };

  const handleVisibleCards = () => {
    if (window.innerWidth >= 1280) {
      setVisibleCards(16)
    } else if (window.innerWidth >= 930) {
      setVisibleCards(12)
    } else if (window.innerWidth >= 620) {
      setVisibleCards(8)
    } else if (window.innerWidth >= 320) {
      setVisibleCards(5)
    }
  }

  useEffect(() => {
    handleVisibleCards();
  }, []);

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
    if (localStorageMovies) {
      const filteredMovies = JSON.parse(localStorageMovies);
      setCards(filteredMovies);
      setFilterCards(filteredMovies);
    }
  }, []);

  return (
    <main className='content'>
      <section className='movies'>
        <div>
          <SearchForm cards={cards} filterCards={filterData} />
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
            onRemoveCardFromSaved={props.onRemoveCardFromSaved}
            savedCards={props.savedCards}
          />
        )}
        {filterCards.length > visibleCards && (
          <MovieCardListDropdown handleLoadMore={handleLoadMore} />
        )}
      </section>
    </main>
  )
}

export default Movies;