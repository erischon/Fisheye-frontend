export class DropdownMenu {
  constructor() {}

  createMenu() {
    const menuDom = document.querySelector(".dropdown-menu__container");

    const dropdowMenu = `
        
      <label for="sortSelector">Trier par :</label>
      <div class="select-wrapper">
        <div id="sortSelector" class="select">
          <div class="select__trigger">
              <span>Popularité</span>
              <div class="arrow"></div>
          </div>

          <div class="custom-options" id="custom-options">
            <span class="custom-option likes selected" value="likes">Popularité</span>
            <hr />
            <span class="custom-option title" value="title">Titre</span>
            <hr />
            <span class="custom-option date" value="date">Date</span>
          </div>

        </div>
      </div>

    `;

    menuDom.innerHTML = dropdowMenu;

    menuDom
      .querySelector(".select-wrapper")
      .addEventListener("click", function () {
        this.querySelector(".select").classList.toggle("open");
      });

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

    return menuDom;
  }
}
