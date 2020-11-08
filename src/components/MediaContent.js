import React from 'react'

function MediaContent(props) {
  console.log(props.isLyric)
  if (props.isLyric) {
    return (<>
      <div className="media__content-text">
        {props.playlist[0].lyrics_text}
      </div>
    </>)
  } else {
    return (<>
      <div className="media__content-text">
        {props.playlist[0].lyrics}
      </div>
    </>)
  }

}

export default MediaContent


{/*<ul className="media__content media__content_opened">*/
}
{/*  <li className="media__track media__track_type_release">Релизы:</li>*/
}
{/*  <li className="media__track">№ 1 Поезия — Мукулатура feat. Саша Петров</li>*/
}
{/*  <li className="media__track">№ 2 Лодка — СБПЧ feat. Маруся Романова</li>*/
}
{/*  <li className="media__track">№ 3 Кирпичи — Инди группа feat. Пётр Сковородников</li>*/
}
{/*  <li className="media__track">№ 4 Поезия — Мукулатура feat. Саша Петров</li>*/
}
{/*  <li className="media__track">№ 5 Лодка — СБПЧ feat. Маруся Романова</li>*/
}
{/*  <li className="media__track">№ 6 Кирпичи — Инди группа feat. Пётр Сковородников</li>*/
}
{/*  <li className="media__track">№ 7 Поезия — Мукулатура feat. Саша Петров</li>*/
}
{/*  <li className="media__track">№ 8 Лодка — СБПЧ feat. Маруся Романова</li>*/
}
{/*  <li className="media__track">№ 9 Кирпичи — Инди группа feat. Пётр Сковородников</li>*/
}
{/*  <li className="media__track">№ 10 Поезия — Мукулатура feat. Саша Петров</li>*/
}
{/*  <li className="media__track">№ 11 Лодка — СБПЧ feat. Маруся Романова</li>*/
}
{/*  <li className="media__track">№ 12 Кирпичи — Инди группа feat. Пётр Сковородников</li>*/
}
{/*</ul>*/
}
{/*<ul className="media__content">*/
}
{/*  <li className="media__track media__track_type_release">Текст песни</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Поезия Мукулатура feat. Саша Петров</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Лодка СБПЧ feat. Маруся Романова</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Кирпичи Инди группа feat. Пётр Сковородников</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Поезия Мукулатура feat. Саша Петров</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Лодка СБПЧ feat. Маруся Романова</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Кирпичи Инди группа feat. Пётр Сковородников</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Поезия Мукулатура feat. Саша Петров</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Лодка СБПЧ feat. Маруся Романова</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Кирпичи Инди группа feat. Пётр Сковородников</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Поезия Мукулатура feat. Саша Петров</li>*/
}
{/*  <li className="media__track media__track_type_text-song">Лодка СБПЧ feat. Маруся Романова</li>*/
}
{/*  <li className="media__track media__track_type_text-song">2 Кирпичи Инди группа feat. Пётр Сковородников</li>*/
}
{/*</ul>*/
}
