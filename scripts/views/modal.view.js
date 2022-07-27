/**
 * @class
 */
export class ContactModal {
  /**
   * @constructs ContactModal
   * @param {Object} photographer A Photographer instance
   * @param {number} photographer.id
   * @param {string} photographer.name
   */
  constructor(photographer) {
    this._id = photographer.id;
    this._name = photographer.name;
  }

  /**
   * Set the accessibility to the modal
   */
  modalAccessibility() {
    const modalEl = document.getElementById("contactModal");

    modalEl.setAttribute("role", "dialog");
    modalEl.setAttribute("aria-labelledby", "contact-form");
    modalEl.setAttribute("aria-describedby", "Contact form");
    modalEl.setAttribute("aria-modal", "true");
    modalEl.setAttribute("aria-hidden", "true");
    modalEl.setAttribute("tabindex", "-1");
  }

  /**
   * Return the content of the modal
   * @returns {HTMLElement}
   */
  getContactModal() {
    const modalDivEl = document.createElement("div");
    modalDivEl.classList.add("modal");

    const modalContent = `

        <header class="contact-form__header">
          <h1>Contactez-moi ${this._name}</h1>
          <button
            class="modal__close"
            onclick="closeModal()"
            alt="Close"
            aria-label="Close"
            title="Close the modal"
            data-dismiss="dialog"
          ></button>
        </header>
  
        <form id="contact">
          <div class="form__data">
            <label for="firstName">Prénom</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
  
          <div class="form__data">
            <label for="lastName">Nom</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
  
          <div class="form__data">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
  
          <div class="form__data">
            <label for="message">Votre message</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
  
          <button class="contact_button" type="submit">Envoyer</button>
        </form>

      `;

    modalDivEl.innerHTML = modalContent;

    return modalDivEl;
  }
}
