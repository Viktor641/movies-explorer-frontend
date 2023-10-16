import '../Register/Register.css';
import React from "react";
import headerLogo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/ValidationForm';

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(values.email, values.password);
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
          <button className="register__button register__button_type_signin hover" type="submit" disabled={!isValid}>Войти</button>
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