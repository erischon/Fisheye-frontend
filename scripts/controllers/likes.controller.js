/**
 * @property {Object} photographer
 */

export class Likes {
  constructor(photographer) {
    this._likes = photographer.likes;
  }

  /**
   *
   * @returns {string}
   */
  buildHtml() {
    const dom = `
        <div class="like__container">
            <span class="like__number">${this._likes}</span>
            <span class="material-symbols-outlined like__icon">favorite</span>
        </div>
    `;

    return dom;
  }
}
