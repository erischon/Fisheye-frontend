/**
 * @class
 */
export class ContactForm {
  /**
   * Initialization of the form
   */
  static init() {
    const contactFormEl = document.getElementById("contact");

    // Error messages
    const firstNameMsg =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    const lastNameMsg =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    const emailMsg = "Veuillez entrer une adresse email valide.";
    const messageMsg = "Veuillez laisser un message d'au moins 10 caractères.";

    /**
     * Add an event listener to the form who will validate the inputs
     */
    contactFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      validateInputs();
    });

    /**
     * Set to error
     * @param {HTMLElement} element
     * @param {string} message
     */
    const setError = (element, message) => {
      const formDataEl = element.parentElement;

      formDataEl.classList.add("data-error");
      formDataEl.setAttribute("data-error", message);
      element.classList.add("data-error");

      formDataEl.classList.remove("success");
    };

    /**
     * Set to success
     * @param {HTMLElement} element
     */
    const setSuccess = (element) => {
      const formDataEl = element.parentElement;

      formDataEl.classList.remove("data-error");
      formDataEl.removeAttribute("data-error");
      element.classList.remove("data-error");

      formDataEl.classList.add("success");
    };

    /**
     *
     * @param {string} email
     * @returns {boolean}
     */
    const isValidEmail = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    /**
     * Inputs Validation
     */
    function validateInputs() {
      // Get the values
      const firstNameValue = document.getElementById("firstName").value.trim();
      const lastNameValue = document.getElementById("lastName").value.trim();
      const emailValue = document.getElementById("email").value.trim();
      const messageValue = document.getElementById("message").value.trim();

      // Get the elements
      const firstNameEl = document.getElementById("firstName");
      const lastNameEl = document.getElementById("lastName");
      const emailEl = document.getElementById("email");
      const messageEl = document.getElementById("message");

      // Set the validation
      let firstNameValidation = false;
      let lastNameValidation = false;
      let emailValidation = false;
      let messageValidation = false;

      // First name validation
      if (firstNameValue === "" || firstNameValue.length < 2) {
        setError(firstNameEl, firstNameMsg);
      } else {
        setSuccess(firstNameEl);
        firstNameValidation = true;
      }

      // Last name validation
      if (lastNameValue === "" || lastNameValue.length < 2) {
        setError(lastNameEl, lastNameMsg);
      } else {
        setSuccess(lastNameEl);
        lastNameValidation = true;
      }

      // Email validation
      if (emailValue === "") {
        setError(emailEl, emailMsg);
      } else if (!isValidEmail(emailValue)) {
        setError(emailEl, emailMsg);
      } else {
        setSuccess(emailEl);
        emailValidation = true;
      }

      // Message validation
      if (messageValue === "" || messageValue.length < 10) {
        setError(messageEl, messageMsg);
      } else {
        setSuccess(messageEl);
        messageValidation = true;
      }

      if (
        firstNameValidation &&
        lastNameValidation &&
        emailValidation &&
        messageValidation
      ) {
        const formData = {
          firstName: firstNameValue,
          lastName: lastNameValue,
          email: emailValue,
          message: messageValue,
        };
        console.log("Form Data: ", formData);

        contactFormEl.reset();
        closeModal();
      }
    }
  }
}
