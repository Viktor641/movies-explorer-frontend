import './MoviesCard.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const location = useLocation();

  const [ isLiked, setLiked ] = useState(false);

  function toggleLike() {
    setLiked(!isLiked)
  };

  return (
    <div className="card">
      <img
        src={props.image}
        alt='картинка'
        className="card__image"
      />
      <div className="card__container">
        <p className="card__paragraph">{props.title}</p>
        {location.pathname === '/saved-movies' ? (
          <button className='card__like-saved' type="button" ></button>
        ) :
        <button className={`card__like card__like${isLiked ? '_disable' : '_active'}`} onClick={toggleLike} type="button"></button>
        }
      </div>
      <p className="card__time">1ч 42м</p>
    </div>
  )
}

export default MoviesCard;