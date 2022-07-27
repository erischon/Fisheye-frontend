import { Photographer } from "../models/photographer.model.js";

/**
 * @class
 */
export class PhotographerCard extends Photographer {
  /**
   * @constructs PhotographerCard
   * @param {Object} photographerData Data of a Photographer
   * @param {string} photographerData.name
   * @param {number} photographerData.id
   * @param {string} photographerData.city
   * @param {string} photographerData.country
   * @param {string} photographerData.tagline
   * @param {number} photographerData.price
   * @param {string} photographerData.portrait
   */
  constructor(photographerData) {
    super(photographerData);
    this._path = photographerData.photographerUrl;
  }

  /**
   * Return a photographer card
   * @return {HTMLElement}
   */
  getPhotographerCard() {
    const articleEl = document.createElement("article");

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

    articleEl.innerHTML = photographerCard;

    return articleEl;
  }
}
