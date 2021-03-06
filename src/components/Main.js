import React, { useState } from 'react'
import Form from "./Form";
import initialInputsForm from '../utils/inputs'
import api from "./Api"

function Main() {

  const [isRequestOk, setIsRequestOk] = useState(true)

  const handleSubmit = (data) => {
    api.addNewData(data)
      .then(res => {
        if (res.status === 200) {
        }
      })
      .catch((error) => {
        setIsRequestOk(false)
        console.log({ message: `Sorry, error ... ${error.statusText}` })
      })
  }

  return (
    <main className="main">
      <article className="article">
        <h2 className="article__title">О ПРОЕКТЕ.</h2>
        <p className="article__paragraph">Мы знаем, что наши дети постоянно существуют в режиме непрекращающегося
        творческого процесса. Мы видим это, когда ребёнок что-то напевает, когда он бесконечно рисует,
        когда придумывает истории, когда разговаривает с едой и игрушками — дети постоянно включены
        и что-то изобретают. Родители часто недооценивают это спонтанное творчество ребёнка.
        Это не плохо, просто мы привыкаем к этому. Давайте попробуем внимательнее присмотреться к нашим детям.
      </p>
        <p className="article__paragraph  article__paragraph_position">Мы запускаем проект «ТУРБИНА», который
        открывает работу настоящего музыкального лейбла на базе «Маршака». В рамках «ТУРБИНЫ»
        лучшие современные инди-музыканты пишут свои песни на стихи, написанные детьми.
        Здесь важно — мы не заставляем наших детей садиться и писать поэзию, мы говорим о том,
        что родителям стоит быть более внимательными и чуткими к своим детям. Именно так мы
        сможем получить тексты, которые перестанут быть детскими, не будут осмыслены как
        взрослые — поэзия, которая сокращает дистанцию между взрослостью и детством,
        где спонтанное детское творчество
        и бессознательное, замеченное родителем, становится общественным культурным достоянием.
      </p>
      </article>
      <article className="article">
        <h2 className="article__title">КАК ЭТО РАБОТАЕТ?</h2>
        <p className="article__paragraph">Вы можете прислать нам тексты, родившиеся у ваших детей, которые
        вы записали и считаете, что это сильное высказывание. Мы собираем пул таких текстов и
        передаём их музыкантам. Артисты создают музыку на эти стихи. Мы продюсируем выпуск трека,
        возможно съёмки клипа и так далее. Мы всегда указываем автора стихотворений внутри релиза:
        Хадн Дадн feat. Варя Карпова и Федя Быстров — Контур.</p>
      </article>
      <article className="article">
        <h2 className="article__title">ТЕЗИСЫ.</h2>
        <ul className="article__theses article__paragraph">
          <li className="article__thesis">Дети никогда не прекращают творить и круто стараться быть на них похожими
          в этом.
        </li>
          <li className="article__thesis">Детское бессознательное помогает родителям понять, что происходит внутри
          семьи.
        </li>
          <li className="article__thesis">Не существует детской и взрослой поэзии. Существует мысль и чувство,
          зафиксированное
          в ней.
        </li>
          <li className="article__thesis">Дети получают невероятное удовольствие и мотивацию от того, что их
          творчество
          востребовано сверстниками и взрослыми.
        </li>
        </ul>
      </article>
      <Form
        inputs={initialInputsForm}
        title={<h3 className="contact__title">ФОРМА.</h3>}
        subtittle={<p className="contact__subtitle">Заполняя эту форму, вы становитесь частью проекта.</p>}
        onSubmitHandler={(formData) => { handleSubmit(formData) }}
        respons={isRequestOk} />
    </main>
  )
}

export default Main
