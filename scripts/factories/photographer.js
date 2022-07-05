const API_URL = "data/photographers.json";

const getId = () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  return id;
};

async function getPhotographers() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    console.log("Error");
  }
  const photographers = response.json();
  return photographers;
}

const getPhotographer = (photographers, photographerId) => {
  const photographer = photographers.filter((item) => {
    return item.id === photographerId;
  });
  return photographer;
};

const getPhotographerMedia = (data, photographerId) => {
  const media = data.filter((item) => {
    return item.photographerId === photographerId;
  });
  return media;
};

async function displayData(photographer) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const photographerId = getId();
  const { photographers, media } = await getPhotographers();
  const photographer = getPhotographer(photographers, photographerId);
  const photographerMedia = getPhotographerMedia(media, photographerId);
  console.log("photographer", photographer, "Media", photographerMedia);
  // console.log("data", photographer, media);
  // displayData(photographer);
}

init();
