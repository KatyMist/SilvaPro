// Один раз при входе в область видимости добавляет .experience класс
// is-visible — дальше всю анимацию (стаггер по элементам) делает CSS

export function initExperienceReveal() {
  const target = document.querySelector('.experience');

  if (!target) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        target.classList.add('is-visible');
        observer.unobserve(target);
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(target);
}