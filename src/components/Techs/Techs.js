import './Techs.css';
import React from 'react';
import NavTab from '../NavTab/NavTab'

function Techs() {
  return (
    <section className='techs'>
      <NavTab title="Технологии"/>
      <div className='techs__container'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className='techs__list'>
        <li className='techs__list-info'>HTML</li>
        <li className='techs__list-info'>CSS</li>
        <li className='techs__list-info'>JS</li>
        <li className='techs__list-info'>React</li>
        <li className='techs__list-info'>Git</li>
        <li className='techs__list-info'>Express.js</li>
        <li className='techs__list-info'>mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;