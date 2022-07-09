export const photographerInfosView = (likes, price) => {
  const article = document.createElement("article");
  article.classList.add("photograph-infos");

  const photographerInfos = `
      <div class="likes__container">
        <span class="likes__number">${likes}</span>
        <span class="material-symbols-outlined likes__icon">favorite</span>
      </div>

      <p class="price">${price}€/jours</p>
  `;

  article.innerHTML = photographerInfos;

  return article;
};
