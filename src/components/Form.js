import React from 'react'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import cn from 'classnames'
import InputMask from 'react-input-mask';

const PhoneInput = ({ value, onChange, ...rest }) => (
  <InputMask
    {...{
      mask: "9 999 999 99 99",
      value,
      onChange,
      ...rest,
    }}
  >
    {(inputProps) => <input {...inputProps} type="tel" />}
  </InputMask>
);

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
    setChecked(false)
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
        {inputs.map(({ type, name, required, id, minlength, maxlenght, placeholder, autocomplete, pattern, linkTitle, link, accept }) => {
          if (name === 'phone') {
              return (
                <label key={id} className={cn("form__label", { "applicant__container_required": !formInputRequire[name] })}>
                  <PhoneInput
                    required={required}
                    name={name}
                    placeholder={placeholder}
                    autoComplete={autocomplete}
                    className={cn("form__input", { "form__input_error": formErrors[name] &&!formInputRequire[name] })}
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
                  </span>
                </label>
              )
          }
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
                {name === 'accept' ? <a href={link}>{linkTitle}</a> : ''}
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
        <button type="submit" disabled={isValidForm()} className="form__submit-button">Отправить форму</button>
      </form>
    </section>
  )
}

export default Form
