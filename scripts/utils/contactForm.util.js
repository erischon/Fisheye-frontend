const contactForm = document.getElementById("contact");

// Error messages
const firstNameMsg =
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const lastNameMsg =
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const emailMsg = "Veuillez entrer une adresse email valide.";
const messageMsg = "Veuillez laisser un message d'au moins 10 caractères.";

// Submit Form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

// Set to Error
const setError = (element, message) => {
  const formData = element.parentElement;

  formData.classList.add("data-error");
  formData.setAttribute("data-error", message);
  element.classList.add("data-error");

  formData.classList.remove("success");
};

// Set to Success
const setSuccess = (element) => {
  const formData = element.parentElement;

  formData.classList.remove("data-error");
  formData.removeAttribute("data-error");
  element.classList.remove("data-error");

  formData.classList.add("success");
};

// Email Validation
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Inputs Validation Function
function validateInputs() {
  // Get the values
  const firstNameValue = document.getElementById("firstName").value.trim();
  const lastNameValue = document.getElementById("lastName").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const messageValue = document.getElementById("message").value.trim();

  // Set the validation
  let firstNameValidation = false;
  let lastNameValidation = false;
  let emailValidation = false;
  let messageValidation = false;

  // First name validation
  if (firstNameValue === "" || firstNameValue.length < 2) {
    setError(firstName, firstNameMsg);
  } else {
    setSuccess(firstName);
    firstNameValidation = true;
  }

  // Last name validation
  if (lastNameValue === "" || lastNameValue.length < 2) {
    setError(lastName, lastNameMsg);
  } else {
    setSuccess(lastName);
    lastNameValidation = true;
  }

  // Email validation
  if (emailValue === "") {
    setError(email, emailMsg);
  } else if (!isValidEmail(emailValue)) {
    setError(email, emailMsg);
  } else {
    setSuccess(email);
    emailValidation = true;
  }

  // Message validation
  if (messageValue === "" || messageValue.length < 10) {
    setError(message, messageMsg);
  } else {
    setSuccess(message);
    messageValidation = true;
  }

  if (
    firstNameValidation &&
    lastNameValidation &&
    emailValidation &&
    messageValidation
  ) {
    formData = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      message: messageValue,
    };
    console.log(formData);

    contactForm.reset();
    thanksModal();
  }
}

// function thanksModal
const thanksModal = () => {
  // location.replace("/");
  const modal = document.getElementById("contactModal");

  modal.style.display = "none";
};
