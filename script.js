// Smooth scroll for in-page navigation (ignore empty # links)
const links = document.querySelectorAll("a[href^='#']");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").replace("#", "");
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Simple ticket button interaction (only for buttons)
const pills = document.querySelectorAll(".pill");
pills.forEach((pill) => {
  if (pill.tagName.toLowerCase() !== "button") return;
  pill.addEventListener("click", () => {
    pill.textContent = "Info folgt";
    pill.classList.add("active-pill");
  });
});

// Theme toggle (light / dark)
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const navToggle = document.getElementById("navToggle");
const navDrawer = document.getElementById("navDrawer");
const navOverlay = document.getElementById("navOverlay");

const applyTheme = (mode) => {
  const isDark = mode === "dark";
  root.classList.toggle("theme-dark", isDark);
  localStorage.setItem("theme", mode);
  if (themeToggle) {
    themeToggle.textContent = isDark ? "Hell" : "Dunkel";
    themeToggle.setAttribute("aria-pressed", String(isDark));
  }
};

const storedTheme = localStorage.getItem("theme");
applyTheme(storedTheme || "dark");

themeToggle?.addEventListener("click", () => {
  const next = root.classList.contains("theme-dark") ? "light" : "dark";
  applyTheme(next);
});

navToggle?.addEventListener("click", () => {
  const isOpen = navDrawer?.classList.toggle("nav--open");
  navOverlay?.classList.toggle("nav--open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

navOverlay?.addEventListener("click", () => {
  navDrawer?.classList.remove("nav--open");
  navOverlay.classList.remove("nav--open");
  navToggle?.setAttribute("aria-expanded", "false");
});

// Animate stats: count up once when the block scrolls into view
const statNumbers = Array.from(document.querySelectorAll(".stat__number"));
if (statNumbers.length) {
  const animateCount = (el, target) => {
    const duration = 1200;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = String(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = String(target);
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.animated === "true") return;
        el.dataset.animated = "true";
        const target = Number(el.dataset.target);
        el.textContent = "0";
        animateCount(el, target);
        obs.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  statNumbers.forEach((el) => {
    const numeric = Number(el.textContent.replace(/\D/g, ""));
    el.dataset.target = String(numeric);
    observer.observe(el);
  });
}
