// Révélation douce des sections au scroll (respecte prefers-reduced-motion
// automatiquement puisque la transition CSS est elle-même désactivée dans
// ce cas — voir style.css).
const revealEls = document.querySelectorAll(".reveal");

if (typeof lucide !== "undefined") lucide.createIcons();

if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  // Pas de support IntersectionObserver : on affiche tout directement.
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
