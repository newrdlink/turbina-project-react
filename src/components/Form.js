import React from 'react'
import { useState } from 'react'
import cn from 'classnames'

<<<<<<< HEAD
const Form = ({ onSubmitHandler, inputs = [], title, subtittle }) => {

  let initialOjectRequired = inputs.reduce((obj, item) => {
    obj[item.name] = !item.required
    return obj
  }, {})

  const [formData, setFormData] = useState({})
  const [formErrors, setFormErrors] = useState({})
  const [formInputRequire, setFormInputsRequire] = useState(initialOjectRequired)
  const [checked, setChecked] = useState(false)

  const onSubmit = (evt) => {
    evt.preventDefault()
    onSubmitHandler(formData)
    setFormData({})
    setFormInputsRequire(initialOjectRequired)
  }

  const isCheckedCheckbox = (evt) => {
    (evt.target.type === "checkbox" && evt.target.validity.valid) ? setChecked(true) : setChecked(false)
  }

  const isValidForm = () => {
    if (
      Object.keys(formInputRequire).some(error => formInputRequire[error] === false)
    ) { return true }
  }

  return (
    <section className="contact">
      <h3 className="contact__title">{title}</h3>
      <p className="contact__subtitle">{subtittle}</p>
      <form className="form" noValidate onSubmit={onSubmit}>
        {inputs.map(({ type, name, required, id, minlength, maxlenght, placeholder, autocomplete, pattern }) => {
          return <label key={id} className={cn("form__label", { "applicant__container_required": !formInputRequire[name] })}>
            <input
              type={type}
              required={required}
              name={name}
              placeholder={placeholder}
              minLength={minlength}
              maxLength={maxlenght}
              autoComplete={autocomplete}
              pattern={pattern}
              className={cn("form__input",
                { "form__input_type_checkbox": name === 'accept' },
                { "form__input_type_checked": checked },
                { "form__input_error": formErrors[name] && !formInputRequire[name] })}
              value={formData[name] || ''}
              onChange={evt => {
                setFormData({ ...formData, [name]: evt.target.value })
                const errorMessage = evt.target.validationMessage
                setFormErrors({ ...formErrors, [name]: errorMessage || '' })
                const isInputRequired = evt.target.validity.valid
                setFormInputsRequire({ ...formInputRequire, [name]: isInputRequired })
                isCheckedCheckbox(evt)
              }}
            />
            <span className={cn("form__input-error", { "form__input-error_place_checkbox": name === 'accept' })}>{formErrors[name]}</span>
          </label>
        })}
        <button type="submit" disabled={isValidForm()} className="form__submit-button">Отправить форму</button>
      </form>
    </section>
  )
=======
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
      <span className="form__input-text">Согласен с<a href="#" className="form__input-link">офертой</a></span>
      <span className="form__field-error" />
    </label>
    <button type="submit" className="form__submit-button">Отправить форму</button>
  </form>)
>>>>>>> 26d954114eff08fbf065b68e8ac4ea99e019dd43
}

export default Form
