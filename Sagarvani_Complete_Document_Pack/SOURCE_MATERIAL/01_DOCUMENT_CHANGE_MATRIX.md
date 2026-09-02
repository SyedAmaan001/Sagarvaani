# Sagarvani — Document Change Matrix

This document translates every meaningful instruction in the supplied `sagarvani thing.docx` into an implementation task.

## Existing/reference work

### GitHub
The supplied document asks to inspect:

`SyedAmaan001/Sagarvaani`

Use the repository as the existing implementation baseline.

### Inspiration
The supplied document asks to inspect:

`cosmoq.framer.website`

Use the website primarily for:

- section rhythm
- typography scale
- component composition
- interaction pacing
- cards
- tabs
- carousel structure
- sticky/scroll behavior
- premium presentation

Do not copy COSMOQ's business positioning or enterprise wording.

---

## Visual references supplied in the document

The document contains visual references for:

- color palette
- typography
- existing dashboard
- data-source strip
- why-Sagarvani differentiators
- marine stakeholder section
- specialist agents
- agent showcase/depth presentation
- real-time ocean intelligence section
- impact / who-it-helps section

The supplied stakeholder screenshot shows:
`WHO IS IT FOR`
`Built for every ocean stakeholder.`

The supplied agent screenshot shows:
`THE AGENTS`
`Six specialists. One decision.`

The supplied ocean-intelligence screenshot shows:
`REAL-TIME OCEAN INTELLIGENCE`
`Where data meets the sea.`

The supplied impact screenshot shows:
`IMPACT`
`Who it helps`

---

## Requested additions from the document

### 1. ScrollSplitCard

Add Componentry's:

`scroll-split-card`

Use a full viewport-height scroll container.

Requirements:

- `containerRef`
- `data-lenis-prevent`
- three panels
- scroll-driven split
- flip/reveal behavior
- custom content

Do not replace with a static card.

---

### 2. CaseStudyFlipStack

Add:

`case-study-flip-stack`

Use `framer-motion`.

Purpose:

- editorial product/story presentation
- scroll-driven cards
- folding upward
- next story appears below

Do not use fake agency/client stories for Sagarvani.

Use stakeholder scenarios/product stories instead.

---

### 3. DepthCarousel

Use the supplied DepthCarousel implementation for agent presentation.

It is explicitly connected to the agent section.

---

### 4. Image prompts

The document explicitly asks for image-generation prompts.

The accompanying `05_IMAGE_GENERATION_PROMPTS.md` contains production-ready prompts.

---

### 5. Remove undesired section

The supplied document explicitly says:

`this I want to remove for now`

Because the screenshot/text marker does not uniquely identify the semantic section in extracted text, Antigravity must visually compare the current project against the supplied screenshots and remove the exact marked section while preserving page flow.

Do not guess by deleting an arbitrary section.

---

### 6. Stakeholder research

The supplied document asks for:

- more components
- marine stakeholders
- how Sagarvani helps each
- benefits of the product for each group

This is addressed in:

`04_MARINE_STAKEHOLDER_RESEARCH.md`

and should drive the new stakeholder/impact section.
