import React from 'react'
import Song from "./Song";

function MediaContent(props) {
  console.log(props.isLyricOpen)
  if (props.isLyricOpen) {
    return (<>
      <div className="media__content-text">
        <p className="media__content-text">Текст песни:</p>
        {props.playlist[0].lyrics_text}
      </div>
    </>)
  } else {
    if (props.playlist.length > 1) {
      return (<>
        <p className="media__content-text">Релизы:</p>
        <ul className="media__content-playlist">
          {props.playlist.map((song) => <Song key={song.track_id} {...song} />)}
        </ul>
      </>)
    } else {
      return (<>
        <p className="media__content-text media__content-text_typo">Пока что у нас только 1 релиз.</p>
      </>)
    }
  }
}

export default MediaContent

  // {
  //   cards.map((card) => <Card key={card._id} {...card} onCardClick={props.onCardClick} />)
  // }



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
