/**
 * @property {HTMLElement} element
 * @property {string[]} images
 * @property {string[]} imagesTitles
 * @property {string} url
 */

export class Lightbox {
  static init(media) {
    const mediaList = Array.from(media);

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

      html[0].addEventListener("click", (e) => {
        e.preventDefault();

        new Lightbox(
          media.constructor.name,
          media.image,
          mediaLinks,
          mediaTitles
        );
      });
    });
  }

  /**
   * @param {string} url Image URL
   * @param {string[]} images Images paths
   * @param {string[]} imagesTitles Media titles
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
   * Load the image
   * @param {string} url Image URL
   */
  loadVideo(url) {
    console.log("video");
    // this.url = null;
    // const image = new Image();
    // const container = this.element.querySelector(".lightbox__container");

    // // Loader
    // const loader = document.createElement("div");
    // loader.classList.add("lightbox__loader");
    // container.innerHTML = "";
    // container.appendChild(loader);

    // // Image Title
    // const i = this.images.findIndex((image) => image === url);
    // const imageTitle = document.createElement("p");
    // imageTitle.classList.add("lightbox__title");
    // imageTitle.textContent = this.imagesTitles[i];

    // image.onload = () => {
    //   container.removeChild(loader);
    //   container.appendChild(image);
    //   container.appendChild(imageTitle);
    //   this.url = url;
    // };

    // image.src = url;
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
    this.loadImage(this.images[i + 1]);
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
    this.loadImage(this.images[i - 1]);
  }

  /**
   * Build the DOM
   * @param {string} url Image URL
   * @return {HTMLElement}
   */
  buildDom(url) {
    const lightboxDom = document.createElement("section");

    lightboxDom.classList.add("lightbox");
    lightboxDom.innerHTML = `
      <div class="lightbox__wrapper">
        <button class="lightbox__close"></button>
        <button class="lightbox__next"></button>
        <button class="lightbox__prev"></button>
        <div class="lightbox__container"></div>
      </div>
    `;
    lightboxDom
      .querySelector(".lightbox__close")
      .addEventListener("click", this.close.bind(this));
    lightboxDom
      .querySelector(".lightbox__next")
      .addEventListener("click", this.next.bind(this));
    lightboxDom
      .querySelector(".lightbox__prev")
      .addEventListener("click", this.prev.bind(this));

    return lightboxDom;
  }
}
