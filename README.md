# GWALABOY PHLYY — Official Site (review build)

Static site for North Miami artist **GwalaBoy Phlyy**, modeled on the Lil Baby / Gunna
artist-site format. Dark, gritty "POWERHOUSE" trap aesthetic. No build step, no dependencies.

## Three versions (pick one to ship)

| Homepage | Store page | Hero |
|----------|-----------|------|
| `index.html` (A) | `store.html` | Cinematic still hero, **large** title (his YouTube footage) |
| `index-b.html` (B) | `store-b.html` | Centered "Spotlight" hero, **smaller** outlined title |
| `index-c.html` (C) | `store-c.html` | **AI "Cover Story"** hero (cinematic art) + edition label, smaller gold title |

Shared: `styles.css`, `script.js`. Version layers: `styles-b.css`, `styles-c.css`.

## Sections
Top social bar · sticky nav (with logo) · hero · Latest/New Releases · Music (full
discography with cover art + Spotify embed) · Videos (autoplay-on-scroll YouTube) ·
Store CTA → dedicated store page · About (bio + interview video) · Booking · footer.

- **Videos autoplay** muted + loop as each tile scrolls into view (controls stay so the
  viewer can unmute / go fullscreen).
- **Store is its own page** per version, with category filters (All / Apparel / Headwear /
  Accessories) and a built-out grid (tees, hoodies, crewneck, snapback, beanie, rolling
  tray, cover-art tee, poster) including color variants.

## Images (`images/`)
Most product/cover/hero art is **AI-generated brand artwork** (Higgsfield / GPT Image 2)
used as polished placeholders:
- `hero-c.jpg` — cinematic North Miami scene (silhouette, no real likeness)
- `cover-*.jpg` — album/single cover art (powerhouse, going-colossal, big-ape, cartier, trap-do-numbers, trueztory, supa-dirty)
- `merch-*.jpg` — product shots (tee black/cream, cover tee, hoodie black/red, crewneck, cap, beanie, rolling tray, poster)
- `logo.png` — **placeholder** gorilla emblem. **Swap with his real logo** (used in nav, footer, store header, CTA).

Replace these with real cover art, official product photos, and press shots before launch.
Versions A and B use real **YouTube thumbnails** for hero/about; C uses the AI hero.

## ⚠️ Placeholders to fill before going fully live
- **Logo** — `images/logo.png` is AI placeholder; drop in the real logo (same filename = no code change).
- **Booking email** — `booking@gwalaboyphlyy.com` is a placeholder (Booking section + mailto).
- **Per-release deep links** — discography cards link to the artist profile / the exact video where known; swap in per-song links when available.
- **POWERHOUSE video** — Latest card's YouTube icon is `#` (no public id found yet).
- **Press photos** — A/B use YouTube frame grabs as stand-ins; add official high-res shots.
- **Store** — mock only; cart is a demo (no checkout). Wire to Shopify/Fourthwall later.

## Copy rule
No hyphens in visible copy (per client preference). Keep it that way when editing.

## Deploy (GitHub Pages)
Live (review): https://jamari38442.github.io/gwalaboy-phlyy/ — homepage is Version A.
View the others at `/index-b.html` and `/index-c.html`.

Repo is **public** (GitHub Pages free tier won't serve a private repo). `robots.txt` +
`noindex` keep it out of search engines, so the link is effectively unlisted. For a true
password wall, deploy to Netlify/Cloudflare Pages with password protection instead.
Push to `main` and Pages rebuilds automatically.
