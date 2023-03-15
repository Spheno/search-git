export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  renderItems(items) {
    const notFound = document.querySelector('.not-found');
    this._container.innerHTML = ''
    if (items.items.length == 0) {
      notFound.classList.remove('hidden')
    } else {
      notFound.classList.add('hidden')
      items.items.forEach(item => {
        this._renderer(item);
      });
    }
    
  }
}