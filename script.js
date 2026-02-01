// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll Animation
const sections = document.querySelectorAll("section");

const revealSection = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSection);
revealSection();
