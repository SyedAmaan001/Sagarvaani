# Sagarvani --- Technical Architecture

## Frontend

-   Next.js / React App Router
-   Tailwind CSS
-   shadcn/ui
-   Leaflet / react-leaflet
-   GeoJSON from GeoPandas outputs
-   Recharts
-   Framer Motion
-   lucide-react
-   TanStack Query
-   next-intl scaffold

## Backend / agent architecture

-   Python
-   FastAPI
-   LangChain
-   OpenAI
-   PostgreSQL
-   Redis
-   GeoPandas
-   Docker

## Voice / language

-   BHASHINI
-   Sarvam AI
-   Twilio for future helpline integration

Voice is an MVP UI capability; production telephony integration is
later.

## Deployment

Frontend: Vercel is the documented hackathon-appropriate target.
Backend: Dockerized service when connected.

## Suggested project structure

``` text
sagarvani/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   └── contact/
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── components/
│   └── layout.tsx
├── components/
│   └── ui/
├── lib/
│   ├── mock-data/
│   └── api/
├── styles/
│   └── theme.css
└── public/
    └── logo/
```

## Engineering principles

1.  Inspect before changing.
2.  Reuse working code.
3.  Keep mock/real API shapes identical.
4.  Avoid provider-specific coupling in UI.
5.  Treat animation as state communication.
6.  Test at laptop judging resolution and mobile.
