const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const postalCodeInput = document.querySelector("#postal-code");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector("#password-confirmation");

const emailErrorSpan = document.querySelector(".email-error");
const countryErrorSpan = document.querySelector(".country-error");
const postalCodeErrorSpan = document.querySelector(".postal-code-error");
const passwordErrorSpan = document.querySelector(".password-error");
const passwordConfirmationErrorSpan = document.querySelector(".password-confirmation-error");

function validateInput(selectedInput, selectedSpan) {
    const validity = selectedInput.validity
    if (validity.valueMissing) {
        selectedInput.classList = "invalid";
        selectedSpan.textContent = "yeah man"
    } else {
        selectedInput.classList = "";
        selectedSpan.textContent = "";
    }
}
