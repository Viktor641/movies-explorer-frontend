import './Profile.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [isSave, setSave] = useState(false);
  const [isError, setError] = useState(false);

  function handleSaveButton() {
    setSave(true);
  }

  function handleErrorSpan() {
    setError(true);
  }

  return (
    <main className='content'>
      <section className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form'>
          <div className='profile__name'>
            <div className='profile__info'>
              <p className='profile__paragraph'>Имя</p>
              <input
                className='profile__input'
                type="text"
                defaultValue="Виталий"
              />
            </div>
          </div>
          <div className='profile__email'>
            <div className='profile__info'>
              <p className='profile__paragraph'>E-mail</p>
              <input
                className='profile__input'
                type="text"
                defaultValue="pochta@yandex.ru"
              />
            </div>
          </div>
          <div className='profile__container'>
            {isError && (
              <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
            )}
            {isSave ? (
              <button type='submit' className='profile__save hover' onClick={handleErrorSpan} disabled={isError}>Сохранить</button>
            ) :
              <>
                <button type='submit' className='profile__change hover' onClick={handleSaveButton}>Редактировать</button>
                <Link to={'/'} className='profile__sign-out hover'>Выйти из аккаунта</Link>
              </>
            }
          </div>
        </form>
      </section>
    </main>
  )
}

export default Profile;