import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import picure1 from '../../images/picture1.jpg';
import picure2 from '../../images/pic2.jpg';
import picure3 from '../../images/pic3.jpg';
import picure4 from '../../images/pic4.jpg';
import picure5 from '../../images/pic5.jpg';
import picure6 from '../../images/pic6.jpg';
import picure7 from '../../images/pic7.jpg';
import picure8 from '../../images/pic8.jpg';
import picure9 from '../../images/pic9.jpg';
import picure10 from '../../images/pic10.jpg';
import picure11 from '../../images/pic11.jpg';
import picure12 from '../../images/pic12.jpg';
import picure13 from '../../images/pic13.jpg';
import picure14 from '../../images/pic14.jpg';
import picure15 from '../../images/pic15.jpg';
import picure16 from '../../images/pic16.jpg';


function MoviesCardList() {

  return (
    <section className='cards'>
      <div className='cards__desk'>
        <MoviesCard title='33 слова о дизайне' image={picure1} />
        <MoviesCard title='Киноальманах «100 лет дизайна»' image={picure2} />
        <MoviesCard title='В погоне за Бенкси' image={picure3} />
        <MoviesCard title='Баския: Взрыв реальности' image={picure4} />
        <MoviesCard title='Бег это свобода' image={picure5} />
        <MoviesCard title='Книготорговцы' image={picure6} />
        <MoviesCard title='Когда я думаю о Германии ночью' image={picure7} />
        <MoviesCard title='Gimme Danger: История Игги и The Stooges' image={picure8} />
        <MoviesCard title='Дженис: Маленькая девочка грустит' image={picure9} />
        <MoviesCard title='Соберись перед прыжком' image={picure10} />
        <MoviesCard title='Пи Джей Харви: A dog called money' image={picure11} />
        <MoviesCard title='По волнам: Искусство звука в кино' image={picure12} />
        <MoviesCard title='Рудбой' image={picure13} />
        <MoviesCard title='Скейт — кухня' image={picure14} />
        <MoviesCard title='Война искусств' image={picure15} />
        <MoviesCard title='Зона' image={picure16} />
      </div>
      <div className='cards__tablet'>
        <MoviesCard title='33 слова о дизайне' image={picure1} />
        <MoviesCard title='Киноальманах «100 лет дизайна»' image={picure2} />
        <MoviesCard title='В погоне за Бенкси' image={picure3} />
        <MoviesCard title='Баския: Взрыв реальности' image={picure4} />
        <MoviesCard title='Бег это свобода' image={picure5} />
        <MoviesCard title='Книготорговцы' image={picure6} />
        <MoviesCard title='Когда я думаю о Германии ночью' image={picure7} />
        <MoviesCard title='Gimme Danger: История Игги и The Stooges' image={picure8} />
      </div>
      <div className='cards__mobile'>
        <MoviesCard title='33 слова о дизайне' image={picure1} />
        <MoviesCard title='Киноальманах «100 лет дизайна»' image={picure2} />
        <MoviesCard title='В погоне за Бенкси' image={picure3} />
        <MoviesCard title='Баския: Взрыв реальности' image={picure4} />
        <MoviesCard title='Бег это свобода' image={picure5} />
      </div>
    </section>
  )
}

export default MoviesCardList;