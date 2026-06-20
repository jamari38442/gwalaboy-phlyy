# GwalaBoy Phlyy — Site Conventions

Static site, no build step. Plain HTML/CSS/JS. Deployed via GitHub Pages from `main`.

## Versions
Four homepage variants share the same content and differ only in their hero/visual layer:
- `index.html` (A) + `store.html`
- `index-b.html` (B) + `store-b.html` (+ `styles-b.css`)
- `index-c.html` (C) + `store-c.html` (+ `styles-c.css`)
- `index-d.html` (D, "The Press Kit") + `store-d.html` (+ `styles-d.css`)

`styles.css` + `script.js` are **shared by all pages** — edit them to change every version at once. The `styles-*.css` files only restyle that version's hero/accents.

## CRITICAL: app-shell scroll model (do NOT regress)
The site uses an **app-shell** scroll model (the same approach as m.soundcloud.com) to fix the iOS Safari bug where page content scrolls up behind the status bar / notch.

- The document body does **not** scroll. `html, body { height: 100% }`, `body { overflow: hidden }`.
- Every page is structured:
  ```
  <body>
    <div class="app-shell">        <!-- flex column, height:100% -->
      <div class="topbar">…</div>  <!-- social bar — NON-scrolling (flex:none) -->
      <header class="nav">…</header><!-- nav — NON-scrolling (flex:none, position:relative) -->
      <div class="scroll-area">    <!-- THE ONLY scroller (flex:1; overflow-y:auto) -->
        …all page content + footer…
      </div>
    </div>
    <script src="script.js"></script>
  </body>
  ```
- The header lives in the non-scrolling layer, so content can never render behind the status bar.
  **Do not** make the header `position: sticky`/`fixed` inside the scroll, and **do not** let the body scroll again.
- `script.js` listens for `scroll` on `.scroll-area` (not `window`), and both IntersectionObservers
  (scroll-reveal, video autoplay) use `root: .scroll-area`. Any new scroll-based JS must target `.scroll-area`.

## iPhone / safe area
- Viewport meta includes `viewport-fit=cover`; `theme-color` is `#0a0807`.
- The social bar fills the notch with its **own background**: `height: calc(<h> + env(safe-area-inset-top))`
  and `padding-top: env(safe-area-inset-top)`. The dark strip at the very top is the status-bar fill — keep it.
- Tap targets ≥ 44×44px (Apple HIG). The burger is 44×44.

## Mobile menu
- Hamburger toggles `.nav.menu-open`. The dropdown is a **compact, right-aligned** panel
  (`min(74vw, 290px)`) with a capped height + `overflow-y:auto` so every item (including **Book**) stays visible.

## Color scheme (keep this dark/gritty trap palette)
`--ink #0a0807` (bg/menu) · `--ink-2 #100d0c` (social bar) · `--bone #f4ede0` (text) ·
`--gold #f4b73f` (accent) · `--blood #ff2d3d`.

## Copy rule
No hyphens in visible copy (client preference).

## Testing
No automated suite. For any mobile/layout change, render with headless Chromium (puppeteer) at iPhone
sizes and confirm: the body never scrolls (only `.scroll-area` does), the header stays put, all menu
items are visible, and there is no horizontal overflow.
