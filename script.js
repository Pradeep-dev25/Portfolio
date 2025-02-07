// Projects Data
const projects = [
    { title: "To-Do App", description: "Organize your daily tasks.", link: "https://to-do-lists-wheat.vercel.app/" },
    { title: "Weather App", description: "Real-time weather updates.", link: "#" },
    { title: "Book-Notes", description: "To store the uniq book morels", link: "http://books-notes-2azd-git-main-pradeep-dev25s-projects.vercel.app" },
  ];
  
  // Render Projects
  const projectList = document.getElementById("project-list");
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View</a>
    `;
    projectList.appendChild(card);
  });
  
  // Skill Bars Animation
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".skill-bar").forEach((bar) => {
      const skillLevel = bar.getAttribute("data-skill");
      bar.style.width = skillLevel;
    });
  });
  
  // Form Submission
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const response = document.getElementById("form-response");
    response.textContent = `Thanks, ${name}! I'll get back to you soon.`;
  });
  