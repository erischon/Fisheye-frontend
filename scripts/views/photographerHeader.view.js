export class PhotographerHeader {
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

  getPhotographerHeader() {
    const article = document.createElement("article");
    article.classList.add("photograph-header");

    const photographerHeader = `
        
          <div class="desc">
            <h1>${this._name}</h2>
            <span class="desc__location">${this._city}, ${this._country}</span>
            <span class="desc__tagline">${this._tagline}</span>
          </div>

          <button class="contact_button" onclick="displayModal()">
            Contactez-moi
          </button>

          <img src="${this._portrait}" alt="${this._name}" class="photographer-header__portrait">

        
      `;

    article.innerHTML = photographerHeader;

    return article;
  }
}
