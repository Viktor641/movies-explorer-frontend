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

  createMovie(dataMovie) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(dataMovie)
    })
      .then(res => { return this._checkResponse(res); })
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      headers: {
        authorization: `Bearer ${token}`
      },
      method: 'DELETE',
    })
      .then(res => { return this._checkResponse(res); })
  }

  getMovies() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${token}`
      },
      method: 'GET',
    })
      .then(res => { return this._checkResponse(res); })
  }
}


const MainApi = new Api({
  baseUrl: 'https://api.sudarkinvmovies.nomoredomainsicu.ru',
});

export default MainApi