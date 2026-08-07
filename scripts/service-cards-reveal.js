export function initServiceCardsReveal() {
  const cards = document.querySelectorAll('.service-card');

  if (!cards.length) return;

  const STAGGER_STEP_MS = 180;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = Array.from(cards).indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * STAGGER_STEP_MS}ms`;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => observer.observe(card));
}