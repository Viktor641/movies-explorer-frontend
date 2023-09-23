import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
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
              />
              <Movies />
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
              />
              <SavedMovies />
              <Footer />
            </>
          }
          />
          <Route path='/profile' element={
            <>
              <Header
                backgroundColor="#202020"
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
          <Route path='/signup' element={
            <>
              <Register />
            </>
          }
          />
          <Route path='/signin' element={
            <>
              <Login />
            </>
          }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
