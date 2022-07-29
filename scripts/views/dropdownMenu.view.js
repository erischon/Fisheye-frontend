/**
 * @class
 */
export class DropdownMenu {
  constructor() {}

  /**
   *
   * @returns {HTMLElement}
   */
  createMenu() {
    const dropdownEl = document.querySelector(".dropdown-menu__container");

    const dropdowMenu = `
        
      <label for="sortSelector">Trier par :</label>
      <div class="select-wrapper" aria-controls="sortSelector" role="list" type="button" tabindex="0">
        <div id="sortSelector" class="select" type="button">
          <div class="select__trigger">
              <span>Popularité</span>
              <div class="arrow"></div>
          </div>

          <div class="custom-options" id="custom-options">
            <span class="custom-option likes selected" value="likes" role="listitem">Popularité</span>
            <hr />
            <span class="custom-option title" value="title" role="listitem">Titre</span>
            <hr />
            <span class="custom-option date" value="date" role="listitem">Date</span>
          </div>

        </div>
      </div>

    `;

    dropdownEl.innerHTML = dropdowMenu;

    const wrapperEl = dropdownEl.querySelector(".select-wrapper");

    /**
     * Add event listener on click for opening the dropdown
     */
    wrapperEl.addEventListener("click", function () {
      this.querySelector(".select").classList.toggle("open");
    });

    /**
     * Add event listener on focus for opening the dropdown
     */
    wrapperEl.addEventListener("focus", function () {
      this.querySelector(".select").classList.toggle("open");
    });

    /**
     * Add event listener on focusout for closing the dropdown
     */
    wrapperEl.addEventListener("focusout", function () {
      this.querySelector(".select").classList.remove("open");
    });

    /**
     *
     */
    for (const option of dropdownEl.querySelectorAll(".custom-option")) {
      option.addEventListener("click", function () {
        if (!this.classList.contains("selected")) {
          this.parentNode
            .querySelector(".custom-option.selected")
            .classList.remove("selected");
          this.classList.add("selected");
          this.closest(".select").querySelector(
            ".select__trigger span"
          ).textContent = this.textContent;
        }
      });
    }

    /**
     * Close the dropdown if user click outside of the dropdown
     */
    window.addEventListener("click", function (e) {
      const select = dropdownEl.querySelector(".select");
      if (!select.contains(e.target)) {
        select.classList.remove("open");
      }
    });

    return dropdownEl;
  }

  /**
   * Go to next option
   * @param {KeyboardEvent} e
   */
  nextOption(e) {
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
}
