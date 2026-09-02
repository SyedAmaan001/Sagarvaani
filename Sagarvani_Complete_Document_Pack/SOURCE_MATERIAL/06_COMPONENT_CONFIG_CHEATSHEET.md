# Sagarvani — Component Configuration Cheatsheet

## ScrollSplitCard

Use actual Componentry component/source.

Required installation:

```bash
npx shadcn@latest add @componentry/scroll-split-card
```

Container:

```tsx
<div
  ref={containerRef}
  data-lenis-prevent
  className="relative h-[100dvh] w-full overflow-y-auto overscroll-contain"
>
```

Three conceptual panels:

1. Ask / Understand
2. Orchestrate
3. Validate

Do not keep generic startup/enterprise copy from the demo.

---

## CaseStudyFlipStack

Install:

```bash
npx shadcn@latest add @componentry/case-study-flip-stack
```

Dependency:

```bash
npm install framer-motion
```

Recommended Sagarvani API:

```tsx
<CaseStudyFlipStack
  heading="Decisions made clearer."
  hint="Scroll Down"
  endLabel="One ocean. One decision layer."
  items={[...]}
/>
```

Use product/stakeholder stories rather than fake client names.

---

## DepthCarousel

Dependency:

```bash
npm install gsap
```

Recommended:

```tsx
<DepthCarousel
  items={agentItems}
  depth={220}
  spread={90}
  tilt={22}
  tiltDirection="right"
  perspective={1400}
  visibleCards={4}
  falloff={0.2}
  blur={6}
  duration={700}
  ease="power3.out"
  autoplay={false}
  loop
  showControls
  showIndicators
/>
```

---

## BorderGlow

Recommended wrapper:

```tsx
<BorderGlow
  edgeSensitivity={30}
  backgroundColor="#0B1550"
  borderRadius={12}
  glowRadius={40}
  glowIntensity={0.85}
  coneSpread={25}
  colors={["#0000FF", "#00FFFF", "#38BDF8"]}
>
  ...
</BorderGlow>
```

Do not overuse.

---

## WaveHero

Recommended:

```text
3–4 layers
8–20s horizontal loops
different speeds
dark navy → electric blue → cyan
subtle particles
reduced-motion static frame
```

---

## DataSourceMarquee

Data:

```text
INCOIS
IMD
ISRO Bhuvan
Bhoonidhi
MOSDAC
BHASHINI + Sarvam AI
```

Muted by default.

---

## StakeholderExplorer

Recommended default active:

`Fishermen & Coastal Crews`

Secondary cards:

- Marine & Port Operators
- Ocean Researchers & Scientists
- Disaster Management & Coastal Safety
- Aquaculture & Marine Farming
- Coastal Tourism & Recreation
- Offshore Energy / Marine Industry
- Marine Policy & Conservation
