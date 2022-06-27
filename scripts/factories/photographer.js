function photographerFactory(data) {
  const { name, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const desc = document.createElement("div");
    const line1 = document.createElement("span");
    const line2 = document.createElement("span");
    const line3 = document.createElement("span");

    img.setAttribute("src", picture);
    h2.textContent = name;
    line1.textContent = `${city}, ${country}`;
    line2.textContent = tagline;
    line3.textContent = `${price}€/jour`;

    line1.classList.add("card__location");
    line2.classList.add("card__tagline");
    line3.classList.add("card__price");

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(desc);
    article.appendChild(line1);
    article.appendChild(line2);
    article.appendChild(line3);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
