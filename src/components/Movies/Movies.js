import './Movies.css';
import React from 'react';
// import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MovieCardListDropdown from '../MovieCardListDropdown/MovieCardListDropdown';

function Movies() {
  return (
    <main className='content'>
      <section className='movies'>
        <div>
          <SearchForm />
        </div>
        {/* <Preloader /> */}
        <MoviesCardList />
        <MovieCardListDropdown />
      </section>
    </main>
  )
}

export default Movies;