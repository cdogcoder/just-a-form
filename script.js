const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const postalCodeInput = document.querySelector("#postal-code");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector(
  "#password-confirmation"
);
const passwordInputRevealButton = document.querySelector(
  "#password + .reveal-password-button"
);
const passwordConfirmationInputRevealButton = document.querySelector(
  "#password-confirmation + .reveal-password-button"
);

const emailErrorSpan = document.querySelector(".email-error");
const countryErrorSpan = document.querySelector(".country-error");
const postalCodeErrorSpan = document.querySelector(".postal-code-error");
const passwordErrorSpan = document.querySelector(".password-error");
const passwordConfirmationErrorSpan = document.querySelector(
  ".password-confirmation-error"
);

const formSubmitButton = document.querySelector("button[type='submit']");

function validateInput(selectedInput, selectedSpan) {
  const validity = selectedInput.validity;
  const inputType = selectedInput.id;
  if (inputType == "postal-code") {
    if (selectedInput.value.length != 5) {
      selectedInput.classList = "invalid";
      selectedSpan.textContent = "Postal code not properly formatted.";
      return false;
    } else {
      selectedInput.classList = "";
      selectedSpan.textContent = "";
    }
  } else if (inputType == "password-confirmation") {
    if (selectedInput.value != passwordInput.value) {
      selectedInput.classList = "invalid";
      selectedSpan.textContent = "Passwords do not match.";
      return false;
    }
  } else if (inputType == "password") {
    if (selectedInput.value != passwordConfirmationInput.value) {
      passwordConfirmationInput.classList = "invalid";
      passwordConfirmationErrorSpan.textContent = "Passwords do not match.";
    }
  }
  if (!validity.valid) {
    selectedInput.classList = "invalid";
    if (validity.valueMissing) {
      switch (inputType) {
        case "email":
          selectedSpan.textContent = "You have not entered an email.";
          break;
        case "country":
        case "postal-code":
          selectedSpan.textContent = `You have not entered a ${inputType}.`;
          break;
      }
    } else if (validity.typeMismatch) {
      switch (inputType) {
        case "email":
          selectedSpan.textContent = "Not an email.";
          break;
        case "country":
        case "postal-code":
          selectedSpan.textContent = `Not a ${inputType}`;
          break;
      }
    } else if (validity.rangeOverflow || validity.rangeUnderflow) {
      if (inputType == "postal-code") {
        selectedSpan.textContent = "Postal code is invalid.";
      }
    } else if (validity.tooShort) {
      if (inputType == "password") {
        selectedSpan.textContent = "Password too short.";
      }
    }
    return false;
  } else {
    selectedInput.classList = "";
    selectedSpan.textContent = "";
    return true;
  }
}

window.addEventListener("load", () => {
  validateInput(emailInput, emailErrorSpan);
  validateInput(countryInput, countryErrorSpan);
  validateInput(postalCodeInput, postalCodeErrorSpan);
  validateInput(passwordInput, passwordErrorSpan);
  validateInput(passwordConfirmationInput, passwordConfirmationErrorSpan);
});

emailInput.addEventListener("keyup", () =>
  validateInput(emailInput, emailErrorSpan)
);
countryInput.addEventListener("keyup", () =>
  validateInput(countryInput, countryErrorSpan)
);
postalCodeInput.addEventListener("keyup", () =>
  validateInput(postalCodeInput, postalCodeErrorSpan)
);
passwordInput.addEventListener("keyup", () =>
  validateInput(passwordInput, passwordErrorSpan)
);
passwordConfirmationInput.addEventListener("keyup", () =>
  validateInput(passwordConfirmationInput, passwordConfirmationErrorSpan)
);

function revealPassword(button, event) {
  if (button.id == "p") {
    if (event.type == "mousedown") {
      passwordInput.type = "text";
    } else if (event.type == "mouseup") {
      passwordInput.type = "password";
    }
  } else if (button.id == "pc") {
    if (event.type == "mousedown") {
      passwordConfirmationInput.type = "text";
    } else if (event.type == "mouseup") {
      passwordConfirmationInput.type = "password";
    }
  }
}

passwordInputRevealButton.addEventListener("mousedown", (event) =>
  revealPassword(passwordInputRevealButton, event)
);
passwordInputRevealButton.addEventListener("mouseup", (event) =>
  revealPassword(passwordInputRevealButton, event)
);

passwordConfirmationInputRevealButton.addEventListener("mousedown", (event) =>
  revealPassword(passwordConfirmationInputRevealButton, event)
);
passwordConfirmationInputRevealButton.addEventListener("mouseup", (event) =>
  revealPassword(passwordConfirmationInputRevealButton, event)
);

function validateForm(event) {
  event.preventDefault();
  if (
    validateInput(emailInput, emailErrorSpan) &&
    validateInput(countryInput, countryErrorSpan) &&
    validateInput(postalCodeInput, postalCodeErrorSpan) &&
    validateInput(passwordInput, passwordErrorSpan) &&
    validateInput(passwordConfirmationInput, passwordConfirmationErrorSpan)
  ) {
    emailInput.value = "";
    countryInput.value = "";
    postalCodeInput.value = "";
    passwordInput.value = "";
    passwordConfirmationInput.value = "";
    alert("Yay! Your information was submitted. Thank you for your interest!");
  } else {
    alert("There are still mistakes here baka. Fix them. NOW. NOW!!!");
  }
}

formSubmitButton.addEventListener("click", (event) => validateForm(event));
