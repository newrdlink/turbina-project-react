const initialInputsForm = [

  {
    id: 1,
    name: "name",
    placeholder: 'Имя и фамилия автора',
    required: true,
    type: 'text',
    autocomplete: 'off',
    label: 'Имя и фамилия автора',
    maxlenght: 25,
    minlength: 2,
    pattern: "^[А-ЯЁA-Z][а-яёa-z]* [А-ЯЁA-Z][а-яёa-z]*$"
  },
  {
    id: 2,
    name: "phone",
    placeholder: '1234567890',
    required: true,
    type: 'tel',
    autocomplete: 'off',
    pattern: "[0-9]{11}",
    label: 'Телефон',
    maxlenght: 11
  },
  {
    id: 3,
    name: "email",
    placeholder: 'mail@example.com',
    required: true,
    type: 'email',
    autocomplete: 'off',
    label: 'Контактный email',
    maxlenght: 25,
  },
  {
    id: 4,
    name: "lyrics",
    placeholder: 'Стихи',
    required: true,
    type: 'text',
    autocomplete: 'off',
    label: 'Стихи',
    maxlenght: 525,
  },
  {
    id: 5,
    name: "accept",
    placeholder: '',
    required: true,
    type: 'checkbox',
    label: '',
    accept: " Согласен с ",
    linkTitle: "офертой",
    link: "https://ya.ru"
  },

]

export default initialInputsForm;
