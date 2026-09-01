# SCROLL SPLIT CARD — INTERACTION SPEC

## Role

This is a scroll-driven interactive card that:

- separates into three panels,
- responds to scroll,
- flips/reveals custom content,
- is intended for high-end landing-page motion.

## Important source limitation

The supplied reference does **not** include the full `ScrollSplitCard` component source or prop table.

It only provides:

- the installation command,
- a usage example,
- the stated conceptual behavior,
- and a separate note: `npm i animejs` / use this for 3D animations.

Do not invent the missing internal algorithm.

## Installation

```bash
npx componentry@latest add scroll-split-card
npm i animejs
```

## Reference usage shape

```tsx
"use client";

import { useRef } from "react";
import { ScrollSplitCard } from "@/components/ui/scroll-split-card";

export function Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="
        relative
        h-[100dvh]
        w-full
        overflow-y-auto
        overscroll-contain
        [&::-webkit-scrollbar]:hidden
        [-ms-overflow-style:none]
        [scrollbar-width:none]
      "
    >
      <ScrollSplitCard
        containerRef={containerRef}
        imageSrc="REFERENCE_IMAGE_URL"
        cards={[
          {
            title: "Going Zero to One",
            description: "If you're navigating a new business... breaking into a new market.",
            bgColor: "#e2e2e2",
            textColor: "#111111"
          },
          {
            title: "Scaling from One to N",
            description: "If you've achieved Product/Market Fit...",
            bgColor: "#1a5bcf",
            textColor: "#ffffff"
          },
          {
            title: "Need Quick Solutions",
            description: "If you know exactly what you want and need...",
            bgColor: "#1c1c1c",
            textColor: "#ffffff"
          }
        ]}
      />
    </div>
  );
}
```

## Required composition

The implementation should preserve these observable characteristics from the reference:

1. Full viewport-height scroll container.
2. Dedicated container ref passed into the card.
3. `data-lenis-prevent` on the scroll host.
4. Three card/panel definitions.
5. Image-driven visual presentation.
6. Scroll-driven splitting/3D movement.
7. Flip/reveal behavior.
8. 3D animations should use `animejs` when adding or adapting motion around this component.

## Do not infer

The supplied notes do not specify:

- exact scroll thresholds,
- exact 3D transforms,
- easing curves,
- internal DOM structure,
- exact timing,
- exact prop typing,
- exact reveal content layout.

Retrieve or use the actual component source in the project/package before implementing these internals.

## Acceptance criteria

The finished section should visibly behave as a premium scroll-controlled 3-panel reveal.

It should not be reduced to:

- three static cards,
- a standard carousel,
- or a simple CSS hover flip.
