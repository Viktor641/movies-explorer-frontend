import './Register.css';
import React from 'react';
import headerLogo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className='register'>
      <Link to="/">
        <img className='register__logo' src={headerLogo} alt='логотип проекта' ></img>
      </Link>
      <p className='register__title'>Добро пожаловать!</p>
      <form className='register__form'>
        <label className='register__label' htmlFor='name'>Имя</label>
        <input
          className="register__input"
          type="text"
          id='name'
          value="Виталий"
          required
        />
        <label className='register__label' htmlFor="email">E-mail</label>
        <input
          className="register__input"
          type="email"
          id='email'
          value="pochta@yandex.ru|"
          required
        />
        <label className='register__label' htmlFor="password">Пароль</label>
        <input
          className="register__input"
          type="password"
          id='password'
          value="••••••••••••••"
          required
        />
        <span className='register__error'>Что-то пошло не так...</span>
        <button className="register__button hover" type="submit">Зарегистрироваться</button>
      </form>
      <div className='register__container'>
        <p className='register__text'>Уже зарегистрированы?</p>
        <Link to={'/signin'} className='register__auth hover'>Войти</Link>
      </div>
    </section>
  )
}

export default Register;