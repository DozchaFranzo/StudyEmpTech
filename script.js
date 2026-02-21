// =========================
// DARK MODE (Persistent)
// =========================

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  revealOnScroll();
});

// =========================
// SCROLL ANIMATION
// =========================

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    // If browser doesn't support it, just show everything
    reveals.forEach(el => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));
}

// =========================
// MOTIVATION
// =========================

function showMotivation() {
  const messages = [
    "Believe in yourself, even when no one else does -Lagahan",
    "Your best is more than just being Enough -De lemos",
    "It's only that you've lost everything, you're free to do everything -Manaois",
    "Believe you can and you're halfway there -Idloy",
    "Give it your all to receive everything.-Gary the Chink",
    "Pagtalo sa pustahan, Riot na -Austria na may pimple",
    "Victory justifies any means -San miguel Extra Strong"
];

  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("motivationText").innerText =
    messages[randomIndex];
}