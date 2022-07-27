/**
 * @class
 */
export class Media {
  /**
   * @constructs Media
   * @param {Object} mediaData Data of a media
   * @param {number} mediaData.id
   * @param {number} mediaData.photographerId
   * @param {string} mediaData.title
   * @param {number} mediaData.likes
   * @param {string} mediaData.date
   * @param {number} mediaData.price
   */
  constructor(mediaData) {
    this._id = mediaData.id;
    this._photographerId = mediaData.photographerId;
    this._title = mediaData.title;
    this._likes = mediaData.likes;
    this._date = mediaData.date;
    this._price = mediaData.price;
    this._path = "photographer.html";
  }

  get id() {
    return this._id;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get likes() {
    return this._likes;
  }

  get date() {
    return this._date;
  }

  get price() {
    return this._price;
  }
}

/**
 * @class
 */
export class MediaImage extends Media {
  /**
   * @constructs MediaImage
   * @param {Object} mediaData
   * @param {string} mediaData.image
   */
  constructor(mediaData) {
    super(mediaData);
    this._image = mediaData.image;
  }

  get image() {
    return `assets/photos/${this._photographerId}/${this._image}`;
  }
}

/**
 * @class
 */
export class MediaVideo extends Media {
  /**
   * @constructs MediaVideo
   * @param {Object} mediaData
   * @param {string} mediaData.video
   */
  constructor(mediaData) {
    super(mediaData);
    this._video = mediaData.video;
  }

  get video() {
    return `assets/photos/${this._photographerId}/${this._video}`;
  }
}
