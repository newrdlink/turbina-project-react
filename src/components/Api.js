import React from 'react'

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
  }

  addNewData({ name, phone, email, lyrics }) {
    return fetch(`${this._baseUrl}/lyrics`, {
      method: 'POST',
      headers: this.headers,
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
        return Promise.reject(res);
      })
  }
}

const api = new Api({
  address: "https://mesto.nomoreparties.co/v1",
  headers: {
    authorization: "27ead031-f9f7-43be-99b7-3241b8a48ff4",
    "Content-Type": "application/json",
  },
});

export default api;
