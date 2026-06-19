# GWALABOY PHLYY — Official Site (review build)

Static website for North Miami artist **GwalaBoy Phlyy**, modeled on the Lil Baby /
Gunna artist-site format. Dark, gritty "POWERHOUSE" trap aesthetic. No build step,
no dependencies — just open the HTML.

## Three versions (pick one to ship)

| File | Hero | Imagery |
|------|------|---------|
| `index.html` | **Still** cinematic hero (his real YouTube footage) | Real YouTube thumbnails + styled type-covers |
| `index-video.html` | **Looping background video** hero (Gunna-style) | Same as A |
| `index-c.html` | **"Cover Story" edition** — cinematic AI hero | Higgsfield-generated album covers + merch photos + his YouTube footage |

All three share `styles.css` + `script.js`. Version C also loads `styles-c.css`.

## Sections
Sticky nav · Hero · Latest / New Releases · Music (full discography + Spotify embed) ·
Videos (YouTube grid) · Store (mock) · About / Bio · Booking · Footer.

## Content sources (gathered from the web)
- **Streaming:** Spotify `10xVDKM35cOzmiypmMpxYR`, Apple Music `1353274118`, Deezer `14215571`, SoundCloud `gwalaboymusic`
- **Socials:** Instagram `@gwalaboy_phlyy`, Facebook `onlyGwalaBoyPhlyy`, YouTube `GwalaBoyTV`
- **Videos:** Heavy Motion, Hunnids, Custo (feat. Yung Cal), No Budget, Interview
- **Catalog:** POWERHOUSE, Supa Dirty, Going Colossal, North Miami Big Ape, Cartier, Trap Do Numbers, TrueZtory, etc.

## ⚠️ Placeholders to fill before going fully live
These were not publicly available — search for `TODO`-style spots and swap real values:
1. **Booking email** — currently `booking@gwalaboyphlyy.com` (placeholder) in the Booking section + nav. Change to the real booking/management email.
2. **Per-release deep links** — discography cards link to the artist's Spotify/Apple profile and (where a video exists) the exact YouTube URL. Swap in per-song links when you have them.
3. **POWERHOUSE YouTube link** — the Latest feature card's YouTube icon is `#` (no public video id found). Add the real URL.
4. **Real press photos** — `index.html` / `index-video.html` use YouTube frame grabs as stand-ins; drop official high-res shots into `images/` and update the `<img src>` in the hero + About section.
5. **Store** — mock only. The cart is non-functional (no checkout). Wire to a real store (Shopify/Fourthwall) when ready.

## About the generated images (`images/`)
Version C uses **AI-generated brand artwork** (Higgsfield / GPT Image 2) as placeholders:
- `hero-c.jpg` — cinematic North Miami night scene (silhouette, no real likeness)
- `cover-powerhouse.jpg`, `cover-going-colossal.jpg`, `cover-big-ape.jpg` — album-cover art
- `merch-tee.jpg`, `merch-hoodie.jpg`, `merch-crewneck.jpg`, `merch-cap.jpg` — merch mockups

These are concept/brand visuals, **not** official artwork or photos of the artist —
replace with real cover art, product photos, and press shots before any public launch.

## Background video (index-video.html)
Uses a muted, looping YouTube embed (Heavy Motion) behind the hero, with a poster-image
fallback on mobile / reduced-motion. For the cleanest look, replace with a short silent
`.mp4` loop from the artist's videographer (drop in `images/` and switch the hero to a
`<video autoplay muted loop playsinline poster=...>` tag).

## Deploy (GitHub Pages, private repo — GitHub Pro)
```bash
gh repo create gwalaboy-phlyy --private --source=. --push
# then enable Pages: repo Settings → Pages → Deploy from branch → main / root
```
Privacy note: with Pro, Pages can publish from a **private repo**, but the live URL is
still reachable by anyone who has the link (a true login wall needs GitHub Enterprise).
`robots.txt` + the `noindex` meta keep it out of search engines — fine for an unlisted
review link. For a password wall, use Netlify/Cloudflare Pages password protection instead.
