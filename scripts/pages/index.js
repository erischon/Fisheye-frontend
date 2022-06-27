const API_URL = "data/photographers.json";

async function getPhotographers() {
  const response = await fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const photographers = data.photographers;
      const media = data.media;
      return [photographers, media];
    });
}

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
