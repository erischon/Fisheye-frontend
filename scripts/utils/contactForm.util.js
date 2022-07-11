const contactForm = document.getElementById("contact");
console.log(contactForm);

// Error messages
const firstNameMsg =
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const lastNameMsg =
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const emailMsg = "Veuillez entrer une adresse email valide.";
const birthdateMsg = "Vous devez entrer votre date de naissance.";
const quantityMsg = "Veuillez entrer une valeur numérique";
const locationMsg = "Vous devez choisir un tournoi.";
const termsOfUseMsg = "Vous devez accepter les termes et conditions.";

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
  const firstNameValue = document.getElementById("first").value.trim();
  const lastNameValue = document.getElementById("last").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const birthdateValue = document.getElementById("birthdate").value.trim();
  const quantityValue = document.getElementById("quantity").value.trim();
  const termsOfUseValue = document.getElementById("checkbox1").checked;
  const informValue = document.getElementById("checkbox2").checked;

  const locationValues = {
    NewYork: document.getElementById("location1").checked,
    SanFrancisco: document.getElementById("location2").checked,
    Seattle: document.getElementById("location3").checked,
    Chicago: document.getElementById("location4").checked,
    Boston: document.getElementById("location5").checked,
    Portland: document.getElementById("location6").checked,
  };
  const locationValue = Object.keys(locationValues).find(
    (key) => locationValues[key] === true
  );

  // Set the validation
  let firstNameValidation = false;
  let lastNameValidation = false;
  let emailValidation = false;
  let birthdateValidation = false;
  let quantityValidation = false;
  let locationValidation = false;
  let termsOfUseValidation = false;

  // First name validation
  if (firstNameValue === "" || firstNameValue.length < 2) {
    setError(first, firstNameMsg);
  } else {
    setSuccess(first);
    firstNameValidation = true;
  }

  // Last name validation
  if (lastNameValue === "" || lastNameValue.length < 2) {
    setError(last, lastNameMsg);
  } else {
    setSuccess(last);
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

  // Birthdate validation
  // if (birthdateValue === "") {
  //   setError(birthdate, birthdateMsg);
  // } else {
  //   setSuccess(birthdate);
  //   birthdateValidation = true
  // }

  // Quantity validation
  if (quantityValue === "") {
    setError(quantity, quantityMsg);
  } else {
    setSuccess(quantity);
    quantityValidation = true;
  }

  // Location validation
  if (!locationValue) {
    setError(location1, locationMsg);
  } else {
    setSuccess(location1);
    locationValidation = true;
  }

  // TermsOfUse validation
  if (termsOfUseValue === false) {
    setError(checkbox1, termsOfUseMsg);
  } else {
    setSuccess(checkbox1);
    termsOfUseValidation = true;
  }

  if (
    firstNameValidation &&
    lastNameValidation &&
    emailValidation &&
    quantityValidation &&
    locationValidation &&
    termsOfUseValidation
  ) {
    formData = {
      first: firstNameValue,
      last: lastNameValue,
      email: emailValue,
      birthdate: birthdateValue,
      quantity: quantityValue,
      location: locationValue,
      termsOfUse: termsOfUseValue,
      inform: informValue,
    };
    console.log(formData);

    contactForm.reset();
    thanksModal();
  }
}

// function thanksModal
const thanksModal = () => {
  const modalForm = document.querySelector("#modalForm");
  const modalBody = document.querySelector(".modal-body");
  reserve.remove();

  modalBody.innerHTML += `<div class='modal-thanks'>
      <div class='modal-thanks__message'>Merci pour votre inscription</div>
      <button class='modal-thanks__button button'>Fermer</button>
    </div>`;

  modalBg.style.display = "block";

  // Close Modal form and reload
  const thanksBtn = document.querySelector(".modal-thanks__button");

  thanksBtn.addEventListener("click", () => {
    modalBg.style.display = "none";
    location.reload();
  });

  modalCloseBtn.addEventListener("click", () => {
    modalBg.style.display = "none";
    location.reload();
  });
};
