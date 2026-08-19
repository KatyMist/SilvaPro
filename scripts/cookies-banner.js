const STORAGE_KEY = 'cookies-consent-accepted';
const SHOW_DELAY_MS = 800;

export function initCookiesBanner() {
  const banner = document.getElementById('cookiesBanner');
  const acceptBtn = document.getElementById('cookiesAccept');
  const closeBtn = document.getElementById('cookiesClose');

  if (!banner || !acceptBtn || !closeBtn) return;

  const alreadyAccepted = localStorage.getItem(STORAGE_KEY) === 'true';

  if (alreadyAccepted) {
    window.initYandexMetrika?.();
    return;
  }

  setTimeout(() => {
    banner.classList.add('is-visible');
  }, SHOW_DELAY_MS);

  const dismissWithConsent = () => {
    banner.classList.remove('is-visible');
    localStorage.setItem(STORAGE_KEY, 'true');
    window.initYandexMetrika?.();
  };

  const dismissWithoutConsent = () => {
    banner.classList.remove('is-visible');
  };

  acceptBtn.addEventListener('click', dismissWithConsent);
  closeBtn.addEventListener('click', dismissWithoutConsent);
}