export function initServiceCardsReveal() {
  const cards = document.querySelectorAll('.service-card');

  if (!cards.length) return;

  const STAGGER_STEP_MS = 180;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = Array.from(cards).indexOf(entry.target);
        const card = entry.target;

        card.style.transitionDelay = `${index * STAGGER_STEP_MS}ms`;
        card.classList.add('is-visible');

        // сбрасываем delay после завершения анимации появления,
        // чтобы он не влиял на hover
        card.addEventListener(
          'transitionend',
          () => {
            card.style.transitionDelay = '';
          },
          { once: true }
        );

        observer.unobserve(card);
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => observer.observe(card));
}