import { NumberOfLikes } from "../controllers/likes.controller.js";

export class PhographerMediaCard {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._image = data.image;
    this._video = data.video;
    this._date = data.date;
    this._price = data.price;
    this._data = data;
  }

  getPhotographerMediaCard() {
    const article = document.createElement("article");
    article.classList.add("photograph-media-card");

    let media = "";

    if (this._image) {
      media = `<img src="${this._image}" alt="${this._title}" class="photographer-header__img">`;
    } else if (this._video) {
      media = `<video controls class="photographer-header__video"><source src="${this._video}" type="video/mp4"></video>`;
    }

    const numberOfLikes = new NumberOfLikes(this._data, article);

    const photographerMediaCard = `
          ${media}
          <div class="desc__wrapper">
            <p class="desc__title">${this._title}</p>
            <div class="like__container">
              <span class="like__number">${numberOfLikes.getNumberOfLikes()}</span>
              <span class="material-symbols-outlined like__icon">favorite</span>
            </div>
          </div>
    `;

    article.innerHTML = photographerMediaCard;
    numberOfLikes.addEvent(article);

    return article;
  }
}
