import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


function MoviesCardList(props) {
  const adressFilms = 'https://api.nomoreparties.co/';
  
  return (
    <section className={props.cards.length === 0 ? 'cards__container' : 'cards'}>
      {props.cards.length === 0 ? (
        <div className='cards__error'>Ничего не найдено</div>
      ) : (
        props.cards.map((card) => (
          <MoviesCard
            key={card.id}
            link={`${adressFilms}${card.image.url}`}
            name={card.nameRU}
            duration={card.duration}
          />
        ))
      )}
    </section>
  )
}

export default MoviesCardList;