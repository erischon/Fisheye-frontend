export class PhographerMediaCard {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._image = data.image;
    this._video = data.video;
    this._likes = data.likes;
    this._date = data.date;
    this._price = data.price;
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

    const photographerMediaCard = `
     
          ${media}
          <div class="desc__wrapper">
            <p class="desc__title">${this._title}</p>

            <div class="likes__container">
              <span class="likes__number">${this._likes}</span>
              <span class="material-symbols-outlined likes__icon">favorite</span>
            </div>
          </div>
     
    `;

    article.innerHTML = photographerMediaCard;

    return article;
  }
}