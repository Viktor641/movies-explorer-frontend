export class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Код ошибки: ${res.status}`);
    }
  }

  getUserData() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(res => { return this._checkResponse(res); })
  }

  sendUserData(profileData) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({ name: profileData.name, email: profileData.email })
    })
      .then(res => { return this._checkResponse(res); })
  }
}

const MainApi = new Api({
  baseUrl: 'https://api.sudarkinvmovies.nomoredomainsicu.ru',
});

export default MainApi