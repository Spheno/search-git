export class Form {
  constructor(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
    this._form = document.querySelector('.search')
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.search__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _submitForm = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this._form.reset();
  }

  _handleEnterSubmit = (evt) => {
    if (evt.key === 'Enter') {
      this._submitForm(evt);
    }
  }

  setEventListeners() {
    this._form.addEventListener('submit', this._submitForm)
    this._form.addEventListener('keydown', this._handleEnterSubmit);
  }

}