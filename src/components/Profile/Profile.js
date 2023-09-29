import './Profile.css';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from '../../utils/ValidationForm';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [isSave, setSave] = useState(false);
  const [isError, setError] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleSaveButton() {
    setSave(true);
    setIsEditing(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateProfileUser({
      name: values.name,
      email: values.email,
    });

    setSave(false);
    setIsEditing(false);

    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <main className='content'>
      <section className='profile'>
        <h1 className='profile__title'>Привет, {values.name || name}!</h1>
        <form className='profile__form' onSubmit={handleSubmit}>
          <div className='profile__name'>
            <div className='profile__info'>
              <p className='profile__paragraph'>Имя</p>
              <input
                className='profile__input'
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={40}
                value={values.name || '' || currentUser.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className='profile__email'>
            <div className='profile__info'>
              <p className='profile__paragraph'>E-mail</p>
              <input
                className='profile__input'
                name="email"
                type="email"
                required
                minLength={8}
                value={values.email || email || ''}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className='profile__container'>
            <span className='profile__error'>{isError || errors.email || errors.name}</span>
            {isSave ? (
              <button type='submit' className='profile__save hover' disabled={!isValid}>Сохранить</button>
            ) :
              <>
                <button type='submit' className='profile__change hover' onClick={handleSaveButton} disabled={isEditing}>Редактировать</button>
                <Link to={'/'} className='profile__sign-out hover' onClick={props.onSignOut}>Выйти из аккаунта</Link>
              </>
            }
          </div>
        </form>
      </section>
    </main>
  )
}

export default Profile;