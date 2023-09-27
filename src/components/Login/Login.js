import '../Register/Register.css';
import React, { useState } from "react";
import headerLogo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <main className='content'>
      <section className='register'>
        <Link to="/">
          <img className='register__logo' src={headerLogo} alt='логотип проекта' ></img>
        </Link>
        <h1 className='register__title'>Рады видеть!</h1>
        <form className='register__form' onSubmit={handleSubmit}>
          <label className='register__label' htmlFor="email">E-mail</label>
          <input
            className="register__input"
            type="email"
            id='email'
            onChange={handleEmailChange}
            required
          />
          <label className='register__label' htmlFor="password">Пароль</label>
          <input
            className="register__input"
            type="password"
            id='password'
            onChange={handlePasswordChange}
            required
          />
          <button className="register__button register__button_type_signin hover" type="submit">Войти</button>
        </form>
        <div className='register__container'>
          <p className='register__text'>Ещё не зарегистрированы?</p>
          <Link to={'/signup'} className='register__auth hover'>Регистрация</Link>
        </div>
      </section>
    </main>
  )
}

export default Login;