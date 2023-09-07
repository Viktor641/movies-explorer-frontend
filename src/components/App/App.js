import './App.css';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path='/' element={
            <>
              <Header text="" textSave="" backgroundColor="#073042" />
              <Main />
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
