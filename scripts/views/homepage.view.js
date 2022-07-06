export class UserCard {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._city = data.city;
    this._country = data.country;
    this._tagline = data.tagline;
    this._price = data.price;
    this._portrait = data.portrait;
  }

  getUserCardDOM() {
    const article = document.createElement("article");
    const linkBox = document.createElement("div");
    const link = document.createElement("a");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const desc = document.createElement("div");
    const line1 = document.createElement("span");
    const line2 = document.createElement("span");
    const line3 = document.createElement("span");

    const url = `photographer.html?id=${this._id}`;

    img.setAttribute("src", this._portrait);
    img.setAttribute("alt", this._name);
    h2.textContent = this._name;
    link.setAttribute("href", url);
    link.setAttribute("aria-label", `Link to ${this._name}`);
    line1.textContent = `${this._city}, ${this._country}`;
    line2.textContent = this._tagline;
    line3.textContent = `${this._price}€/jour`;

    linkBox.classList.add("card__linkBox");
    desc.classList.add("card__description");
    line1.classList.add("card__location");
    line2.classList.add("card__tagline");
    line3.classList.add("card__price");

    article.appendChild(link);
    article.appendChild(desc);
    link.appendChild(linkBox);
    linkBox.appendChild(img);
    linkBox.appendChild(h2);
    desc.appendChild(line1);
    desc.appendChild(line2);
    desc.appendChild(line3);
    return article;
  }
}
