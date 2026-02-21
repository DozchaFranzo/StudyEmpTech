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

// =========================
// PAGE LOAD EVENT
// =========================

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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((el) => observer.observe(el));
}

// =========================
// MOTIVATION BUTTON
// =========================

function showMotivation() {
  const messages = [
    "Believe in yourself, even when no one else does -Lagahan",
    "Your best is more than just being Enough -De Lemos",
    "It's only that you've lost everything, you're free to do everything -Manaois",
    "Believe you can and you're halfway there -Idloy",
    "Give it your all to receive everything -Gary the Chink",
    "Pagtalo sa pustahan, Riot na -Austria na may pimple",
    "Victory justifies any means -San Miguel Extra Strong"
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);

  const target = document.getElementById("motivationText");
  if (target) {
    target.innerText = messages[randomIndex];
  }
}