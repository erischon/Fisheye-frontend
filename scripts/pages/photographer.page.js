import { getPhotographersData } from "../services/api.js";
import { Photographer } from "../models/photographer.model.js";
import { Media } from "../models/media.model.js";

import { PhotographerHeader } from "../views/photographerHeader.view.js";
import { PhographerMediaCard } from "../views/photographerMediaCard.view.js";
import { photographerInfosView } from "../views/photographerInfos.view.js";
import { modalView } from "../views/modal.view.js";
import { Lightbox } from "../controllers/lightbox.controller.js";

const getId = () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  return id;
};

const getPhotographer = (photographers, photographerId) => {
  const photographer = photographers.filter((item) => {
    return item.id === photographerId;
  })[0];
  return photographer;
};

const getPhotographerMedias = (data, photographerId, sortedBy) => {
  const media = data.filter((item) => {
    return item.photographerId === photographerId;
  });

  switch (sortedBy) {
    case "likes":
      // Sorted by likes (descending)
      return media.sort(function (a, b) {
        return b.likes - a.likes;
      });
    case "title":
      // Sorted by title (alphabetical)
      return media.sort(function (a, b) {
        var titleA = a.title;
        var titleB = b.title;
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      });
    default:
      // Sorted by date (descending)
      media.sort(function (a, b) {
        var dateA = a.date;
        var dateB = b.date;
        return dateB < dateA ? -1 : dateB > dateA ? 1 : 0;
      });
      console.log(media);
      return media;
  }
};

const getLikesSum = (media) => {
  return media.reduce((accumulator, object) => {
    return accumulator + object.likes;
  }, 0);
};

function displayHeader(photographer) {
  const photographerHeader = document.querySelector(".photograph__header");

  const photoggrapherHeader = new PhotographerHeader(photographer);
  photographerHeader.appendChild(photoggrapherHeader.getPhotographerHeader());
}

function displayMedias(medias) {
  const photographMedia = document.querySelector(".media__grid");

  medias.forEach((item) => {
    const photographerCard = new PhographerMediaCard(item);
    photographMedia.appendChild(photographerCard.getPhotographerMediaCard());
  });
}

export function displayPhotographerInfos(likes, photographer) {
  const photographerInfos = document.querySelector("#main");

  photographerInfos.appendChild(
    photographerInfosView(likes, photographer.price)
  );
}

function displayModalDOM() {
  const modal = document.querySelector("#main");

  // modal.appendChild(modalView());
}

function headInfos(photographer) {
  const head = document.head;
  const title = `Fisheye - ${photographer.name}`;
  const description = `Fisheye - ${photographer.name}, ${photographer.tagline}`;

  // Adding description meta tag
  const desc = document.createElement("meta");
  desc.setAttribute("name", "description");
  desc.setAttribute("content", description);
  head.appendChild(desc);

  // Modify title
  document.title = title;
}

async function init() {
  const { photographers, medias } = await getPhotographersData();
  const id = getId();

  const photographer = new Photographer(getPhotographer(photographers, id));
  const photographerMediasList = getPhotographerMedias(medias, id).map(
    (item) => new Media(item)
  );

  headInfos(photographer);
  displayHeader(photographer);
  displayMedias(photographerMediasList);
  displayPhotographerInfos(getLikesSum(photographerMediasList), photographer);
  displayModalDOM();
  Lightbox.init();
}

init();
