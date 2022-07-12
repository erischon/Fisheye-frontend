export class Lightbox {
  static init() {
    const links = document.querySelectorAll('img[src$=".jpg"]');
    console.log(
      "element",
      document.getElementsByClassName("photograph-header__img")
    );
  }
}

Lightbox.init();

/**
 * 
      <div class="lightbox">
      <button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__prev">Précédent</button>
      <div class="lightbox__container">
        <img src="https://picsum.photos/id/237/900/1800" alt="" />
      </div>
    </div>
 */
