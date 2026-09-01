# ANTIGRAVITY EXECUTION ORDER

Follow this order to minimize rework.

## Phase 1 — inspect existing app

Before creating files:

- identify framework and router,
- inspect existing Tailwind setup,
- inspect existing animation utilities,
- inspect whether GSAP/OGL/animejs are already installed,
- reuse existing `cn` utility if present,
- reuse existing WebGL fallback/error boundary if present.

Do not duplicate existing infrastructure.

## Phase 2 — dependencies

Install only what is actually absent:

```bash
npx componentry@latest add webgl-liquid
npx componentry@latest add scroll-split-card
npm i gsap
npm i ogl
npm i animejs
```

## Phase 3 — implement low-risk reusable pieces

1. `BorderGlow`
2. `DepthCarousel`
3. `WebGLLiquid`
4. `GradientWaves`
5. `ScrollSplitCard` after inspecting its real source

## Phase 4 — compose sections

### Hero

```tsx
<WebGLLiquid
  title="..."
  subtitle="..."
  description="..."
>
  ...
</WebGLLiquid>
```

### Agents

Use real agent images:

```tsx
<DepthCarousel
  items={agentItems}
  depth={220}
  spread={90}
  tilt={22}
  perspective={1400}
  visibleCards={4}
  falloff={0.2}
  blur={6}
  loop
  showControls
  showIndicators
/>
```

Use `BorderGlow` for cards that need active edge lighting.

### Waves

Use `GradientWaves` as a visual background layer or dedicated visual section.

### Scroll split

Use the actual supplied/component package implementation instead of reconstructing unknown internals.

## Phase 5 — visual QA

Test:

- 1440px desktop,
- 1280px desktop,
- tablet,
- mobile,
- touch drag,
- trackpad/wheel,
- keyboard navigation,
- hover,
- focus,
- route transitions,
- page visibility changes.

## Phase 6 — performance QA

Verify:

- no duplicate RAF loops,
- no leaked ResizeObservers,
- no leaked IntersectionObservers,
- no leaked intervals/timeouts,
- WebGL cleanup runs,
- DPR remains capped at 2,
- waves animation pauses when offscreen,
- reduced motion is respected for the carousel.

## Phase 7 — content replacement

Remove all demo content:

- `picsum.photos`
- placeholder text
- sample Unsplash image used only for reference

Replace with the actual product/site content and assets.

## Phase 8 — final acceptance

Do not call the build complete merely because it compiles.

The final review must check:

- visual hierarchy,
- animation behavior,
- responsive scaling,
- input interactions,
- accessibility labels,
- performance,
- cleanup,
- and fidelity to the supplied reference specifications.
