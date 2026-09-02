# DEPTH CAROUSEL — AGENT SHOWCASE SPEC

## Role

This component is explicitly marked in the source notes as the effect used for showing agents.

Use it as a 3D stack of agent cards/images.

## Technology

- React + TypeScript.
- Tailwind CSS classes.
- `gsap` for navigation animation.

Install:

```bash
npm i gsap
```

## Item model

```ts
type DepthCarouselItem =
  | string
  | { image: string; alt?: string };
```

Strings are normalized to `{ image, alt: "" }`.

## Props

```ts
interface DepthCarouselProps {
  items?: DepthCarouselItem[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tint?: string;
  depth?: number;
  spread?: number;
  tilt?: number;
  tiltDirection?: "left" | "right";
  perspective?: number;
  visibleCards?: number;
  falloff?: number;
  blur?: number;
  duration?: number;
  ease?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  onChange?: (index: number, item: { image: string; alt?: string }) => void;
  className?: string;
}
```

## Defaults

```text
cardWidth      300
cardHeight     380
radius         18
tint           #05060a

depth          220
spread         90
tilt           22
tiltDirection  right
perspective    1400

visibleCards   4
falloff        0.2
blur           6

duration       700ms
ease           power3.out

autoplay       false
autoplayDelay  3200ms
loop           true

showControls   true
showIndicators true
```

## Core 3D layout algorithm

For each card:

```text
d = itemIndex - currentPosition
```

When looping is enabled, normalize `d` to the shortest circular distance.

Then:

```text
back       = max(0, d)
absoluteD  = abs(d)
shown      = absoluteD <= visibleCards + 0.5

translateZ = -depth * d
translateX = direction * spread * d
rotateY    = direction * tilt * clamp(d, 0, 1)
```

Opacity:

```text
if d < 0:
  opacity = max(0, 1 + d)
else:
  opacity = 1

if card is not shown:
  opacity = 0
```

Brightness:

```text
brightness = max(0.15, 1 - back * falloff)
```

Blur:

```text
blurPx =
  blur > 0
    ? min(blur, (back / max(1, visibleCards)) * blur)
    : 0
```

z-index:

```text
zIndex = round(2000 - d * 20)
```

Pointer events must be disabled for cards that are not sufficiently visible.

## Transform

Reference transform:

```css
translate(-50%, -50%)
scale(scale)
translateX(tx)
translateZ(tz)
rotateY(ry)
```

The stage uses `transform-style: preserve-3d`.

The root uses CSS perspective:

```css
perspective: 1400px;
```

and center perspective origin.

## Responsive scaling

Observe the root width.

Required width:

```text
needed = cardWidth + abs(spread) * 2 + 120
```

Then:

```text
scale = clamp(rootWidth / needed, 0.4, 1)
```

Re-layout after scaling.

## Navigation behavior

### GSAP tween

Animate a proxy object:

```text
proxy.p = currentPosition
```

to the target position using:

- duration = `duration / 1000`
- easing = `ease`
- duration = 0 when reduced-motion is active.

During tween updates:

- update current position,
- call layout.

On completion:

- normalize the current position if looping,
- call layout again.

### Buttons

Previous and next buttons:

- 42x42 px.
- circular.
- dark translucent background.
- white border/text.
- backdrop blur.
- active state scales to ~95%.
- positioned left/right around vertical center.

### Indicators

Bottom-center pill container.

Inactive dot:

```text
7px x 7px
white at ~30% opacity
```

Active dot:

```text
20px x 7px
solid white
```

Animate width/background over ~250ms.

## Pointer drag

On pointer down:

- stop current tween.
- record start x, current x, start position, time and pointer id.

When horizontal movement exceeds ~4 px:

- mark drag as moved,
- capture pointer.

While dragging:

```text
stepPx = max(cardWidth * 0.55 * scale, 40)
position = startPosition - dx / stepPx
```

Track drag velocity.

On release:

```text
projected = currentPosition - (velocity * 180) / stepPx
target = round(projected)
```

Snap to the target with the normal tween.

A click should not navigate when it is actually part of a drag.

## Wheel behavior

Prevent default when there are at least 2 items.

Use the larger-magnitude axis:

```text
raw = abs(deltaX) > abs(deltaY) ? deltaX : deltaY
```

If wheel delta mode is line-based, multiply by ~24.

Then:

```text
step = clamp(delta / (cardWidth * 0.9), -0.6, 0.6)
```

Update position immediately and snap to the nearest integer after ~130ms idle.

## Keyboard behavior

Root is focusable (`tabIndex=0`) and has carousel semantics.

Support:

- ArrowLeft → previous.
- ArrowRight → next.

Prevent default.

## Autoplay

Autoplay starts only when:

- `autoplay === true`,
- reduced motion is not active,
- at least 2 items exist.

Interval delay:

```text
max(autoplayDelay, 600ms)
```

Pause while:

- pointer is hovering the carousel,
- any child has focus.

Resume on leave/blur.

## Accessibility

Root:

```html
role="group"
aria-roledescription="carousel"
aria-label="Depth carousel"
tabIndex="0"
```

Each card:

```html
aria-roledescription="slide"
aria-label="N of COUNT"
aria-hidden={active !== index}
```

Buttons have explicit Previous/Next labels.

Indicators use `role="tablist"` and `role="tab"` with `aria-selected`.

## Assets

The reference uses `picsum.photos` only as sample content.

For the finished site:

- replace sample assets with real agent images.
- preserve the portrait-card aspect feel.
- do not leave `picsum.photos` URLs in production.

## Acceptance criteria

The focused card must read as the front-most card.

Receding cards must:

- move backward in Z,
- fan laterally,
- tilt,
- dim,
- blur progressively,
- remain visible only up to `visibleCards`.

The interaction should feel like manipulating a physical 3D stack, not a flat carousel.
