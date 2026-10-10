// Переключатель светлой / тёмной темы.
// Начальную тему ставит инлайн-скрипт в <head> (чтобы не было вспышки
// светлой темы при загрузке), здесь — только кнопка и реакция на смену
// темы в системе, пока пользователь сам ничего не выбирал.

const STORAGE_KEY = 'theme';
const root = document.documentElement;

const getSaved = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const save = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // приватный режим и т.п. — просто не запоминаем
  }
};

const updateButton = (button, theme) => {
  const isDark = theme === 'dark';
  button.setAttribute('aria-pressed', String(isDark));
  button.setAttribute('aria-label', isDark ? 'Включить светлую тему' : 'Включить тёмную тему');
};

export function initThemeToggle() {
  const button = document.getElementById('themeToggle');
  if (!button) return;

  const apply = (theme) => {
    root.setAttribute('data-theme', theme);
    updateButton(button, theme);
  };

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  button.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    save(next);
  });

  // Следуем за системой, пока нет ручного выбора
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', (event) => {
    if (getSaved()) return;
    apply(event.matches ? 'dark' : 'light');
  });
}
