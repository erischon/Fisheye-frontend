export class UserHeader {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._city = data.city;
    this._country = data.country;
    this._tagline = data.tagline;
    this._price = data.price;
    this._portrait = data.portrait;
    this._path = data.userUrl;
  }

  getUserHeader() {
    const article = document.createElement("article");

    const userHeader = `
        <article class="">
          <div class="card__description">
            <h2>${this._name}</h2>
            <span class="card__location">${this._city}, ${this._country}</span>
            <span class="card__tagline">${this._tagline}</span>
          </div>

          <button class="contact_button" onclick="displayModal()">
            Contactez-moi
          </button>

          <img src="${this._portrait}" alt="${this._name}">

        </article>
      `;

    article.innerHTML = userHeader;

    return article;
  }
}
