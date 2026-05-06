# BRIEFING — MS Fußbodenheizung Website
> Baltify-Projekt | Stand: 2026-05-06 | Level 1 | SEO ≥ 90 % Pflicht | Letzter Commit: `354ce23`

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
| Haupt-Skript | `js/main.js` — Nav, GSAP-Reveal, FAQ, Zähler, Prozess-Timeline, Galerie-Toggle |
| Favicon | PNG 16/32/512 + Apple Touch + ICO — generiert mit Python/PIL |

---

## 4. Design-System (CSS-Variablen)

```css
--red:        #CC1F1F      /* Primärfarbe */
--red-dark:   #A81818
--red-alpha:  rgba(204,31,31,.12)
--ink:        #1A1A1A      /* Haupttext */
--ink2:       #3D3A33
--muted:      #9A9590
--border:     rgba(20,18,14,.1)
--page:       #F5F3EF      /* Seitenhintergrund */
--surface:    #EDEAE4      /* Alt-Sektionen */
--surface2:   #E6E2DA
--font-d:     'Anton'      /* Display/Headlines */
--font-b:     'DM Sans'    /* Body */
--r2: 8px  --r4: 12px  --r8: 18px
```

---

## 5. Sektionen — index.html (Reihenfolge)

1. **Navigation** — fixed, scrolled-Klasse bei Scroll, Hamburger Mobile
2. **Hero** — Vollbild, `leistung-fraesen.jpg` (echtes Arbeitsbild)
3. **Was wir machen** — 2-Spalten Split-Layout (links: sticky Text/Headline/CTA, rechts: saubere Liste mit Trennlinien + Icon pro Leistung) — KEIN Boxen-Design mehr
4. **Vorteile** — 5 Glassmorphismus-Cards (Flex, justify-center), Liquid-Glass Rot-Tint, kein roter Blob-BG
5. **Ablauf** — Vertikale Timeline (01–04), GSAP scroll-animiert
6. **CTA Split** — Text + Checkliste links, Portrait (portrait.jpg) rechts — zwischen Ablauf und Galerie. **Mobile:** großes Portrait ausgeblendet, stattdessen kleines rundes Portrait (42px, border-radius:50%) links neben der Telefonnummer-Zeile; Button + Telefonzeile stacken vertikal, beide gleich breit
7. **Galerie** — 39 Referenzfotos, 3-spaltig. Erste 6 sichtbar, restliche 33 per „Alle 39 Referenzen anzeigen ↓"-Button einblendbar (GSAP-Stagger). Button wechselt zu „Weniger anzeigen ↑" + scrollt zurück zum Grid-Anfang
8. **Stats** — 20.000+ m², 60+ Projekte, 1–2 Tage
9. **Bewertungen** — Karussell, 9 Google-Reviews, Dots, Touch-Swipe
10. **Analyse-Funnel** (`#analyse`) — 5-Schritt-Formular (Name/Tel → Bundesland → Gebäude/Boden → Fläche → Heizung) — ersetzt alten roten CTA-Banner
11. **Footer** — Logo, Nav, Kontakt, Legal, baltify-Credit

---

## 6. Kontaktformular (kontakt.html)

- **Dienst:** Web3Forms
- **API-Key:** `1c0fc614-77d8-49d1-b690-579847c622f9`
- **Felder:** Name, Telefon, E-Mail, Bundesland, Gebäudetyp, Bodenart, Fläche, Heizung vorhanden, Zusatz-Infos/Hinweise
- **Validierung:** Regex für Name (nur Buchstaben), Telefon (nur Ziffern/+/-/ ), E-Mail (Format)
- **Trust-Bar** über Footer: Google-Rating, 2 Kunden-Zitate
- Gleicher Funnel auch direkt auf index.html als `#analyse`-Sektion eingebettet

---

## 7. CTAs — überall vereinheitlicht

**Button-Text überall:** `Kostenlose Analyse anfragen`  
Gilt für: Nav (Desktop + Mobile), Hero, CTA Split, alle Seiten (index, leistungen, kontakt, ueber-uns).

---

## 8. SEO-Setup

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

## 9. Wichtige Inhalts-Entscheidungen

- **Preloader:** entfernt — Hero animiert direkt via GSAP
- **Benefit-Karten:** 5 Stück (Keine Aufbauhöhe, Günstiger heizen, Immobilie aufwerten, Leise & staubarm, Festpreis-Garantie)
- **Benefit-BG:** kein roter Blob-Hintergrund — Liquid-Glass Rot-Tint direkt auf Karte (backdrop-filter)
- **Benefit-Layout:** Flexbox mit `justify-content: center` → 5. Karte zentriert in letzter Reihe
- **"Was wir machen" Layout:** 2-Spalten Split (kein Box-/Card-Design mehr), links sticky, rechts Liste mit border-top/bottom Trennlinien
- **Prozess-Headline:** „Von der Anfrage zum warmen Boden"
- **Prozess-Schritt 02:** „Wir kommen persönlich zu Ihnen" (nicht „Salah kommt...")
- **Hero-Bild:** `leistung-fraesen.jpg` (echtes Arbeitsbild des Kunden)
- **Portrait:** `portrait.jpg` — Salah im CTA-Split (Desktop: große Spalte rechts, Mobile: kleines Rundbild 42px neben Telefonnummer, `.cta-phone-avatar`)
- **CTA Split Platzierung:** zwischen Ablauf und Galerie (logische Erzählung: Prozess → persönlicher Kontakt → Referenzfotos)
- **Roter CTA-Banner:** entfernt — ersetzt durch 5-Schritt Analyse-Funnel (`#analyse`)
- **Telefonnummer:** +49 1551 0924122 (auch WhatsApp)
- **Leistungen-Headline:** „Unser Ablauf — Schritt für Schritt"
- **Leistungen Intro-Absatz:** beginnt mit „Komplett aus einer Hand" (Option A)
- **Bilder komplett ausgetauscht** (2026-05-06): alle alten Stockfotos/Placeholder entfernt, 39 echte Kundenfotos eingebunden. Hero = `leistung-fraesen.jpg`

---

## 10. Bewertungs-Karussell (`js/reviews.js`)

9 Reviews (Inhaber ausgelassen), hardcoded. Alle 5-Sterne Google-Bewertungen.  
Auto-Play 4,5 s, pausiert bei Hover, Touch-Swipe, Dots, Prev/Next-Buttons.  
3 Karten Desktop / 2 Tablet / 1 Mobile.

**Dots-Fix:** `buildDots()` erstellt dynamisch `maxIndex() + 1` Dots (nicht fix 9), wird auch bei `window.resize` neu aufgebaut → Dots sind immer synchron mit tatsächlichen Carousel-Positionen.

---

## 11. Cookie-Banner (`js/cookie-banner.js`)

DSGVO-konform, LocalStorage-Persistenz.  
GA + Microsoft Clarity IDs auskommentiert — **noch nicht aktiviert** (Kunde hat keine IDs geliefert).

---

## 12. Offene Punkte / To-Do

| # | Was | Prio |
|---|---|---|
| 1 | Sitemap erstellen (sitemap.xml) | Mittel |
| 2 | Google Business Profile Verifizierung abschließen | Hoch |
| 3 | GA/Clarity IDs vom Kunden einholen + in cookie-banner.js eintragen | Mittel |
| 4 | ueber-uns.html Inhalt prüfen/vervollständigen | Mittel |
| 5 | Lighthouse / PageSpeed Score testen (≥ 90 Ziel) | Hoch |
| 6 | ~~Mobile CTA Split~~ | ✅ Erledigt |
| 7 | ~~Referenzfotos vom Kunden~~ | ✅ Erledigt (39 Fotos) |

---

## 13. Git-Workflow

```bash
cd "/Users/baltifymarketing/Documents/Kunden /MS-Fussbodenheizung/Website"
git add <dateien>
git commit -m "beschreibung"
git push
# Falls rejected: git pull --rebase && git push
```

Letzte Commits (neueste oben):
- `354ce23` — feat: alle Bilder ausgetauscht — 39 Referenzfotos, 4 neue Leistungsbilder, Hero auf leistung-fraesen
- `3b2236c` — docs: briefing aktualisiert — mobile CTA split, service redesign, dots fix
- `2a9ef13` — fix: mobile CTA split — kleines rundes Portrait neben Telefonnummer
- `6f01fb5` — feat: service section redesign (split layout) + reviews dots fix
- ältere: Web3Forms, Favicon, Reviews, Cookie-Banner, SEO

---

## 14. Dateistruktur

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
│   ├── main.js          ← Nav, GSAP, FAQ, Counter, Timeline, Galerie-Toggle
│   ├── reviews.js       ← Bewertungs-Karussell (Dots dynamisch)
│   └── cookie-banner.js ← DSGVO Cookie-Banner
└── img/
    ├── leistung-fraesen.jpg        ← Hero + Leistungen Schritt 1
    ├── leistung-rohrverlegung.jpg  ← Leistungen Schritt 2
    ├── leistung-anschliessen.jpg   ← Leistungen Schritt 3
    ├── leistung-verspachteln.jpg   ← Leistungen Schritt 4
    ├── referenz-01..39.jpg         ← Galerie (39 Kundenfotos)
    ├── portrait.jpg
    ├── ms-logo.png / logo-full.jpg
    ├── ueber-uns.jpg
    ├── estrich-zement/anhydrit/asphalt.jpg  ← Funnel-Auswahl
    └── favicon-*.png / favicon.ico / apple-touch-icon.png
```

---

*Dieses Briefing wird nach jedem größeren Arbeitsschritt aktualisiert.*
