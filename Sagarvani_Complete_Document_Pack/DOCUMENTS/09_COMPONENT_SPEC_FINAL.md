# Sagarvani --- Component Specification

## Required supplied components

-   WebGL Liquid / WaveHero
-   DepthCarousel
-   BorderGlow
-   GradientWaves
-   ScrollSplitCard
-   CaseStudyFlipStack
-   StakeholderExplorer
-   ImpactCarousel
-   DataSourceMarquee
-   OceanIntelligenceStats

## Source completeness rules

-   WebGL Liquid: complete implementation supplied.
-   DepthCarousel: complete implementation supplied.
-   BorderGlow: complete implementation supplied.
-   GradientWaves: complete implementation supplied.
-   ScrollSplitCard: supplied notes are partial; use the actual
    component/package implementation. Do not invent missing internals.

## Placement

### WebGL Liquid / WaveHero

Hero visual field.

### DepthCarousel

Agent showcase.

### BorderGlow

Cards requiring controlled edge illumination.

### GradientWaves

Dedicated visual section/background where appropriate.

### ScrollSplitCard

Use for the supplied scroll-driven section after confirming its actual
implementation.

### CaseStudyFlipStack

Use for approach / scenario storytelling, not fake customer
testimonials.

### StakeholderExplorer

Use for stakeholder-specific value propositions.

### ImpactCarousel

Use for social/economic/environmental impact.

### DataSourceMarquee

Use for trusted source/technology strip.

### OceanIntelligenceStats

Use only for factual, defensible system/readout information. Do not
invent impact statistics.

## General component rules

-   Responsive
-   Keyboard accessible
-   Reduced-motion aware
-   Clean unmount
-   No duplicate RAF loops
-   No leaked observers/listeners
-   No horizontal overflow
