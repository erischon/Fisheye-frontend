export class DropdownMenu {
  constructor() {}

  createMenu() {
    const menuDom = document.querySelector(".dropdown-menu__container");

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

    menuDom.innerHTML = dropdowMenu;

    const wrapper = menuDom.querySelector(".select-wrapper");

    wrapper.addEventListener("click", function () {
      this.querySelector(".select").classList.toggle("open");
    });

    wrapper.addEventListener("focus", function () {
      this.querySelector(".select").classList.toggle("open");
    });

    wrapper.addEventListener("focusout", function () {
      this.querySelector(".select").classList.remove("open");
    });

    // menuDom.focus();

    //
    for (const option of menuDom.querySelectorAll(".custom-option")) {
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

    // Close the dropdown if user click outside
    window.addEventListener("click", function (e) {
      const select = menuDom.querySelector(".select");
      if (!select.contains(e.target)) {
        select.classList.remove("open");
      }
    });

    return menuDom;
  }
}
