'use strict'
import './pages/index.css'
import { Section } from './components/Section';
import { Card } from './components/Card';
import { FormValidator } from './components/FormValidator';
import { Form } from './components/Form';
import { Api } from './components/Api';

const api = new Api({
  url: 'https://api.github.com/search/repositories?q=',
  headers: {
    'Content-type': 'application/json',
  },
})

const cardList = new Section({
  renderer: (card) => {
    createCard(card)
  }
}, '.result');

function createCard(data) {
  const card = new Card({
    data: data,
    cardSelector: '#card',
  })
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

const buttonSubmit = document.querySelector('.search__button');

const createNewCards = new Form((data) => {

  api.getCards(data.searchQuery)
    .then((data) => {
      cardList.renderItems(data);
      buttonSubmit.disabled = true;
    })
    .catch((err) => {
      console.log('Произошла ошибка при создании новой карточки' + err);
    })
});

createNewCards.setEventListeners();

const formValidation = new FormValidator(document.querySelector('.search'));
formValidation.enableValidation();