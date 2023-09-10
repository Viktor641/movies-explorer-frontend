import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path='/' element={
            <>
              <Header text="" textSave="" backgroundColor="#073042" signUp="Регистрация" signIn="Войти" />
              <Main />
              <Footer />
            </>
          }
          />
          <Route path='/movies' element={
            <>
              <Header text="Фильмы" textSave="Сохранённые фильмы" backgroundColor="#202020" linkText="/movies" linkTextSave="/saved-movies" />
              <Movies />
              <Footer />
            </>
          }
          />
          <Route path='/saved-movies' element={
            <>
              <Header text="Фильмы" textSave="Сохранённые фильмы" backgroundColor="#202020" linkText="/movies" linkTextSave="/saved-movies" />
              <SavedMovies />
              <Footer />
            </>
          }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
