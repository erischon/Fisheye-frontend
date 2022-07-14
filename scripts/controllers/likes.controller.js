/**
 * @property {Object} photographer
 */

export class Likes {
  constructor(photographer) {
    this._likes = photographer.likes;
  }

  /**
   * Adding an eventListener to like__container
   * @param {HTMLElement} dom
   */
  addEvent(dom) {
    dom
      .querySelector(".like__container")
      .addEventListener("click", this.addLike.bind(this));
  }

  /**
   *
   */
  addLike() {
    let count = 0;
    if (count++ >= 1) return;
    // setLike(this._like + 1);
    console.log("Likes", this._likes++);
  }

  /**
   *
   * @returns {HTMLElement}
   */
  buildDom() {
    const dom = document.createElement("div");

    dom.innerHTML = `
        <div class="like__container">
            <span class="like__number">${this._likes}</span>
            <span class="material-symbols-outlined like__icon">favorite</span>
        </div>
    `;

    return dom;
  }
}
