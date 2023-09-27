import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import apiMovies from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";
import Preloader from '../Preloader/Preloader';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  function onLogin(email, password) {
    auth.login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch(() => {
        console.error()
      })
  }

  function onRegister(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        localStorage.setItem('userName', res.name);
        localStorage.setItem('userEmail', res.email);
        navigate("/signin");
      })
      .catch(() => {
        console.error()
      })
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.getToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate()
          }
        })
        .catch(console.error)
    }
  }, [])

  function onSignOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
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
  }, []);

  function handleUpdateProfileUser(profileData) {
    MainApi.sendUserData(profileData)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(console.error)
  }


  const [cards, setCards] = useState([]);

  useEffect(() => {
    apiMovies.getCards()
      .then((cards) => {
        <Preloader />
        setCards(cards)
      })
      .catch(console.error)
  }, [])

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
                  cards={cards}
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
            <Route path="*" element={
              <>
                <NotFound />
              </>
            }
            />
            <Route path='/signup' element={
              <>
                <Register onRegister={onRegister} />
              </>
            }
            />
            <Route path='/signin' element={
              <>
                <Login onLogin={onLogin} />
              </>
            }
            />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
