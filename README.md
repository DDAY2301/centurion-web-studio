# Lumeli — digitalni studio

Spletna stran **Lumeli**, digitalnega studia pod okriljem Centurion d.o.o.

- Predvidena produkcijska domena: **https://lumeli.net** (registrirana pri NEOSERV; DNS/gostovanje pred prvo objavo preveriti).
- Glavna veja: `main`.
- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS.
- Prikazani projekti: BlogLab.eu, Black Raven Solutions, Zavod ZZT in Moj Glas Šteje.

## Samostojne podstrani

`/`, `/storitve`, `/portfolio`, `/paketi`, `/ponudba`, `/kuponi`, `/o-nas`, `/kontakt`, `/politika-zasebnosti`. V portfelju so še štiri namenske predstavitve projektov. Vsak element glavnega in mobilnega menija je prava povezava.

## Razvoj in testiranje

```bash
npm ci
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
npm audit --omit=dev
```

## Black Friday 2026

Koda `BLACKFRIDAY30`: 30 % popusta na Lumeli pakete in storitve med 20. in 30. novembrom 2026 (slovenski čas). Po izteku se promocijske oznake samodejno umaknejo.

`/kuponi` vsebuje 4 samostojne vizualne kupone. Datoteke `public/coupons/*.svg` so izvor; `scripts/render_coupons.py` izdela dejanske PNG in PDF izvoze ter ZIP. Namenska GitHub Actions avtomatizacija objavi izvozene datoteke.

## Objava na spletu

GitHub Actions **CI ni produkcijsko gostovanje**. Za Next.js API poti potrebujemo ponudnika z Next.js strežniškim okoljem.

1. Na [Netlify](https://app.netlify.com/start) povežite GitHub in uvozite `DDAY2301/centurion-web-studio`.
2. Izberite **main** kot produkcijsko vejo in potrdite zaznavo **Next.js**. Nastavitev `netlify.toml` določa Node 22 in `npm run build`.
3. Najprej preverite deploy na `*.netlify.app`: naslovnico, navigacijo, `/kuponi`, prenos PNG/PDF in 4 reference.
4. V Netlify dodajte domeni `lumeli.net` in `www.lumeli.net`.
5. V nadzorni plošči **NEOSERV** uredite samo DNS zapise po navodilih Netlify za ta konkretni projekt. Menjava NEOSERV imenskih strežnikov ni nujna.
6. Preverite HTTPS in preusmeritve ter posodobite produkcijsko spremenljivko `NEXT_PUBLIC_SITE_URL=https://lumeli.net`.
7. Pred aktivacijo kontaktnega obrazca uredite dejanski poštni naslov/ponudnika, zaščito pred zlorabo in popolno politiko zasebnosti.

**Opozorilo:** `/api/contact` in `/api/coupons` privzeto zavračata neaktivne integracije. Gradnja strani ne pomeni, da sta dejansko pošiljanje povpraševanj ali avtomatsko unovčenje kuponov omogočena.

## AI/Claude razvoj

Za navodila samostojnemu razvijalcu glejte `CLAUDE.md`.

## Varnost

Poverilnic nikoli ne shranjujte v Git. `.env.example` vsebuje le varne vzorčne nastavitve.
