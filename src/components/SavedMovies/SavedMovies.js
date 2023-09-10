import './SavedMovies.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import picure1 from '../../images/picture1.jpg';
import picure2 from '../../images/pic2.jpg';
import picure3 from '../../images/pic3.jpg';
import MovieCardListDropdown from '../MovieCardListDropdown/MovieCardListDropdown';

function SavedMovies() {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <div className='cards-saved'>
        <MoviesCard title='33 слова о дизайне' image={picure1} />
        <MoviesCard title='Киноальманах «100 лет дизайна»' image={picure2} />
        <MoviesCard title='В погоне за Бенкси' image={picure3} />
      </div>
        <MovieCardListDropdown style={{ display: 'none' }} />
    </section>
  )
}

export default SavedMovies;