const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const message = document.getElementById("form-message");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString()
        });

        if (!response.ok) {
            throw new Error("Submission failed");
        }

        message.textContent =
            "You're on the list! Big hugs are coming your way. 🧶🧸";

        emailInput.value = "";

    } catch (error) {

        message.textContent =
            "Something went wrong. Please try again.";

        console.error(error);
    }
});