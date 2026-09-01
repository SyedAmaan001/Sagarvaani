# Sagarvani — Homepage Build Spec (Cosmoq Replication, Wave Hero)

**Purpose of this document:** hand this directly to an IDE/coding agent (Cursor, Claude Code, v0, etc.) alongside `Sagarvani_Design_Document.md` and `Sagarvani_Tech_Stack.md`. This file locks down the **exact section order, layout mechanics, and interaction behavior** of https://cosmoq.framer.website/, rebuilt with Sagarvani's content, Electric Tundra palette, and Liber/Inter type — with **one deliberate deviation**: the hero's visual centerpiece is a custom animated **wave element**, not a dashboard screenshot.

Build with the stack already chosen: Next.js (App Router) + Tailwind + Framer Motion + shadcn/ui. Everything below assumes those.

---

## 0. Global Mechanics (apply site-wide)

- **Sticky nav** — transparent over the hero, transitions to solid `--color-bg-elevated` with a 1px bottom border once the user scrolls past ~80px. Animate via a scroll listener or Framer Motion's `useScroll` + `useTransform` on background opacity.
- **Scroll-reveal pattern** — nearly every section on the reference site fades/slides its content in as it enters the viewport. Standard: `opacity 0→1`, `translateY 24px→0`, `duration 0.5s`, `ease-out`, triggered once via `whileInView` (Framer Motion) with `viewport={{ once: true, margin: "-100px" }}`. Apply this to every section heading, card, and image unless stated otherwise below.
- **Section rhythm** — 96–120px vertical padding per section (desktop), 56–72px (mobile), per the design doc's spacing scale.
- **Buttons** — primary = filled `--color-accent-cyan` background with `--color-bg-primary` text (dark text on bright cyan for contrast) and a subtle scale-up (1.0→1.03) on hover, 150ms. Secondary = 1px `--color-border` outline, fills with `--color-bg-elevated` on hover.

---

## 1. Nav Bar

**Structure (left → right):** Sagarvani logo (icon + wordmark, recolored for dark bg) · center-left nav links: `Product` · `How it Works` · `The Agents` · `Impact` · `About` · right: `Launch Console` button (primary style).

**Mobile:** collapses to logo + hamburger; slide-down full-screen menu on open, matching the reference's mobile pattern (stacked links, button at bottom).

---

## 2. Hero (⚠️ deviates from reference — wave element replaces the dashboard screenshot)

**Reference mechanics to keep:**
- Small pill/badge sitting above the headline (reference: "Beta Version is launching on 12th September"). Sagarvani version: `Prototype · Smart India Hackathon 2026`, cyan text on a `--color-bg-elevated` pill with a 1px cyan-tinted border.
- Headline (Display/Liber font, H1 scale) + one-line subhead (Body/Inter, `--color-text-secondary`) + two CTAs (`Launch Console` primary, `See how it works` secondary) — same arrangement as reference.
- Below the CTAs, reference shows a large hero visual, then a muted logo strip, then a video. **Keep this three-tier vertical rhythm** (visual → logo strip → supporting video/loop) but swap tier one:

**Wave hero element (replaces the dashboard screenshot):**
- Full-width, ~55–65vh tall, sitting directly under the CTAs, edge-to-edge (breaks out of the max-width container like the reference's hero image does).
- Build as an **SVG or Canvas animated wave stack**: 3–4 overlapping sine-wave paths at different opacities/speeds, using the Electric Tundra gradient (`--color-bg-sunken` → `--color-accent-blue` → `--color-accent-cyan` glow on wave crests). Waves loop horizontally (`translateX` seamless loop, 8–20s duration, different speed per layer for parallax depth).
- Layer a subtle particle/glow field behind the waves (small cyan dots, low opacity, slow drift) to keep the "intelligence/data" feel from the original satellite-dashboard mood without literally showing a dashboard.
- Optional: a thin animated "signal ping" arc or dot sweeping across the wave crest, subtly implying the sonar/sensing concept — keep it minimal, this is a hero background, not a data widget.
- Implementation: an SVG component (`<WaveHero />`) driven by Framer Motion's `animate` with `repeat: Infinity, ease: "linear"`, OR a lightweight `<canvas>` with `requestAnimationFrame` if you want per-pixel gradient control. Either is acceptable — prefer SVG/Framer Motion first for simplicity in a vibe-coding pass.
- Respect `prefers-reduced-motion`: freeze the wave on a static gradient frame if set.

**Logo strip (tier two, matches reference exactly):** reference shows a horizontal auto-scrolling marquee of client logos beneath the hero image. Sagarvani version: same marquee mechanic, but scrolling data-source names/wordmarks — `INCOIS · IMD · ISRO Bhuvan · Bhoonidhi · MOSDAC · BHASHINI + Sarvam AI` — grayscale, low opacity, looping infinite marquee (CSS `@keyframes` translateX -50%, duplicate the list once for a seamless loop).

**Supporting video/loop (tier three, matches reference):** reference embeds a short looping product video here. Sagarvani version: a short looping screen-capture (once the dashboard exists) of the agent-orchestration flow; for the hackathon build, a placeholder looping animation of the agent-status rail (from the Design Document) is fine.

---

## 3. "What Sets Sagarvani Apart" (reference: "What sets COSMOQ apart")

- Section eyebrow label ("EXCEPTIONALITIES" in reference) → Sagarvani: `WHY SAGARVANI`.
- 3 stacked/sticky feature blocks, each with a heading + one-line description + supporting image, alternating or stacked vertically exactly as reference (reference uses a pinned-image-while-text-scrolls pattern on desktop — replicate with `position: sticky` on the image column if doing a 2-column layout, or a simple 3-card grid on mobile).
- Content: **Multi-Agent Intelligence** / **Re-planning on Contradictions** / **Explainable Recommendations** (from the Design Document, section 5).

---

## 4. CTA Banner (reference: "Ready to get started?")

- Full-width dark panel, centered heading + subhead, two buttons (`Launch Console`, `Talk to the team`). Simple fade-in on scroll, no other special mechanic.

---

## 5. "How It Works" — Tabbed Feature Section (reference: Usage/Technology/Data tabs)

- 3 clickable tab labels (icon + word) — reference: Usage / Technology / Data. Sagarvani: **Understand / Orchestrate / Validate**.
- Clicking a tab cross-fades the content panel (heading, description, bullet tags, supporting image) — reference uses a simple opacity cross-fade, ~300ms, content shifts slightly on the Y-axis too (8px). Use `AnimatePresence mode="wait"` in Framer Motion for this.
- Each tab's supporting image should be a simplified version of the PPT's technical-approach diagram with that stage highlighted (per the Design Document, section 5).
- Auto-advance is optional (reference does not appear to auto-advance); manual click is sufficient.

---

## 6. "The Agents" (reference: "Multiple Products" tabbed + grid section)

- Reference has a top-level tab switch (Automation/Banking/Recruitment in the reference) driving one large feature block, **then** a secondary 2×2 icon-card grid below it (Healthcare/Marketing/Ecommerce/Development in reference).
- Sagarvani simplification: skip the top-level tab switch (not enough distinct "modes" to justify it) and go straight to a clean **6-card grid** — Marine Data Agent, Weather Agent, GIS Agent, Ocean Analytics Agent, Risk Agent, Spatial Reasoning Agent — icon + name + one-line description each, same card style as the reference's small grid cards (icon top, label, one-line description, subtle border, hover lift `translateY(-4px)`).

---

## 7. "3 Steps to Get Started" (reference: "3 Steps to Kickstart")

- Numbered steps (`01 / 02 / 03`), each step alternates text-left/image-right then image-left/text-right (reference does this). On desktop, reference pins the image while the corresponding text block scrolls into view — replicate with a sticky image column per step, or simplify to a straightforward alternating grid if sticky-scroll proves complex in the coding pass (acceptable simplification).
- Content (from PRD section 4A.7): 1) Ask via Web/App, Helpline, or Portal → 2) ORCA orchestrates the right specialist agents → 3) Get a validated, explainable recommendation.

---

## 8. Reliability & Validation (reference: "Multi-Layer Security")

- Reference shows a heading/subhead + 3 label chips + a stacked/fanned set of image cards + one large supporting background image. Sagarvani: same fanned-card visual treatment, labels = **Data Validation · Fallback Sources · Validation + Re-checking** (from the PPT's "Mitigation Ready" column).

---

## 9. Testimonials → Impact Cards (reference: auto-playing testimonial carousel)

Sagarvani has no customer testimonials yet — **repurpose the carousel mechanic, not the content type**. Build the same auto-advancing horizontal carousel (reference: cards auto-cycle, manual prev/next arrows, infinite loop) but populate it with the **Impact** content instead of quotes:
- Card format: bold headline stat/benefit + short description + persona tag (Fishermen / Researchers / Maritime Operators, then Social / Economic / Environmental) — 6 cards total, auto-advancing, same arrow controls as reference.

---

## 10. Pricing — **omit entirely**

Do not build this section. Go directly from the Impact carousel to the FAQ. No placeholder, no "coming soon."

---

## 11. FAQ (reference: accordion)

- Standard accordion, one item open at a time, chevron rotates 180° on open, height animates via Framer Motion's `AnimatePresence` + `layout` or a simple `max-height` transition.
- Suggested questions (adapt freely): What is Sagarvani? · How does ORCA validate its answers? · What data sources power it? · How do I access it without a smartphone? · Is this available now or a prototype? · How is this different from checking weather apps separately?

---

## 12. "Access Everywhere" (reference: Integration/partner-icons section)

- Reference: heading + subhead + row of partner icons + one large supporting screenshot. Sagarvani: 3 icons only — **Web/App · Helpline · Low-Bandwidth Portal** — with the line "One intelligence engine, three access paths." Keep the same icon-row + big supporting visual layout even with fewer icons (center them, don't stretch to fill).

---

## 13. Final CTA Banner (reference: "Step Into COSMOQ")

- Full-bleed dark section, large centered heading, one CTA button, decorative background line/glow graphic (reference uses a thin decorative SVG line across the panel — recreate with a simple faint cyan curved-line SVG, echoing the wave motif from the hero for visual bookending).

---

## 14. Footer

- 4-column layout matching reference: **Navigation** (Home/Product/Impact/About/Contact) · **Documentation** → relabel **Research & References** (link to the data-source table: INCOIS, IMD, ISRO Bhuvan/NRSC, Bhoonidhi, MOSDAC, BHASHINI+Sarvam) · **Other** (kept minimal) · **Social Connect**. Bottom bar: "All rights reserved — Team Helios Luna, Dayananda Sagar University" + credit line.

---

## 15. What NOT to copy from the reference

- No pricing/plans page or section.
- No fake customer logos or testimonial quotes attributed to real companies — use the repurposed Impact carousel instead (section 9).
- No literal "AI agent marketplace for enterprise" positioning language — Sagarvani is a public-good disaster-management tool, not an enterprise SaaS product; adapt all copy tone accordingly (see Voice, in `Sagarvani_Design_Document.md` §1).

---

## 16. Build Order (suggested, for an IDE agent working section-by-section)

1. Design tokens (colors/type from the Design Document) as Tailwind config + CSS variables
2. Nav + Footer shells
3. Hero incl. the custom `<WaveHero />` component
4. Static sections top-to-bottom (Why Sagarvani → CTA banner → How it Works tabs → Agents grid)
5. Interactive sections (Steps, Reliability fan-cards, Impact carousel, FAQ accordion)
6. Access Everywhere + Final CTA
7. Responsive pass (mobile nav, stacked grids, marquee/carousel touch-swipe)
8. Reduced-motion pass (freeze wave, disable marquee/carousel autoplay) for `prefers-reduced-motion`
