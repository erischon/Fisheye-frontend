export class PhotographerCard {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._city = data.city;
    this._country = data.country;
    this._tagline = data.tagline;
    this._price = data.price;
    this._portrait = data.portrait;
    this._path = data.photographerUrl;
  }

  /**
   * Create a photographer card
   * @return { HTMLElement }
   */
  getPhotographerCard() {
    const article = document.createElement("article");

    const photographerCard = `

        <a href="${this._path}" aria-label="Link to ${this._name}">
          <div class="card__linkBox">
            <img src="${this._portrait}" alt="${this._name}">
            <h2>${this._name}</h2>
          </div>
        </a>
        <div class="card__description">
          <span class="card__location">${this._city}, ${this._country}</span>
          <span class="card__tagline">${this._tagline}</span>
          <span class="card__price">${this._price}€/jour</span>
        </div>

    `;

    article.innerHTML = photographerCard;

    return article;
  }
}
