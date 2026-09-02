# Sagarvani — Visual System + Page Structure

## Visual hierarchy

The page must be built as a continuous story.

1. Navigation
2. Hero
3. Source credibility
4. Why Sagarvani
5. How Sagarvani works
6. The agents
7. Stakeholders
8. Real-time ocean intelligence
9. Three-step workflow
10. Reliability / validation
11. Case-study/story stack
12. Impact
13. FAQ
14. Access everywhere
15. Final CTA
16. Footer

## Section choreography

### HERO

Dark navy field.

Large display typography.

Headline occupies the visual center-left.

WaveHero provides motion beneath/behind.

Data-source strip exits the hero into credibility.

### WHY SAGARVANI

Keep generous whitespace.

Three ideas should appear as distinct visual moments.

Use scroll reveal.

### HOW IT WORKS

Make the tabs feel like a control surface.

Selected tab:

- cyan signal
- brighter text
- visible content

Unselected:

- muted

### THE AGENTS

Use both explanation and spectacle:

1. six-card grid = "what each agent does"
2. DepthCarousel = "these agents feel like a coordinated system"

This prevents the carousel from becoming the only way to understand the agents.

### STAKEHOLDERS

The supplied screenshot should be treated as the visual reference:

LEFT:
stacked stakeholder selection cards.

RIGHT:
large detailed active card.

Use subtle stacked depth behind the active detail card.

### REAL-TIME OCEAN INTELLIGENCE

Large centered statement with four metric-style cards.

Do not fabricate values.

Where values are illustrative placeholders, label them as mock/demo state or derive them from live/mock data.

### CASE STUDY STACK

Use scroll-driven folding.

Each story should communicate one practical use case.

### IMPACT

Use carousel behavior.

Do not turn impact into fake testimonials.

---

## Component styling

### Card

```text
background: bg-elevated
border: 1px solid border
radius: 12px
inner glow: very subtle
```

### Active card

```text
border: cyan
small cyan indicator
subtle glow
```

### Inactive card

```text
muted text
normal border
low glow
```

### Buttons

Primary:

- cyan background
- dark text
- hover scale ~1.03
- ~150ms

Secondary:

- border
- transparent/elevated fill on hover

---

## Responsive rules

Desktop:

- preserve large whitespace
- use multi-column compositions
- allow sticky imagery
- use wide hero visual

Tablet:

- reduce visual density
- maintain major hierarchy

Mobile:

- collapse nav
- stack cards
- simplify sticky interactions when necessary
- retain the meaningful motion
- ensure touch interaction
- never cause horizontal overflow

Reduced motion:

- freeze decorative motion
- disable autoplay marquees/carousels where necessary
- retain functional interactions
