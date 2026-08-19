// Перехватывает клики по якорным ссылкам меню (#services, #experience, #contacts),
// чтобы плавно скроллить к разделу, не дописывая хеш в адресную строку

export function initAnchorLinks() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}