# mira_all

Моно-репозиторий без Docker и без лишних зависимостей: **API**, **админка**, **клиент маркетплейса** (Vite + React + TypeScript).

## Структура
```
mira_all/
├─ api/              # Простой HTTP API на Node.js (TS), без Express
├─ apps/
│  ├─ admin/         # Админ-панель (Vite + React + TS)
│  └─ market/        # Клиент маркетплейса (Vite + React + TS)
└─ tsconfig.base.json
```

## Быстрый старт
> Требуется Node.js 18+ и npm.

```bash
# установить зависимости во всех пакетах
npm install

# запустить API (после сборки)
npm run build:api && npm run start:api

# dev-серверы
npm run dev:admin    # http://localhost:5173
npm run dev:market   # http://localhost:5174

# сборка всех пакетов
npm run build
```

## Публикация в GitHub (https)
```bash
git init
git remote add origin https://github.com/corechuv/mira_all.git
git branch -M main
git add .
git commit -m "feat: init monorepo (api, admin, market)"
git push -u origin main
```

## Эндпоинты API
- `GET /health` — состояние сервера
- `GET /api/v1/products` — заглушка списка товаров
- `GET /api/v1/users` — заглушка списка пользователей
```

## Заметки
- Никаких Docker-файлов, минимальный набор зависимостей.
- API без сторонних веб-фреймворков (используется стандартный `http`).
- Vite-проекты используют только необходимые зависимости: `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, типы и `typescript`.
