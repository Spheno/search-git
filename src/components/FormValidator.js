export class FormValidator {
  constructor(formElement) {
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll('.search__input'));
    this._buttonElement = this._formElement.querySelector('.search__button');
  }

  _hideInputError = (inputElement) => {

    inputElement.addEventListener('focus', () => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      errorElement.classList.add('hidden');
      inputElement.classList.remove('search__input_invalid');
    })

  };

  _showInputError = (inputElement) => {

    inputElement.addEventListener('blur', () => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      errorElement.classList.remove('hidden');
      errorElement.textContent = inputElement.validationMessage;

      if (!inputElement.validity.valid) {
        inputElement.classList.add('search__input_invalid');
      }
    })
  };

  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  };

  toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.disabled = false;
    }
  }

  enableValidation = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._hideInputError(inputElement);
        this._showInputError(inputElement);
        this.toggleButtonState();
      })
    });
    this.toggleButtonState();
  };

}