/**
 * Return the Photographer Infos Box
 * @param {number} totalLikes
 * @param {number} price
 * @returns {HTMLElement}
 */
export const photographerInfosView = (totalLikes, price) => {
  const articleEl = document.createElement("article");
  articleEl.classList.add("photographer-infos");

  const photographerInfos = `
      <div class="like__container">
        <span class="like__number">${totalLikes}</span>
        <span class="material-symbols-outlined like__icon">favorite</span>
      </div>

      <p class="price">${price}€/jours</p>
  `;

  articleEl.innerHTML = photographerInfos;

  return articleEl;
};
