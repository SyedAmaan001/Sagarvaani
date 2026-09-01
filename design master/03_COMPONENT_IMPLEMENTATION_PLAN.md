# Sagarvani — Component Implementation Plan

## Stack

Existing repository stack:

- Next.js App Router
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Leaflet / react-leaflet
- Recharts
- lucide-react
- TanStack Query
- next-intl scaffold

Use existing stack before introducing new alternatives.

## New components

### WaveHero

Purpose:
hero visual.

Preferred:
SVG + Framer Motion.

Features:

- 3–4 wave paths
- parallax speeds
- cyan/blue glow
- particles
- reduced motion

### BorderGlow

Purpose:
reusable interactive card treatment.

Features:

- edge proximity
- cursor angle
- directional mesh border
- outer glow
- optional intro sweep

### DepthCarousel

Purpose:
agent showcase.

Dependency:
GSAP.

### ScrollSplitCard

Purpose:
scroll-driven split/flip visual.

Dependency:
Componentry implementation; use the actual package/source.

### CaseStudyFlipStack

Purpose:
scroll-driven stakeholder/product stories.

Dependency:
Framer Motion.

### StakeholderExplorer

Purpose:
new stakeholder section.

Suggested API:

```ts
type Stakeholder = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  benefitBullets: string[];
  icon: string;
  category: string;
};
```

Interaction:

- selecting left card updates right detail card
- active card gets cyan border
- right content animates
- keyboard accessible
- no fake data

### ImpactCarousel

Purpose:
stakeholder/benefit carousel.

Use:
- Fishermen
- Researchers
- Maritime Operators
- Social
- Economic
- Environmental

### DataSourceMarquee

Purpose:
credibility strip.

### OceanIntelligenceStats

Purpose:
four metric cards.

---

## Existing dashboard components

Preserve/reuse:

```text
ConversationRail
MapCanvas
AgentStatusRail
ReadoutStrip
ReasoningPanel
AlertsPanel
History/session list
```

Mock data should preserve future API compatibility.

---

## Dependencies

Only install packages that are missing.

Expected new packages:

```bash
npx shadcn@latest add @componentry/scroll-split-card
npx shadcn@latest add @componentry/case-study-flip-stack
npm i gsap
```

Use already-installed Framer Motion.

Do not install a duplicate animation library merely to replace Framer Motion behavior.
