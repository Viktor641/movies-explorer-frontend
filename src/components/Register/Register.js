import './Register.css';
import React from 'react';
import headerLogo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/ValidationForm';

function Register(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(values.name, values.email, values.password);
  }

  return (
    <main className='content'>
      <section className='register'>
        <Link to="/">
          <img className='register__logo' src={headerLogo} alt='логотип проекта' ></img>
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form' onSubmit={handleSubmit}>
          <label className='register__label' htmlFor='name'>Имя</label>
          <input
            className="register__input"
            type="text"
            id='name'
            name='name'
            minLength={2}
            maxLength={40}
            value={values.name || ''}
            onChange={handleChange}
            required
          />
          <span className='register__error'>{errors.name}</span>
          <label className='register__label' htmlFor="email">E-mail</label>
          <input
            className="register__input"
            type="email"
            id='email'
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            required
          />
          <span className='register__error'>{errors.email}</span>
          <label className='register__label' htmlFor="password">Пароль</label>
          <input
            className="register__input"
            type="password"
            id='password'
            name='password'
            minLength={8}
            value={values.password || ''}
            onChange={handleChange}
            required
          />
          <span className='register__error'>{errors.password}</span>
          <button className="register__button hover" type="submit" disabled={!isValid}>Зарегистрироваться</button>
        </form>
        <div className='register__container'>
          <p className='register__text'>Уже зарегистрированы?</p>
          <Link to={'/signin'} className='register__auth hover'>Войти</Link>
        </div>
      </section>
    </main>
  )
}

export default Register;