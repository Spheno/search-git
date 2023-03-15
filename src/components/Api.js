export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('Произошла ошибка')
  }

  getCards(searchQuery) {
    return fetch(`${this._url}${searchQuery}&per_page=10`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._handleResponse)
  }

}