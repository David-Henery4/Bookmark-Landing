"use strict";

const email = document.getElementById("email");
const submitBtn = document.getElementById("submit");
const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");

// ADD TO EMAIL: border-softRed border-4 border-b-[22px]

// SUBMIT BTN
submitBtn.addEventListener("click", () => {
  const emailQuery = email.value;
  const isValid = validation(emailQuery);
  if (!isValid) {
    handleErrorUi();
  }
  if (isValid) {
    handleValidEmail();
  }
});
// VALIDATION CHECK
const validation = (query) => {
  const emailCheck = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return emailCheck.test(query);
};
// ERROR UI
const handleErrorUi = () => {
  email.classList.add("border-softRed");
  email.classList.add("border-4");
  email.classList.add("border-b-[22px]");
  errorIcon.classList.remove("hidden");
  errorMsg.classList.remove("hidden");
};
// VALID EMAIL UI
const handleValidEmail = () => {
  email.classList.remove("border-softRed");
  email.classList.remove("border-4");
  email.classList.remove("border-b-[22px]");
  errorIcon.classList.add("hidden");
  errorMsg.classList.add("hidden");
};
