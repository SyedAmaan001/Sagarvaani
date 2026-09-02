# Sagarvani --- Design System

## Brand

Use the supplied Sagarvani logo as the source of truth: wave + sunrise +
satellite dish inside the circular badge, with the Sagarvani wordmark
and tagline. On dark surfaces, use a restrained monochrome/cyan
treatment rather than changing the icon geometry.

## Voice

Confident, precise, calm-under-pressure.

Prefer: - validated - evidence-backed - explainable - cross-checked -
spatial - live - confidence

Avoid: - revolutionary - game-changing - guaranteed safety - generic
enterprise-AI language

## Electric Tundra tokens

  Token                      Value       Use
  -------------------------- ----------- ---------------------------------
  `--color-bg-primary`       `#050A30`   Global background
  `--color-accent-blue`      `#0000FF`   Primary actions / active states
  `--color-accent-cyan`      `#00FFFF`   Live signal / active indicator
  `--color-bg-elevated`      `#0B1550`   Cards and panels
  `--color-bg-sunken`        `#02051C`   Map/deep canvas
  `--color-border`           `#1B2A6B`   Dividers / hairlines
  `--color-text-primary`     `#F4F7FF`   Main copy
  `--color-text-secondary`   `#93A2E0`   Secondary copy
  `--color-success`          `#22E29A`   Validated
  `--color-warning`          `#FFB020`   Re-check / degraded confidence
  `--color-danger`           `#FF4D6D`   Alerts

### Critical color rule

Cyan is a signal, not a fill color. Reserve it for live/active/true-now
states.

## Typography

Use the supplied Montroc font family where appropriate for distinctive
headings/display treatments, but prioritize a highly legible UI face for
dense dashboard data. Do not use decorative display fonts for small data
labels.

## Layout

-   Marketing: generous whitespace, strong typographic hierarchy, wide
    content bands.
-   Dashboard: dense, spatial, panel-based.
-   Keep map interactions independent from conversation interactions.
-   Avoid horizontal overflow.
-   Use subtle borders rather than heavy containers.

## Motion

Motion should communicate system state: - agent pulse = running - cyan
transition = live - green = validated - amber = re-checking - red =
alert - offscreen WebGL pauses - reduced-motion preference disables
non-essential motion

## Visual references

COSMOQ is a structural/interaction reference only. Do not copy COSMOQ
branding, customer claims, pricing, testimonials, or imagery.
