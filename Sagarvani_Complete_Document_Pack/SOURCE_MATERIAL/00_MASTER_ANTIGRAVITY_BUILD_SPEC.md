# Sagarvani — Master Antigravity Build Specification

## Objective

Update the existing Sagarvani website and product UI into a polished, premium marine-intelligence experience.

The existing Sagarvani repository is:

`SyedAmaan001/Sagarvaani`

The supplied design document references:

- Sagarvani GitHub repository
- COSMOQ Framer website as the main visual/interaction inspiration
- the Electric Tundra palette
- Sagarvani's existing product/dashboard concepts
- multiple Componentry / React Bits components
- new stakeholder/impact content
- generated visual assets

This specification is the synthesis of those instructions.

## Critical instruction

Do not rebuild the project blindly.

First inspect the existing repository and existing implementation. Preserve working functionality and improve/replace only the parts required by this specification.

The final product should feel like one coherent Sagarvani system, not a collection of copied component demos.

---

# 1. Product positioning

Sagarvani is a conversational marine decision-intelligence platform.

Core flow:

USER QUESTION
→ ORCA interprets intent
→ specialist marine agents work together
→ sources are fused
→ contradictions are checked
→ result is validated
→ user receives an explainable recommendation

The product is intended for people such as fishermen, researchers, maritime operators and disaster-management stakeholders.

Use this product language:

- validated
- evidence-backed
- explainable
- live
- spatial
- trusted
- decision intelligence

Avoid marketing clichés such as:

- revolutionary
- game-changing
- disruptive
- magical

The design voice should feel calm, precise and operational.

---

# 2. Visual direction

The visual direction combines:

- premium AI-agent landing page structure inspired by COSMOQ
- dark satellite/ocean-operations aesthetic
- electric blue/cyan signal lighting
- large confident display typography
- restrained motion
- layered depth
- data-driven visuals
- marine imagery
- subtle technical UI elements

COSMOQ is the structural inspiration, not the copy source.

Keep the overall rhythm of:

Hero
→ credibility/data source strip
→ differentiation
→ how it works
→ agents
→ workflow
→ reliability
→ stakeholder impact
→ access
→ CTA
→ footer

Pricing must NOT exist.

---

# 3. Global design system

## Colors

Use the existing Sagarvani Electric Tundra tokens as the canonical palette.

```css
--color-bg-primary: #050A30;
--color-accent-blue: #0000FF;
--color-accent-cyan: #00FFFF;

--color-bg-elevated: #0B1550;
--color-bg-sunken: #02051C;
--color-border: #1B2A6B;

--color-text-primary: #F4F7FF;
--color-text-secondary: #93A2E0;

--color-success: #22E29A;
--color-warning: #FFB020;
--color-danger: #FF4D6D;
```

Cyan is a SIGNAL color.

Use cyan for:

- active states
- current/live status
- selected controls
- current location
- active links
- important highlights

Do not flood static surfaces with cyan.

## Typography

Canonical product typography from the existing design system:

### Display

Primary display font:

`Liber`

Fallback:

`Unbounded, sans-serif`

Use for:

- hero headlines
- section titles
- large statistics
- key dashboard readouts
- major visual moments

### Body/UI

Primary UI/body:

`Inter`

Use for:

- descriptions
- labels
- buttons
- dashboard UI
- evidence
- agent status
- tables/data

### Type scale

```text
H1: 56px / 3.5rem, 700
H2: 36px / 2.25rem, 700
H3: 20px / 1.25rem, 600
Body: 16px / 1rem, 400
Small label: 13px / .8125rem, 500 uppercase
Data readout: 32px / 2rem, 700
```

The supplied document also contains a decorative serif/font moodboard. Do not replace the production typography with those decorative faces globally. Use Liber/Inter as the functional system and only use decorative typography when there is a deliberate creative treatment.

---

# 4. Layout rules

Marketing pages:

- 12-column grid
- maximum content width ~1280px
- 8px spacing base
- 96–120px major section rhythm on desktop
- 56–72px on mobile

Cards:

- 12px radius generally
- 8px controls
- pills use full radius
- subtle 1px border
- avoid heavy drop shadows
- prefer inner glow

Dark card treatment:

```css
box-shadow:
  0 0 0 1px var(--color-border),
  0 0 24px rgba(0,255,255,0.04);
```

---

# 5. Global motion

Standard section reveal:

```text
opacity 0 → 1
translateY 24px → 0
duration ~500ms
ease-out
once on entering viewport
```

Use Framer Motion where practical.

Motion must communicate:

- hierarchy
- state
- spatial depth
- progression

Do not add motion to every pixel.

Respect `prefers-reduced-motion`.

---

# 6. Navigation

Desktop:

Left:
Sagarvani logo

Navigation:
Product
How it Works
The Agents
Impact
About

Right:
Launch Console

Behavior:

- transparent over hero
- becomes elevated dark surface after approximately 80px scroll
- subtle bottom border
- smooth transition

Mobile:

- logo
- hamburger
- slide-down/fullscreen navigation
- stacked links
- Launch Console button at the bottom

---

# 7. Hero

Use the new animated WaveHero treatment from the homepage specification.

The hero should contain:

1. prototype badge
2. large display headline
3. concise explanation
4. two CTAs
5. full-width animated marine/data visual
6. data-source marquee
7. supporting product/demo visual

Badge:

`Prototype · Smart India Hackathon 2026`

Suggested headline:

`Ocean intelligence, explained.`

The supporting sentence must communicate:

multiple live marine sources
→ ORCA specialist agents
→ validated decision

## WaveHero

Full-width visual.

Target height:

~55–65vh

Visual ingredients:

- 3–4 overlapping wave layers
- different motion speeds
- Electric Tundra color treatment
- dark-to-blue-to-cyan gradient
- subtle particles
- restrained glow
- optional minimal signal/sonar ping
- no dashboard screenshot inside this wave visual
- reduced-motion = static frame

Prefer SVG + Framer Motion for the simplest robust implementation, unless the existing implementation already uses a better WebGL version.

---

# 8. Data-source marquee

Place directly beneath hero visual.

Use actual source names:

INCOIS
IMD
ISRO Bhuvan
Bhoonidhi
MOSDAC
BHASHINI + Sarvam AI

Treatment:

- muted/grayscale
- low opacity
- subtle hover brightening
- infinite seamless horizontal marquee
- duplicate sequence for seamless loop

Do not present these as customer logos.

They are data/technology sources.

---

# 9. Why Sagarvani

Eyebrow:

`WHY SAGARVANI`

Three major concepts:

### Multi-Agent Intelligence

Fuses ocean, weather, GIS and risk information through specialist agents.

### Re-planning on Contradictions

When sources disagree, ORCA triggers additional reasoning and re-analysis rather than blindly producing one answer.

### Explainable Recommendations

The result contains evidence showing how the recommendation was derived.

Use stacked/sticky feature behavior on desktop where practical.

Mobile may become a clean stacked card layout.

---

# 10. How It Works

Three tabs:

Understand
Orchestrate
Validate

## Understand

Explain multilingual intent interpretation and the conversion of a natural-language question into a structured marine decision request.

## Orchestrate

Show ORCA routing the request to the correct specialist agents.

Suggested visualization:

ORCA
→ Marine Data
→ Weather
→ GIS
→ Ocean Analytics
→ Risk
→ Spatial Reasoning

## Validate

Show cross-source validation, contradiction handling and evidence-backed final recommendation.

Interaction:

- tabs clickable
- cross-fade
- slight vertical shift
- ~300ms transition
- no forced autoplay

Supporting images should look like polished simplified technical diagrams rather than generic stock illustrations.

---

# 11. The Agents

The supplied visual reference specifically shows:

`SIX SPECIALISTS. ONE DECISION.`

Use six agent cards:

1. Marine Data Agent
   Currents, waves, SST, salinity and core marine parameters.

2. Weather Agent
   Forecasts, wind, rain, pressure and weather alerts.

3. GIS Agent
   Maps, layers, coastal features, boundaries and points of interest.

4. Ocean Analytics Agent
   Trend analysis, anomaly detection and pattern discovery.

5. Risk Agent
   Risk assessment, cyclone tracking, pollution and navigation hazards.

6. Spatial Reasoning Agent
   Spatial relations, constraints and proximity analysis.

Visual style:

- dark navy/elevated blue card
- cyan line icon
- white display title
- muted purple/blue description
- subtle border
- soft hover lift
- optional BorderGlow

The document's supplied screenshots show a clean 3-column × 2-row grid as one version of this section. A separate reference also shows a 3D agent-card/depth concept. The final implementation can use both: the six-card explanation grid plus the DepthCarousel as a visual showcase.

---

# 12. DepthCarousel

Use the documented DepthCarousel implementation for an interactive agent showcase.

Required behavior:

- true 3D stacking
- translateZ depth
- lateral spread
- Y rotation
- brightness falloff
- blur falloff
- arrow buttons
- indicators
- pointer drag
- wheel interaction
- keyboard arrows
- autoplay if used
- loop
- pause autoplay on hover/focus
- reduced-motion support

Reference defaults:

```text
cardWidth 300
cardHeight 380
depth 220
spread 90
tilt 22
tiltDirection right
perspective 1400
visibleCards 4
falloff 0.2
blur 6
duration 700ms
ease power3.out
loop true
```

Do not leave sample `picsum.photos` assets.

---

# 13. Stakeholder section — NEW

Add a dedicated section matching the visual direction shown in the supplied reference screenshot:

Eyebrow:

`WHO IS IT FOR`

Headline:

`Built for every ocean stakeholder.`

Supporting idea:

`Tailored decision intelligence whether you are steering a fishing trawler, managing a commercial fleet, analyzing ocean conditions, responding to hazards, or researching marine systems.`

Use a two-column interactive layout:

LEFT:
stack of stakeholder cards

RIGHT:
large active detail card

Cards should behave similarly to the supplied reference:

- selected card gets cyan border
- selected card exposes detailed information
- dark elevated background
- subtle stacked/depth cards behind large detail panel
- keyboard accessible
- smooth transition

Recommended stakeholder groups:

1. Fishermen & Coastal Crews
2. Marine & Port Operators
3. Ocean Researchers & Scientists
4. Disaster Management & Coastal Safety
5. Aquaculture & Marine Farming
6. Coastal Tourism & Recreation
7. Offshore Energy / Marine Industry
8. Marine Policy & Conservation

The final visible count can be 6–8, depending on the content density.

---

# 14. Stakeholder detail content

Use the research document for detailed content.

Do not make unsupported claims.

The product should be positioned as decision support, not as a replacement for official alerts or expert judgment.

Examples:

### Fishermen & Coastal Crews

Use:
- safe trip planning
- localized marine/weather information
- low-bandwidth/voice access
- risk-aware route/area guidance
- clear explanations

### Marine & Port Operators

Use:
- route planning
- sea-state awareness
- current/wave/wind context
- port approach information
- operational risk synthesis

### Ocean Researchers & Scientists

Use:
- integrated data exploration
- multi-source analysis
- spatial reasoning
- trend/anomaly exploration
- evidence-linked outputs

### Disaster Management & Coastal Safety

Use:
- cross-source hazard context
- cyclone/high-wave/tsunami warning context
- emergency spatial awareness
- re-checking when sources conflict
- rapid decision support

### Aquaculture & Marine Farming

Use:
- environmental condition awareness
- water-temperature/weather context
- risk monitoring
- localized decision support

### Coastal Tourism & Recreation

Use:
- sea-state awareness
- coastal condition context
- operational safety
- activity planning support

### Offshore Energy / Marine Industry

Use:
- sea-state and weather awareness
- operational planning
- geospatial context
- marine risk synthesis

### Marine Policy & Conservation

Use:
- integrated evidence
- environmental indicators
- spatial relationships
- scenario/exploration support
- research-to-decision workflows

---

# 15. Data / credibility section

Create the supplied visual idea:

Eyebrow:

`REAL-TIME OCEAN INTELLIGENCE`

Headline:

`Where data meets the sea.`

Explain that Sagarvani combines marine, weather, geospatial and satellite sources into one decision layer.

Use source examples:

- INCOIS
- IMD
- ISRO Bhuvan / NRSC
- Bhoonidhi
- MOSDAC

Possible metric cards may include only numbers the application can actually substantiate.

Do not invent live performance claims.

---

# 16. Three steps

Use:

01
Ask via Web/App, Helpline or Portal

02
ORCA orchestrates the right specialist agents

03
Get a validated, explainable recommendation

Visual pattern:

alternating image/text layouts.

Sticky imagery on desktop is preferred.

---

# 17. Reliability & Validation

Use a premium dark panel.

Concepts:

- Data Validation
- Fallback Sources
- Validation + Re-checking

Visual:

- fanned cards
- shield/check iconography
- evidence-like technical UI
- subtle cyan accents

The system should communicate:

"If information conflicts, we do not hide it."

Instead:

source conflict
→ re-check
→ fallback/secondary source
→ validated response or explicit uncertainty

---

# 18. Case Study Flip Stack

The user explicitly requested adding:

`CaseStudyFlipStack`

Use the real Componentry implementation.

Installation:

```bash
npx shadcn@latest add @componentry/case-study-flip-stack
```

Dependency:

```bash
framer-motion
```

Behavior:

- full-width card
- stacked vertically
- each card folds/flips upward as scrolling progresses
- next case appears below
- preserve depth and 3D transformation
- support reduced motion

For Sagarvani, treat these as product stories / stakeholder scenarios, not fake client case studies.

Suggested stories:

### Fisherman Safety

Eyebrow: `FISHERIES`

Title:
`From scattered forecasts to one safer trip decision.`

### Fleet Routing

Eyebrow: `MARITIME OPERATIONS`

Title:
`Bring sea state, weather and spatial risk into one route view.`

### Disaster Response

Eyebrow: `DISASTER MANAGEMENT`

Title:
`Turn multiple warning feeds into one explainable operational picture.`

### Research

Eyebrow: `OCEAN SCIENCE`

Title:
`Explore marine signals across sources without jumping between systems.`

Do not claim measured impact percentages unless verified.

---

# 19. Impact section

Use the "Who it helps" visual treatment from the supplied screenshot.

Eyebrow:

`IMPACT`

Headline:

`Who it helps`

Build an auto/manual carousel.

Primary stakeholder cards:

- Fishermen
- Researchers
- Maritime Operators

Then broader impact cards:

- Social
- Economic
- Environmental

Use concise benefit-first statements.

Do not use fake testimonials.

---

# 20. Pricing

DO NOT BUILD PRICING.

Do not include:

- plans
- prices
- subscription cards
- payment CTAs

Go directly from Impact to FAQ / next information section.

---

# 21. FAQ

Accordion.

One open at a time.

Questions:

- What is Sagarvani?
- How does ORCA validate answers?
- What data sources power it?
- How can someone use Sagarvani without a smartphone?
- Is this available now or is it a prototype?
- How is this different from checking weather information separately?

Answers must remain grounded in the actual product scope.

---

# 22. Access Everywhere

Headline concept:

`One intelligence engine. Three access paths.`

Three items:

- Web / App
- Helpline
- Low-Bandwidth Portal

Do not imply that every path is production-complete if it is not.

The marketing site should describe supported/planned access accurately.

---

# 23. Final CTA

Headline:

`Step into Sagarvani.`

One primary CTA:

`Launch Console`

Background:

- dark navy
- faint cyan wave-line SVG
- restrained glow
- visual echo of hero

---

# 24. Footer

Four-column structure:

Navigation
Research & References
Other
Social Connect

Research & References should point to source categories such as:

- INCOIS
- IMD
- ISRO Bhuvan / NRSC
- Bhoonidhi
- MOSDAC
- BHASHINI + Sarvam AI

Bottom:

`All rights reserved — Team Helios Luna, Dayananda Sagar University`

Do not invent social links.

---

# 25. Existing dashboard

Do not forget the product dashboard.

It should continue to match the existing design system.

Three-zone layout:

LEFT:
~360px conversation rail

CENTER:
fluid map / visualization canvas

RIGHT:
~320px agent status rail

Top:
~72px readout strip across center/right

Dashboard expectations:

- live-looking map
- current marine/weather layers
- agent status
- evidence
- reasoning
- alerts
- history/session state

The interface should feel like mission control for the ocean, not a generic chatbot.

---

# 26. Data contracts

Design the frontend around typed mock interfaces:

```ts
type AgentStatus = {
  name: string;
  state: "idle" | "running" | "validated" | "conflict";
};

type ConversationTurn = {
  role: "user" | "sagarvani";
  text: string;
  evidence?: EvidenceItem[];
};

type EvidenceItem = {
  source: string;
  summary: string;
};
```

The mock API must be replaceable by the future FastAPI backend without rewriting UI components.

---

# 27. Data sources

Treat these as eventual real sources, mocked during MVP where necessary:

INCOIS:
PFZ, SST, chlorophyll, wave height/period, currents, wind, sea state, hazards.

IMD:
cyclone, weather, rainfall, wind and coastal warnings.

ISRO Bhuvan / NRSC:
satellite/geospatial layers, coastal and disaster information.

Bhoonidhi:
Earth-observation and remote-sensing products.

MOSDAC:
meteorological/oceanographic satellite data.

BHASHINI + Sarvam AI:
language/speech capabilities.

---

# 28. Components from the supplied reference

Use these where specified:

- ScrollSplitCard
- CaseStudyFlipStack
- DepthCarousel
- BorderGlow
- WaveHero / GradientWaves where appropriate

Avoid using every component everywhere.

Each animation must have a job.

---

# 29. Remove obsolete material

The user's new instructions explicitly ask to remove the old/undesired section referenced in the screenshots.

When comparing the current implementation to this spec:

- identify the section the user marked for removal
- remove it cleanly
- do not leave empty space
- preserve the surrounding section rhythm

Do not remove useful product functionality simply because its visual treatment changes.

---

# 30. Image generation

Use the image-prompt document in this folder to create missing visual assets.

Generated imagery must:

- look realistic/editorial
- match dark marine-tech visual language
- have compositions suitable for UI cropping
- avoid embedded text
- avoid logos
- avoid fake UI labels
- avoid sci-fi fantasy imagery that looks unrelated to ocean operations

---

# 31. Quality bar

The final site should look closer to:

premium AI infrastructure + marine operations intelligence

and less like:

hackathon template + generic dashboard + generic SaaS landing page.

Do not stop at "it works."

Perform a visual QA pass.
