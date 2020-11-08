const initialInputsForm = [

    {
        id: 1,
        name: "name",
        placeholder: 'Имя и фамилия автора',
        required: true,
        type: 'text',
        autocomplete: 'off',
        label: 'Имя и фамилия автора',
        maxlenght: 20,
        minlength: 2,
        pattern: "[А-Я]{1}[А-Яа-яЁё]{1,}" //только русская буква
    },
    {
        id: 2,
        name: "phone",
        placeholder: '8 921 333 44 55',
        required: true,
        type: 'tel',
        autocomplete: 'off',
        pattern: "[8]{1} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}",
        label: 'Телефон',
        maxlenght: 15
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
        maxlenght: 125,
    },
    {
        id: 5,
        name: "accept",
        placeholder: '',
        required: true,
        type: 'checkbox',        
        label: '',
        link: "/ru.ru"
    },

]

export default initialInputsForm;