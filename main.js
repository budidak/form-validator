const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

function checkInputEmpty(input) {
  return input.value.trim() === ""; 
}

function checkPasswordsMatch(input1, input2) {
  return input1.value === input2.value;
}

function checkEmailValid(input) {
  const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return re.test(input.value.trim());
}

function checkLengthInRange(input, min, max) {
  return (input.value.length < min || input.value.length > max) ? false : true; 
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // checks for username input
  if (checkInputEmpty(username)) {
    showError(username, "Username is required");
  } else if (checkLengthInRange(username, 2, 16)) {
    showSuccess(username);
  } else {
    showError(username, "Username length must be 2 to 16 characters");
  }

  // checks for email input
  if (checkInputEmpty(email)) {
    showError(email, "Email is required");
  } else if (checkEmailValid(email)) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid");
  }

  // checks for passwords
  if (checkInputEmpty(password)) {
    showError(password, "Password is required");
  } else if (checkLengthInRange(password, 8, 30)) {
    showSuccess(password);
  } else {
    showError(password, "Password length must be between 8 to 25");
  }

  if (checkInputEmpty(confirmPassword)) {
    showError(confirmPassword, "Password is required");
  } else if (!checkLengthInRange(confirmPassword, 8, 25)) {
    showError(confirmPassword, "Password length must be between 8 to 25");
  } else if (checkPasswordsMatch(password, confirmPassword)) {
    showSuccess(confirmPassword);
  } else {
    showError(confirmPassword, "Passwords do not match");
  }
})