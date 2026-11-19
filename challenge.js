const challenges = [
  {
    id: "da-1",
    title: "Monthly Retail Sales Dashboard",
    track: "Data Analytics",
    difficulty: "Beginner",
    estimatedTime: "3–4 hours",
    shortDesc:
      "Clean a raw 12-month retail sales CSV file and build a visual summary highlighting top-performing product categories and seasonal revenue trends.",
    expectedOutcome:
      "An interactive spreadsheet dashboard presenting monthly revenue, top 5 products, and regional sales performance.",
    objective:
      "Transform raw transactional retail records into clean, decision-ready metrics and uncover which product lines and regions drive quarterly growth.",
    skills: ["Data Cleaning", "Pivot Tables", "KPI Summarization", "Data Visualization"],
    tools: ["Microsoft Excel", "Google Sheets"],
    deliverables: [
      "Cleaned dataset with standardized date formats and zero duplicate rows.",
      "Summary table showing total revenue, units sold, and average order value.",
      "At least 3 clear charts (monthly revenue trend, category breakdown, regional comparison)."
    ]
  },
  {
    id: "da-2",
    title: "Customer Support Ticket Bottleneck Analysis",
    track: "Data Analytics",
    difficulty: "Intermediate",
    estimatedTime: "5–6 hours",
    shortDesc:
      "Query a customer service database to measure average resolution times, identify peak ticket hours, and pinpoint recurring issue categories.",
    expectedOutcome:
      "A SQL query script paired with a 1-page executive insight brief recommending staffing adjustments.",
    objective:
      "Diagnose why ticket resolution times increased last quarter by segmenting support logs by priority level, agent shift, and issue type.",
    skills: ["SQL Filtering & Joins", "GROUP BY Aggregations", "Root-Cause Analysis", "Business Reporting"],
    tools: ["PostgreSQL / SQLite", "Excel / Sheets", "Power BI (Optional)"],
    deliverables: [
      "Well-commented SQL queries calculating average resolution time by category and shift.",
      "Chart highlighting peak ticket submission hours across the week.",
      "Short summary with 3 actionable recommendations to reduce response backlog."
    ]
  },
  {
    id: "da-3",
    title: "SaaS Subscription Churn & Cohort Study",
    track: "Data Analytics",
    difficulty: "Advanced",
    estimatedTime: "8–10 hours",
    shortDesc:
      "Analyze user activity logs and billing history to calculate monthly churn rates, build retention cohorts, and identify early warning signs of cancellation.",
    expectedOutcome:
      "A multi-page BI dashboard and retention cohort matrix identifying high-risk customer segments.",
    objective:
      "Help a subscription product team understand when users drop off after signup and which behavioral signals correlate with long-term retention.",
    skills: ["Cohort Analysis", "Churn Modeling", "Python / Pandas or SQL", "Dashboard Storytelling"],
    tools: ["Python (Pandas/Matplotlib)", "Power BI / Tableau", "SQL"],
    deliverables: [
      "Monthly signup cohort retention heatmap covering 6 months of user activity.",
      "Comparison of feature usage between retained users and churned users.",
      "Interactive dashboard filtering churn metrics by subscription tier."
    ]
  },
  {
    id: "da-4",
    title: "Departmental Expense & Budget Variance Tracker",
    track: "Data Analytics",
    difficulty: "Beginner",
    estimatedTime: "2–3 hours",
    shortDesc:
      "Compare planned departmental budgets against actual Q1–Q2 expenditures to flag overspending and categorize operational costs.",
    expectedOutcome:
      "A variance report highlighting budget vs. actual percentages with conditional formatting alerts.",
    objective:
      "Practice financial data hygiene and variance calculations used by junior business analysts during monthly budget reviews.",
    skills: ["VLOOKUP / XLOOKUP", "Variance Formulas", "Conditional Formatting", "Chart Design"],
    tools: ["Microsoft Excel", "Google Sheets"],
    deliverables: [
      "Consolidated budget vs. actual table across 5 company departments.",
      "Variance ($ and %) columns with color-coded alerts for >10% overspend.",
      "Executive summary chart comparing planned vs. actual spend."
    ]
  },
  {
    id: "wd-1",
    title: "Responsive Tech Event Landing Page",
    track: "Web Development",
    difficulty: "Beginner",
    estimatedTime: "3–4 hours",
    shortDesc:
      "Build a modern, mobile-first promotional landing page for a fictional developer conference featuring a schedule section, speaker cards, and registration CTA.",
    expectedOutcome:
      "A fully responsive single-page website that adapts cleanly across mobile, tablet, and desktop screens.",
    objective:
      "Master semantic HTML5 structure, CSS Flexbox/Grid layouts, and responsive typography without relying on heavy frameworks.",
    skills: ["Semantic HTML5", "CSS Flexbox & Grid", "Responsive Media Queries", "UI Spacing & Hierarchy"],
    tools: ["HTML5", "CSS3", "VS Code", "Chrome DevTools"],
    deliverables: [
      "Hero section with clear event date, location, and call-to-action button.",
      "3-column speaker grid that stacks gracefully into 1 column on mobile phones.",
      "Accessible navigation bar and footer with social links."
    ]
  },
  {
    id: "wd-2",
    title: "Interactive Product Pricing & FAQ Component",
    track: "Web Development",
    difficulty: "Intermediate",
    estimatedTime: "4–5 hours",
    shortDesc:
      "Create a SaaS pricing page featuring a Monthly/Annual billing toggle that dynamically updates prices and an interactive accordion for frequently asked questions.",
    expectedOutcome:
      "An interactive pricing and FAQ interface powered by vanilla JavaScript DOM manipulation.",
    objective:
      "Build real-world UI state transitions using clean JavaScript event listeners, accessible ARIA attributes, and smooth CSS transitions.",
    skills: ["DOM Manipulation", "JavaScript Event Handling", "CSS Transitions", "Web Accessibility (ARIA)"],
    tools: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    deliverables: [
      "3 pricing tiers (Starter, Pro, Team) with a highlighted 'Most Popular' plan.",
      "Working Monthly/Annual toggle switch that recalculates pricing and displays savings.",
      "Expandable/collapsible FAQ accordion where only one or multiple items toggle smoothly."
    ]
  },
  {
    id: "wd-3",
    title: "Multi-Step Internship Application Form with Validation",
    track: "Web Development",
    difficulty: "Intermediate",
    estimatedTime: "5–6 hours",
    shortDesc:
      "Develop a 3-step onboarding form with real-time input validation, custom inline error messages, a step progress indicator, and a submission preview.",
    expectedOutcome:
      "A resilient, user-friendly form flow that prevents invalid submissions and persists draft progress.",
    objective:
      "Implement client-side form validation patterns, regex checks for emails/URLs, and multi-step state management in JavaScript.",
    skills: ["Form Validation", "State Management", "Regular Expressions", "LocalStorage Persistence"],
    tools: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    deliverables: [
      "3 distinct form steps: Personal Info, Track Selection, and Portfolio Links.",
      "Real-time validation feedback preventing advancement until required fields are valid.",
      "Final review summary screen before simulated submission."
    ]
  },
  {
    id: "wd-4",
    title: "GitHub Developer Profile & Repo Explorer",
    track: "Web Development",
    difficulty: "Advanced",
    estimatedTime: "7–9 hours",
    shortDesc:
      "Connect to the public GitHub REST API to search any developer username, render profile statistics, and display their top repositories with loading and error states.",
    expectedOutcome:
      "A live API-driven web application handling asynchronous data fetching, rate-limit/404 errors, and dynamic rendering.",
    objective:
      "Gain practical experience working with asynchronous JavaScript (`fetch`, `async/await`), REST APIs, and graceful UI states.",
    skills: ["Fetch API & Async/Await", "JSON Data Parsing", "Error & Loading State UI", "Dynamic Rendering"],
    tools: ["HTML5", "CSS3", "JavaScript (ES6+)", "GitHub REST API"],
    deliverables: [
      "Search bar that fetches live user profile data (avatar, bio, followers, repo count).",
      "List of the user's 6 most recently updated repositories with star counts and language tags.",
      "Clean loading skeleton/spinner and friendly 'User Not Found' error handling."
    ]
  }
];

const state = {
  selectedTrack: "All",
  selectedDifficulty: "All",
  searchQuery: "",
  sortBy: "default",
  completedIds: JSON.parse(localStorage.getItem("tb_completed_challenges") || "[]"),
  activeModalId: null
};

const difficultyRank = { Beginner: 1, Intermediate: 2, Advanced: 3 };
const gridEl = document.getElementById("challengesGrid");
const emptyStateEl = document.getElementById("emptyState");
const resultsCountEl = document.getElementById("resultsCount");
const searchInputEl = document.getElementById("searchInput");
const sortSelectEl = document.getElementById("sortSelect");
const trackFiltersEl = document.getElementById("trackFilters");
const difficultyFiltersEl = document.getElementById("difficultyFilters");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const emptyResetBtn = document.getElementById("emptyResetBtn");

// Progress Elements
const progressTextEl = document.getElementById("progressText");
const progressPercentEl = document.getElementById("progressPercent");
const progressBarFillEl = document.getElementById("progressBarFill");
const progressBarContainerEl = document.getElementById("progressBarContainer");

// Modal Elements
const modalEl = document.getElementById("challengeModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTrackBadge = document.getElementById("modalTrackBadge");
const modalDiffBadge = document.getElementById("modalDiffBadge");
const modalTitle = document.getElementById("modalTitle");
const modalTime = document.getElementById("modalTime");
const modalObjective = document.getElementById("modalObjective");
const modalSkills = document.getElementById("modalSkills");
const modalTools = document.getElementById("modalTools");
const modalDeliverables = document.getElementById("modalDeliverables");
const modalExpectedResult = document.getElementById("modalExpectedResult");
const toggleCompleteBtn = document.getElementById("toggleCompleteBtn");
const copyBriefBtn = document.getElementById("copyBriefBtn");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinksEl = document.getElementById("navLinks");
const toastEl = document.getElementById("toast");

function getFilteredChallenges() {
  const query = state.searchQuery.trim().toLowerCase();

  let filtered = challenges.filter((item) => {
    const matchesTrack =
      state.selectedTrack === "All" || item.track === state.selectedTrack;
    const matchesDiff =
      state.selectedDifficulty === "All" || item.difficulty === state.selectedDifficulty;
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.shortDesc.toLowerCase().includes(query) ||
      item.skills.some((s) => s.toLowerCase().includes(query)) ||
      item.tools.some((t) => t.toLowerCase().includes(query));

    return matchesTrack && matchesDiff && matchesSearch;
  });

  if (state.sortBy === "diff-asc") {
    filtered.sort((a, b) => difficultyRank[a.difficulty] - difficultyRank[b.difficulty]);
  } else if (state.sortBy === "diff-desc") {
    filtered.sort((a, b) => difficultyRank[b.difficulty] - difficultyRank[a.difficulty]);
  } else if (state.sortBy === "name-asc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  return filtered;
}

function renderChallenges() {
  const list = getFilteredChallenges();

  resultsCountEl.innerHTML = `Showing <strong>${list.length}</strong> of ${challenges.length} challenges`;

  if (list.length === 0) {
    gridEl.innerHTML = "";
    emptyStateEl.classList.remove("hidden");
    return;
  }

  emptyStateEl.classList.add("hidden");

  gridEl.innerHTML = list
    .map((challenge) => {
      const isData = challenge.track === "Data Analytics";
      const trackClass = isData ? "track-data" : "track-web";
      const trackBadgeClass = isData ? "badge-data" : "badge-web";
      const diffBadgeClass = `badge-${challenge.difficulty.toLowerCase()}`;
      const isCompleted = state.completedIds.includes(challenge.id);

      return `
        <article class="challenge-card ${trackClass}">
          <div>
            <div class="card-top">
              <span class="badge ${trackBadgeClass}">
                ${isData ? "📊" : "💻"} ${challenge.track}
              </span>
              <span class="badge ${diffBadgeClass}">${challenge.difficulty}</span>
            </div>

            ${isCompleted ? `<span class="completed-tag">✔ Completed</span>` : ""}

            <h3 class="card-title">${challenge.title}</h3>
            <p class="card-desc">${challenge.shortDesc}</p>

            <div class="outcome-box">
              <span class="outcome-label">Expected Outcome</span>
              <p class="outcome-text">${challenge.expectedOutcome}</p>
            </div>
          </div>

          <div class="card-footer">
            <span class="time-estimate">⏱ ${challenge.estimatedTime}</span>
            <button class="btn btn-primary view-challenge-btn" data-id="${challenge.id}">
              View Challenge
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateProgressUI() {
  const total = challenges.length;
  const completed = state.completedIds.length;
  const percent = Math.round((completed / total) * 100);

  progressTextEl.textContent = `${completed} of ${total} Completed`;
  progressPercentEl.textContent = `${percent}%`;
  progressBarFillEl.style.width = `${percent}%`;
  progressBarContainerEl.setAttribute("aria-valuenow", percent);
}

function openChallengeModal(challengeId) {
  const challenge = challenges.find((c) => c.id === challengeId);
  if (!challenge) return;

  state.activeModalId = challenge.id;

  const isData = challenge.track === "Data Analytics";
  modalTrackBadge.className = `badge ${isData ? "badge-data" : "badge-web"}`;
  modalTrackBadge.textContent = `${isData ? "📊" : "💻"} ${challenge.track}`;

  modalDiffBadge.className = `badge badge-${challenge.difficulty.toLowerCase()}`;
  modalDiffBadge.textContent = challenge.difficulty;

  modalTitle.textContent = challenge.title;
  modalTime.textContent = `⏱ Estimated Time: ${challenge.estimatedTime}`;
  modalObjective.textContent = challenge.objective;

  modalSkills.innerHTML = challenge.skills.map((s) => `<li>${s}</li>`).join("");
  modalTools.innerHTML = challenge.tools.map((t) => `<li>${t}</li>`).join("");
  modalDeliverables.innerHTML = challenge.deliverables.map((d) => `<li>${d}</li>`).join("");
  modalExpectedResult.textContent = challenge.expectedOutcome;

  updateModalCompleteButton();
  modalEl.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeChallengeModal() {
  modalEl.classList.add("hidden");
  document.body.style.overflow = "";
  state.activeModalId = null;
}

function updateModalCompleteButton() {
  if (!state.activeModalId) return;
  const isCompleted = state.completedIds.includes(state.activeModalId);
  toggleCompleteBtn.textContent = isCompleted ? "✔ Completed (Undo)" : "Mark as Completed";
  toggleCompleteBtn.className = isCompleted ? "btn btn-outline" : "btn btn-primary";
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2600);
}

trackFiltersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".pill");
  if (!btn) return;

  trackFiltersEl.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  state.selectedTrack = btn.dataset.track;
  renderChallenges();
});

difficultyFiltersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".pill");
  if (!btn) return;

  difficultyFiltersEl.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  state.selectedDifficulty = btn.dataset.difficulty;
  renderChallenges();
});

searchInputEl.addEventListener("input", (e) => {
  state.searchQuery = e.target.value;
  renderChallenges();
});

sortSelectEl.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  renderChallenges();
});

function resetAllFilters() {
  state.selectedTrack = "All";
  state.selectedDifficulty = "All";
  state.searchQuery = "";
  state.sortBy = "default";

  searchInputEl.value = "";
  sortSelectEl.value = "default";

  trackFiltersEl.querySelectorAll(".pill").forEach((p) => {
    p.classList.toggle("active", p.dataset.track === "All");
  });

  difficultyFiltersEl.querySelectorAll(".pill").forEach((p) => {
    p.classList.toggle("active", p.dataset.difficulty === "All");
  });

  renderChallenges();
}

resetFiltersBtn.addEventListener("click", resetAllFilters);
emptyResetBtn.addEventListener("click", resetAllFilters);

gridEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".view-challenge-btn");
  if (!btn) return;
  openChallengeModal(btn.dataset.id);
});

closeModalBtn.addEventListener("click", closeChallengeModal);
modalEl.addEventListener("click", (e) => {
  if (e.target === modalEl) closeChallengeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    closeChallengeModal();
  }
});

toggleCompleteBtn.addEventListener("click", () => {
  const id = state.activeModalId;
  if (!id) return;

  const index = state.completedIds.indexOf(id);
  if (index === -1) {
    state.completedIds.push(id);
    showToast("Challenge marked as completed!");
  } else {
    state.completedIds.splice(index, 1);
    showToast("Challenge marked as incomplete.");
  }

  localStorage.setItem("tb_completed_challenges", JSON.stringify(state.completedIds));
  updateModalCompleteButton();
  updateProgressUI();
  renderChallenges();
});

copyBriefBtn.addEventListener("click", async () => {
  const challenge = challenges.find((c) => c.id === state.activeModalId);
  if (!challenge) return;

  const brief = `TechBridge Challenge: ${challenge.title} (${challenge.track} - ${challenge.difficulty})\nObjective: ${challenge.objective}\nExpected Result: ${challenge.expectedOutcome}`;

  try {
    await navigator.clipboard.writeText(brief);
    showToast("Challenge brief copied to clipboard!");
  } catch {
    showToast("Unable to copy automatically.");
  }
});

mobileMenuBtn.addEventListener("click", () => {
    const isOpen = navLinksEl.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", isOpen);
});

updateProgressUI();
renderChallenges();