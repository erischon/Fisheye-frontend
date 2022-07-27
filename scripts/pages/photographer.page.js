import { getPhotographersData } from "../services/api.js";

import { Photographer } from "../models/photographer.model.js";

import { PhotographerHeader } from "../views/photographerHeader.view.js";
import { PhographerMediaCard } from "../views/photographerMediaCard.view.js";
import { photographerInfosView } from "../views/photographerInfos.view.js";
import { DropdownMenu } from "../views/dropdownMenu.view.js";
import { ContactModal } from "../views/modal.view.js";

import { MediaFactory } from "../controllers/mediaFactory.controller.js";
import { Lightbox } from "../controllers/lightbox.controller.js";

import { ContactForm } from "../utils/contactForm.util.js";

/**
 * Return the id of a photographer from location
 * @returns {number}
 */
const getId = () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  return id;
};

/**
 * Return a photographer instance
 * @param {Object[]} photographers An array of Photographer instances
 * @param {number} photographerId
 * @returns {Object}
 */
const getPhotographer = (photographers, photographerId) => {
  const photographer = photographers.filter((item) => {
    return item.id === photographerId;
  })[0];

  return photographer;
};

/**
 * Return the list of photographer's media
 * @param {Object[]} data List of media object
 * @param {number} photographerId
 * @returns {Object[]} List of photographer's media instances
 */
const getPhotographerMedias = (data, photographerId) => {
  const media = data.filter((item) => {
    return item.photographerId === photographerId;
  });

  return media;
};

/**
 * Calculate the sum of Likes for ONE Photographer
 * @param {Object[]} photographerMediasList An array of Media instances
 * @returns {Number}
 */
const getLikesSum = (photographerMediasList) => {
  return photographerMediasList.reduce((accumulator, object) => {
    return accumulator + object.likes;
  }, 0);
};

/**
 * Display the header
 * @param {Object} photographer A Photographer instance
 */
function displayHeader(photographer) {
  const photographerHeader = document.querySelector(".photographer__header");

  const header = new PhotographerHeader(photographer);
  photographerHeader.appendChild(header.getPhotographerHeader());
}

/**
 *
 * @param {*} photographer
 */
function displayModalHtml(photographer) {
  const contactModal = document.querySelector("#contactModal");

  const modal = new ContactModal(photographer);
  modal.modalAccessibility();
  contactModal.appendChild(modal.getContactModal(photographer));

  ContactForm.init();
}

/**
 * Display the medias of the photographer (photos and videos) and initialize Lightbox
 * @param {Object[]} photographerMediasList An array of Media instances
 */
function displayMedias(photographerMediasList) {
  const mediaGrid = document.querySelector(".media__grid");
  // Deleting the content of the grid
  mediaGrid.replaceChildren();

  photographerMediasList.forEach((item) => {
    const card = new PhographerMediaCard(item);

    mediaGrid.appendChild(card.getPhotographerMediaCard());
  });

  Lightbox.init(photographerMediasList);
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
 * Create some SEO informations
 * @param {Object} photographer A Photographer instance
 */
function headSEO(photographer) {
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
 * @param {Object[]} photographerMediasList An array of Media instances
 */
function sortEventListener(photographerMediasList) {
  const dom = document.getElementById("custom-options");

  dom.addEventListener("click", (event) => {
    sorting(photographerMediasList, event.target.getAttribute("value"));
  });
}

/**
 * Sort the Photographer Media List and display it
 * @param {Object[]} photographerMediasList An array of Media instances
 * @param {String} type
 */
function sorting(photographerMediasList, type = "likes") {
  switch (type) {
    case "likes":
      // Sorted by likes (descending)
      photographerMediasList.sort(function (a, b) {
        return b._likes - a._likes;
      });
      break;
    case "title":
      // Sorted by title (alphabetical)
      photographerMediasList.sort(function (a, b) {
        var titleA = a._title;
        var titleB = b._title;
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      });
      break;
    case "date":
      // Sorted by date (descending)
      photographerMediasList.sort(function (a, b) {
        var dateA = a._date;
        var dateB = b._date;
        return dateB < dateA ? -1 : dateB > dateA ? 1 : 0;
      });
      break;
    default:
      // Sorted by likes (descending)
      photographerMediasList.sort(function (a, b) {
        return b._likes - a._likes;
      });
  }

  displayMedias(photographerMediasList);
}

/**
 *
 */
async function init() {
  const { photographers, medias } = await getPhotographersData();
  const id = getId();
  const photographer = new Photographer(getPhotographer(photographers, id));
  const photographerMediasList = getPhotographerMedias(medias, id).map(
    (item) => new MediaFactory(item)
  );

  headSEO(photographer);
  displayHeader(photographer);
  displayModalHtml(photographer);
  const menu = new DropdownMenu();
  menu.createMenu();
  sorting(photographerMediasList);
  sortEventListener(photographerMediasList);
  displayPhotographerInfos(getLikesSum(photographerMediasList), photographer);
  displayModalDOM();
}

init();
