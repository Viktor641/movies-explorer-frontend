import './Profile.css';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from '../../utils/ValidationForm';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();

  const [name, setName] = useState('');

  const [isSave, setSave] = useState(false);
  const [isError, setError] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const currentName = currentUser.name;
  const currentEmail = currentUser.email;

  const isNameChanged = values.name !== currentName;
  const isEmailChanged = values.email !== currentEmail;

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser, setValues]);

  function handleNameKeyDown(e) {
    if (e.key === ' ') {
      e.preventDefault();
    }
  }

  function handleSaveButton() {
    setSave(true);
    setIsEditing(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid || !isEditing) {
      return;
    }

    props.onUpdateProfileUser(values);

    setName(values.name);

    setIsEditing(false);
    setSave(false);

    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <main className='content'>
      <section className='profile'>
        <h1 className='profile__title'>Привет, {currentUser.name || name}!</h1>
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
                value={values.name || currentUser.name}
                onChange={handleChange}
                onKeyDown={handleNameKeyDown}
                disabled={!isSave ? isEditing : !isEditing}
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
                value={values.email || currentUser.email}
                onChange={handleChange}
                onKeyDown={handleNameKeyDown}
                disabled={!isSave ? isEditing : !isEditing}
              />
            </div>
          </div>
          <div className='profile__container'>
            <span className='profile__error'>{isError || errors.email || errors.name}</span>
            {isSave ? (
              <button type='submit' className='profile__save hover' disabled={!isValid || !isEditing || (!isNameChanged && !isEmailChanged)}>Сохранить</button>
            ) :
              <>
                <button type='submit' className='profile__change hover' onClick={handleSaveButton}>Редактировать</button>
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