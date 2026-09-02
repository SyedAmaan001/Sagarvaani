# COPY THIS INTO ANTIGRAVITY --- FINAL SAGARVANI BUILD PROMPT

You are the implementation agent for Sagarvani.

Repository: https://github.com/SyedAmaan001/Sagarvaani

Read the entire supplied Sagarvani document pack before modifying code.

## Non-negotiable decisions

-   Hero = WaveHero + small product UI overlay.
-   Voice input = MVP.
-   Login = none.
-   Launch Console = direct dashboard.
-   Team identity = Team Helios Luna only.
-   Existing dashboard functionality must not be broken.
-   COSMOQ = visual/structural inspiration, not content/brand to copy.

## FIRST

Inspect the repository before coding: 1. routes 2. components 3.
dashboard 4. styling/theme 5. dependencies 6. existing animations 7.
existing assets 8. mock/API layer

Reuse existing infrastructure.

## PRODUCT

Sagarvani is a conversational marine decision-intelligence platform
powered by ORCA.

Flow: USER QUESTION → ORCA INTENT → SPECIALIST AGENTS → EVIDENCE FUSION
→ CONTRADICTION CHECK → RE-PLANNING → VALIDATION → EXPLAINABLE ANSWER

## SIX AGENTS

Marine Data Weather GIS Ocean Analytics Risk Spatial Reasoning

## MARKETING SITE

Build: Navbar Hero Data/source marquee Differentiation CTA
Understand/Orchestrate/Validate tabs Agents Stakeholders Three-step flow
Reliability Approach Impact FAQ Technology/data Access Final CTA Footer

## HERO

Use supplied WebGL Liquid/WaveHero implementation.

Headline: Marine Intelligence, One Conversation Away

Add a small Sagarvani console overlay.

## COMPONENTS

Use supplied implementations where specified: - WebGL Liquid -
DepthCarousel - BorderGlow - GradientWaves - ScrollSplitCard -
CaseStudyFlipStack - StakeholderExplorer - ImpactCarousel -
DataSourceMarquee - OceanIntelligenceStats

Do not invent missing ScrollSplitCard internals; use its real
implementation.

## DASHBOARD

Preserve: - conversation rail - voice input - map - agent status -
readouts - reasoning/evidence - alerts - history

## DASHBOARD BEHAVIOR

Implement convincing demo-state transitions: idle → running → validated

and a visible: conflict → re-checking → validated/degraded confidence

## VOICE

Voice input is MVP. Build the UI/state machine so a real BHASHINI/Sarvam
service can be connected later.

## MOCK API

Keep UI components provider-independent. Use typed application-level
objects. Real FastAPI should be swappable without rewriting the UI.

## DATA

Use the documented sources: INCOIS IMD ISRO Bhuvan/NRSC Bhoonidhi MOSDAC
BHASHINI Sarvam AI

## BRAND

Electric Tundra: #050A30 #0000FF #00FFFF #0B1550 #02051C #1B2A6B #F4F7FF
#93A2E0 #22E29A #FFB020 #FF4D6D

## CONTENT RULES

Do not: - invent statistics - invent customer testimonials - add
pricing - add login - claim guaranteed safety - call Sagarvani a
replacement for authorities - use generic enterprise AI copy

## PERFORMANCE

Check: - WebGL cleanup - RAF cleanup - observers - event listeners -
timers - reduced motion - responsive layouts - no horizontal overflow

## FINAL QA

Run the application and inspect the actual rendered experience. Test:
1440px 1366×768 tablet mobile keyboard touch voice UI route transitions
map interactions animation cleanup

Fix errors and polish visual hierarchy before declaring completion.
