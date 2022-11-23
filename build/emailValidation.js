"use strict";

const email = document.getElementById("email");
const submitBtn = document.getElementById("submit");
const msgContainer = document.getElementById("msg-container");
const errorIcon = document.getElementById("error-icon");
const errorText = document.getElementById("error-text")
const confirmText = document.getElementById("confirm-text")


// SUBMIT BTN
submitBtn.addEventListener("click", () => {
  const emailQuery = email.value;
  const isValid = validation(emailQuery);
  if (!isValid) {
    handleErrorUi();
  }
  if (isValid) {
    handleRemoveErrorUi();
    emailConfirmation()
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
  msgContainer.classList.remove("hidden");
  errorText.classList.remove("hidden")
};

// REMOVING ERROR UI WHEN VALID
const handleRemoveErrorUi = () => {
  email.classList.remove("border-softRed");
  email.classList.remove("border-4");
  email.classList.remove("border-b-[22px]");
  errorIcon.classList.add("hidden");
  msgContainer.classList.add("hidden");
  errorText.classList.add("hidden");
  email.value = ""
};

// EMAIL CONFIRMATION VALID UI
const emailConfirmation = () => {
  email.classList.add("border-4")
  email.classList.add("border-b-[22px]")
  email.classList.add("border-okGreen");
  msgContainer.classList.remove("hidden")
  confirmText.classList.remove("hidden")
  handleRemoveValidEmailUi()
}

// REMOVE EMAIL CONFIRMATION UI
const handleRemoveValidEmailUi = () => {
  setTimeout(() => {
    email.classList.remove("border-4");
    email.classList.remove("border-b-[22px]");
    email.classList.remove("border-okGreen");
    msgContainer.classList.add("hidden");
    confirmText.classList.add("hidden");
  }, 4500);
}