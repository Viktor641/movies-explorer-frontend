import './Profile.css';
import React, { useState } from 'react';

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
    <section className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <div className='profile__name'>
        <p className='profile__paragraph'>Имя</p>
        <h3 className='profile__info'>Виталий</h3>
      </div>
      <div className='profile__email'>
        <p className='profile__paragraph'>E-mail</p>
        <h3 className='profile__info'>pochta@yandex.ru</h3>
      </div>
      {isError && (
        <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
      )}
      {isSave ? (
        <button className='profile__save hover' onClick={handleErrorSpan} disabled={isError}>Сохранить</button>
      ) :
        <>
          <button type='button' className='profile__change hover' onClick={handleSaveButton}>Редактировать</button>
          <button type='button' className='profile__sign-out hover'>Выйти из аккаунта</button>
        </>
      }
    </section>
  )
}

export default Profile;