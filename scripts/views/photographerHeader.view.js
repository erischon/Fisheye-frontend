import { Photographer } from "../models/photographer.model.js";
/**
 * @class
 */
export class PhotographerHeader extends Photographer {
  /**
   * @constructs PhotographerHeader
   * @param {Object} photographer Photographer instance
   */
  constructor(photographer) {
    super(photographer);
  }

  /**
   * Return the photographer header
   * @returns {HTMLElement}
   */
  getPhotographerHeader() {
    const articleEl = document.createElement("article");
    articleEl.classList.add("photographer-header");

    const photographerHeader = `
        
          <div class="desc">
            <h1>${this._name}</h2>
            <span class="desc__location">${this._city}, ${this._country}</span>
            <span class="desc__tagline">${this._tagline}</span>
          </div>

          <button 
            class="contact-button"
            onclick="displayModal()"
            aria-haspopup="dialog"
            aria-controls="contactModal"
            type="button"
          >
            Contactez-moi
          </button>

          <img src="${this._portrait}" alt="${this._name}" class="photographer-header__portrait">
        
      `;

    articleEl.innerHTML = photographerHeader;

    return articleEl;
  }
}
