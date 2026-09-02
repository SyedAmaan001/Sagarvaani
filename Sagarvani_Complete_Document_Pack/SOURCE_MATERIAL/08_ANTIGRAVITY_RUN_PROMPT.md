# COPY THIS INTO ANTIGRAVITY

You are now the implementation agent for the Sagarvani website.

I have placed a folder beside the project containing the Sagarvani build documentation.

## FIRST

Read every file in that documentation folder before changing code.

Read them in this order:

1. `00_MASTER_ANTIGRAVITY_BUILD_SPEC.md`
2. `01_DOCUMENT_CHANGE_MATRIX.md`
3. `02_VISUAL_SYSTEM_AND_PAGE_STRUCTURE.md`
4. `03_COMPONENT_IMPLEMENTATION_PLAN.md`
5. `04_MARINE_STAKEHOLDER_RESEARCH.md`
6. `05_IMAGE_GENERATION_PROMPTS.md`
7. `06_COMPONENT_CONFIG_CHEATSHEET.md`
8. `07_IMAGE_AND_REFERENCE_MAPPING.md`

Do not only read the first file.

Then inspect the existing Sagarvani codebase.

Repository context:
- existing Sagarvani project
- existing marketing website
- existing dashboard/product UI
- existing assets and components

The documentation folder is the design and implementation source of truth.

---

# EXECUTION RULES

Do not return a plan only.

Actually modify the project.

Before coding:

1. inspect current routes
2. inspect current components
3. inspect current styles
4. inspect dependencies
5. inspect existing assets
6. identify anything already implemented from this spec
7. avoid duplicating components

Then implement.

---

# BUILD ORDER

### Phase 1
Design tokens + typography + global motion.

### Phase 2
Navigation + footer.

### Phase 3
Hero:

- badge
- headline
- subhead
- CTAs
- WaveHero
- source marquee
- supporting visual

### Phase 4
Why Sagarvani.

### Phase 5
How It Works tabs.

### Phase 6
Six-agent grid.

### Phase 7
DepthCarousel agent showcase.

### Phase 8
NEW stakeholder explorer section.

### Phase 9
Real-time ocean intelligence section.

### Phase 10
Three-step workflow.

### Phase 11
Reliability & validation.

### Phase 12
CaseStudyFlipStack.

### Phase 13
Impact carousel.

### Phase 14
FAQ.

### Phase 15
Access Everywhere.

### Phase 16
Final CTA.

### Phase 17
Footer.

---

# IMPORTANT COMPONENT RULES

Use actual Componentry/React Bits components where specified.

Install missing dependencies only.

Do not replace a specified interaction with a static fake.

The following are required where used:

- ScrollSplitCard
- CaseStudyFlipStack
- DepthCarousel
- BorderGlow
- WaveHero

---

# STAKEHOLDER SECTION

Add the stakeholder explorer from the documentation.

Start with:

Fishermen & Coastal Crews

Then include:

Marine & Port Operators
Ocean Researchers & Scientists
Disaster Management & Coastal Safety
Aquaculture & Marine Farming
Coastal Tourism & Recreation
Offshore Energy / Marine Industry
Marine Policy & Conservation

Use concise benefit-focused copy grounded in the research document.

Do not invent outcome statistics.

---

# IMAGES

Use the image-generation prompts document.

Generate missing images where the project does not already have suitable assets.

Do not place text inside generated images.

Do not use random stock imagery that breaks the visual system.

---

# REMOVE OLD SECTION

The original user document contains a visual marker saying a section should be removed for now.

Compare the current site with the supplied reference images and identify that marked/obsolete section.

Remove only that section.

Do not remove useful product functionality accidentally.

---

# EXISTING DASHBOARD

Do not break the dashboard.

Preserve:

- conversation rail
- map
- agent status
- readouts
- reasoning/evidence
- alerts
- history

The website and dashboard must use the same visual system.

---

# DATA / PRODUCT LANGUAGE

Sagarvani is:

- a conversational marine decision-intelligence platform
- powered by ORCA
- multi-agent
- evidence-backed
- spatial
- validation-oriented

Do not describe it as:

- generic enterprise AI
- an AI agent marketplace
- a replacement for official authorities
- a system that guarantees safety

---

# PERFORMANCE

Check:

- no memory leaks
- observers cleaned up
- timers cleaned up
- animation frames cleaned up
- WebGL cleaned up
- no duplicate event listeners
- reduced motion works
- mobile works
- no horizontal overflow

---

# QA

After building:

1. run the application
2. inspect the actual rendered page
3. verify every section
4. check responsive layouts
5. check keyboard interaction
6. check touch interaction
7. check scrolling interactions
8. check animation cleanup
9. fix errors
10. perform a final visual polish pass

Do not stop after a successful build.

Start now.
