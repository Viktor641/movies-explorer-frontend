import './Movies.css';
import React, { useState } from 'react';
// import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MovieCardListDropdown from '../MovieCardListDropdown/MovieCardListDropdown';

function Movies(props) {
  const [filterCards, setFilterCards] = useState([]);

  function filterData(filterData) {
    setFilterCards(filterData);
  }

  return (
    <main className='content'>
      <section className='movies'>
        <div>
          <SearchForm cards={props.cards} filterCards={filterData}/>
        </div>
 
        <MoviesCardList cards={filterCards} />
        <MovieCardListDropdown />
      </section>
    </main>
  )
}

export default Movies;