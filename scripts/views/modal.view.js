export const modalView = () => {
  const modal = document.createElement("div");
  modal.setAttribute("id", "contact_modal");

  const modalContent = `
      <div class="modal">
        <header>
          <h2>Contactez-moi</h2>
          <img src="assets/icons/close.svg" onclick="closeModal()" />
        </header>

        <form>
          <div class="form__data">
            <label for="first">Prénom</label>
            <input type="text" name="first"/>
          </div>

          <div class="form__data">
            <label for="last">Nom</label>
            <input type="text" name="last"/>
          </div>

          <div class="form__data">
            <label for="email">Email</label>
            <input type="email" name="email"/>
          </div>

          <div class="form__data">
            <label for="message">Votre message</label>
            <textarea name="message" rows="5"></textarea>
          </div>

          <button class="contact_button">Envoyer</button>
        </form>
      </div>
    `;

  modal.innerHTML = modalContent;

  return modal;
};
