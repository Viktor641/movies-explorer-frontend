import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import * as auth from '../../utils/auth.js'
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import MainApi from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import failure from "../../images/failureIcon.jpg";
import success from "../../images/SuccessIcon.jpg";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [infoTooltipIcon, setInfoTooltipIcon] = useState('');
  const [infoTooltipText, setInfoTooltipText] = useState('');

  const navigate = useNavigate();

  function onLogin(email, password) {
    auth.login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        localStorage.setItem('firstSearch', 'false');
        navigate("/movies");
      })
      .catch(() => {
        setInfoTooltipIcon(failure);
        setInfoTooltipText("Что-то пошло не так! Попробуйте ещё раз.");
        handleInfoTooltip();
      })
  }

  function onRegister(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        onLogin(email, password);
        setInfoTooltipIcon(success);
        setInfoTooltipText("Вы успешно зарегистрировались!");
        setCurrentUser(res);
      })
      .catch((err) => {
        setInfoTooltipIcon(failure);
        setInfoTooltipText(`Что-то пошло не так! ${err}`);
      })
      .finally(handleInfoTooltip)
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.getToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate();
          }
        })
        .catch(console.error)
    }
  }, [])

  function onSignOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("filterData");
    localStorage.removeItem("isChecked");
    localStorage.removeItem("isCheckedSavedMovies");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("AllMovies");
    localStorage.removeItem("firstSearch");
    for (let i = 0; i <= 1000; i++) {
      const like = `like-${i}`;
      localStorage.removeItem(like);
    }
    setLoggedIn(false);
  }

  useEffect(() => {
    MainApi.getUserData()
      .then((data) => {
        setCurrentUser(data.user);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(`Что-то пошло не так! Ошибка сервера ${err}`);
      })
  }, [loggedIn]);

  function handleUpdateProfileUser(profileData) {
    MainApi.sendUserData(profileData)
      .then((user) => {
        setInfoTooltipIcon(success);
        setInfoTooltipText("Вы успешно обновили профиль!");
        setCurrentUser(user);
      })
      .catch(() => {
        setInfoTooltipIcon(failure);
        setInfoTooltipText(`При обновлении профиля произошла ошибка.`);
      })
      .finally(handleInfoTooltip)
  }

  const [savedCards, setSavedCards] = useState([]);

  function handleRemoveMovieCard(deletedMovieId) {
    MainApi.deleteMovie(deletedMovieId)
      .then((deletedMovie) => {
        updateSavedCards(deletedMovie);
      })
      .catch((error) => {
        console.error('Ошибка при удалении фильма:', error);
      });
  };

  function updateSavedCards(newSavedCards) {
    setSavedCards(newSavedCards);
  }

  function handleInfoTooltip() {
    setIsInfoTooltipPopupOpen(true);
  }

  function closeInfoTooltipPopup() {
    setIsInfoTooltipPopupOpen(false);
  }

  const isOpen = isInfoTooltipPopupOpen;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeInfoTooltipPopup();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route path='/' element={
              <>
                <Header
                  backgroundColor="#073042"
                  signUp="Регистрация"
                  signIn="Войти"
                  linkSignUp="/signup"
                  linkSignIn="/signin"
                  loggedIn={loggedIn}
                />
                <Main />
                <Footer />
              </>
            }
            />
            
            <Route path='/movies' element={
              <>
                <Header
                  backgroundColor="#202020"
                  iconLink="/"
                  linkProfile="/profile"
                  loggedIn={loggedIn}
                />
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  savedCards={savedCards}
                  setSavedCards={setSavedCards}
                  onRemoveCardMovieCard={handleRemoveMovieCard}
                />
                <Footer />
              </>
            }
            />

            <Route path='/saved-movies' element={
              <>
                <Header
                  backgroundColor="#202020"
                  iconLink="/"
                  linkProfile="/profile"
                  loggedIn={loggedIn}
                />
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  savedCards={savedCards}
                  setSavedCards={updateSavedCards}
                  onRemoveCardMovieCard={handleRemoveMovieCard}
                />
                <Footer />
              </>
            }
            />

            <Route path='/profile' element={
              <>
                <Header
                  backgroundColor="#202020"
                  iconLink="/"
                  linkProfile=""
                  loggedIn={loggedIn}
                />
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  onUpdateProfileUser={handleUpdateProfileUser}
                  onSignOut={onSignOut}
                />
              </>
            }
            />

            <Route path="*" element={<NotFound />}
            />

            <Route path="/signup" element={
                loggedIn ? (
                  <Navigate to="/movies" />
                ) : (
                  <Register onRegister={onRegister} />
                )
              }
            />

            <Route path="/signin" element={
              loggedIn ? (
                <Navigate to="/movies" />
              ) : (
                <Login onLogin={onLogin} />
              )
            }
            />
          </Routes>
          <InfoTooltip
            icon={infoTooltipIcon}
            text={infoTooltipText}
            isOpen={isInfoTooltipPopupOpen}
            onClose={closeInfoTooltipPopup}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
