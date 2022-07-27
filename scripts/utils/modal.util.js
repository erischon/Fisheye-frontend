const focusableElementsArray = [
  "[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
];

const keyCodes = {
  escape: 27,
};

/**
 *
 * @returns
 */
const displayModal = () => {
  const modal = document.getElementById("contactModal");
  const mainDocument = document.getElementById("main");

  mainDocument.setAttribute("aria-hidden", true);
  modal.style.display = "block";
  modal.addEventListener("keyup", onKeyUp);

  const focusableElements = modal.querySelectorAll(focusableElementsArray);
  const firstFocusableElement = focusableElements[0];

  if (!firstFocusableElement) {
    return;
  }

  window.setTimeout(() => {
    firstFocusableElement.focus();
  }, 100);
};

/**
 *
 */
const closeModal = () => {
  const modal = document.getElementById("contactModal");
  const mainDocument = document.getElementById("main");
  const contactButton = document.querySelector(".contact-button");

  mainDocument.setAttribute("aria-hidden", false);
  modal.style.display = "none";
  contactButton.focus();
};

/**
 *
 * @param {*} e
 */
const onKeyUp = (e) => {
  if (e.key === "Escape" || e.key === "Esc" || e.keyCode === keyCodes.escape) {
    closeModal(e);
  }
};
