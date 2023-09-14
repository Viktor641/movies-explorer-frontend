import '../Register/Register.css';
import React from 'react';
import headerLogo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='register'>
      <Link to="/">
        <img className='register__logo' src={headerLogo} alt='логотип проекта' ></img>
      </Link>
      <p className='register__title'>Рады видеть!</p>
      <form className='register__form'>
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
          value=""
          required
        />
        <button className="register__button register__button_type_signin hover" type="submit">Войти</button>
      </form>
      <div className='register__container'>
        <p className='register__text'>Ещё не зарегистрированы?</p>
        <Link to={'/signup'} className='register__auth hover'>Регистрация</Link>
      </div>
    </section>
  )
}

export default Login;