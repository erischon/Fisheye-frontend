import { getPhotographersData } from "../services/api.js";
import { Photographer } from "../models/photographer.model.js";
import { PhotographerCard } from "../views/photographerCard.view.js";

async function displayCards(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerCard = new PhotographerCard(photographer);
    photographersSection.appendChild(photographerCard.getPhotographerCard());
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, medias } = await getPhotographersData();
  const photographerList = photographers.map((item) => new Photographer(item));
  displayCards(photographerList);
}

init();
