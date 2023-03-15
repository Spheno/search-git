export class Card {
  constructor({ data, cardSelector }) {
    this._name = data.name;
    this._owner = data.owner.login;
    this._description = data.description;
    this._url = data.html_url;
    this._cardSelector = document.querySelector(cardSelector);
  }

  _getTemplate() {
    const cardElement = this._cardSelector
      .content
      .querySelector('.result__card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {

    this._element = this._getTemplate();
    const card = this._element.querySelector('.result__card-link');

    card.textContent = this._name;
    card.href = this._url;
    this._element.querySelector('.result__card-owner-name').textContent = `Автор: ${this._owner}`;
    this._element.querySelector('.result__card-description').textContent = this._description;

    return this._element;
  }
}