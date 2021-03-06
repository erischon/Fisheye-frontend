/**
 * @class
 */
export class Lightbox {
  /**
   * Initialization
   * @param {Object[]} photographerMediasList An array of Media instances
   */
  static init(photographerMediasList) {
    const mediaList = Array.from(photographerMediasList);

    const mediaLinks = mediaList.map((media) => {
      if (media.constructor.name === "MediaVideo") {
        return media.video;
      } else if (media.constructor.name === "MediaImage") {
        return media.image;
      }
    });

    const mediaTitles = mediaList.map((media) => media.title);

    mediaList.forEach((media) => {
      const html = document.getElementsByClassName(`${media.id}`);

      // Add event on click who open a lightbox for the media
      html[0].addEventListener("click", (e) => {
        e.preventDefault();
        const type = media.constructor.name;
        let url = "";

        if (type === "MediaImage") {
          url = media.image;
        } else if (type === "MediaVideo") {
          url = media.video;
        } else {
          url = null;
        }

        new Lightbox(type, url, mediaLinks, mediaTitles);
      });

      // Add event on keypress Enter who open a lightbox for the media
      html[0].addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const type = media.constructor.name;
          let url = "";

          if (type === "MediaImage") {
            url = media.image;
          } else if (type === "MediaVideo") {
            url = media.video;
          } else {
            url = null;
          }

          new Lightbox(type, url, mediaLinks, mediaTitles);
        }
      });
    });
  }

  /**
   * @constructs Lightbox
   * @param {string} type Type of the media
   * @param {string} url Image Url
   * @param {string[]} images Array of Images Url
   * @param {string[]} imagesTitles Array of Media titles
   */
  constructor(type, url, images, imagesTitles) {
    this.element = this.buildDom(url);
    this.images = images;
    this.imagesTitles = imagesTitles;
    this.onKeyUp = this.onKeyUp.bind(this);

    if (type === "MediaImage") {
      this.loadImage(url);
    }
    if (type === "MediaVideo") {
      this.loadVideo(url);
    }

    document.body.appendChild(this.element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  /**
   * Keyboard access
   * @param {KeyboardEvent} e
   */
  onKeyUp(e) {
    if (e.key === "Escape" || e.key === "Esc") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }

  /**
   * Load the image
   * @param {string} url Image URL
   */
  loadImage(url) {
    this.url = null;
    const image = new Image();
    const container = this.element.querySelector(".lightbox__container");

    // Loader
    const loader = document.createElement("div");
    loader.classList.add("lightbox__loader");
    container.innerHTML = "";
    container.appendChild(loader);

    // Image Title
    const i = this.images.findIndex((image) => image === url);
    const imageTitle = document.createElement("p");
    imageTitle.classList.add("lightbox__title");
    imageTitle.textContent = this.imagesTitles[i];

    image.onload = () => {
      container.removeChild(loader);
      container.appendChild(image);
      container.appendChild(imageTitle);
      this.url = url;
    };

    image.src = url;
  }

  /**
   * Load the Video
   * @param {string} url Video URL
   */
  loadVideo(url) {
    this.url = null;
    const video = document.createElement("video");
    video.setAttribute("controls", true);
    video.setAttribute("width", "100%");
    video.innerHTML = `<source src="${url}" type="video/mp4">`;

    const container = this.element.querySelector(".lightbox__container");

    // Loader
    const loader = document.createElement("div");
    loader.classList.add("lightbox__loader");
    container.innerHTML = "";
    container.appendChild(loader);

    // Image Title
    const i = this.images.findIndex((image) => image === url);
    const imageTitle = document.createElement("p");
    imageTitle.classList.add("lightbox__title");
    imageTitle.textContent = this.imagesTitles[i];

    // video.load = () => {
    container.removeChild(loader);
    container.appendChild(video);
    container.appendChild(imageTitle);
    this.url = url;
    // };

    video.src = url;
  }

  /**
   * Close the lightbox
   * @param {MouseEvent|KeyboardEvent} e
   */
  close(e) {
    e.preventDefault();

    this.element.classList.add("fadeOut");

    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);

    document.removeEventListener("keyup", this.onKeyUp);
  }

  /**
   * Go to next image
   * @param {MouseEvent|KeyboardEvent} e
   */
  next(e) {
    e.preventDefault();

    let i = this.images.findIndex((image) => image === this.url);
    if (i === this.images.length - 1) {
      i = -1;
    }

    if (this.images[i + 1].includes(".jpg")) {
      this.loadImage(this.images[i + 1]);
    } else if (this.images[i + 1].includes(".mp4")) {
      this.loadVideo(this.images[i + 1]);
    }
  }

  /**
   * Go to previous image
   * @param {MouseEvent|KeyboardEvent} e
   */
  prev(e) {
    e.preventDefault();

    let i = this.images.findIndex((image) => image === this.url);
    if (i === 0) {
      i = this.images.length;
    }

    if (this.images[i - 1].includes("jpg")) {
      this.loadImage(this.images[i - 1]);
    } else if (this.images[i - 1].includes("mp4")) {
      this.loadVideo(this.images[i - 1]);
    }
  }

  /**
   * Build the DOM
   * @return {HTMLElement}
   */
  buildDom() {
    const lightboxEl = document.createElement("section");
    lightboxEl.classList.add("lightbox");

    lightboxEl.setAttribute("role", "dialog");
    lightboxEl.setAttribute("aria-labelledby", "lightbox");
    lightboxEl.setAttribute("aria-describedby", "lightbox");
    lightboxEl.setAttribute("aria-modal", "true");
    lightboxEl.setAttribute("aria-hidden", "true");
    lightboxEl.setAttribute("tabindex", "-1");

    lightboxEl.innerHTML = `

    <div class="lightbox__wrapper">
      <button class="lightbox__close"></button>
      <button class="lightbox__prev"></button>
      <button class="lightbox__next"></button>
      <div class="lightbox__container"></div>
    </div>
    
    `;

    lightboxEl
      .querySelector(".lightbox__close")
      .addEventListener("click", this.close.bind(this));
    lightboxEl
      .querySelector(".lightbox__next")
      .addEventListener("click", this.next.bind(this));
    lightboxEl
      .querySelector(".lightbox__prev")
      .addEventListener("click", this.prev.bind(this));

    const focusElement = lightboxEl.querySelector(".lightbox__close");

    window.setTimeout(() => {
      focusElement.focus();
    }, 100);

    return lightboxEl;
  }
}
