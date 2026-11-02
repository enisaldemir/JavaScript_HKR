# Lab 2 – Development Reflection

## 1. Development Process

In Lab 2, I continued working on the portfolio website that I created in Lab 1. My main goal was to add JavaScript functionality to the existing HTML and CSS website.

I developed the project step by step: 
- First, I created the feedback form and worked on its validation. 
- After that, I added the character counter, success message and Clear button. 
- When the feedback form was working, I continued with the interactive skills section.

I used Git throughout the development process to keep track of the changes. I also worked on two different computers, a Mac and a Windows PC, so GitHub was useful for keeping the project synchronized.

## 2. JavaScript Implementation

For the feedback form, I created separate validation functions for each input field. I also used helper functions to display errors and change the appearance of valid and invalid fields.

At first, I mainly checked the form when the Submit button was clicked. Later, I improved the validation so error messages could disappear when users corrected their input.

For the skills section, I created an array of JavaScript objects containing information about my skills. Instead of writing all the skill cards directly in HTML, I used JavaScript to create them dynamically.

I also added filtering and sorting. I used the `filter()` method to select skills from different categories and the `sort()` method to arrange them by proficiency, experience or name.

One thing I learned was that `sort()` changes the original array. To avoid changing the skills data, so, I created a copy of the array before sorting it.

## 3. Problems and Solutions

During development, I encountered several problems.

One of the first problems was related to loading the JavaScript file. I had included the same script twice, which caused errors. After checking the browser Console and reviewing the HTML, I corrected the script references.

Another problem appeared when I integrated the Feedback page into the existing portfolio. The page had different horizontal margins compared with the other pages. I initially thought the problem was caused by the form styling, but later found that a duplicated `main` rule in `feedback.css` was overriding the responsive CSS in `style.css`. Removing the duplicate rule solved the problem.

I also noticed that the skills were not sorted correctly when the page first loaded, even though proficiency sorting was selected. The problem was that I was calling the rendering function directly instead of the function that handled filtering and sorting together. I corrected this by calling `updateSkills()` when the page loaded.

During responsive testing, I noticed that the sorting dropdown appeared in an unusual position in Chrome's iPad simulation. I could not confirm the exact cause, so I decided not to make CSS changes without understanding the problem.

## 4. Testing

I tested the feedback form with valid and invalid inputs, including empty fields, incorrect email addresses and short comments. I also checked whether the Clear button reset the form and whether the success message disappeared after four seconds.

For the skills section, I tested the filtering, sorting and results counter. I also checked the layout using different screen sizes in Chrome DevTools.

I used Chrome and Safari during development and checked keyboard navigation for the interactive controls.

I recorded my testing results in `lab2-test-report.md` and saved screenshots showing different stages of the development in `build-log-screenshits/lab2-screenshots` folder.

## 5. What I Learned

This lab helped me understand how JavaScript works together with HTML and CSS. In Lab 1, most of my work was focused on creating pages and styling them. In Lab 2, I learned more about how to change page content and respond to user actions.

I learned about event listeners, functions, arrays, objects and DOM manipulation. I also understood why it is useful to divide the code into smaller functions instead of putting everything into one large function.

Another important lesson was debugging. Some problems that initially looked complicated had simple causes, such as a duplicated script or a CSS rule overriding another rule. Using the browser developer tools helped me investigate these issues.

If I continued developing the project, I would spend more time on testing with real mobile devices and improving the user experience.

Overall, Lab 2 helped me improve my JavaScript knowledge and gave me more experience in developing and testing an interactive website.