import { getPhotographersData } from "../services/api.js";
import { Photographer } from "../models/photographer.model.js";
import { PhotographerCard } from "../views/photographerCard.view.js";

/**
 * Display the Photographer Cards
 * @param { Object[]} photographers An array of Photographer instances
 */
function displayCards(photographers) {
  const photographersSection = document.querySelector(".photographer__section");

  // Create a card for each Photographer and add it to DOM
  photographers.forEach((photographer) => {
    const photographerCard = new PhotographerCard(photographer);
    photographersSection.appendChild(photographerCard.getPhotographerCard());
  });
}

/**
 * Home page initialization
 */
async function init() {
  const { photographers } = await getPhotographersData();
  const photographerList = photographers.map((item) => new Photographer(item));

  displayCards(photographerList);
}

init();
