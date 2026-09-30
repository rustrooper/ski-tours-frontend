This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Деплой (Docker + VPS)

Push в `main` запускает [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): образ собирается и публикуется в GHCR, затем на сервере по SSH выполняется `docker compose pull && up -d`. Перед приложением стоит Caddy ([`deploy/`](deploy/)), он автоматически выпускает HTTPS-сертификат.

Локальная проверка образа:

```bash
docker build -t ski-tours .
docker run --rm -p 3000:3000 ski-tours
```

### Разовая настройка сервера (Ubuntu 24.04)

```bash
# под root
curl -fsSL https://get.docker.com | sh
adduser --disabled-password deploy && usermod -aG docker deploy
ufw allow 22 && ufw allow 80 && ufw allow 443 && ufw enable

# под deploy
mkdir -p ~/ski-tours ~/.ssh
echo "SITE_HOST=1-2-3-4.sslip.io" > ~/ski-tours/.env   # IP сервера через дефисы
```

На своей машине создать ключ для CI: `ssh-keygen -t ed25519 -f ski-tours-ci -N ""`. Содержимое `ski-tours-ci.pub` добавить в `~deploy/.ssh/authorized_keys`.

В GitHub → Settings → Secrets and variables → Actions добавить секреты:

- `VPS_HOST` — IP сервера
- `VPS_USER` — `deploy`
- `VPS_SSH_KEY` — содержимое приватного ключа `ski-tours-ci`

После первого успешного build: GitHub → Packages → `ski-tours-frontend` → Package settings → Change visibility → **Public**. Тогда сервер скачивает образ без `docker login`. Затем перезапустить workflow (Actions → Deploy → Run workflow).

Когда появится домен, достаточно направить его A-запись на IP сервера и поменять `SITE_HOST` в `~/ski-tours/.env`.
