import './AboutMe.css';
import NavTab from '../NavTab/NavTab'
import React from 'react';
import studentImage from '../../images/studentImage.jpg';

function AboutMe() {
  return (
    <section className='aboutMe'>
      <NavTab title="Студент" />
      <div className='aboutMe__container'>
        <div>
          <h2 className='aboutMe__title'>Виталий</h2>
          <h3 className='aboutMe__subtitle'>Фронтенд-разработчик, 30 лет</h3>
          <p className='aboutMe__paragraph'>Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.&nbsp;С&nbsp; 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
          <a target="_blank" href="https://github.com/Viktor641" className="aboutMe__link" rel="noreferrer">Github</a>
        </div>
        <img className='aboutMe__image' src={studentImage} alt='студент'></img>
      </div>
    </section>
  )
}

export default AboutMe;