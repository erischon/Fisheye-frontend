import { getPhotographers } from "../utils/api.js";
import { Photographer } from "../models/photographer.model.js";
import { Media } from "../models/media.model.js";
import { UserHeader } from "../views/userHeader.view.js";
import { UserMediaCard } from "../views/userMediaCard.view.js";

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

const getPhotographerMedia = (data, photographerId) => {
  const media = data.filter((item) => {
    return item.photographerId === photographerId;
  });
  return media;
};

async function displayHeader(photographer) {
  const photographerHeader = document.querySelector(".photograph__header");

  const userHeader = new UserHeader(photographer);
  photographerHeader.appendChild(userHeader.getUserHeader());
}

async function displayMedia(media) {
  const photographMedia = document.querySelector(".photograph__media");

  media.forEach((item) => {
    const userCard = new UserMediaCard(item);
    photographMedia.appendChild(userCard.getUserMediaCard());
  });
}

async function init() {
  const { photographers, media } = await getPhotographers();

  const photographer = getPhotographer(photographers, getId());
  const photographerMedia = getPhotographerMedia(media, getId());

  const user = new Photographer(photographer[0]);
  const userMediaList = photographerMedia.map((item) => new Media(item));

  displayHeader(user);
  displayMedia(userMediaList);
}

init();
