// Показывает баннер с cookies при первом визите (через небольшую задержку),
// после нажатия "Хорошо" больше не показывает — согласие хранится в localStorage

const STORAGE_KEY = 'cookies-consent-accepted';
const SHOW_DELAY_MS = 800;

export function initCookiesBanner() {
  const banner = document.getElementById('cookiesBanner');
  const acceptBtn = document.getElementById('cookiesAccept');
  const closeBtn = document.getElementById('cookiesClose');

  if (!banner || !acceptBtn || !closeBtn) return;

  const alreadyAccepted = localStorage.getItem(STORAGE_KEY) === 'true';
  if (alreadyAccepted) return;

  setTimeout(() => {
    banner.classList.add('is-visible');
  }, SHOW_DELAY_MS);

  const dismiss = () => {
    banner.classList.remove('is-visible');
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  acceptBtn.addEventListener('click', dismiss);
  closeBtn.addEventListener('click', dismiss);
}