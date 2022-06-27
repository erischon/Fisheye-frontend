function photographerFactory(data) {
  const { id, name, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const linkBox = document.createElement("div");
    const link = document.createElement("a");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const desc = document.createElement("div");
    const line1 = document.createElement("span");
    const line2 = document.createElement("span");
    const line3 = document.createElement("span");

    const url = `photographer/${id}`;

    img.setAttribute("src", picture);
    h2.textContent = name;
    link.setAttribute("href", url);
    line1.textContent = `${city}, ${country}`;
    line2.textContent = tagline;
    line3.textContent = `${price}€/jour`;

    linkBox.classList.add("card__linkBox");
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
  return { name, picture, getUserCardDOM };
}
