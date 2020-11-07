import React from 'react'

const Form = () => {
  return (<form className="form">
    <h2 className="form__header article__title">ФОРМА.</h2>
    <p className="article__paragraph">Заполняя эту форму, вы становитесь частью проекта.</p>
    <label className="form__field-name" htmlFor="form-field-name">
      <input className="form__input" type="text" id="form-field-name" placeholder="Имя и фамилия автора"
        name="name"
        minLength="2"
        maxLength="20"
        required />
      <span className="form__field-error" />
    </label>
    <label className="form__field-tel" htmlFor="form-field-tel">
      <input className="form__input form__input_position_tel" type="tel" id="form-field-tel"
        placeholder="Телефон" name="tel" minLength=""
        maxLength="" required />
      <span className="form__field-error" />
    </label>
    <label className="form__field-mail" htmlFor="form-field-mail">
      <input className="form__input form__input_position_mail" type="email" id="form-field-mail"
        placeholder="Почта" name="mail" minLength=""
        maxLength="" required />
      <span className="form__field-error" />
    </label>
    <label className="form__field-lyrics" htmlFor="form-field-lyrics">
      <textarea className="form__input form__input_position_lyrics" type="text" id="form-field-lyrics"
        placeholder="Стихи"
        name="lyrics" minLength="" maxLength="" required />
      <span className="form__field-error" />
    </label>
    <label className="form__field-accept" htmlFor="form-field-accept">
      <input className="form__input-accept" type="checkbox" id="form-field-accept" name="accept" value="" />
      <span className="form__input-text">Согласен с<a href="/ru.ru" className="form__input-link">офертой</a></span>
      <span className="form__field-error" />
    </label>
    <button type="submit" className="form__submit-button">Отправить форму</button>
  </form>)
}

export default Form
