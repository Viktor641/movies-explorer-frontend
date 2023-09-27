import './Register.css';
import React, { useState } from 'react';
import headerLogo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(name, email, password);
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
            onChange={handleNameChange}
            required
          />
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
          <span className='register__error'>Что-то пошло не так...</span>
          <button className="register__button hover" type="submit">Зарегистрироваться</button>
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