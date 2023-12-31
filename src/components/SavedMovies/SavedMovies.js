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
    <main className='content'>
      <section className='saved-movies'>
        <SearchForm />
        <div className='saved-movies__cards'>
          <MoviesCard title='33 слова о дизайне' image={picure1} />
          <MoviesCard title='Киноальманах «100 лет дизайна»' image={picure2} />
          <MoviesCard title='В погоне за Бенкси' image={picure3} />
        </div>
        <div className='saved-movies__mobile'>
          <MoviesCard title='33 слова о дизайне' image={picure1} />
          <MoviesCard title='Киноальманах «100 лет дизайна»' image={picure2} />
        </div>
        <MovieCardListDropdown style={{ visibility: 'hidden' }} />
      </section>
    </main>
  )
}

export default SavedMovies;