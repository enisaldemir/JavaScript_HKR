const skills = [
    // Programming
    {
        id: 1,
        name: "Java",
        category: "Programming",
        proficiency: 3,
        yearsExperience: 2,
        description: "I have used Java in programming courses mostly for test automation.",
    },
    {
        id: 2,
        name: "C#",
        category: "Programming",
        proficiency: 2,
        yearsExperience: 1,
        description: "I studied C# to improve my programming skills.",
    },
    {
        id: 3,
        name: "Python",
        category: "Programming",
        proficiency: 2,
        yearsExperience: 1,
        description: "I studied Pythonto improve my programming skills.",
    },

    // Software Testing
    {
        id: 4,
        name: "Manual Testing",
        category: "Software Testing",
        proficiency: 5,
        yearsExperience: 6,
        description:
            "I use manual testing to verify software functionality and investigate issues.",
    },
    {
        id: 5,
        name: "Test Automation",
        category: "Software Testing",
        proficiency: 3,
        yearsExperience: 2,
        description: "I write automated test cases and maintain our test automation framework.",
    },
    {
        id: 6,
        name: "Appium",
        category: "Software Testing",
        proficiency: 3,
        yearsExperience: 1,
        description:
            "Now I am developing a mobile test framework to support our web test framefork.",
    },

    // Web Development
    {
        id: 7,
        name: "HTML",
        category: "Web Development",
        proficiency: 2,
        yearsExperience: 1,
        description: "I use HTML to structure web pages and forms.",
    },
    {
        id: 8,
        name: "CSS",
        category: "Web Development",
        proficiency: 2,
        yearsExperience: 1,
        description: "I use CSS to style responsive web pages.",
    },
    {
        id: 9,
        name: "JavaScript",
        category: "Web Development",
        proficiency: 2,
        yearsExperience: 1,
        description: "I am learning JavaScript to add interactive features to web pages.",
    },
];

const skillsContainer = document.getElementById("skillsContainer");
const filterButtons = document.querySelectorAll("#skillFilters button");
const skillSort = document.getElementById("skillSort");
const skillsCount = document.getElementById("skillsCount");

let selectedCategory = "All";
let selectedSort = "proficiency";

function renderSkills(skillsToShow) {
    skillsContainer.innerHTML = "";

    skillsToShow.forEach(function (skill) {
        const card = document.createElement("div");
        card.classList.add("skill-card");

        const title = document.createElement("h3");
        title.textContent = skill.name;

        const category = document.createElement("p");
        category.textContent = "Category: " + skill.category;

        const proficiency = document.createElement("p");
        proficiency.textContent = "Proficiency: " + skill.proficiency + "/5";

        const experience = document.createElement("p");
        experience.textContent = "Experience: " + skill.yearsExperience + " years";

        const description = document.createElement("p");
        description.textContent = skill.description;

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(proficiency);
        card.appendChild(experience);
        card.appendChild(description);

        skillsContainer.appendChild(card);
    });
}

function updateSkills() {
    let filteredSkills;

    if (selectedCategory === "All") {
        filteredSkills = skills;
    } else {
        filteredSkills = skills.filter(function (skill) {
            return skill.category === selectedCategory;
        });
    }

    const sortedSkills = sortSkills(filteredSkills);

    renderSkills(sortedSkills);

    skillsCount.textContent = "Showing " + sortedSkills.length + " of " + skills.length + " skills";
}

function sortSkills(skillsToSort) {
    const sortedSkills = [...skillsToSort];

    if (selectedSort === "proficiency") {
        sortedSkills.sort(function (a, b) {
            return b.proficiency - a.proficiency;
        });
    } else if (selectedSort === "experience") {
        sortedSkills.sort(function (a, b) {
            return b.yearsExperience - a.yearsExperience;
        });
    } else if (selectedSort === "name") {
        sortedSkills.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    }

    return sortedSkills;
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedCategory = button.dataset.category;

        filterButtons.forEach(function (filterButton) {
            filterButton.setAttribute("aria-pressed", "false");
        });

        button.setAttribute("aria-pressed", "true");

        updateSkills();
    });
});

skillSort.addEventListener("change", function () {
    selectedSort = skillSort.value;
    updateSkills();
});

// Display skills with the default sorting when the page loads
updateSkills();
