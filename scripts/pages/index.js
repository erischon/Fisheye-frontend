import { getPhotographers } from "../utils/api.js";
import { Photographer } from "../models/photographer.model.js";
import { UserCard } from "../views/homepage.view.js";

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = new UserCard(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();
  const photographerList = photographers.map((item) => new Photographer(item));
  console.log(photographerList);
  displayData(photographerList);
}

init();
