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
 * Display modal and focus the first focusable element
 */
const displayModal = () => {
  const modalEl = document.getElementById("contactModal");
  const mainDocumentEl = document.getElementById("main");

  mainDocumentEl.setAttribute("aria-hidden", true);
  modalEl.style.display = "block";
  modalEl.addEventListener("keyup", onKeyUp);

  const focusableElements = modalEl.querySelectorAll(focusableElementsArray);
  const firstFocusableElement = focusableElements[0];

  if (!firstFocusableElement) {
    return;
  }

  window.setTimeout(() => {
    firstFocusableElement.focus();
  }, 100);
};

/**
 * Close the mmodal
 */
const closeModal = () => {
  const modalEl = document.getElementById("contactModal");
  const mainDocumentEl = document.getElementById("main");
  const contactButtonEl = document.querySelector(".contact-button");

  mainDocumentEl.setAttribute("aria-hidden", false);
  modalEl.style.display = "none";
  contactButtonEl.focus();
};

/**
 * Close the modal on Keyboard event
 * @param {Object} e
 */
const onKeyUp = (e) => {
  if (e.key === "Escape" || e.key === "Esc" || e.keyCode === keyCodes.escape) {
    closeModal(e);
  }
};
