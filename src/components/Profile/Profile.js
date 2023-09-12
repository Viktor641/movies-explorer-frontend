import './Profile.css';
import React from 'react';

function Profile() {
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
      <button type='button' className='profile__change hover'>Редактировать</button>
      <button type='button' className='profile__sign-out hover'>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;