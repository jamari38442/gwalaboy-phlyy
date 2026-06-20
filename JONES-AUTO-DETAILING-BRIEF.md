# Jones Auto Detailing — Website Brief & Build Plan

> Carry this file into the new repo (`jones-auto-detailing`). It is the source of
> truth for the build. Drop it in the repo root as `BRIEF.md` and a new chat can
> pick up from here.

---

## 1. Business profile (confirmed from business card)

- **Business name:** Jones Detailing — *Mobile Car Wash & Detailing*
  - (Repo/site project name: **jones-auto-detailing**)
- **Owner / contact:** Jake Jones
- **Phone:** 561‑590‑3189  (tap‑to‑call + tap‑to‑text)
- **Email:** jakebjones21@gmail.com
- **Area:** Palm Beach County, FL (area code 561 — West Palm Beach region). *Exact service radius TBD.*
- **Brand look (from card):** black background, electric/sky blue + silver accents,
  italic "JONES" wordmark with a "Detailing" script overlay and a circular emblem
  containing a stylized car. Mobile / he comes to you.

### Services (card front)
Washing · Waxing · Buffing · Vacuuming · Pressure Washing · Shampooing

### Packages (card back)
**Basic Wash Package**
- Hand Wash & Dry
- Wheels Cleaned
- Tires Dressed
- Windows Cleaned
- Interior Vacuum
- Wipe Down

**Wash & Wax Package**
- Everything in Basic Wash, plus:
- All Exterior Trim Dressed
- Wax or Sealant Applied to Paint Surfaces

**Interior Only Package**
- Vacuum
- Interior Wipe Down
- Carpets & Mats Cleaned
- Trim & Vinyl Cleaned & Dressed
- Leather Cleaned & Dressed
- Interior Windows Cleaned

---

## 2. Decisions locked in (from client)

| Topic | Decision |
|---|---|
| **Repo structure** | One repo per client project (separate repos, not a monorepo). This is project #2. |
| **New repo** | `jones-auto-detailing`, **private**, initialized with README. |
| **Pricing display** | **No prices.** Show package *contents* only; pricing handled via "Request a quote" / call / text. |
| **Booking / contact** | Tap‑to‑**call** + tap‑to‑**text** buttons **and** a short **"Request a Quote" form** that emails Jake. |
| **Photos** | Use **Jake's real Instagram photos** (must be uploaded — see blockers). SVG/CSS placeholders until they arrive. No fake/AI "result" photos. |
| **Logo** | **Recreate clean as SVG** from the business card (matches existing brand). Swap for an official file if Jake provides one. |

---

## 3. OUTSTANDING — needed to finish (blockers ⛔ vs. nice‑to‑have ☐)

⛔ **Instagram photos** — IG handle confirmed: **@jonesdetailiing**
   (https://www.instagram.com/jonesdetailiing/). Instagram blocks automated fetching
   (returns HTTP 403), so Claude **cannot download the photos itself**. Jake/owner must
   **download the chosen photos and upload them to the chat** (hero shot, before/afters,
   action shots). The handle is used for the profile link in the footer.
⛔ **Quote form destination** — confirm the form should email **jakebjones21@gmail.com**,
   and set up a free **Formspree** (or similar) endpoint, OR fall back to a `mailto:` link.
☐ **Yelp page URL** — if he has one, paste the exact link so we can show his rating/reviews
   and add a "Review us on Yelp" button. (Could not be located by search.)
☐ **Service area** — how far does he travel? (e.g. "all of Palm Beach County" / specific cities / mile radius).
☐ **Hours / availability** — days + hours, by appointment only?
☐ **Domain** — does Jake have/want a custom domain, or use a free host subdomain for now?
☐ **Other socials / Google Business** — any Facebook, Google listing, TikTok to link.
☐ **Extra detail** — does he do boats/RVs/motorcycles (card art hints at it)? Headlight
   restoration, engine bay, clay bar, ceramic? Confirm full service list.

---

## 4. Image / asset plan

**No image generator is available**, and fake result photos would misrepresent a real
business — so the plan uses **hand‑built SVG/CSS art** + **Jake's real photos**.

**I will build (vector, no photos needed) — ~8–10 assets:**
1. Logo recreation (SVG wordmark + emblem)
2. Favicon / app icon (derived from logo)
3. 6× service icons (wash, wax, vacuum/interior, tires/wheels, pressure wash, shampoo)
4. Hero background treatment (CSS gradient + subtle SVG pattern)
5. Section dividers / accents
6. Social share / Open Graph image (built from logo + tagline)

**Photos to request from Jake (upload to chat) — ideally ~10–14 to choose from:**
- 1 strong **hero** shot (a finished, glossy car — his best work)
- 3–4 **before/after** pairs (the #1 trust driver for detailing)
- 2–3 **action** shots (Jake working, foam/pressure wash, interior)
- 1 optional **portrait** of Jake for the About section
- Any shot showing his **mobile setup** (van/equipment) for the "we come to you" angle

Until those arrive: polished SVG/CSS placeholders so the layout is presentable.

---

## 5. Site structure (single‑page, mobile‑first, conversion‑focused)

1. **Top bar** — phone + "Mobile · We come to you · Palm Beach County"
2. **Nav** — logo + Services / Packages / Gallery / Quote; sticky CALL button
3. **Hero** — logo, "Mobile Car Wash & Detailing", subhead, **Call** + **Text** + **Get a Quote** CTAs
4. **Services** — icon grid of the 6 services
5. **Packages** — 3 cards (Basic Wash / Wash & Wax / Interior Only) listing contents, each with a "Request a quote" CTA. **No prices.**
6. **Gallery / Before‑After** — his real photos (placeholder grid for now)
7. **Why Jones / About** — mobile convenience, quality, local; about Jake
8. **Service area** — Palm Beach County coverage statement (+ map later)
9. **Reviews** — Yelp/Google rating + review button (pending links)
10. **Quote form** — name, phone, vehicle, service interest, message → emails Jake
11. **Footer** — phone, text, email, IG link, hours, copyright

---

## 6. Tech & conventions

- **Static site, no build step.** Plain HTML / CSS / JS (mirrors the studio's existing
  convention from the gwalaboy‑phlyy project). Easy to hand off / migrate to WordPress later.
- **Mobile‑first**, dark brand palette (black + sky blue + silver) to match the card.
- Accessible tap targets (≥44×44), semantic HTML, fast (no heavy frameworks).
- **Brand palette (draft, from card):**
  - `--ink #0a0c10` (near‑black bg)
  - `--blue #4ea3ff` (electric/sky blue accent)
  - `--blue-deep #1b6fd6`
  - `--silver #c9d2dc` (chrome/metallic text accents)
  - `--bone #f4f6f9` (primary text)
- Quote form via **Formspree** (free tier) → emails Jake; `mailto:` fallback.
- Reuse the gwalaboy app‑shell scroll model only if iOS notch issues appear; otherwise
  standard responsive layout is fine for this site.

---

## 7. Repo setup (do this first in the new session)

1. Jake's account owner creates the repo (Claude's integration lacks repo‑create perms here):
   - GitHub → New repo → name **`jones-auto-detailing`** → **Private** → Add README.
   - or: `gh repo create jones-auto-detailing --private --add-readme`
2. In the new chat, **switch/add** the `jones-auto-detailing` repo to the session.
3. Add this file as `BRIEF.md` to the repo root.
4. Develop on a feature branch, commit, push.

---

## 8. Immediate next steps (new chat)

1. Confirm repo created + added to session.
2. **Get Jake's photos uploaded** + IG handle + (optional) Yelp link.
3. Confirm quote‑form email + decide Formspree vs. mailto.
4. Build: scaffold `index.html`, `styles.css`, `script.js`, logo SVG, icons.
5. Wire up the quote form.
6. Test at iPhone + desktop sizes; verify no horizontal overflow, working CTAs.
7. Push; discuss hosting/domain.

---

*Prepared from: 2 business‑card photos. Web search could not confirm a specific
Yelp/Instagram for this exact Jake Jones (561‑590‑3189) — many unrelated "Jones"
detailers exist in other FL cities, so nothing was attributed without confirmation.*
