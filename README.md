<a id="top"></a>

<div align="center">

<img src="icons/1.svg" alt="SilvaPro logo" width="88">

# Лесная документация | Forestry Documentation

**Сайт-визитка специалиста по лесопользованию · Ульяновская область**<br>
**Business card website for a forest management specialist · Ulyanovsk Region, Russia**

<sub>Проекты освоения лесов · лесные декларации · отчётность 1-ИЛ, 1-ОЛ, 1-ЗЛ, 1-ВЛ</sub>

<a href="https://ulles.ru/"><img src="https://img.shields.io/badge/ОТКРЫТЬ_САЙТ-ULLES.RU-3f7d4f?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=0d1f16" alt="Открыть сайт"></a>

<img src="https://skillicons.dev/icons?i=html,sass,js,vite,github" alt="HTML, Sass, JavaScript, Vite, GitHub">

<img src="https://img.shields.io/badge/RU-Русский-3f7d4f?labelColor=0d1f16" alt="Русский"> <img src="https://img.shields.io/badge/EN-English-3f7d4f?labelColor=0d1f16" alt="English">

<a href="https://ulles.ru/">
  <img src="https://github.com/user-attachments/assets/18410a23-218a-4152-a8dd-7b16db9bbaed" alt="Home page on desktop and smartphone" width="100%">
</a>

</div>

<br>

---

## О сайте · About

Одностраничный сайт-визитка для частного специалиста, который более 15 лет занимается лесопользованием и сопровождает бизнес в Ульяновской области. Задача — коротко и солидно рассказать об услугах и привести клиента к консультации.

A single-page business card website for an independent specialist with over 15 years of experience in forest management who supports businesses across the Ulyanovsk Region. Its goal is to present the services concisely and professionally and lead visitors to book a consultation. The website itself is in Russian.

| Раздел · Section | Что внутри · Content |
|---|---|
| [Hero](https://ulles.ru/) | Экспертное сопровождение лесопользования<br>Expert support for forest users |
| [Комплекс услуг · Services](https://ulles.ru/#services) | Лесная отчётность, декларации, проектная документация, консультации<br>Forest reporting, declarations, forest plot design documentation, consultations |
| [Профессиональный подход · Approach](https://ulles.ru/#experience) | Опыт, формат работы, преимущества<br>Experience, way of working, key advantages |
| [Контакты · Contacts](https://ulles.ru/#contacts) | Телефон, e-mail, MAX, Telegram, карта области<br>Phone, email, MAX, Telegram, regional map |
| Юридические страницы · Legal pages | Политика конфиденциальности, пользовательское соглашение, 404<br>Privacy policy, terms of use, 404 |

## Скриншоты · Screenshots

<details open>
<summary><b>Комплекс услуг · Services</b></summary>
<br>
<img src="https://github.com/user-attachments/assets/053a8b73-7a16-4f90-9a60-edcbe5427236" alt="Services section" width="100%">
</details>

<details>
<summary><b>Профессиональный подход · Approach</b></summary>
<br>
<img src="https://github.com/user-attachments/assets/1e217c67-fd6f-471e-83db-e9cc73afac1d" alt="Approach section" width="100%">
</details>

<details>
<summary><b>Мобильная версия · Mobile Version</b></summary>
<br>
<img src="https://github.com/user-attachments/assets/3dbea773-d528-47c7-8aa5-8723776708ca" alt="Mobile version" width="100%">
</details>

## Возможности · Features

| Русский | English |
|---|---|
| **Прелоадер** с логотипом и анимированной полосой загрузки | **Preloader** with the logo and an animated progress bar |
| **Адаптивная вёрстка**, бургер-меню с блокировкой скролла | **Responsive layout**, burger menu with scroll lock |
| **Подсветка активного пункта меню** при прокрутке (`IntersectionObserver`) | **Active menu item highlighting** on scroll (`IntersectionObserver`) |
| **Анимации появления**: карточки услуг со ступенчатой задержкой, поэтапный reveal блока «Опыт» | **Reveal animations**: staggered service cards, step-by-step reveal of the Experience block |
| **Плавный скролл** по якорям без мусора в адресной строке | **Smooth anchor scrolling** without cluttering the address bar |
| **Cookie-баннер**: Яндекс.Метрика подключается только после согласия | **Cookie banner**: Yandex.Metrica loads only after consent |
| **SEO**: мета-теги, Open Graph, Schema.org (`ProfessionalService`), sitemap, robots.txt, canonical | **SEO**: meta tags, Open Graph, Schema.org (`ProfessionalService`), sitemap, robots.txt, canonical |
| **Политика конфиденциальности** и пользовательское соглашение | **Privacy policy** and terms of use |
| **Собственный домен** через GitHub Pages | **Custom domain** via GitHub Pages |

## Технологии · Tech Stack

| | |
|---|---|
| Разметка · Markup | HTML5 |
| Стили · Styles | SCSS, BEM |
| Скрипты · Scripts | Vanilla JavaScript, ES modules |
| Сборка · Build | Vite (multi-page build) |
| Шрифты · Fonts | Cormorant Garamond, Inter, Cormorant SC (`woff2`) |
| Хостинг · Hosting | GitHub Pages (`gh-pages`) + `ulles.ru` |

## Структура проекта · Project Structure

```text
├── index.html            # Главная · Home (landing)
├── privacy/              # Политика конфиденциальности · Privacy Policy
├── terms/                # Пользовательское соглашение · Terms of Use
├── 404.html
├── scripts/              # JavaScript (ES-модули · ES modules)
│   ├── main.js           # Точка входа · Entry point
│   ├── preloader.js  burger-menu.js  nav-highlight.js  anchor-links.js
│   └── service-cards-reveal.js  experience-reveal.js  cookies-banner.js
├── styles/               # SCSS
│   ├── style.scss        # Сборка стилей · Main stylesheet
│   ├── _variables.scss  _mixins.scss  _base.scss  _fonts.scss  _helpers.scss
│   └── blocks/           # БЭМ-блоки · BEM blocks
├── images/  icons/  fonts/
├── public/               # CNAME, robots.txt, sitemap.xml
└── vite.config.js
```

## Запуск локально · Running Locally

```bash
git clone https://github.com/KatyMist/SilvaPro.git
cd SilvaPro
npm install
npm run dev       # dev-сервер · dev server
npm run build     # сборка в dist/ · build to dist/
npm run preview   # просмотр сборки · preview the build
npm run deploy    # сборка + публикация · build + deploy to GitHub Pages
```

## Автор · Author

**Екатерина Туманова · Ekaterina Tumanova** — Frontend Developer & Designer<br>
Дизайн, вёрстка, анимации, SEO и деплой · Design, markup, animations, SEO and deployment

[Портфолио · Portfolio](https://katymist.github.io/Portfolio/) · [GitHub](https://github.com/KatyMist)

<p align="right"><a href="#top">↑ Наверх · Back to top</a></p>
