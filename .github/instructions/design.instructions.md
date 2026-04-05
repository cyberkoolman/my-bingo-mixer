---
description: "Use when designing, restyling, or building any UI component for Bingo Mixer. Defines the Space Galaxy Glow visual language: fonts, colors, CSS class conventions, animation approach, and what to avoid."
applyTo: "src/**/*.{tsx,css}"
---

# Bingo Mixer Design Guide — Space Galaxy Glow

## Visual Identity

**Theme:** Deep-space dark with neon glow accents. Atmosphere over flatness. Every surface should feel like it is floating in a galaxy.

**Typography:**
- **Display / headings / buttons:** `Orbitron` (Google Fonts) — weights 600, 700, 900. Letter-spacing 0.12em–0.35em. ALL CAPS always.
- **Body / labels / list items:** `Rajdhani` (Google Fonts) — weights 400, 500, 600. Letter-spacing 0.02em–0.1em.
- Never use Inter, Roboto, Arial, system-ui, or any generic sans-serif for anything visible.
- Both fonts are loaded in `index.html`; do not add additional font imports.

**Color palette** (all defined as CSS variables in `index.css @theme`):
| Role | Value | Used on |
|---|---|---|
| Background | `#04060e` | `body` |
| Card surface | `rgba(6,12,26,0.82)` | glass cards |
| Cyan accent | `#00e5ff` | borders, glow, FREE SPACE, neon buttons |
| Violet | `#aa00ff` / `rgba(100,0,200,...)` | marked squares glow |
| Supernova gold | `#ffaa00` | win state, modal title, bingo banner |
| Star text | `#c8e8ff` | primary text |
| Dim text | `#4a6a84` | secondary labels, back button |

## CSS Architecture

Design lives in `src/index.css` as named CSS classes — **not** as Tailwind utility strings.
Tailwind utilities are used only for layout (flex, grid, padding, width) and spacing. Never use Tailwind for colors, borders, shadows, or fonts; those come from named CSS classes.

**Named class conventions:**
- `.galaxy-*` — layout-level elements (header, banner, instructions, subtitle, title)
- `.glass-card` — the frosted glass container component
- `.neon-btn` — the single button style across all screens
- `.sq` + `.sq-{state}` — bingo square base + state variant (default, marked, winning, free)

## Component Patterns

**Backgrounds:** Always layered. Body uses tiled SVG starfield + multiple `radial-gradient` nebula layers. Never a solid color.

**Glass cards:** `background: rgba(6,12,26,0.82)`, `border: 1px solid rgba(0,200,255,0.16)`, `backdrop-filter: blur(12px)`, inner top highlight via `inset 0 1px 0 rgba(0,229,255,0.1)`.

**Glow borders vs shadows:** Use `box-shadow` with `rgba` for outer glow + `inset` inner glow on interactive and state-active elements. Never use solid colored drop shadows.

**Neon button (`.neon-btn`):** Transparent background with cyan border + outer `box-shadow` glow. Orbitron font. Hovering intensifies glow; pressing fills with translucent cyan→violet gradient.

## Bingo Square States

| State | Class | Visual |
|---|---|---|
| Default | `.sq-default` | Dark glass, dim cyan border |
| Marked | `.sq-marked` | Violet inner glow, purple border |
| Winning line | `.sq-winning` | Gold border + animated supernova pulse |
| FREE SPACE | `.sq-free` | Cyan glow, Orbitron font, disabled |

Checkmark (✓) on marked squares uses `color: #aa00ff` with `text-shadow` glow — never a plain black check.

## Animations

CSS-only animations defined as `@keyframes` in `index.css`. Use sparingly — only for high-impact moments:

| Name | Target | Effect |
|---|---|---|
| `title-glow` | `.galaxy-title` | Breathing cyan/violet filter on the main title |
| `supernova` | `.sq-winning` | Gold box-shadow pulse on winning squares |
| `bingo-pulse` | `.galaxy-modal-title` | BINGO! text glow intensifies and fades |
| `modal-in` | `.galaxy-modal-card` | Spring-bounce entry (`cubic-bezier(0.34,1.56,0.64,1)`) |
| `banner-scroll` | `.galaxy-bingo-banner` | Subtle opacity breathe on the win banner |

Do not add new animations for micro-interactions on individual squares or hover states — keep motion purposeful, not fidgety.

## What to Avoid

- Light backgrounds or white surfaces anywhere in the game UI
- Generic font choices (Inter, system-ui, etc.)
- Flat solid-color buttons
- Tailwind color utilities (`text-gray-*`, `bg-white`, `border-gray-*`) — use named CSS classes
- Adding new `@theme` tokens without a clear semantic role
- Mixing the design system — do not add new one-off inline styles; extend the named CSS classes instead
