import { NumberOfLikes } from "../controllers/likes.controller.js";
import { Media } from "../models/media.model.js";

/**
 * @class
 */
export class PhographerMediaCard extends Media {
  /**
   * @constructs photographerMediaCard
   * @param {Object} mediaObject An Instance of MediaImage or MediaVideo
   */
  constructor(mediaObject) {
    super(mediaObject);

    if (mediaObject.constructor.name === "MediaImage") {
      this._image = mediaObject.image;
    }
    if (mediaObject.constructor.name === "MediaVideo") {
      this._video = mediaObject.video;
    }

    this._mediaObject = mediaObject;
  }

  /**
   * Return a media Card
   * @returns {HTMLElement}
   */
  getPhotographerMediaCard() {
    const articleEl = document.createElement("article");
    articleEl.classList.add("photograph-media-card");

    let media = "";

    if (this._image) {
      media = `<img src="${this._image}" alt="${this._title}" class="photographer-media__image ${this._id}" tabindex="0">`;
    } else if (this._video) {
      const videoPreview = this._video.replace(".mp4", "_Moment.jpg");

      media = `<img src="${videoPreview}" alt="${this._title}" class="photographer-media__video ${this._id}" tabindex="0"><i class="fa-solid fa-video videoWarning"></i>`;
    }

    const numberOfLikes = new NumberOfLikes(this._mediaObject, articleEl);

    const photographerMediaCard = `

        ${media}
        <div class="desc__wrapper">
          <p class="desc__title">${this._title}</p>
          <div class="like__container" tabindex="0">
            <span class="like__number">${numberOfLikes.getNumberOfLikes()}</span>
            <span class="material-symbols-outlined like__icon">favorite</span>
          </div>
        </div>

    `;

    articleEl.innerHTML = photographerMediaCard;
    numberOfLikes.addEvent(articleEl);

    return articleEl;
  }
}
