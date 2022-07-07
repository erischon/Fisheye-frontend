export class UserMediaCard {
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

  getUserMediaCard() {
    const article = document.createElement("article");
    article.classList.add("photograph-media-card");

    let media = "";

    if (this._image) {
      media = `<img src="${this._image}" alt="${this._title}" class="photographer-header__img">`;
    } else if (this._video) {
      media = `<video controls><source src="${this._video}" type="video/mp4"></video>`;
    }

    const userHeader = `
     
          ${media}
          <div class="">
            <p>${this._title}</p>
              <div>
                <span>Likes</span>
              </div>
          </div>
     
    `;

    article.innerHTML = userHeader;

    return article;
  }
}
