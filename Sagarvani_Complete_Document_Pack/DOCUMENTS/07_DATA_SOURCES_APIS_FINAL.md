# Sagarvani --- Data Sources & API Design

## Source map

  -----------------------------------------------------------------------
  Source                              Intended data
  ----------------------------------- -----------------------------------
  INCOIS                              PFZ advisories, SST, chlorophyll,
                                      wave height/period, currents, wind,
                                      sea state, tsunami/high-wave
                                      warnings

  IMD                                 Fishermen warnings, cyclone
                                      information, wind/rainfall
                                      forecasts, coastal bulletins, port
                                      warnings

  ISRO Bhuvan / NRSC                  Satellite imagery, PFZ maps,
                                      coastal layers, elevation,
                                      hydrology, disaster/geospatial data

  Bhoonidhi                           Earth observation / remote-sensing
                                      imagery and satellite-derived
                                      geospatial products

  MOSDAC                              Meteorological/oceanographic
                                      satellite data including SST,
                                      chlorophyll, currents, wind and
                                      cyclone/weather information

  BHASHINI + Sarvam AI                Speech-to-text, text-to-speech,
                                      multilingual
                                      translation/transliteration
  -----------------------------------------------------------------------

## Additional stack references

-   Copernicus
-   meteoblue
-   VCSS / Vessel Communication Support System
-   Leaflet
-   GeoPandas

## API boundary

The dashboard must not directly depend on provider-specific payload
formats.

Use an application-level API such as: - `POST /api/query` -
`GET /api/session/:id` - `GET /api/layers` - `GET /api/alerts` -
`POST /api/voice/transcribe` (MVP interface) - `POST /api/voice/speak`
(MVP interface)

Exact backend routes can differ; the key requirement is a stable
frontend contract.

## Mock mode

Store: - sample queries - sample agent traces - sample GeoJSON - sample
evidence - sample alerts - sample voice transcript

in a dedicated mock-data layer.

## Production swap

Real FastAPI services should return the same application-level objects
so the frontend does not require structural rewrites.

## Data provenance

Every user-visible recommendation should expose the source names used to
reach it. Where actual live data is not connected, label demo/mock
behavior internally and do not imply real-time production provenance.
