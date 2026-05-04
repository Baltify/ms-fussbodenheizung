# BRIEFING — MS Fußbodenheizung Website
> Baltify-Projekt | Stand: 2026-05-04 | Level 1 | SEO ≥ 90 % Pflicht

---

## 1. Kundendaten

| Feld | Wert |
|---|---|
| Firma | MS Fußbodenheizung |
| Inhaber | Salah Mahdi Saleh |
| Telefon (WhatsApp) | +49 1551 0924122 |
| E-Mail | info@ms-fussbodenheizung.de |
| Adresse | Hauptstraße 31, 51674 Wiehl |
| Domain | www.ms-fussbodenheizung.de |
| GitHub Repo | https://github.com/Baltify/ms-fussbodenheizung |
| Hosting | GitHub Pages (Branch: main) |

---

## 2. Projekt-Übersicht

Statische 4-seitige Handwerker-Website (HTML/CSS/JS, kein Framework).  
Ziel: professioneller Webauftritt für nachträgliches Fußbodenheizungs-Einfräsen, deutschlandweit.

### Seiten
| Datei | Status | Titel |
|---|---|---|
| `index.html` | ✅ Live | Startseite |
| `leistungen.html` | ✅ Live | Leistungen |
| `kontakt.html` | ✅ Live | Kontakt |
| `ueber-uns.html` | ✅ Live | Über uns |
| `impressum.html` | ✅ Live | Impressum |
| `datenschutz.html` | ✅ Live | Datenschutz |

---

## 3. Tech-Stack

| Was | Womit |
|---|---|
| Markup | HTML5, semantisch |
| Styling | `css/main.css` — custom, CSS-Variablen, Grid/Flex |
| Animationen | GSAP 3.12.5 + ScrollTrigger (CDN) |
| Schriften | Anton (Headlines), DM Sans (Body) — Google Fonts |
| Kontaktformular | Web3Forms (API-Key: `1c0fc614-77d8-49d1-b690-579847c622f9`) |
| Bewertungen-Karussell | `js/reviews.js` — Vanilla JS, 9 Reviews, Auto-Play 4,5 s |
| Cookie-Banner | `js/cookie-banner.js` — DSGVO, LocalStorage |
| Haupt-Skript | `js/main.js` — Nav, GSAP-Reveal, FAQ, Zähler, Prozess-Timeline |
| Favicon | PNG 16/32/512 + Apple Touch + ICO — generiert mit Python/PIL |

---

## 4. Design-System (CSS-Variablen)

```css
--red:        #CC1F1F      /* Primärfarbe */
--red-dark:   #A81818
--ink:        #1A1A1A      /* Haupttext */
--ink2:       #3D3A33
--page:       #F5F3EF      /* Seitenhintergrund */
--surface:    #EDEAE4      /* Alt-Sektionen */
--font-d:     'Anton'      /* Display/Headlines */
--font-b:     'DM Sans'    /* Body */
```

---

## 5. Sektionen — index.html (Reihenfolge)

1. **Navigation** — fixed, scrolled-Klasse bei Scroll, Hamburger Mobile
2. **Hero** — Vollbild, `hero-ref01.jpg`, Trust-Strip unten
3. **Was wir machen** — 4 Service-Cards (Fräsen, Rohrverlegung, Verspachteln, Naturstein)
4. **Vorteile** — 5 Glasmorphismus-Cards (3-spaltig), Liquid-Glass Rot-Tint, kein roter Blob-BG
5. **Ablauf** — Vertikale Timeline (01–04), GSAP scroll-animiert
6. **Galerie** — 6 Referenz-Fotos, 3-spaltig
7. **Stats** — 20.000+ m², 60+ Projekte, 1–2 Tage
8. **Bewertungen** — Karussell, 9 Google-Reviews, Dots, Touch-Swipe
9. **CTA Split** — Text + Checkliste links, Portrait rechts (2-spaltig Grid)
10. **CTA Banner** — Roter Hintergrund, Abschluss-Call-to-Action
11. **Footer** — Logo, Nav, Kontakt, Legal, baltify-Credit

---

## 6. Kontaktformular (kontakt.html)

- **Dienst:** Web3Forms
- **API-Key:** `1c0fc614-77d8-49d1-b690-579847c622f9`
- **Felder:** Name, Telefon, E-Mail, Bundesland, Gebäudetyp, Bodenart, Fläche, Heizung vorhanden, Zusatz-Infos/Hinweise
- **Validierung:** Regex für Name (nur Buchstaben), Telefon (nur Ziffern/+/-/ ), E-Mail (Format)
- **Trust-Bar** über Footer: Google-Rating, 2 Kunden-Zitate

---

## 7. SEO-Setup

| Was | Status |
|---|---|
| Meta Title + Description — alle Seiten | ✅ |
| Canonical Tags | ✅ |
| Open Graph Tags | ✅ |
| JSON-LD LocalBusiness Schema (index.html) | ✅ |
| JSON-LD BreadcrumbList (leistungen.html) | ✅ |
| robots meta (index, follow) | ✅ |
| Sitemap | ❌ noch nicht erstellt |
| Google Search Console | ✅ Konto existiert, Domain eingetragen |
| Google Business Profile | ⚠️ In Bearbeitung (Verifizierung ausstehend) |
| Favicon (alle Formate) | ✅ |

---

## 8. Wichtige Inhalts-Entscheidungen

- **Preloader:** entfernt — Hero animiert direkt via GSAP
- **Benefit-Karten:** 5 Stück (Keine Aufbauhöhe, Günstiger heizen, Immobilie aufwerten, Leise & staubarm, Festpreis-Garantie)
- **Benefit-BG:** kein roter Blob-Hintergrund — stattdessen Liquid-Glass Rot-Tint direkt auf Karte
- **Prozess-Headline:** „Von der Anfrage zum warmen Boden"
- **Prozess-Schritt 02:** „Wir kommen persönlich zu Ihnen" (nicht „Salah kommt...")
- **Hero-Bild:** `hero-ref01.jpg` (Referenzbild, kein Stockfoto)
- **Portrait:** `portrait.jpg` — Salah im CTA-Split
- **Sektionen „Was wir machen" vs. „Ablauf":** beide bleiben — verschiedene Inhalte (Leistungen vs. Prozess)
- **Telefonnummer:** +49 1551 0924122 (auch WhatsApp)
- **Leistungen-Headline:** „Unser Ablauf — Schritt für Schritt"
- **Leistungen Intro-Absatz:** beginnt mit „Komplett aus einer Hand" (Option A)

---

## 9. Bewertungs-Karussell (`js/reviews.js`)

9 Reviews (Inhaber ausgelassen), hardcoded. Alle 5-Sterne Google-Bewertungen.  
Auto-Play 4,5 s, pausiert bei Hover, Touch-Swipe, Dots, Prev/Next-Buttons.  
3 Karten Desktop / 2 Tablet / 1 Mobile.

---

## 10. Cookie-Banner (`js/cookie-banner.js`)

DSGVO-konform, LocalStorage-Persistenz.  
GA + Microsoft Clarity IDs auskommentiert — **noch nicht aktiviert** (Kunde hat keine IDs geliefert).

---

## 11. Offene Punkte / To-Do

| # | Was | Prio |
|---|---|---|
| 1 | Sitemap erstellen (sitemap.xml) | Mittel |
| 2 | Google Business Profile Verifizierung abschließen | Hoch |
| 3 | GA/Clarity IDs vom Kunden einholen + in cookie-banner.js eintragen | Mittel |
| 4 | ueber-uns.html Inhalt prüfen/vervollständigen | Mittel |
| 5 | Lighthouse / PageSpeed Score testen (≥ 90 Ziel) | Hoch |
| 6 | Weitere Referenzfotos vom Kunden anfordern | Niedrig |

---

## 12. Git-Workflow

```bash
cd "/Users/baltifymarketing/Documents/Kunden /MS-Fussbodenheizung/Website"
git add <dateien>
git commit -m "beschreibung"
git push
# Falls rejected: git pull --rebase && git push
```

Letzte Commits (neueste oben):
- `4242753` — fix: center benefit cards row + wir kommen persönlich
- `92830a1` — preloader entfernt, 5 benefit cards, CTA split, prozess überarbeitet
- ältere: Web3Forms, Favicon, Reviews, Cookie-Banner, SEO

---

## 13. Dateistruktur

```
Website/
├── index.html
├── leistungen.html
├── kontakt.html
├── ueber-uns.html
├── impressum.html
├── datenschutz.html
├── BRIEFING.md          ← diese Datei
├── css/
│   └── main.css         ← einzige CSS-Datei, alles drin
├── js/
│   ├── main.js          ← Nav, GSAP, FAQ, Counter, Timeline
│   ├── reviews.js       ← Bewertungs-Karussell
│   └── cookie-banner.js ← DSGVO Cookie-Banner
└── img/
    ├── hero.jpg / hero-ref01.jpg / hero-ref02.jpg
    ├── portrait.jpg
    ├── ms-logo.png
    ├── ueber-uns.jpg
    ├── referenz-01..06.jpg
    ├── leistung-*.jpg
    ├── estrich-*.jpg
    └── favicon-*.png / favicon.ico / apple-touch-icon.png
```

---

*Dieses Briefing wird nach jedem größeren Arbeitsschritt aktualisiert.*
