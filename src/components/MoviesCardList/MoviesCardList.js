import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const adressFilms = 'https://api.nomoreparties.co/';
  
  return (
    <section className={props.cards.length === 0 ? 'cards__container' : 'cards'}>
      {props.cards.length === 0 ? (
        <div className='cards__error'>{props.errorMovie || props.isNotFound}</div>
      ) : (
        props.cards.map((card) => (
          <MoviesCard
            key={card.id}
            id={card.id}
            country={card.country}
            link={`${adressFilms}${card.image.url}`}
            name={card.nameRU}
            duration={card.duration}
            trailer={card.trailerLink}
            nameEN={card.nameEN}
            director={card.director}
            year={card.year}
            description={card.description}
            thumbnail={`${adressFilms}${card.image.url}`}
            movieId={card.id}
            savedCards={props.savedCards}
            onRemoveCardMovieCard={props.onRemoveCardMovieCard}
            setSavedCards={props.setSavedCards}
          />
        ))
      )}
    </section>
  )
}

export default MoviesCardList;