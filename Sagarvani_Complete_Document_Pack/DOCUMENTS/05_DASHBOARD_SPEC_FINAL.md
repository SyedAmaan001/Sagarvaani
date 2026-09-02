# Sagarvani --- Dashboard / Console Specification

## Entry

`Launch Console` / `Try Sagarvani` opens the dashboard directly. **No
login screen.**

## Primary layout

### Left / conversation rail

-   Conversation history
-   Current user query
-   Voice input button
-   Text input
-   Interpreted intent
-   Final answer
-   Evidence drawer

### Center / map canvas

Leaflet/react-leaflet renderer. Potential layers: - SST - wave height /
period - currents - PFZ - cyclone tracks - high-wave / tsunami
warnings - route or vessel overlays where applicable

### Right / agent rail

Six agents: - Marine Data - Weather - GIS - Ocean Analytics - Risk -
Spatial Reasoning

State model: `idle | running | validated | conflict`

### Top readouts

Examples: - sea state - wind - wave height - active alerts - selected
location - query timestamp

### Reasoning / validation

Show: 1. intent 2. sources consulted 3. agent outputs 4.
conflicts/re-check 5. validation result 6. recommendation 7. confidence
8. evidence list

### Alerts

Severity: - danger - warning - informational

Alerts must not be styled as decorative noise; they should read like
operational signals.

## Voice MVP

Voice input is a first-class MVP control. Design for: - idle
microphone - listening - processing - transcript - error/retry

The architecture should allow a future BHASHINI + Sarvam production
pipeline without changing the conversation UI contract.

## Demo behavior

The dashboard may use scripted/mock data, but the UI should behave as
though the agents are operating: - immediate query acknowledgement -
staggered agent activation - map layer transition - validation state -
final evidence-backed answer

## Accessibility

-   keyboard-accessible controls
-   visible focus
-   screen-reader labels
-   non-color-only status indication
-   reduced motion
-   readable text at laptop judging distance
