document.addEventListener("DOMContentLoaded", function () {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  const button = document.getElementById("create-btn");
  const passwordMsg = document.getElementById("password-msg");

  // function to toggle the theme of the page
  function toggleTheme() {
    const root = document.documentElement;
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
  }

  // function to verify the two passwords match
  function verifyPassword() {
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;

    if (passwordValue !== confirmValue) {
      confirmPassword.classList.add("error");
      confirmPassword.setCustomValidity("Passwords do not match");
      passwordMsg.style.display = "block";
    } else {
      confirmPassword.classList.remove("error");
      confirmPassword.setCustomValidity("");
      passwordMsg.style.display = "none";
    }
  }

  password.addEventListener("input", verifyPassword);
  confirmPassword.addEventListener("input", verifyPassword);
});
