export class Media {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._image = data.image;
    this._video = data.video;
    this._likes = data.likes;
    this._date = data.date;
    this._price = data.price;
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

  get image() {
    if (this._image) {
      return `assets/photos/${this._photographerId}/${this._image}`;
    }
    return null;
  }

  get video() {
    if (this._video) {
      return `assets/photos/${this._photographerId}/${this._video}`;
    }
    return null;
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
