# Sagarvani — Tech Stack

Companion to `Sagarvani_PRD.md` and `Sagarvani_Design_Document.md`. Frontend recommendations are new (this is a frontend build); backend/data recommendations are carried over from the PPT's own "Technologies & Data Sources" slide so the two stay consistent.

---

## 1. Frontend (new — this is what you're building)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (React, App Router)** | File-based routing covers both the marketing site and dashboard app in one project; good for a vibe-coding workflow since most AI coding tools scaffold Next.js cleanly |
| Styling | **Tailwind CSS** | Fast to iterate in a vibe-coding loop; pairs cleanly with the CSS-variable palette defined in the design doc |
| Component layer | **shadcn/ui** | Unstyled-but-solid primitives (dialogs, tabs, tooltips) you retheme with the Electric Tundra palette instead of fighting a pre-styled kit |
| Map | **Leaflet** via `react-leaflet` | Matches the PPT's own listed stack (Leaflet already named as a data/GIS tool); lighter-weight than Mapbox for a hackathon build, no API key friction |
| Geospatial layers | **GeoPandas outputs served as GeoJSON** consumed by Leaflet | Keeps the heavy GIS processing on the backend (Python/GeoPandas, per PPT) and the frontend a thin renderer |
| Charts / readouts | **Recharts** | Simple, composable, enough for wave-height/wind trend lines in the reasoning panel |
| Animation | **Framer Motion** | For the restrained state-transition motion described in the design doc (status pulses, layer cross-fades) |
| Icons | **lucide-react** | Clean line icons that read well against the dark theme |
| State/data fetching | **TanStack Query** | Handles the mocked-then-real API swap cleanly (cache, loading, error states) without extra boilerplate |
| Internationalization | **next-intl** (scaffold only for MVP) | Placeholder-ready for BHASHINI/Sarvam-driven language switching later |

## 2. Backend / Agents (carried from the PPT — build later, design against this contract)

| Layer | Choice (from PPT) |
|---|---|
| Agent orchestration | LangChain |
| LLM | OpenAI |
| Backend language/runtime | Python, FastAPI |
| Database | PostgreSQL |
| Cache/session | Redis |
| GIS processing | GeoPandas |
| Ops/deploy | Docker |
| Voice (later phase) | Twilio (helpline), BHASHINI + Sarvam AI (multilingual STT/TTS/translation) |
| Dashboard prototyping (optional, PPT-listed) | Streamlit — likely useful for backend-team internal testing, not the production frontend being built here |

## 3. Marine / Geospatial Data Sources (from the PPT — the frontend should treat these as the eventual real data, mocked for MVP)

| Source | Data |
|---|---|
| INCOIS | PFZ advisories, SST, chlorophyll, wave height/period, currents, wind, sea state, tsunami & high-wave warnings |
| IMD | Fishermen warnings, cyclone info, wind & rainfall forecasts, coastal bulletins, port warnings |
| ISRO Bhuvan / NRSC | Satellite imagery, PFZ maps, coastal layers, elevation, hydrology, disaster/geospatial data |
| Bhoonidhi (ISRO/NRSC) | Earth observation & remote-sensing imagery, satellite-derived geospatial products |
| MOSDAC (ISRO/SAC) | Meteorological & oceanographic satellite data — SST, chlorophyll, currents, wind, cyclone/weather |
| BHASHINI + Sarvam AI | Speech-to-text, text-to-speech, multilingual translation/transliteration |

## 4. Suggested Project Structure

```
sagarvani/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                # homepage
│   │   ├── about/
│   │   └── contact/
│   ├── dashboard/
│   │   ├── page.tsx                # main console
│   │   └── components/
│   │       ├── ConversationRail.tsx
│   │       ├── MapCanvas.tsx
│   │       ├── AgentStatusRail.tsx
│   │       ├── ReadoutStrip.tsx
│   │       ├── ReasoningPanel.tsx
│   │       └── AlertsPanel.tsx
│   └── layout.tsx
├── components/ui/                  # shadcn primitives, retheme here
├── lib/
│   ├── mock-data/                  # sample agent runs, sample map GeoJSON
│   └── api/                        # thin client, swappable mock → real FastAPI backend
├── styles/
│   └── theme.css                   # Electric Tundra CSS variables from design doc
└── public/
    └── logo/                       # Sagarvani logo assets, light + dark variants
```

## 5. Mock-to-Real API Boundary (important for the vibe-coding handoff)

Build every dashboard component against a small typed interface, e.g.:

```ts
type AgentStatus = { name: string; state: 'idle' | 'running' | 'validated' | 'conflict' };
type ConversationTurn = { role: 'user' | 'sagarvani'; text: string; evidence?: EvidenceItem[] };
type EvidenceItem = { source: string; summary: string };
```

Mock implementations of these live in `lib/mock-data/` for the hackathon demo; the real FastAPI backend (once built) just needs to return the same shapes so the frontend doesn't need rework — this is the NFR5 requirement from the PRD.

## 6. Deployment (hackathon-appropriate)

- **Vercel** for the Next.js frontend — zero-config, fast to demo from a live URL.
- Backend (when ready) can stay on a single Docker container per the PPT's own stack; not required for the frontend-only MVP.
