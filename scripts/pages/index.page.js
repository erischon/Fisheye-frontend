import { getPhotographers } from "../utils/api.js";
import { Photographer } from "../models/photographer.model.js";
import { UserCard } from "../views/userCard.view.js";

async function displayCards(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const userCard = new UserCard(photographer);
    photographersSection.appendChild(userCard.getUserCardDOM());
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();
  const photographerList = photographers.map((item) => new Photographer(item));
  displayCards(photographerList);
}

init();
