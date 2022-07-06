import { getPhotographers } from "../utils/api.js";

// const API_URL = "data/photographers.json";

// return photographers;
// async function getPhotographers() {
//   const response = await fetch(API_URL);

//   if (!response.ok) {
//     console.log("Error");
//   }
//   const photographers = response.json();
//   return photographers;
// }

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();
  displayData(photographers);
}

init();
