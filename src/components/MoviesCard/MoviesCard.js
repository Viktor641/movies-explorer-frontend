import './MoviesCard.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainApi from "../../utils/MainApi";

function MoviesCard(props) {
  const location = useLocation();

  const [isLiked, setIsLiked] = useState(() => {
    const likeStatus = localStorage.getItem(`like-${props.movieId}`);
    return likeStatus === 'true';
  });

  useEffect(() => {
    localStorage.setItem(`like-${props.movieId}`, isLiked);
  }, [isLiked, props.movieId]);

  function convertToHoursAndMinutes(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const hoursText = hours > 0 ? `${hours}ч` : "";
    const minutesText = minutes > 0 ? `${minutes}м` : "";

    const result = [hoursText, minutesText].filter(Boolean).join(" ");

    return result;
  }

  function toggleLike() {
    setIsLiked(!isLiked);

    const movieData = {
      country: props.country,
      director: props.director,
      duration: props.duration,
      year: props.year,
      description: props.description,
      image: props.link,
      trailerLink: props.trailer,
      movieId: props.id,
      thumbnail: props.thumbnail,
      nameRU: props.name,
      nameEN: props.nameEN,
    };

    const getSavedMovies = localStorage.getItem('savedMovies')
    const savedMovies = JSON.parse(getSavedMovies) || [];

    const isMovieAlreadyAdded = savedMovies.find((movie) => movie.movieId === movieData.movieId);

    if (!isLiked && !isMovieAlreadyAdded) {
      MainApi.createMovie(movieData)
        .then((newMovie) => {
          const updatedAllMovies = [...savedMovies, newMovie];
          localStorage.setItem('savedMovies', JSON.stringify(updatedAllMovies))
        })
        .catch((error) => {
          console.error('Ошибка при добавлении фильма:', error);
        });
      setIsLiked(!isLiked);
    } else {
      const movieToDelete = savedMovies.find((movie) => movie.movieId === movieData.movieId);

      if (movieToDelete) {
        const movieIdToDelete = movieToDelete._id;

        const updatedSavedMovies = savedMovies.filter((movie) => movie._id !== movieIdToDelete);
        localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        localStorage.setItem('searchTextMovie', JSON.stringify(updatedSavedMovies));

        props.onRemoveCardMovieCard(movieIdToDelete)

        setIsLiked(!isLiked);
      }
    }
  }

  const cardLikeButtonClassName = (
    (`card__like ${!isLiked && 'card__like_active'}`) || (`card__like ${isLiked && 'card__like_disable'}`)
  );

  return (
    <div className="card">
      <a target="_blank" href={props.trailer} className="portfolio__link" rel="noreferrer">
        <img
          src={props.link}
          alt={props.name}
          className="card__image"
        />
      </a>
      <div className="card__container">
        <h2 className="card__paragraph">{props.name}</h2>
        {location.pathname === '/saved-movies' ? (
          <button className='card__like-saved' onClick={() => props.onRemoveCardFromSaved(props.movieId)} type="button" ></button>
        ) :
          <button className={cardLikeButtonClassName} onClick={toggleLike} type="button"></button>
        }
      </div>
      <p className="card__time">{convertToHoursAndMinutes(props.duration)}</p>
    </div>
  )
}

export default MoviesCard;