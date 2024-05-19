"use strict";

const submitBtn = document.querySelector(".submit-btn");
const emailInput = document.querySelector("#email");
const errorMsg = document.querySelector(".error-msg");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  isValidEmail();
});

function isValidEmail() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

  const checkValidEmail = regex.test(emailInput.value);

  if (!checkValidEmail) {
    errorMsg.classList.add("visible");
    emailInput.style.borderColor = "hsl(354, 100%, 66%";
    emailInput.value = "";
  } else {
    emailInput.style.borderColor = "hsla(223, 100%, 88%, 0.631)";
    errorMsg.classList.remove("visible");
    alert("You Will be Notified");
    emailInput.value = "";
  }
}
