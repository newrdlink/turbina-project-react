import React from 'react'
import { useState } from 'react'
import cn from 'classnames'

const Form = ({ onSubmitHandler, inputs = [], title, subtittle, respons }) => {

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
    setChecked(false)
  }

  const isCheckedCheckbox = (evt) => {
    (evt.target.type === "checkbox" && evt.target.validity.valid) ? setChecked(true) : setChecked(false)
  }

  const isValidForm = () => Object.keys(formInputRequire).some(error => formInputRequire[error] === false)

  return (
    <section className="contact">
      {title}
      {subtittle}
      <form className="form" noValidate onSubmit={onSubmit}>
        {inputs.map(({ type, name, required, id, minlength, maxlenght, placeholder, autocomplete, pattern, linkTitle, link, accept }) => {
          if (name !== "lyrics") {
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
              <span
                className={cn("form__input-error",
                  { "form__input-error_place_checkbox": name === 'accept' }
                )}>
                {type !== "checkbox" ? formErrors[name] : null}
                {accept}
                {name === 'accept' ? <a className="form__input-link" href={link}>{linkTitle}</a> : ''}
              </span>

            </label>
          }
          return <label key={id} className={cn("form__label", { "applicant__container_required": !formInputRequire[name] })}>
            <textarea
              type={type}
              required={required}
              name={name}
              placeholder={placeholder}
              minLength={minlength}
              maxLength={maxlenght}
              autoComplete={autocomplete}
              pattern={pattern}
              className={cn("form__input",
                { "form__input_type_lyrics": name === "lyrics" },
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
            <span
              className={cn("form__input-error",
                { "form__input-error_place_checkbox": name === 'accept' }
              )}>
              {formErrors[name]}
            </span>
          </label>
        })}
        <button type="submit" disabled={isValidForm()}
          className={cn("form__submit-button",
            { "form__submit-button_disabled": isValidForm() })}>Отправить форму</button>
        <span className="form__submit-error">
          {respons ? "" : "Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!"}
        </span>
      </form>
    </section>
  )
}

export default Form
