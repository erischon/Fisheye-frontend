// import * as contactForm from "../utils/contactForm.util.js";

export const modalView = () => {
  const modal = document.createElement("div");
  modal.setAttribute("id", "contactModal");

  const modalContent = `
      <div class="modal">
        <header>
          <h2>Contactez-moi</h2>
          <img src="assets/icons/close.svg" onclick="closeModal()" />
        </header>

        <form id="contact">
          <div class="form__data">
            <label for="firstName">Prénom</label>
            <input type="text" id="firstName" name="firstName"/>
          </div>

          <div class="form__data">
            <label for="lastName">Nom</label>
            <input type="text" id="lastName" name="lastName"/>
          </div>

          <div class="form__data">
            <label for="email">Email</label>
            <input type="email" id="email" name="email"/>
          </div>

          <div class="form__data">
            <label for="message">Votre message</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>

          <button class="contact_button" type="submit">Envoyer</button>
        </form>
      </div>
    `;

  modal.innerHTML = modalContent;

  return modal;
};
