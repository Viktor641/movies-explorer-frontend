import './MoviesCard.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const location = useLocation();

  const [ isLiked, setLiked ] = useState(false);

  function toggleLike() {
    setLiked(!isLiked)
  };

  function convertToHoursAndMinutes(duration) {  
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const hoursText = hours > 0 ? `${hours}ч` : "";
    const minutesText = minutes > 0 ? `${minutes}м` : "";
  
    const result = [hoursText, minutesText].filter(Boolean).join(" ");
  
    return result;
  }

  return (
    <div className="card">
      <img
        src={props.link}
        alt={props.name}
        className="card__image"
      />
      <div className="card__container">
        <h2 className="card__paragraph">{props.name}</h2>
        {location.pathname === '/saved-movies' ? (
          <button className='card__like-saved' type="button" ></button>
        ) :
        <button className={`card__like card__like${isLiked ? '_disable' : '_active'}`} onClick={toggleLike} type="button"></button>
        }
      </div>
      <p className="card__time">{convertToHoursAndMinutes(props.duration)}</p>
    </div>
  )
}

export default MoviesCard;