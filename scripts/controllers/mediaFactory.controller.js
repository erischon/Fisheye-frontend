import { MediaImage } from "../models/media.model.js";
import { MediaVideo } from "../models/media.model.js";

export class MediaFactory {
  constructor(media) {
    if (media.image) {
      return new MediaImage(media);
    } else if (media.video) {
      return new MediaVideo(media);
    } else {
      throw "Unknown media type";
    }
  }
}
