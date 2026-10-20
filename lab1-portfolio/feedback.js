// Get the form and its fields
const feedbackForm = document.getElementById("feedbackForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const topic = document.getElementById("topic");
const comments = document.getElementById("comments");
const website = document.getElementById("website");

// Get the error message elements
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const topicError = document.getElementById("topicError");
const commentsError = document.getElementById("commentsError");
const websiteError = document.getElementById("websiteError");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValid = validateFullName();
    const emailValid = validateEmail();
    const topicValid = validateTopic();
    const commentsValid = validateComments();
    const websiteValid = validateWebsite();

    if (nameValid && emailValid && topicValid && commentsValid && websiteValid) {
        console.log("All fields are valid");
    }
});

function validateFullName() {
    const name = fullName.value.trim();

    // Allow international letters, spaces, apostrophes and hyphens
    const namePattern = /^[\p{L} '-]+$/u;
    const hasLetter = /\p{L}/u.test(name);

    if (name.length < 2 || !namePattern.test(name) || !hasLetter) {
        fullNameError.textContent = "Enter at least 2 characters using letters, spaces, apostrophes or hyphens.";
        fullName.classList.add("is-error");
        fullName.classList.remove("is-valid");
        fullName.setAttribute("aria-invalid", "true");
        return false;
    }

    fullNameError.textContent = "";
    fullName.classList.remove("is-error");
    fullName.classList.add("is-valid");
    fullName.removeAttribute("aria-invalid");

    return true;
}

function validateEmail() {
    const emailValue = email.value.trim();

    if (emailValue === "" ||
    email.validity.typeMismatch ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        email.classList.add("is-error");
        email.classList.remove("is-valid");
        email.setAttribute("aria-invalid", "true");
        return false;
    }

    emailError.textContent = "";
    email.classList.remove("is-error");
    email.classList.add("is-valid");
    email.removeAttribute("aria-invalid");

    return true;
}

function validateTopic() {
    if (topic.value === "") {
        topicError.textContent = "Please select a topic.";
        topic.classList.add("is-error");
        topic.classList.remove("is-valid");
        topic.setAttribute("aria-invalid", "true");
        return false;
    }

    topicError.textContent = "";
    topic.classList.remove("is-error");
    topic.classList.add("is-valid");
    topic.removeAttribute("aria-invalid");

    return true;
}

function validateComments() {
    const commentText = comments.value.trim();

    if (commentText.length < 15) {
        commentsError.textContent = "Please enter at least 15 characters.";
        comments.classList.add("is-error");
        comments.classList.remove("is-valid");
        comments.setAttribute("aria-invalid", "true");
        return false;
    }

    commentsError.textContent = "";
    comments.classList.remove("is-error");
    comments.classList.add("is-valid");
    comments.removeAttribute("aria-invalid");

    return true;
}

function validateWebsite() {
    const websiteValue = website.value.trim();

    // Website is optional
    if (websiteValue === "") {
        websiteError.textContent = "";
        website.classList.remove("is-error");
        website.classList.remove("is-valid");
        website.removeAttribute("aria-invalid");
        return true;
    }

    // Check URL format using browser validation
    if (website.validity.typeMismatch) {
        websiteError.textContent = "Please enter a valid URL, for example https://example.com.";
        website.classList.add("is-error");
        website.classList.remove("is-valid");
        website.setAttribute("aria-invalid", "true");
        return false;
    }

    websiteError.textContent = "";
    website.classList.remove("is-error");
    website.classList.add("is-valid");
    website.removeAttribute("aria-invalid");

    return true;
}

