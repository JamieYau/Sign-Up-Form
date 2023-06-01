const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const button = document.getElementById("create-btn");
const passwordMsg = document.getElementById("password-msg");
const form = document.getElementById("details-form");
const inputs = form.querySelectorAll("input");

// function to toggle the theme of the page
function toggleTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;
}

// Function to display an error message for an input field
function displayErrorMessage(input, message) {
  const inputMsg = document.getElementById(input.id + "-msg");
  inputMsg.textContent = message;
}

// Function to remove the error message for an input field
function clearErrorMessage(input) {
  const inputMsg = document.getElementById(input.id + "-msg");
  console.log(input.id);
  inputMsg.textContent = "";
}

// Function to validate the first name
function validateFirstName() {
  const firstName = document.getElementById("first-name");
  const value = firstName.value.trim();

  if (value === "") {
    displayErrorMessage(firstName, "* This field is required");
  } else {
    clearErrorMessage(firstName);
  }
}

// Function to validate the last name
function validateLastName() {
  const lastName = document.getElementById("last-name");
  const value = lastName.value.trim();

  if (value === "") {
    displayErrorMessage(lastName, "* This field is required");
  } else {
    clearErrorMessage(lastName);
  }
}

// Function to validate the email
function validateEmail() {
  const email = document.getElementById("email");
  const value = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value === "") {
    displayErrorMessage(email, "* This field is required");
  } else if (!regex.test(value)) {
    displayErrorMessage(email, "* Please provide a valid email address");
  } else {
    clearErrorMessage(email);
  }
}

// Function to validate the phone number
function validatePhone() {
  const phone = document.getElementById("phone");
  const value = phone.value.trim();
  const regex = /^\+?\d{1,3}[-\s]?\d{4,14}$/;

  if (value === "") {
    displayErrorMessage(phone, "* This field is required");
  } else if (!regex.test(value)) {
    displayErrorMessage(phone, "* Please provide a valid phone number");
  } else {
    clearErrorMessage(phone);
  }
}

// Function to validate the password
function validatePassword() {
  const password = document.getElementById("password");
  const value = password.value.trim();

  if (value.length < 8) {
    displayErrorMessage(password, "* Minimum length is 8 characters");
    password.setCustomValidity("Password does not contain 8 characters");
    password.classList.add("error");
  } else {
    clearErrorMessage(password);
    password.classList.remove("error");
    password.setCustomValidity("");
  }
}

// Function to validate the confirm password
function validateConfirmPassword() {
  const confirmPassword = document.getElementById("confirm-password");
  const password = document.getElementById("password");
  const confirmValue = confirmPassword.value.trim();
  const passwordValue = password.value.trim();

  if (confirmValue !== passwordValue) {
    displayErrorMessage(confirmPassword, "* Passwords do not match");
    confirmPassword.setCustomValidity("Passwords do not match");
    confirmPassword.classList.add("error");
  } else if (passwordValue !== "") {
    clearErrorMessage(confirmPassword);
    confirmPassword.classList.remove("error");
    confirmPassword.setCustomValidity("");
  }
}

// Event listeners for input validation
inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    switch (input.id) {
      case "first-name":
        validateFirstName();
        break;
      case "last-name":
        validateLastName();
        break;
      case "email":
        validateEmail();
        break;
      case "phone":
        validatePhone();
        break;
      case "password":
        validatePassword();
        break;
      case "confirm-password":
        validateConfirmPassword();
        break;
    }
  });
});

// Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validate all fields on form submission
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePhone();
  validatePassword();
  validateConfirmPassword();

  // Check if there are any error messages
  const errorMessages = form.querySelectorAll(".input-msg");
  const isValid = Array.from(errorMessages).every(function (msg) {
    return msg.textContent === "";
  });

  if (isValid) {
    // Form is valid - submit the form or perform further actions
    form.submit();
  } else {
    // Form is invalid - display an overall error message or take appropriate action
    console.log("Form is invalid");
  }
});
