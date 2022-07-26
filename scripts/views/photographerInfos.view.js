export const photographerInfosView = (likes, price) => {
  const article = document.createElement("article");
  article.classList.add("photographer-infos");

  const photographerInfos = `
      <div class="like__container">
        <span class="like__number">${likes}</span>
        <span class="material-symbols-outlined like__icon">favorite</span>
      </div>

      <p class="price">${price}€/jours</p>
  `;

  article.innerHTML = photographerInfos;

  return article;
};
