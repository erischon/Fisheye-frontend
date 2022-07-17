import { getPhotographersData } from "../services/api.js";
import { Photographer } from "../models/photographer.model.js";
import { Media } from "../models/media.model.js";

import { PhotographerHeader } from "../views/photographerHeader.view.js";
import { PhographerMediaCard } from "../views/photographerMediaCard.view.js";
import { photographerInfosView } from "../views/photographerInfos.view.js";
import { modalView } from "../views/modal.view.js";
import { Lightbox } from "../controllers/lightbox.controller.js";

/**
 * Get the id of photographer
 * @returns { number }
 */
const getId = () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  return id;
};

/**
 * Get the photographer
 * @param { object[]} photographers List of photographer object
 * @param { number } photographerId
 * @returns { object } A photographer object
 */
const getPhotographer = (photographers, photographerId) => {
  const photographer = photographers.filter((item) => {
    return item.id === photographerId;
  })[0];
  return photographer;
};

/**
 * Get the list of photographer's media
 * @param { object[]} data List of media object
 * @param { number } photographerId
 * @returns { object[]} List of photographer's media object
 */
const getPhotographerMedias = (data, photographerId) => {
  const media = data.filter((item) => {
    return item.photographerId === photographerId;
  });

  return media;
};

/**
 *
 * @param {*} media
 * @returns
 */
const getLikesSum = (media) => {
  return media.reduce((accumulator, object) => {
    return accumulator + object.likes;
  }, 0);
};

/**
 *
 * @param {*} photographer
 */
function displayHeader(photographer) {
  const photographerHeader = document.querySelector(".photograph__header");

  const photoggrapherHeader = new PhotographerHeader(photographer);
  photographerHeader.appendChild(photoggrapherHeader.getPhotographerHeader());
}

/**
 *
 * @param {*} medias
 */
function displayMedias(medias) {
  const photographMedia = document.querySelector(".media__grid");
  photographMedia.replaceChildren();

  medias.forEach((item) => {
    const photographerCard = new PhographerMediaCard(item);
    photographMedia.appendChild(photographerCard.getPhotographerMediaCard());
  });

  Lightbox.init();
}

/**
 *
 * @param {*} likes
 * @param {*} photographer
 */
export function displayPhotographerInfos(likes, photographer) {
  const photographerInfos = document.querySelector("#main");

  photographerInfos.appendChild(
    photographerInfosView(likes, photographer.price)
  );
}

/**
 *
 */
function displayModalDOM() {
  const modal = document.querySelector("#main");

  // modal.appendChild(modalView());
}

/**
 *
 * @param {*} photographer
 */
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

/**
 *
 * @param {*} photographerMediasList
 */
function sortEventListener(photographerMediasList) {
  const dom = document
    .getElementById("sortSelector")
    .addEventListener("change", (event) => {
      sorting(photographerMediasList, event.target.value);
    });
}

/**
 *
 * @param {*} mediaList
 * @param {*} type
 */
function sorting(mediaList, type) {
  switch (type) {
    case "likes":
      // Sorted by likes (descending)
      mediaList.sort(function (a, b) {
        return b._likes - a._likes;
      });
      break;
    case "title":
      // Sorted by title (alphabetical)
      mediaList.sort(function (a, b) {
        var titleA = a._title;
        var titleB = b._title;
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      });
      break;
    case "date":
      // Sorted by date (descending)
      mediaList.sort(function (a, b) {
        var dateA = a._date;
        var dateB = b._date;
        return dateB < dateA ? -1 : dateB > dateA ? 1 : 0;
      });
      break;
    default:
      // Sorted by date (descending)
      mediaList.sort(function (a, b) {
        var dateA = a._date;
        var dateB = b._date;
        return dateB < dateA ? -1 : dateB > dateA ? 1 : 0;
      });
  }

  displayMedias(mediaList);
}

/**
 *
 */
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
  sortEventListener(photographerMediasList);
  displayPhotographerInfos(getLikesSum(photographerMediasList), photographer);
  displayModalDOM();
}

init();
