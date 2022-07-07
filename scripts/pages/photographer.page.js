import { getPhotographers } from "../utils/api.js";
import { Photographer } from "../models/photographer.model.js";
import { Media } from "../models/media.model.js";
import { UserHeader } from "../views/userHeader.view.js";

const getId = () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  return id;
};

const getPhotographer = (photographers, photographerId) => {
  const photographer = photographers.filter((item) => {
    return item.id === photographerId;
  });
  return photographer;
};

async function displayHeader(photographer) {
  const photographerHeader = document.querySelector(".photograph__header");

  const userHeader = new UserHeader(photographer);
  photographerHeader.appendChild(userHeader.getUserHeader());
}

async function init() {
  const { photographers, media } = await getPhotographers();
  const photographer = getPhotographer(photographers, getId());
  const user = new Photographer(photographer[0]);

  //   const photographerMedia = getPhotographerMedia(media, getId());
  displayHeader(user);
}

init();
