export function initPreloader() {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloaderBar');

  if (!preloader || !bar) return;

  const MIN_DISPLAY_TIME = 2000; // минимальное время показа прелоадера, в мс
  const startTime = Date.now();

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 20;
    if (progress >= 90) progress = 90;
    bar.style.width = `${progress}%`;
  }, 150);

  const hidePreloader = () => {
    clearInterval(interval);
    bar.style.width = '100%';

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(MIN_DISPLAY_TIME - elapsed, 0);

    setTimeout(() => {
      preloader.classList.add('is-hidden');
    }, remaining + 300);
  };

  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', hidePreloader);
  }
}