export class Media {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
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

export class MediaImage extends Media {
  constructor(data) {
    super(data);
    this._image = data.image;
  }

  get image() {
    return `assets/photos/${this._photographerId}/${this._image}`;
  }
}

export class MediaVideo extends Media {
  constructor(data) {
    super(data);
    this._video = data.video;
  }

  get video() {
    return `assets/photos/${this._photographerId}/${this._video}`;
  }
}
