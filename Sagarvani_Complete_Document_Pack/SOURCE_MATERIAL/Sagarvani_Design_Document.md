# Sagarvani — Design Document

Companion to `Sagarvani_PRD.md` and `Sagarvani_Tech_Stack.md`. This is what an AI coding tool (or a human) should read to build the actual UI.

---

## 1. Brand

**Logo:** the official Sagarvani mark — wave + sunrise + satellite dish, layered inside a circular badge, navy wordmark "SAGARVANI" with tagline "MULTI-AGENT OCEAN INTELLIGENCE SYSTEM" set below in a lighter weight. Use the logo on a light background as given; for the dark dashboard theme, use a white/cyan-recolored (monochrome) version of the mark so it doesn't fight the navy background — treat the supplied logo file as the source of truth for the icon shape, just retone it for dark surfaces.

**Voice:** confident, precise, calm-under-pressure — this is a disaster-management tool. Avoid hype language ("revolutionary," "game-changing"). Prefer "validated," "evidence-backed," "explainable."

---

## 2. Color System — "Electric Tundra"

Supplied palette, used as the entire foundation of the theme (this is a dark-UI product, which suits a satellite-ops dashboard well):

| Token | Hex | Role |
|---|---|---|
| `--color-bg-primary` | `#050A30` (Prussian Blue) | App background, nav, cards' base surface |
| `--color-accent-blue` | `#0000FF` (Blue) | Primary actions, active states, key data lines |
| `--color-accent-cyan` | `#00FFFF` (Cyan) | Highlights, live/active indicators, map glow, links |

Derived tones needed (not in the original 3, but required for a real UI — kept within the same family so the palette still reads as "Electric Tundra"):

| Token | Hex | Role |
|---|---|---|
| `--color-bg-elevated` | `#0B1550` | Cards, panels sitting above the base background |
| `--color-bg-sunken` | `#02051C` | Map canvas background, deepest layer |
| `--color-border` | `#1B2A6B` | Hairlines, card borders, dividers |
| `--color-text-primary` | `#F4F7FF` | Primary text on dark surfaces |
| `--color-text-secondary` | `#93A2E0` | Secondary/muted text, labels |
| `--color-success` | `#22E29A` | Validated / agent complete |
| `--color-warning` | `#FFB020` | Re-checking / degraded confidence |
| `--color-danger` | `#FF4D6D` | Alerts — cyclone, tsunami, high-wave warnings |

Usage rule: Cyan is a **signal color, not a filler color** — use it for things that are "live," "active," or "true right now" (an agent currently running, the user's current location pin, an active link). Don't use it for large blocks of static UI or it stops signaling anything.

---

## 3. Typography

The supplied font sheet ("Playful & Creative Fonts": Paradiso, Bropella, Liber, Raks, Ardent, Carl Brown, Narnia, Silver Garden, Beckan, Sometimes) is a display-font moodboard, not built for dense data UI — none of those faces stay legible at small sizes in a map/data dashboard. Creative call, split by job:

- **Display / headings** (hero headline, section titles, big numeric readouts): **Liber** — it's the boldest, most geometric, most "confident command-center" face in that sheet, and closest in spirit to the sharp/technical wordmark reference image you sent. Use it in the marketing site's big moments and the dashboard's key numeric callouts (wave height, wind speed, etc.).
- **Product wordmark ("Sagarvani" logotype only):** treat the actual delivered logo file as final — don't re-typeset the name. If a live-text version of the name is ever needed (e.g. a loading screen), use a font close to your second reference image's sharp, pointed serif/blackletter energy: **Unbounded** (Google Fonts) is the nearest free web-safe match for that geometric, high-contrast feel.
- **Body / UI / data text** (paragraphs, labels, table data, agent status text): **Inter** — not in the moodboard, added deliberately because none of the 10 display fonts are legible at 12–14px in a dense dashboard; Inter is free, highly legible at small sizes, and neutral enough to let Liber headlines stand out.

```css
--font-display: 'Liber', 'Unbounded', sans-serif; /* fallback to Unbounded if Liber unavailable as a web font */
--font-body: 'Inter', system-ui, sans-serif;
```

Type scale (rem, base 16px):
| Style | Size | Weight | Font |
|---|---|---|---|
| H1 (hero) | 3.5rem / 56px | 700 | Display |
| H2 (section) | 2.25rem / 36px | 700 | Display |
| H3 (card title) | 1.25rem / 20px | 600 | Display |
| Body | 1rem / 16px | 400 | Body |
| Small / label | 0.8125rem / 13px | 500, uppercase, letter-spacing 0.04em | Body |
| Data readout | 2rem / 32px | 700 | Display |

---

## 4. Layout & Grid

- 12-column grid, max content width 1280px on marketing pages, full-bleed on the dashboard.
- Base spacing unit: 8px. Section vertical rhythm on marketing pages: 96–120px between major sections (matches the airy Cosmoq template feel).
- Dashboard uses a fixed 3-zone layout: left conversation rail (~360px), center map canvas (fluid), right agent-status rail (~320px), with a slim top readout strip (~72px) spanning the center+right.
- Corner radius: 12px for cards, 8px for buttons/inputs, 999px for pills/badges.
- Elevation: no drop shadows on the dark theme — use a 1px `--color-border` outline plus a subtle inner glow (`box-shadow: 0 0 0 1px var(--color-border), 0 0 24px rgba(0,255,255,0.04)`) instead, it reads better on navy than shadow does.

---

## 5. Marketing Site — Section-by-Section Spec

Mirrors the Cosmoq reference structure, restyled and recopied for Sagarvani, pricing removed.

**Nav bar** — logo left; center/left links: Product · How it Works · The Agents · Impact · About; right: "Launch Console" solid cyan-on-blue button. Sticky, background goes from transparent to `--color-bg-elevated` on scroll.

**Hero** — small pill badge ("Prototype · Smart India Hackathon 2026") above headline, like Cosmoq's "Beta launching on 12th September" badge. Headline in Display font, e.g. "Ocean intelligence, explained." Subhead: one sentence describing the fused-data → validated-recommendation flow. Two CTAs: "Launch Console" (primary, filled cyan) and "See how it works" (secondary, outline). Hero visual: a stylized screenshot/mock of the dashboard (map + agent rail), glowing cyan accents on navy, echoing the satellite dashboard inspiration images directly.

**Data-source strip** — instead of Cosmoq's customer logo row, show a quiet row of the real data-source names/wordmarks: INCOIS · IMD · ISRO Bhuvan · Bhoonidhi · MOSDAC · BHASHINI + Sarvam AI. Muted/grayscale, on hover goes full color — signals credibility the way client logos do for Cosmoq.

**"What sets Sagarvani apart"** (3-card section, mirrors Cosmoq's Speed/Deep Capabilities/Control):
1. Multi-Agent Intelligence — fuses ocean, weather, GIS and risk data through specialized agents.
2. Re-planning on Contradictions — validates outputs and triggers re-analysis when sources disagree.
3. Explainable Recommendations — every answer ships with its evidence.

**"How it works"** — tabbed section (mirrors Cosmoq's Usage/Technology/Data tabs), 3 tabs: **Understand** (multilingual intent interpretation) · **Orchestrate** (planner + specialist agents run in parallel) · **Validate** (reasoning agent cross-checks before the visualizer renders the answer). Each tab swaps a supporting image (use simplified versions of the PPT's technical-approach diagram, one stage highlighted per tab).

**"The Agents"** — 6-card grid (Marine Data, Weather, GIS, Ocean Analytics, Risk, Spatial Reasoning), icon + 1-line description each, taken directly from the PPT's agent list.

**"3 steps to get started"** — numbered steps (mirrors Cosmoq's Steps-to-Use section): 1) Ask via Web/App, Helpline, or Portal → 2) ORCA orchestrates the right specialist agents → 3) Get a validated, explainable recommendation. Each step gets a small illustrative visual, alternating left/right like the reference.

**Reliability & Validation** (replaces Cosmoq's Data & Privacy/security section) — 3 bullets: Data Validation, Fallback Sources, Validation + Re-checking — sourced straight from the PPT's "Mitigation Ready" column. Dark panel, glowing shield/checkmark motif.

**Impact** — two stacked 3-card rows exactly as structured in the PPT: (Fishermen / Researchers / Maritime Operators) then (Social / Economic / Environmental).

**Access Everywhere** (replaces Cosmoq's Integration/partner-icon section) — 3 icons: Web/App, Helpline, Low-Bandwidth Portal, "one intelligence engine, three access paths."

**Final CTA banner** — "Step into Sagarvani" full-width dark panel with glow, single "Launch Console" button, mirrors Cosmoq's closing banner.

**Footer** — Navigation (Home/Product/Impact/About/Contact), Research & References (link out to the sources table from the PPT: INCOIS, IMD, ISRO Bhuvan/NRSC, Bhoonidhi, MOSDAC, BHASHINI+Sarvam), team credit (Team Helios Luna, DSU), social links if any.

**Removed entirely:** pricing/plans section and anything payment-related — do not leave a placeholder, just skip from "3 steps" straight to Reliability & Validation.

---

## 6. Dashboard — Component Spec

**Top readout strip** — 3–5 large numeric callouts in Display font (e.g. Sea State, Wind Speed, Wave Height, Active Alerts), styled like the Starlink reference's "Current Speed / Target Speed" readouts — big number, small label beneath, thin cyan accent line under the active/most-relevant one.

**Left — Conversation rail** — chat-style vertical list, user messages right-aligned in `--color-accent-blue` bubbles, Sagarvani's responses left-aligned in `--color-bg-elevated` bubbles with a small evidence-chip row beneath each answer ("3 sources · tap to expand"). Prompt input pinned to bottom, mic icon reserved (disabled/greyed for MVP — voice is a later phase).

**Center — Map canvas** — full-bleed dark map (`--color-bg-sunken` base) with a floating layer-toggle control (top-right of the map, small pill buttons: SST · Currents · PFZ · Cyclone · Wave Height). Active layer glows cyan. Map markers use `--color-danger` for warnings, `--color-accent-cyan` for the user's point of interest.

**Right — Agent status rail** — mirrors the reference "Towers" list exactly in structure: each row is an agent name + a status pill (Idle = grey outline, Running = pulsing cyan dot, Validated = green check, Conflict/Re-checking = amber). Six rows: Marine Data, Weather, GIS, Ocean Analytics, Risk, Spatial Reasoning.

**Reasoning & Validation panel** — collapsible drawer beneath or beside the conversation rail; when opened, shows a simple trace list ("Weather Agent → Risk Agent → Reasoning Agent: consistent, confidence 92%"), each line linking back to the evidence chip in the conversation.

**Alerts panel** — small persistent card, styled like the reference's "Traffic & Failures" incident chart but simplified to a stacked list of active warnings (color-coded by severity: cyclone = danger red, high-wave = warning amber), collapsible.

**History/session list** — thin list under or above the conversation rail, past queries as one-line entries, clicking restores that conversation + map state.

**Motion:** keep it minimal and purposeful — agent status pills pulse while running, map layers cross-fade (200ms) on toggle, no decorative animation. This is a safety tool; motion should communicate state, not delight.

---

## 7. Accessibility Notes

- Never rely on color alone for agent status or alert severity — pair every color with an icon/label (the pills above already do this).
- Maintain 4.5:1 contrast minimum for body text on `--color-bg-primary`/`--color-bg-elevated` — `--color-text-primary` (#F4F7FF) passes; verify any new text color against navy before using it.
- Map layer toggles and agent status must be reachable and readable via keyboard/screen reader, not just visual color-coding.
