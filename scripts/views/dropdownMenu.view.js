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
              <span>Popularit√©</span>
              <div class="arrow"></div>
          </div>

          <div class="custom-options" id="custom-options">
            <span class="custom-option likes selected" value="likes" role="listitem"><span class="underline">P</span>opularit√©</span>
            <hr />
            <span class="custom-option title" value="title" role="listitem"><span class="underline">T</span>itre</span>
            <hr />
            <span class="custom-option date" value="date" role="listitem"><span class="underline">D</span>ate</span>
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
     * Manage the options style
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
   * Styling the dropdown after a Keypress use
   * @param {string} selectedOption
   */
  stylingDropdown(selectedOption) {
    const wrapperEl = document.querySelector(".select-wrapper");

    const option = wrapperEl.querySelector(`.${selectedOption}`);

    if (!option.classList.contains("selected")) {
      option.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      option.classList.add("selected");
      option
        .closest(".select")
        .querySelector(".select__trigger span").textContent =
        option.textContent;
    }

    // wrapperEl.querySelector(".select").classList.remove("open");
  }
}
