// Управляет мобильным меню: открытие/закрытие по бургеру,
// закрытие при клике на пункт меню, блокировка скролла страницы под открытым меню

export function initBurgerMenu() {
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('navMenu');

  if (!burger || !nav) return;

  const links = nav.querySelectorAll('.nav__link, .nav__cta');

  const closeMenu = () => {
    burger.classList.remove('is-active');
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    burger.classList.add('is-active');
    nav.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  links.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Закрыть меню, если экран расширили обратно до десктопа
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1199) closeMenu();
  });
}