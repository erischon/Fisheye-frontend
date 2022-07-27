import { MediaImage } from "../models/media.model.js";
import { MediaVideo } from "../models/media.model.js";

/**
 * @class
 */
export class MediaFactory {
  /**
   * Return a MediaImage instance or a MediaVideo Instance
   * @param {Object} mediaData Data of a media
   * @param {string} mediaData.image
   * @param {string} mediaData.video
   * @returns {Object}
   */
  constructor(mediaData) {
    if (mediaData.image) {
      return new MediaImage(mediaData);
    } else if (mediaData.video) {
      return new MediaVideo(mediaData);
    } else {
      throw "Unknown media type";
    }
  }
}
