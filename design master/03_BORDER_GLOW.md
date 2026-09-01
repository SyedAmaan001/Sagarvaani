# BORDER GLOW — REUSABLE CARD EFFECT SPEC

## Role

Reusable interactive border/glow treatment. The source notes say this may be used wherever necessary.

The supplied reference repeats this component several times with effectively the same implementation. Implement one reusable component.

## Props

```ts
interface BorderGlowProps {
  children?: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
}
```

Reference defaults:

```text
edgeSensitivity  30
glowColor        "40 80 80"
backgroundColor  #120F17
borderRadius     28
glowRadius       40
glowIntensity    1.0
coneSpread       25
animated         false
colors           ["#c084fc", "#f472b6", "#38bdf8"]
fillOpacity      0.5
```

## Behavioral concept

The border is invisible/low-visibility until the pointer approaches an edge.

The glow direction follows the cursor angle.

Two related layers react:

1. mesh-gradient border,
2. outer glow.

A third masked mesh fill can add a subtle edge-surface tint.

## Pointer math

Center:

```text
cx = width / 2
cy = height / 2
```

Relative pointer:

```text
dx = x - cx
dy = y - cy
```

Edge proximity uses the distance to the nearest relevant edge and is clamped into `[0,1]`.

Cursor angle:

```text
radians = atan2(dy, dx)
degrees = radians * (180 / PI) + 90
if degrees < 0:
  degrees += 360
```

## Visibility formulas

```text
colorSensitivity = edgeSensitivity + 20
isVisible = isHovered || sweepActive
```

Border opacity:

```text
max(
  0,
  (edgeProximity * 100 - colorSensitivity)
  / (100 - colorSensitivity)
)
```

Glow opacity:

```text
max(
  0,
  (edgeProximity * 100 - edgeSensitivity)
  / (100 - edgeSensitivity)
)
```

Both are zero when not visible.

## Mesh gradients

The reference uses these seven radial positions:

```text
80% 55%
69% 34%
8% 6%
41% 38%
86% 85%
82% 18%
51% 4%
```

Color index mapping:

```text
0, 1, 2, 0, 1, 2, 1
```

Build seven radial gradients with:

```css
radial-gradient(
  at POSITION,
  COLOR 0px,
  transparent 50%
)
```

and append:

```css
linear-gradient(COLOR0 0 100%)
```

## Border mask

Use a conic-gradient based on the cursor angle.

Conceptually:

```text
black for the active cone
transparent around the remaining circumference
```

The reference uses:

```css
conic-gradient(
  from ANGLE at center,
  black CONE_SPREAD%,
  transparent (CONE_SPREAD + 15)%,
  transparent (100 - CONE_SPREAD - 15)%,
  black (100 - CONE_SPREAD)%
)
```

Apply both `maskImage` and `WebkitMaskImage`.

## Outer glow

Glow wrapper extends beyond the card:

```text
inset: -glowRadius
```

Mask is also angle-based.

The inner glow element has:

```text
inset: glowRadius
```

and a large multi-layer box-shadow.

## Glow shadow layers

The reference builds these shadow tuples:

```text
inset:
  blur/spread/alpha:
  0/1/100
  1/0/60
  3/0/50
  6/0/40
  15/0/30
  25/2/20
  50/2/10

outer:
  1/0/60
  3/0/50
  6/0/40
  15/0/30
  25/2/20
  50/2/10
```

Each alpha is multiplied by `glowIntensity`, capped at 100%.

Glow color is parsed from HSL string form:

```text
"h s l"
```

Example:

```text
"40 80 80"
```

## Light/dark surface handling

The source checks whether the background is a light color using:

```text
0.2126 * red +
0.7152 * green +
0.0722 * blue > 180
```

Dark surface treatment uses stronger, more luminous blending.

Light surfaces use normal blending and lighter base shadows.

## Intro sweep

When `animated=true`, run an intro sweep.

Reference values:

```text
angleStart = 110
angleEnd   = 465
```

Sequence:

1. Edge proximity 0 → 100 over ~500ms.
2. Angle 110° → midpoint using ease-in cubic over ~1500ms.
3. Continue angle sweep using ease-out cubic after ~1500ms for ~2250ms.
4. Edge proximity 100 → 0 beginning around ~2500ms over ~1500ms.
5. End with `sweepActive=false`.

## Timing / transitions

Visible transition:

```text
~250ms ease-out
```

Hidden transition:

```text
~750ms ease-in-out
```

## Content

Children render above the visual effects.

The content wrapper is positioned relative and uses a positive z-index.

## Accessibility / implementation

BorderGlow itself is decorative. Do not make the glow wrapper steal keyboard focus.

Do not block pointer interaction of meaningful children.

## Acceptance criteria

At rest:
- card looks clean,
- border glow is not obvious.

Near an edge:
- glow appears,
- direction follows cursor position,
- edge colors become more prominent,
- outer glow follows the same direction.

The effect must feel like light traveling around a premium glass/tech card.
