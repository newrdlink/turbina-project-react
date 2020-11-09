export default class Api{
  constructor(url) {
    this._baseUrl = url;
  }

  formSubmitHandler({ name, phone, email, lyrics }) {
    return fetch(this._baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        lyrics
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

}
