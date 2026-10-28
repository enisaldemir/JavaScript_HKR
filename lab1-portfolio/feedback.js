// Get the form and its fields
const feedbackForm = document.getElementById("feedbackForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const topic = document.getElementById("topic");
const comments = document.getElementById("comments");
const website = document.getElementById("website");
const formStatus = document.getElementById("formStatus");
const clearButton = document.getElementById("clearButton");

// Get the error message elements
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const topicError = document.getElementById("topicError");
const commentsError = document.getElementById("commentsError");
const websiteError = document.getElementById("websiteError");

const charCounter = document.getElementById("charCounter");

let successTimeout;

// Handle form submission
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Cancel any previous success message timeout
    clearTimeout(successTimeout);
    formStatus.textContent = "";

    const nameValid = validateFullName();
    const emailValid = validateEmail();
    const topicValid = validateTopic();
    const commentsValid = validateComments();
    const websiteValid = validateWebsite();

    if (nameValid && emailValid && topicValid && commentsValid && websiteValid) {
        formStatus.textContent = "Thanks for your feedback, " + fullName.value.trim() + "!";

        resetForm();

        successTimeout = setTimeout(function () {
            formStatus.textContent = "";
        }, 4000);
    }
});

// Handle the Clear button
clearButton.addEventListener("click", function () {
    clearTimeout(successTimeout);
    formStatus.textContent = "";
    resetForm();
});

// Show an error on a field
function showFieldError(field, errorElement, message) {
    errorElement.textContent = message;
    field.classList.add("is-error");
    field.classList.remove("is-valid");
    field.setAttribute("aria-invalid", "true");
}

// Clear an error and mark the field as valid
function clearFieldError(field, errorElement) {
    errorElement.textContent = "";
    field.classList.remove("is-error");
    field.classList.add("is-valid");
    field.removeAttribute("aria-invalid");
}

function validateFullName() {
    const name = fullName.value.trim();

    // Allow international letters, spaces, apostrophes and hyphens
    const namePattern = /^[\p{L} '-]+$/u;
    const hasLetter = /\p{L}/u.test(name);

    if (name.length < 2 || !namePattern.test(name) || !hasLetter) {
        showFieldError(
            fullName,
            fullNameError,
            "Enter at least 2 characters using letters, spaces, apostrophes or hyphens.",
        );
        return false;
    }

    clearFieldError(fullName, fullNameError);
    return true;
}

function validateEmail() {
    const emailValue = email.value.trim();

    if (
        emailValue === "" ||
        email.validity.typeMismatch ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
    ) {
        showFieldError(email, emailError, "Please enter a valid email address.");
        return false;
    }

    clearFieldError(email, emailError);
    return true;
}

function validateTopic() {
    if (topic.value === "") {
        showFieldError(topic, topicError, "Please select a topic.");
        return false;
    }

    clearFieldError(topic, topicError);
    return true;
}

function validateComments() {
    const commentText = comments.value.trim();

    if (commentText.length < 15) {
        showFieldError(comments, commentsError, "Please enter at least 15 characters.");
        return false;
    }

    clearFieldError(comments, commentsError);
    return true;
}

function validateWebsite() {
    const websiteValue = website.value.trim();

    // An empty website is allowed
    if (websiteValue === "") {
        websiteError.textContent = "";
        website.classList.remove("is-error", "is-valid");
        website.removeAttribute("aria-invalid");
        return true;
    }

    if (website.validity.typeMismatch) {
        showFieldError(
            website,
            websiteError,
            "Please enter a valid URL, for example https://example.com.",
        );
        return false;
    }

    clearFieldError(website, websiteError);
    return true;
}

function resetForm() {
    feedbackForm.reset();

    const fields = [fullName, email, topic, comments, website];
    const errorElements = [fullNameError, emailError, topicError, commentsError, websiteError];

    fields.forEach(function (field) {
        field.classList.remove("is-error", "is-valid");
        field.removeAttribute("aria-invalid");
    });

    errorElements.forEach(function (errorElement) {
        errorElement.textContent = "";
    });

    updateCharCounter();
}

function updateCharCounter() {
    const count = comments.value.length;
    const validLength = comments.value.trim().length >= 15;

    charCounter.textContent = count + " characters (minimum 15 required)";

    if (validLength) {
        charCounter.classList.add("counter-valid");
        charCounter.classList.remove("counter-error");
    } else {
        charCounter.classList.add("counter-error");
        charCounter.classList.remove("counter-valid");
    }
}

comments.addEventListener("input", updateCharCounter);
updateCharCounter();
