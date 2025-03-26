# Product App

Добро пожаловать в **Product App** — приложение для управления товарами, созданное для демонстрации возможностей современных технологий веб-разработки.

## 📋 Функционал:

- **Просмотр товаров:** Посетители могут видеть список доступных товаров с подробной информацией о каждом.
- **Добавление нового продукта:** Возможность создавать новые товары, добавляя название, описание, изображение, цену и категорию.
- **Фильтрация товаров:** Поддержка фильтров, таких как "Все товары" и "Избранные".
- **Поиск:** Быстрый поиск товаров по названию или описанию.
- **Добавление в избранное:** Отметка товаров как избранных.
- **Удаление товаров:** Удаление существующих товаров из списка.
- **Навигация через логотип:** Логотип в виде фавикона, который возвращает на главную страницу "Добро пожаловать".

## 🛠️ Технологический стек:

- **Frontend:**

  - [React](https://reactjs.org/) — библиотека для создания пользовательских интерфейсов.
  - [Next.js](https://nextjs.org/) — фреймворк для серверного рендеринга и маршрутизации.
  - [Redux Toolkit](https://redux-toolkit.js.org/) — управление состоянием приложения.
  - CSS Modules — модульная стилизация компонентов.

- **Backend:** Не используется в текущей реализации (данные хранятся в состоянии Redux).
- **Дополнительно:**
  - TypeScript — статическая типизация.
  - ESLint и Prettier — инструмент для линтинга и форматирования кода.

## 🚀 Как запустить проект:

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/frontess/product-app.git
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите сервер разработки:
   ```bash
   npm run dev
   ```
4. Откройте http://localhost:3000 в браузере.

## 📂 Структура проекта:
```plaintext
- src/
├──components/ Компоненты React
├── pages/ Страницы приложения
├── redux/ Сторон Redux
├── styles/ Стили CSS-модулей
├── utils/ Утилиты и вспомогательные функции
- public/
└── favicon.ico Фавикон и статические файлы

