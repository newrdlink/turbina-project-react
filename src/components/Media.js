import React from 'react'
import Player from './Player.js'
import MediaContent from './MediaContent.js'

const Media = () => {

  return (
    <section className="media">
      <p className="media__title-track">№ 7 Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров № 7</p>
      {/*<div className="media__player">*/}
      <Player />
      {/*</div>*/}
      <button className="media__button-track">Текст песни</button>
      <button className="media__button-open" />
      <ul className="media__content">
        <li className="media__track media__track_type_release">Релизы:</li>
        <li className="media__track">№ 1 Поезия — Мукулатура feat. Саша Петров</li>
        <li className="media__track">№ 2 Лодка — СБПЧ feat. Маруся Романова</li>
        <li className="media__track">№ 3 Кирпичи — Инди группа feat. Пётр Сковородников</li>
        <li className="media__track">№ 4 Поезия — Мукулатура feat. Саша Петров</li>
        <li className="media__track">№ 5 Лодка — СБПЧ feat. Маруся Романова</li>
        <li className="media__track">№ 6 Кирпичи — Инди группа feat. Пётр Сковородников</li>
        <li className="media__track">№ 7 Поезия — Мукулатура feat. Саша Петров</li>
        <li className="media__track">№ 8 Лодка — СБПЧ feat. Маруся Романова</li>
        <li className="media__track">№ 9 Кирпичи — Инди группа feat. Пётр Сковородников</li>
        <li className="media__track">№ 10 Поезия — Мукулатура feat. Саша Петров</li>
        <li className="media__track">№ 11 Лодка — СБПЧ feat. Маруся Романова</li>
        <li className="media__track">№ 12 Кирпичи — Инди группа feat. Пётр Сковородников</li>
      </ul>
      <ul className="media__content">
        <li className="media__track media__track_type_release">Текст песни</li>
        <li className="media__track media__track_type_text-song">Поезия Мукулатура feat. Саша Петров</li>
        <li className="media__track media__track_type_text-song">Лодка СБПЧ feat. Маруся Романова</li>
        <li className="media__track media__track_type_text-song">Кирпичи Инди группа feat. Пётр Сковородников</li>
        <li className="media__track media__track_type_text-song">Поезия Мукулатура feat. Саша Петров</li>
        <li className="media__track media__track_type_text-song">Лодка СБПЧ feat. Маруся Романова</li>
        <li className="media__track media__track_type_text-song">Кирпичи Инди группа feat. Пётр Сковородников</li>
        <li className="media__track media__track_type_text-song">Поезия Мукулатура feat. Саша Петров</li>
        <li className="media__track media__track_type_text-song">Лодка СБПЧ feat. Маруся Романова</li>
        <li className="media__track media__track_type_text-song">Кирпичи Инди группа feat. Пётр Сковородников</li>
        <li className="media__track media__track_type_text-song">Поезия Мукулатура feat. Саша Петров</li>
        <li className="media__track media__track_type_text-song">Лодка СБПЧ feat. Маруся Романова</li>
        <li className="media__track media__track_type_text-song">2 Кирпичи Инди группа feat. Пётр Сковородников</li>
      </ul>
    </section>
  )
}

export default Media;
