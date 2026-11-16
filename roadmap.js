let selectedTrack = "data-analytics";


const dataAnalyticsTasks = [
    {
        number: 1,
        title: "Data Cleaning Basics",
        day: "Day 1",
        description:
        "Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types.",
        difficulty: "Beginner"
    },
    {
        number: 2,
        title: "Formulas & Pivot Tables",
        day: "Day 4",
        description:
        "Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset.",
        difficulty: "Beginner"
    },
    {
        number: 3,
        title: "Data Visualization",
        day: "Day 8",
        description:
        "Create charts and a simple dashboard that communicate useful insights from a dataset.",
        difficulty: "Beginner → Intermediate"
    },
    {
        number: 4,
        title: "Introduction to SQL",
        day: "Day 11",
        description:
        "Practice basic SQL queries and use them to answer real-world questions about data.",
        difficulty: "Beginner → Intermediate"
    },
    {
        number: 5,
        title: "SQL Joins & Aggregations",
        day: "Day 15",
        description:
        "Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables.",
        difficulty: "Intermediate"
    },
    {
        number: 6,
        title: "Lookup Functions & Data Wrangling",
        day: "Day 19",
        description:
        "Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches.",
        difficulty: "Intermediate"
    },
    {
        number: 7,
        title: "Mini Analysis Project",
        day: "Day 22",
        description:
        "Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations.",
        difficulty: "Intermediate"
    },
    {
        number: 8,
        title: "Capstone Project",
        day: "Day 26",
        description:
        "Complete a larger project combining spreadsheet analysis and SQL using at least two related tables.",
        difficulty: "Intermediate"
    }
];

const webDevelopmentTasks = [
    {
        number: 1,
        title: "Build the TechBridge Homepage",
        day: "Day 1",
        description:
        "Create the first version of the TechBridge website using HTML and CSS.",
        difficulty: "Beginner"
    },
    {
        number: 2,
        title: "Build the TechBridge Programs Experience",
        day: "Day 4",
        description:
        "Create a Programs experience presenting TechBridge's available learning programs.",
        difficulty: "Beginner"
    },
    {
        number: 3,
        title: "Build the Internship Tasks Experience",
        day: "Day 8",
        description:
        "Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey.",
        difficulty: "Beginner → Intermediate"
    },
    {
        number: 4,
        title: "Build an Interactive Internship Roadmap",
        day: "Day 11",
        description:
        "Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks.",
        difficulty: "Beginner → Intermediate"
    },
    {
        number: 5,
        title: "Build the Intern Registration Experience",
        day: "Day 15",
        description:
        "Create a professional registration and onboarding interface for TechBridge interns.",
        difficulty: "Intermediate"
    },
    {
        number: 6,
        title: "Build the Task Submission System",
        day: "Day 19",
        description:
        "Create an interface through which interns can prepare and submit their task work.",
        difficulty: "Intermediate"
    },
    {
        number: 7,
        title: "Build the Intern Dashboard",
        day: "Day 22",
        description:
        "Create a dashboard where an intern can view their profile, progress, tasks and submissions.",
        difficulty: "Intermediate"
    },
    {
        number: 8,
        title: "Build the Complete TechBridge Internship Platform",
        day: "Day 26",
        description:
        "Combine the different components created during the internship into a complete TechBridge platform.",
        difficulty: "Intermediate"
    }
];

const tasksContainer = document.getElementById("tasks-container");
const currentTrackName = document.getElementById("current-track-name");
const currentTrackSummary = document.getElementById("current-track-summary");
const dataAnalyticsBtn = document.getElementById("btn-data-analytics");
const webDevelopmentBtn = document.getElementById("btn-web-development");

function getDifficultyBadgeClass(difficulty) {
  if (difficulty === "Beginner") {
    return "badge-beginner";
  } else if (difficulty === "Beginner → Intermediate") {
    return "badge-bridge";
  } else {
    return "badge-intermediate";
  }
}

// 4. FUNCTIONS, 6. CONDITIONAL LOGIC, & 7. DOM MANIPULATION: Render selected track
function displayTrack(trackName) {
  selectedTrack = trackName;

  let activeTasks = [];
  let displayTitle = "";
  let displaySummary = "";

  // Conditional logic to select the right dataset and header details
  if (selectedTrack === "data-analytics") {
    activeTasks = dataAnalyticsTasks;
    displayTitle = "DATA ANALYTICS";
    displaySummary =
      "8 hands-on tasks covering Spreadsheets, Visualization, SQL, and End-to-End Business Analysis.";

    dataAnalyticsBtn.classList.add("active");
    dataAnalyticsBtn.setAttribute("aria-pressed", "true");
    webDevelopmentBtn.classList.remove("active");
    webDevelopmentBtn.setAttribute("aria-pressed", "false");
  } else if (selectedTrack === "web-development") {
    activeTasks = webDevelopmentTasks;
    displayTitle = "WEB DEVELOPMENT";
    displaySummary =
      "8 hands-on tasks building the TechBridge platform from static HTML/CSS pages to an interactive web app.";

    webDevelopmentBtn.classList.add("active");
    webDevelopmentBtn.setAttribute("aria-pressed", "true");
    dataAnalyticsBtn.classList.remove("active");
    dataAnalyticsBtn.setAttribute("aria-pressed", "false");
  }

  // Update "Currently Viewing" banner in the DOM
  currentTrackName.textContent = displayTitle;
  currentTrackSummary.textContent = displaySummary;

  // Clear existing cards before rendering new track tasks
  tasksContainer.innerHTML = "";

  // Build and append each task card to the DOM
activeTasks.forEach(function (task) {
const badgeClass = getDifficultyBadgeClass(task.difficulty);

const card = document.createElement("article");
card.className = "task-card";
card.innerHTML = `
    <div>
    <div class="task-card-top">
        <span class="task-number">Task ${task.number}</span>
        <span class="task-day">${task.day}</span>
    </div>
    <h2 class="task-title">${task.title}</h2>
    <p class="task-desc">${task.description}</p>
    </div>
    <div class="task-card-footer">
    <span class="difficulty-label">Difficulty</span>
    <span class="badge ${badgeClass}">${task.difficulty}</span>
    </div>
`;

tasksContainer.appendChild(card);
});
}

dataAnalyticsBtn.addEventListener("click", function () {
    displayTrack("data-analytics");
});

webDevelopmentBtn.addEventListener("click", function () {
    displayTrack("web-development");
});

displayTrack(selectedTrack);