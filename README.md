# JavaScript HKR – Portfolio Website

## Project Description

This repository contains my portfolio website for the JavaScript for Web Development course at Kristianstad University.

Assignment: https://hkr.instructure.com/courses/9445/assignments/112924

I started this project in Lab 1, where I created a personal website using HTML and CSS.

In Lab 2, I continued working on the same website and added JavaScript to make it more interactive.

## My Target Grade: `Grade 4`

## Lab 1 Features

- About Me page with personal information and skills
- My Trips page with travel photos
- My Pet page
- Responsive design for different screen sizes

## Lab 2 Features

### Feedback Form

I added a Feedback page where visitors can fill out a form.

The form includes:

- Full Name
- Email
- Topic of Interest
- Comments
- Website (optional)

I used JavaScript to check the information entered in the form. If something is missing or incorrect, an error message appears.

I also added:

- A character counter for the Comments field (minimum 15 characters)
- Red and green borders to show invalid and valid fields
- A success message that includes the visitor's name
- A timer that removes the success message after four seconds
- Automatic form reset after a successful submission
- A Clear button to empty the form and remove error messages

The form is only for practicing JavaScript. It does not send the information to a server.

### Interactive Skills

I also updated the My Skills section on the About Me page.

Instead of writing each skill card in HTML, I created a JavaScript array containing nine skills.

The skills are divided into three categories:

- Programming
- Software Testing
- Web Development

Each skill has information such as its name, category, proficiency level, years of experience and a short description.

I used JavaScript to display these skills as cards on the page.

Visitors can:

- Filter the skills by category
- Sort by proficiency level
- Sort by years of experience
- Sort alphabetically by name
- Use filtering and sorting together

I also added a counter showing how many skills are currently displayed, for example, "Showing 3 of 9 skills".

## Technologies Used

- HTML
- CSS
- JavaScript
- Git and GitHub

I used regular JavaScript without any frameworks.

## How to Run

1. Clone or download the repository.
2. Open the `lab1-portfolio` folder.
3. Open `index.html` in a web browser.
4. Use the navigation menu to visit the other pages.
5. Open the Feedback page to test the form.
6. Try filtering and sorting the skills on the About Me page.

No installation or backend is needed.

## Development

I worked on the project step by step and used Git commits to save my changes.

During Lab 2, I practiced JavaScript concepts such as arrays, objects, functions, event listeners, form validation and DOM manipulation.

I also found and fixed some problems during development. For example, I had an issue with loading the JavaScript file twice, which caused errors. Another issue was related to duplicated CSS rules that made the Feedback page look different from the other pages.

The original Lab 1 development notes are available in `lab1-portfolio/development-documentation.md`.

## Testing

I used browser developer tools to check the website at different screen sizes.

I tested the feedback form with valid and invalid values. I also checked the skills section to see whether filtering, sorting and the counter worked correctly.

I am collecting screenshots of the different features and test results for the final Lab 2 documentation.