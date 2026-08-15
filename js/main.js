
const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
        message.textContent = "Please enter your email address.";
        return;
    }

    message.textContent =
        "You're on the list! Big hugs are coming your way. 🧶🧸";

    emailInput.value = "";
});

