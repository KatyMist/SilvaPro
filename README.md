<a id="top"></a>
 
<div align="center">
  <img src="icons/1.svg" alt="SilvaPro logo" width="96" />
  <h1>SilvaPro · Лесная документация</h1>
  <p>
    <b>Лендинг для специалиста по лесной документации в Ульяновской области</b><br/>
    <i>A landing page for a forestry documentation specialist in the Ulyanovsk Region</i>
  </p>
  <p>Проекты освоения лесов · лесные декларации · отчётность 1-ИЛ, 1-ОЛ, 1-ЗЛ, 1-ВЛ</p>
  <p>
    <a href="https://ulles.ru/"><img src="https://img.shields.io/badge/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8C_%D1%81%D0%B0%D0%B9%D1%82-ulles.ru-1f3a2b?style=for-the-badge&labelColor=0d1f16&logo=googlechrome&logoColor=9fd3a8" alt="ulles.ru" /></a>
  </p>
  <p>
    <img src="https://skillicons.dev/icons?i=html,sass,js,vite,github&theme=dark" alt="HTML · SCSS · JavaScript · Vite · GitHub Pages" />
  </p>
  <p>
    <a href="#ru"><img src="https://img.shields.io/badge/RU-%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-1f3a2b?style=flat-square&labelColor=0d1f16" alt="Русский" /></a>
    <a href="#en"><img src="https://img.shields.io/badge/EN-English-1f3a2b?style=flat-square&labelColor=0d1f16" alt="English" /></a>
  </p>
</div>


---

## 📸 Скриншоты · Screenshots

<!-- Положи файлы в docs/screenshots/ и поправь имена при необходимости -->

<p align="center">
  <img width="1025" height="540" alt="Снимок экрана — 2026-09-29 в 10 29 37" src="https://github.com/user-attachments/assets/0a181dba-04fc-45f9-bc77-94ad493c4cf9" />
</p>

<table>
  <tr>
    <img width="950" height="394" alt="Снимок экрана — 2026-09-29 в 10 30 46" src="https://github.com/user-attachments/assets/053a8b73-7a16-4f90-9a60-edcbe5427236" alt="Комплекс услуг"  />
    <img width="967" height="334" alt="Снимок экрана — 2026-09-29 в 10 35 41" src="https://github.com/user-attachments/assets/1e217c67-fd6f-471e-83db-e9cc73afac1d" />
  </tr>
</table>

<p align="center">
  
  <img width="272" height="521" alt="Снимок экрана — 2026-09-29 в 10 56 55" src="https://github.com/user-attachments/assets/f5c7be6f-3bc8-4feb-8b1a-ec783f8f9260" />
  <img width="273" height="520" alt="Снимок экрана — 2026-09-29 в 10 57 12" src="https://github.com/user-attachments/assets/4959096f-c858-490c-8008-f661d9689fd6" />
  <img width="227" height="526" alt="Снимок экрана — 2026-09-29 в 10 57 43" src="https://github.com/user-attachments/assets/34443333-b290-4c74-b625-ff1a760fa7dc" />
</p>

---

<a id="ru"></a>

# 🇷🇺 Русский

## 🌿 О проекте

**SilvaPro** — одностраничный сайт-визитка для частного специалиста, который более 15 лет занимается лесопользованием и сопровождает бизнес в Ульяновской области. Задача сайта — коротко и солидно рассказать об услугах и привести клиента к консультации.

**Разделы страницы:**

| Блок | Что внутри |
|---|---|
| **Hero** | Экспертное сопровождение лесопользования |
| **Комплекс услуг** | Лесная отчётность, декларации, проектная документация лесных участков, консультации |
| **Профессиональный подход** | Опыт, формат работы, преимущества |
| **Контакты** | Телефон, e-mail, MAX, Telegram, карта области |
| **Юридические страницы** | Политика конфиденциальности, пользовательское соглашение, 404 |

---

## ✨ Особенности

- 🎬 **Прелоадер** с логотипом и анимированной полосой загрузки
- 📱 **Адаптивная вёрстка** — от мобильных до широких экранов, бургер-меню с блокировкой скролла
- 🧭 **Подсветка активного пункта меню** при прокрутке (`IntersectionObserver`)
- 🪄 **Анимации появления** — карточки услуг со ступенчатой задержкой, блок «Опыт» с поэтапным reveal
- 🔗 **Плавный скролл** по якорям без мусора в адресной строке
- 🍪 **Cookie-баннер с согласием** — Яндекс.Метрика подключается **только после** нажатия «Хорошо»
- 🔍 **SEO**: мета-теги, Open Graph, `schema.org` (`ProfessionalService`), `sitemap.xml`, `robots.txt`, canonical
- 🖋 Типографика: **Cormorant Garamond** + **Inter**, локальные шрифты Cormorant SC

---

## 🛠 Стек

| Технология | Назначение |
|---|---|
| **HTML5** | Семантическая разметка |
| **SCSS** | Стили по методологии **БЭМ**, разбиты на блоки |
| **Vanilla JS (ES-модули)** | Интерактив без фреймворков |
| **Vite** | Сборка, dev-сервер, multi-page build |
| **gh-pages** | Деплой на GitHub Pages с кастомным доменом |

---

## 📁 Структура

```
SilvaPro/
├── index.html            # Главная (лендинг)
├── privacy/              # Политика конфиденциальности
├── terms/                # Пользовательское соглашение
├── 404.html              # Страница ошибки
├── scripts/
│   ├── main.js                  # Точка входа
│   ├── preloader.js
│   ├── burger-menu.js
│   ├── nav-highlight.js
│   ├── anchor-links.js
│   ├── service-cards-reveal.js
│   ├── experience-reveal.js
│   └── cookies-banner.js
├── styles/
│   ├── style.scss               # Сборка стилей
│   ├── _variables.scss  _mixins.scss  _base.scss  _fonts.scss  _helpers.scss
│   └── blocks/                  # БЭМ-блоки: header, hero, services, experience, …
├── fonts/  icons/  images/
├── public/               # CNAME, robots.txt, sitemap.xml
└── vite.config.js
```

---

## 🚀 Запуск локально

```bash
git clone https://github.com/KatyMist/SilvaPro.git
cd SilvaPro
npm install

npm run dev       # dev-сервер
npm run build     # сборка в dist/
npm run preview   # просмотр сборки
npm run deploy    # сборка + публикация на GitHub Pages
```

---

## 👩‍💻 Автор

<table>
  <tr>
    <td>
      <b>Екатерина Туманова</b> — Frontend Developer & Designer<br/>
      Дизайн, вёрстка, анимации, SEO и деплой<br/><br/>
      <a href="https://katymist.github.io/Portfolio/">🌐 Портфолио</a> ·
      <a href="https://github.com/KatyMist">🐙 GitHub</a>
    </td>
  </tr>
</table>

<p align="right"><a href="#top">↑ Наверх</a></p>

---

<a id="en"></a>

# 🇬🇧 English

## 🌿 About

**SilvaPro** is a single-page business card website for an independent specialist with over 15 years of experience in forest management who supports businesses across the Ulyanovsk Region. The site's goal is to present the services concisely and professionally, and to lead visitors to book a consultation.

**Page sections:**

| Section | What's inside |
|---|---|
| **Hero** | Expert support for forest users |
| **Range of services** | Forest reporting, declarations, forest plot design documentation, consultations |
| **Professional approach** | Experience, way of working, key advantages |
| **Contacts** | Phone, email, MAX, Telegram, regional map |
| **Legal pages** | Privacy policy, terms of use, 404 |

---

## ✨ Features

- 🎬 **Preloader** with the logo and an animated progress bar
- 📱 **Responsive layout** — from mobile to wide screens, burger menu with scroll lock
- 🧭 **Active menu item highlighting** on scroll (`IntersectionObserver`)
- 🪄 **Reveal animations** — service cards with staggered delays, step-by-step reveal of the Experience section
- 🔗 **Smooth anchor scrolling** without cluttering the address bar
- 🍪 **Cookie consent banner** — Yandex.Metrica loads **only after** the visitor clicks "OK"
- 🔍 **SEO**: meta tags, Open Graph, `schema.org` (`ProfessionalService`), `sitemap.xml`, `robots.txt`, canonical URL
- 🖋 Typography: **Cormorant Garamond** + **Inter**, self-hosted Cormorant SC fonts

---

## 🛠 Tech stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic markup |
| **SCSS** | Styles following the **BEM** methodology, split into blocks |
| **Vanilla JS (ES modules)** | Interactivity without frameworks |
| **Vite** | Bundling, dev server, multi-page build |
| **gh-pages** | Deployment to GitHub Pages with a custom domain |

---

## 📁 Project structure

```
SilvaPro/
├── index.html            # Home page (landing)
├── privacy/              # Privacy policy
├── terms/                # Terms of use
├── 404.html              # Error page
├── scripts/
│   ├── main.js                  # Entry point
│   ├── preloader.js
│   ├── burger-menu.js
│   ├── nav-highlight.js
│   ├── anchor-links.js
│   ├── service-cards-reveal.js
│   ├── experience-reveal.js
│   └── cookies-banner.js
├── styles/
│   ├── style.scss               # Main stylesheet
│   ├── _variables.scss  _mixins.scss  _base.scss  _fonts.scss  _helpers.scss
│   └── blocks/                  # BEM blocks: header, hero, services, experience, …
├── fonts/  icons/  images/
├── public/               # CNAME, robots.txt, sitemap.xml
└── vite.config.js
```

---

## 🚀 Running locally

```bash
git clone https://github.com/KatyMist/SilvaPro.git
cd SilvaPro
npm install

npm run dev       # dev server
npm run build     # build to dist/
npm run preview   # preview the build
npm run deploy    # build + publish to GitHub Pages
```

---

## 👩‍💻 Author

<table>
  <tr>
    <td>
      <b>Ekaterina Tumanova</b> — Frontend Developer & Designer<br/>
      Design, markup, animations, SEO and deployment<br/><br/>
      <a href="https://katymist.github.io/Portfolio/">🌐 Portfolio</a> ·
      <a href="https://github.com/KatyMist">🐙 GitHub</a>
    </td>
  </tr>
</table>

<p align="right"><a href="#top">↑ Back to top</a></p>

---

<div align="center">
<sub>🌲 Сделано с заботой о лесе и о клиенте · Made with care for the forest and the client<br/>2026 · AI-assisted development</sub>
</div>
