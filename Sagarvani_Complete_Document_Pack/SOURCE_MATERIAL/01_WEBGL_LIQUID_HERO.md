# WEBGL LIQUID — HERO SPEC

## Role

This is the primary hero background.

Reference description: a premium liquid hero background powered by raw WebGL shaders, with configurable palette, grain, reveal timing and flow behavior.

## Required structure

- React client component.
- Full-bleed `<canvas>`.
- Canvas is decorative and must not capture pointer events.
- Foreground copy sits in a high z-index content layer.
- Root is `relative`, `flex`, `min-h-screen`, `w-full`, `overflow-hidden`, dark background, white text.
- Readability overlays sit above the canvas and below content.

## Dependencies/import expectations

The reference uses:

```tsx
"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { WebGLErrorBoundary, WebGLFallback } from "./webgl-error-boundary";
```

The `WebGLErrorBoundary` and `WebGLFallback` helpers are referenced by the source but their implementations were not included in the supplied notes. Use equivalent local helpers if they do not already exist.

## Visual defaults

```text
colorDeep       #04050b
colorMid        #134d93
colorHighlight  #8cecff

speed           1
flowStrength    1
grain           0.05
contrast        1.1
opacity         0.95

reveal          true
delayMs         0
revealDuration  1.2 seconds
```

## Text defaults

```text
title       "Fluid Motion"
subtitle    "Premium Presence"
description "A cinematic liquid field tuned for modern hero sections with polished depth and restrained motion."
```

## API

```ts
interface WebGLLiquidProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  description?: string;
  colorDeep?: string;
  colorMid?: string;
  colorHighlight?: string;
  speed?: number;
  flowStrength?: number;
  grain?: number;
  contrast?: number;
  opacity?: number;
  reveal?: boolean;
  delayMs?: number;
  revealDuration?: number;
  children?: React.ReactNode;
}
```

## Shader pipeline

### Vertex shader

Use one full-screen quad:

```glsl
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
```

Quad data in the reference:

```ts
new Float32Array([
  -1, -1,
   1, -1,
  -1,  1,
   1,  1
])
```

Render with `gl.TRIANGLE_STRIP`.

### Fragment-shader stages

1. Normalize pixel coordinates to `uv`.
2. Apply aspect correction.
3. Build flowing coordinates.
4. Generate 3 levels of FBM noise.
5. Combine them into a liquid `structure`.
6. Map structure through deep/mid/highlight colors.
7. Add glow in higher-structure regions.
8. Apply vertical alpha mask.
9. Apply radial vignette.
10. Apply contrast.
11. Add dither grain.
12. Multiply alpha by the reveal mask.
13. Output clamped color + alpha.

Core motion equations from the supplied source:

```glsl
float t = u_time * (0.14 * u_speed);

vec2 flowP = vec2(p.x * 1.1, p.y - t * 0.35);

float n1 = fbm(flowP * 2.8 + vec2(0.0, t * 0.2));
float n2 = fbm((flowP + n1 * 0.45) * 4.0 - vec2(0.0, t * 0.35));
float n3 = fbm((flowP + n2 * 0.4) * 6.5 + vec2(t * 0.15, 0.0));

float structure = n3 * 1.15 + (n2 - 0.5) * 0.5;
structure += (n1 - 0.5) * 0.3 * u_flowStrength;
```

FBM must use 6 octaves with this rotation:

```glsl
mat2 rot = mat2(0.86, 0.51, -0.51, 0.86);
```

## Color mapping

```glsl
float lowBand = smoothstep(0.18, 0.6, structure);
float highBand = smoothstep(0.62, 1.08, structure);

vec3 col = mix(u_colorDeep, u_colorMid, lowBand);
col = mix(col, u_colorHighlight, highBand);

float glow = smoothstep(0.52, 0.95, structure)
           * (0.35 + 0.5 * u_flowStrength);

col += glow * u_colorHighlight * 0.35;
```

## Alpha/reveal

Vertical mask:

```glsl
float verticalMask = smoothstep(1.05, 0.05, uv.y);
verticalMask = pow(verticalMask, 1.1);
```

Reveal mask:

```glsl
float alpha = verticalMask * smoothstep(0.08, 0.95, structure);
alpha *= smoothstep(0.0, 0.28, u_reveal - uv.x);
alpha *= u_opacity;
```

The reveal therefore progresses from left to right.

## Runtime behavior

- Create WebGL context with `{ antialias: true, alpha: true }`.
- Compile vertex and fragment shaders.
- Link a program.
- Resolve all required uniforms.
- Size the canvas to the host element.
- Cap DPR at 2.
- Use `ResizeObserver`.
- Use `requestAnimationFrame`.
- Clean up animation, observer, buffer, program and shaders.
- On WebGL failure, render the documented fallback instead of breaking the page.

## Foreground layout

Approximate reference hierarchy:

```text
root
  canvas
  dark horizontal overlay
  radial light overlay
  content container (max width 1240px)
    inner text column (max width 760px)
      H1
      H2
      paragraph
      children / CTA region
```

Reference headline sizing:

```text
H1: 11cqi mobile / 7cqi md / 5.5cqi lg
leading: ~0.92
tracking: -0.03em
font-weight: 600
color: white
```

## Validation

Test:

- desktop wide hero,
- narrow mobile viewport,
- DPR 1 and DPR 2,
- WebGL unavailable,
- resize while animating,
- delayed reveal,
- reduced motion if the page-level implementation chooses to respect it,
- no memory leak after route changes.
