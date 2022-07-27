export class ContactModal {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
  }

  modalAccessibility() {
    const modal = document.getElementById("contactModal");

    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-labelledby", "contact-form");
    modal.setAttribute("aria-describedby", "Contact form");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("tabindex", "-1");
  }

  getContactModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");

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

    modal.innerHTML = modalContent;

    return modal;
  }
}
