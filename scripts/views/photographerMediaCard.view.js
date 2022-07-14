import { Likes } from "../controllers/likes.controller.js";

export class PhographerMediaCard {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._image = data.image;
    this._video = data.video;
    this._date = data.date;
    this._price = data.price;

    this._likes = new Likes(data);
  }

  getPhotographerMediaCard() {
    const article = document.createElement("article");
    article.classList.add("photograph-media-card");

    let media = "";

    if (this._image) {
      media = `<img src="${this._image}" alt="${this._title}" class="photographer-header__img">`;
    } else if (this._video) {
      media = `<video controls><source src="${this._video}" type="video/mp4"></video>`;
    }

    const likeHtml = this._likes.buildDom().innerHTML;

    const photographerMediaCard = `
          ${media}
          <div class="desc__wrapper">
            <p class="desc__title">${this._title}</p>
            ${likeHtml}
          </div>
    `;

    article.innerHTML = photographerMediaCard;
    this._likes.addEvent(article);

    return article;
  }
}
