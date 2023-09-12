import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path='/' element={
            <>
              <Header
                text=""
                textSave=""
                backgroundColor="#073042"
                signUp="Регистрация"
                signIn="Войти"
              />
              <Main />
              <Footer />
            </>
          }
          />
          <Route path='/movies' element={
            <>
              <Header
                text="Фильмы"
                textSave="Сохранённые фильмы"
                backgroundColor="#202020"
                linkText="/movies"
                linkTextSave="/saved-movies"
                iconLink="/"
                linkProfile="/profile"
              />
              <Movies />
              <Footer />
            </>
          }
          />
          <Route path='/saved-movies' element={
            <>
              <Header
                text="Фильмы"
                textSave="Сохранённые фильмы"
                backgroundColor="#202020"
                linkText="/movies"
                linkTextSave="/saved-movies"
                iconLink="/"
                linkProfile="/profile"
              />
              <SavedMovies />
              <Footer />
            </>
          }
          />
          <Route path='/profile' element={
            <>
              <Header
                text="Фильмы"
                textSave="Сохранённые фильмы"
                backgroundColor="#202020"
                linkText="/movies"
                linkTextSave="/saved-movies"
                iconLink="/"
                linkProfile="/profile"
              />
              <Profile />
            </>
          }
          />
          <Route path="*" element={
            <>
              <NotFound />
            </>
          }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
