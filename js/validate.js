function validateForm() {
    // Get form fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const cpassword = document.getElementById("cpassword");
    const organisation = document.getElementById("organisation");

    // Get error message elements (or create new ones)
    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    let cpasswordError = document.getElementById("cpassword-error");
    let organisationError = document.getElementById("organisation-error");

    // Reset previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    cpasswordError.textContent = "";
    organisationError.textContent = "";

    // Validation logic goes here
    if (document.getElementById('name') === "") {

    }

}