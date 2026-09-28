# Advokatska Kancelarija — Luksuzni sajt (Next.js 15)

Premium, potpuno animirani sajt za advokatsku kancelariju, inspirisan sadržajem i uslugama sajta
`advokatskakancelarijavsavic.com`, ali dizajniran potpuno iznova — sa fokusom na poverenje, autoritet
i prestiž (Apple-level dizajn, Stripe-level animacije, Linear-level kvalitet interfejsa).

## Tehnologije

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** — dizajn sistem sa paletom boja i tipografijom kancelarije
- **Framer Motion** — reveal animacije, mikrointerakcije, carousel, magnetic dugmad
- **GSAP** (`ScrollTrigger`) — povezan sa Lenis scroll engine-om
- **Three.js** — suptilne wireframe geometrijske forme u hero sekciji
- **Lenis** — glatko skrolovanje
- **Shadcn/UI stil** — `Button`, `Accordion` komponente pisane u istom stilu i konvencijama
- **Lucide Icons**

## Pokretanje projekta

```bash
npm install
npm run dev
```

Sajt će biti dostupan na `http://localhost:3000`.

Za produkcioni build:

```bash
npm run build
npm start
```

## Struktura foldera

```
app/
  layout.tsx        — fontovi, metapodaci, SEO, globalni omotač (navigacija, footer)
  page.tsx           — redosled svih sekcija na početnoj strani
  globals.css         — baza, scrollbar, selection, focus-visible, reduced-motion
  sitemap.ts, robots.ts

components/
  layout/            — Navigation, Footer, LoadingScreen, ScrollProgress, CursorEffect,
                        SmoothScrollProvider (Lenis + GSAP ticker)
  sections/           — Hero, About, PracticeAreas, WhyUs, Process, Testimonials,
                        Blog, FAQ, Contact (svih 9 sekcija + hero)
  ui/                 — Button, Accordion, MagneticButton, RevealText, AnimatedCounter,
                        FloatingField, ThemeToggle, StructuredData (JSON-LD)

lib/
  data.ts             — sav tekstualni sadržaj sajta (usluge, FAQ, blog, izjave...)
  utils.ts            — cn() helper i formatiranje brojeva

types/
  index.ts            — deljeni TypeScript tipovi
```

## Šta je potrebno dopuniti pre lansiranja

Sajt je potpuno funkcionalan i bez ijednog "lorem ipsum" placeholder-a, ali pre javnog
lansiranja proverite/zamenite:

1. **Fotografije** — `About` sekcija trenutno koristi elegantan gradijentni okvir umesto
   stvarnog portreta advokata; dodajte pravu fotografiju u `public/` i zamenite blok u
   `components/sections/About.tsx`. Isto važi za slike blog članaka u `Blog.tsx`.
2. **Kontakt podaci** — adresa, telefon i email u `lib/data.ts` (`contactInfo`) su primer;
   unesite prave podatke kancelarije.
3. **Slanje forme** — `Contact.tsx` trenutno simulira slanje (`setTimeout`). Povežite je sa
   pravim API route-om (`app/api/contact/route.ts`) ili servisom poput Resend/SendGrid.
4. **Domen u metapodacima** — zamenite `https://www.advokatskakancelarija.rs` u
   `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` i `StructuredData.tsx` pravim domenom.
5. **Open Graph slika** — dodajte `public/og-image.jpg` (1200×630px).
6. **Istorija kancelarije** — vremenska linija u `About.tsx` sadrži generičke faze razvoja;
   zamenite ih stvarnim godinama i prekretnicama kancelarije.

## Pristupačnost i performanse

- Sve animacije poštuju `prefers-reduced-motion` (isključuju se automatski).
- Fokus stanja su vidljiva na tastaturi (`:focus-visible`).
- Custom kursor i magnetic dugmad se automatski isključuju na dodirnim ekranima.
- Kontrast boja usklađen sa WCAG AA smernicama za tamnu i svetlu temu.
- Struktura je pripremljena za 95+ Lighthouse — dodatna optimizacija slika (kada ih dodate)
  treba da koristi `next/image`.

## Deployment

Projekat je spreman za deploy na **Vercel** (najjednostavnija opcija za Next.js) —
samo povežite repozitorijum i Vercel će automatski prepoznati konfiguraciju. Radi jednako
dobro i na svakom drugom Node.js hostingu koji podržava Next.js 15.
