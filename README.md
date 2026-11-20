# Centurion Web Studio

**Prenesitev na boljšo spletno prisotnost**

Centurion Web Studio je profesionalna dejavnost za spletno razvoj, povezana z Centurion d.o.o.

## Storitve

- **Poslovena spletna stran** - Polnostvena spletna prisotnost za vaše podjetje
- **Landing page** - Kratka, učinkovita stran za predvajanje ponudbe
- **Ponovno oblikovanje** - Modernizacija obstoječe spletne strani
- **Popravki** - Reševanje tveganj in optimizacija
- **SEO & Performance** - Napredna optimizacija za iskalno ujemanje
- **Vzdrževanje** - Redelna nadzor in posodobitve

## Paketi

- **START** - Osnovni paket za začetnike
- **BUSINESS** - Profesionalni paket za srednja podjetja
- **GROWTH** - Napredni paket z integracijami

## Začetak

```bash
npm install
npm run dev
```

## Produktivacija

Spremenite spremenljivke okolja v `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://centurion-web-studio.github.io
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_USER=vaš-email
SMTP_PASS=vaša-geslo
```

## GitHub Pages

Projekt se lahko objavi na GitHub Pages s pomočjo GitHub Actions:

1. Nastavite `.github/workflows/pages.yml`
2. Vključite GitHub Pages v nastavitvah repozitorija
3. Izbirite `gh-pages` vejo kot vir

## Vite Konfiguracija

Če uporabljate Vite namesto Next.js:

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/centurion-web-studio/',
  server: {
    port: 3000,
    open: true
  }
});
```

## Avtentikacija

Za zasedbo kupone in kontakt oblike je potrebn server stran z:

- Node.js (v18+)
- Express ali Next.js API
- SMTP strežnik za pošiljanje sporočil

## License

Vsi pravice pridržani. Ta projekt je del dela Centurion Web Studio.

## Kontakt

info@centurion-web-studio.example