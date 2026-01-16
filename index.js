// Nav colour flip (white text over dark, black text over light)
document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const trigger = document.querySelector(".scroll-reveal");

  // If either is missing, do nothing (and don't crash).
  if (!navMenu || !trigger) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      navMenu.classList.toggle("whiteBackground", entry.isIntersecting);
    },
    {
      // Tweak this if you want the flip earlier/later
      threshold: 0.01,
    }
  );

  observer.observe(trigger);
});
