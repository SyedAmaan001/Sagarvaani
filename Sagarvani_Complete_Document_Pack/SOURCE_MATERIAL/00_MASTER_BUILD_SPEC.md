# ANTIGRAVITY MASTER BUILD SPEC

## Purpose

Recreate the visual/interaction system described in the supplied reference notes as a production-quality React + TypeScript + Tailwind implementation.

This document is the source-of-truth implementation brief. Do not replace the described interactions with visually similar static alternatives.

## Component map

| Component | Intended use | Required technology |
|---|---|---|
| `WebGLLiquid` | Main hero/background | Raw WebGL shaders |
| `DepthCarousel` | Agent showcase/cards | React + Tailwind + GSAP |
| `BorderGlow` | Reusable interactive card/frame treatment | React + Tailwind/CSS |
| `GradientWaves` | Wave/plasma visual section | OGL + WebGL2 |
| `ScrollSplitCard` | Scroll-driven 3-panel interaction | Componentry reference; `animejs` is explicitly requested for 3D animations |

## Design language

- Premium, cinematic, dark interface.
- Motion should feel continuous and restrained rather than like a conventional slideshow.
- Depth, glow, blur, gradients and subtle grain are important visual characteristics.
- Interactive elements must remain usable with pointer, wheel, keyboard and reduced-motion preferences where the reference defines them.
- Avoid replacing shader-based effects with plain CSS gradients unless the implementation genuinely cannot support the required WebGL path and the documented fallback is used.

## Suggested project structure

```text
src/
  components/
    visual/
      WebGLLiquid.tsx
      DepthCarousel.tsx
      BorderGlow.tsx
      GradientWaves.tsx
      ScrollSplitCard.tsx
      webgl-error-boundary.tsx
      webgl-fallback.tsx
  sections/
    Hero.tsx
    AgentsSection.tsx
    WavesSection.tsx
    SplitCardSection.tsx
  lib/
    utils.ts
```

Use the project's existing conventions if equivalent files already exist.

## Dependency requirements

```bash
npx componentry@latest add webgl-liquid
npx componentry@latest add scroll-split-card
npm i gsap
npm i ogl
npm i animejs
```

The reference explicitly identifies `gsap` for `DepthCarousel`, `ogl` for `GradientWaves`, and `animejs` for 3D animations around the `ScrollSplitCard` section.

## Non-negotiable implementation rules

1. Use `"use client"` for browser/WebGL/interaction components.
2. Clean up requestAnimationFrame loops, observers, timers and WebGL resources on unmount.
3. Respect `prefers-reduced-motion` where the reference component does.
4. Keep visual layers pointer-transparent when they are decorative.
5. Preserve the stated default values unless the section-level composition intentionally overrides them.
6. Do not invent missing `ScrollSplitCard` implementation details; the supplied reference only provides its installation and usage shape.
7. The reference repeats `BorderGlow` multiple times. Treat those repeated copies as one reusable component, not separate implementations.

## Section composition

### Hero

Use `WebGLLiquid` as the full-bleed hero background.

Layer order:

1. Full-bleed WebGL liquid canvas.
2. Dark left-to-right readability overlay.
3. Soft radial light overlay.
4. Foreground hero copy/content.
5. Optional child content such as CTA buttons.

The hero root is full-width and minimum viewport-height.

### Agents

Use `DepthCarousel` to present agent cards/images in a 3D depth stack.

Expected interaction:

- Arrow controls.
- Dot indicators.
- Pointer drag.
- Wheel navigation.
- Keyboard Left/Right navigation.
- Optional autoplay.
- Seamless looping when enabled.
- Focused card is visually dominant; receding cards move backward, fan laterally, rotate and become darker/blurrier.

`BorderGlow` can wrap agent cards or other highlighted content when a glow treatment is needed.

### Additional visual section

`GradientWaves` is a shader-based wave field with:

- horizon/wave/crest color controls,
- moving plasma/raymarch field,
- optional pointer parallax,
- subtle grain,
- visibility-aware animation.

### Scroll interaction

`ScrollSplitCard` is a scroll-driven card that separates into three panels and flips/reveals custom content.

The supplied source does not include its full component implementation, so only the documented installation and usage contract should be replicated from this reference.

## Acceptance criteria

The implementation is complete when:

- Hero looks and animates like a shader-driven liquid field instead of a static gradient.
- Hero reveals from left to right on entrance when enabled.
- Depth carousel maintains convincing 3D stacking and responds to all documented inputs.
- Carousel pauses autoplay on hover/focus and disables autoplay for reduced-motion users.
- Border glow follows the pointer position/direction and becomes visible near edges.
- Gradient waves animate only while visible and pause when the page is hidden.
- All GPU/observer/timer resources are released on component cleanup.
- Responsive sizing works without breaking the visual proportions.
- No placeholder `picsum.photos` images remain in the finished experience; replace them with real agent assets.

## Important source limitation

The supplied reference contains complete source for `WebGLLiquid`, `DepthCarousel`, `BorderGlow`, and `GradientWaves`, but only installation/usage information for `ScrollSplitCard`. Do not fabricate a full `ScrollSplitCard` algorithm from the reference.
