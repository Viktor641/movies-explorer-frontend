import './AboutProject.css';
import NavTab from '../NavTab/NavTab'
import React from 'react';

function AboutProject() {
  return (
    <section className='aboutProject'>
      <NavTab title="О проекте" />
      <div className='aboutProject__container'>
        <div className='aboutProject__content'>
          <h3 className='aboutProject__content_title'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutProject__content_paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='aboutProject__description'>
          <h3 className='aboutProject__description_title'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutProject__description_paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='aboutProject__container-indicator'>
        <p className='aboutProject__text-back'>1 неделя</p>
        <p className='aboutProject__text-front'>4 недели</p>
      </div>
      <div className='aboutProject__container-indicator aboutProject__container-indicator_list'>
        <p className='aboutProject__text-back aboutProject__text-back_paragraph'>Back-end</p>
        <p className='aboutProject__text-front aboutProject__text-front_paragraph'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;
