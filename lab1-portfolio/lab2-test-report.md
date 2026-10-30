# Lab 2 – Testing Report

## 1. Purpose

The purpose of this testing was to check that the feedback form and interactive skills showcase work correctly.

I focused on functionality, validation, accessibility, responsive design and the interaction between filtering and sorting. 

## 2. Test Environment

- Operating system: macOS / Windows (the development is done in two separate machines depending on the conditions)
- Main browser: Chrome
- Additional browser: Safari
- Testing tools: Chrome DevTools and responsive device simulation

## 3. Feedback Form Testing

| Test | Expected Result | Actual Result |
|---|---|---|
| Submit empty form | Required field errors appear | Passed |
| Enter invalid name | Error message appears | Passed |
| Enter invalid email | Email error appears | Passed |
| Enter invalid website URL | Website error appears | Passed |
| Leave website empty | No website error | Passed |
| Enter fewer than 15 comment characters | Error appears | Passed |
| Enter at least 15 comment characters | Comment becomes valid | Passed |
| Submit valid form | Personalized success message appears | Passed |
| Wait four seconds | Success message disappears | Passed |
| Click Clear | Fields and validation messages reset | Passed |

## 4. Skills Showcase Testing

The showcase contains nine skills divided into three categories.

I tested all three sorting options with the All Skills filter and selected combinations of category filtering and sorting. 
I also checked that the results counter updated correctly when changing categories.

| Filter | Sort | Expected Result | Actual Result |
|---|---|---|---|
| All Skills | Proficiency | 9 skills, highest level first | Passed |
| All Skills | Experience | 9 skills, most experience first | Passed |
| All Skills | Name | 9 skills, alphabetical | Passed |
| Programming | Proficiency | 3 programming skills, sorted | Passed |
| Software Testing | Experience | 3 testing skills, sorted | Passed |
| Web Development | Name | 3 web development skills, alphabetical | Passed |

I also checked whether the results counter updated when selecting different categories.

## 5. Responsive Testing

| Viewport | Expected Result | Actual Result |
|---|---|---|
| Desktop view | Cards arranged in multiple columns | Passed |
| Tablet view | Layout adapts to available width | Passed |
| Mobile view | No horizontal overflow | Passed |

## 6. Accessibility Testing

| Test | Expected Result | Actual Result |
|---|---|---|
| Keyboard navigation | Interactive controls accessible with Tab | Passed |
| Filter accessibility | Selected button has aria-pressed="true" | Passed |
| Sorting dropdown | Can be operated using keyboard | Passed |

## 7. Problems Found During Development

### Problem 1 – JavaScript file loading

During development of the feedback form, I experienced a JavaScript error because the script was included more than once.

I corrected the script references and verified that the form could access the required HTML elements.

### Problem 2 – Feedback page margins

The Feedback page initially had different horizontal margins compared with the other portfolio pages.

The problem was caused by a duplicate `main` CSS rule in `feedback.css`. This rule overrode the responsive width defined in `style.css`.

I removed the duplicate rule so the pages could use the same responsive layout.

### Problem 3 – Sorting dropdown in device simulation

During Chrome DevTools testing with an iPad Pro simulation, the native sorting dropdown appeared in the wrong position.

I reviewed the HTML and CSS but could not identify the exact cause. The filtering and sorting functionality continued to work.

I decided not to change the implementation without understanding the cause, since the issue appeared during device simulation. In a production project, I would investigate it further and test the behavior on physical devices.

## 8. Final Result

All the test scenarios documented above passed. 

The website also passed the responsive and keyboard navigation checks recorded in this report.

One visual issue was observed with the native sorting dropdown during Chrome device simulation. This remains unresolved and would require further investigation on physical devices.