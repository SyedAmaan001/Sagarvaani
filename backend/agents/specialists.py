"""
Specialist Agents for ORCA
Each agent is a Python function that accepts a query + context
and returns a result dict with data + evidence.
"""

import random  # for mock noise while real data APIs are integrated


def marine_data_agent(query: str) -> dict:
    """Fetches SST, wave height, currents from INCOIS (mocked for MVP)."""
    return {
        "name": "Marine Data",
        "state": "validated",
        "data": {
            "wave_height_m": 2.5,
            "sea_state": 4,
            "sst_celsius": 28.3,
            "currents_knots": 1.8,
        },
        "evidence": {
            "source": "INCOIS Wave Forecast",
            "summary": "2.5m wave height projected at 0600 hrs near Mangalore coast."
        }
    }


def weather_agent(query: str) -> dict:
    """Fetches wind, rainfall, cyclone info from IMD (mocked for MVP)."""
    return {
        "name": "Weather",
        "state": "validated",
        "data": {
            "wind_speed_knots": 22,
            "wind_direction": "SW",
            "rainfall_mm": 12,
            "cyclone_warning": True,
            "cyclone_description": "Localized squall moving north from Kerala.",
        },
        "evidence": {
            "source": "IMD Coastal Bulletin",
            "summary": "Localized squall warning for Karnataka coast."
        }
    }


def gis_agent(query: str) -> dict:
    """Handles spatial queries and PFZ zone lookups (mocked for MVP)."""
    return {
        "name": "GIS",
        "state": "validated",
        "data": {
            "pfz_zone": "non-PFZ",
            "nearest_safe_zone_nm": 12,
            "coastal_region": "Karnataka",
        },
        "evidence": {
            "source": "ISRO Bhuvan PFZ Map",
            "summary": "Mangalore POI falls outside active PFZ zone."
        }
    }


def ocean_analytics_agent(query: str) -> dict:
    """Computes historical trends and anomalies (mocked for MVP)."""
    return {
        "name": "Ocean Analytics",
        "state": "validated",
        "data": {
            "7_day_avg_wave_m": 1.9,
            "anomaly_detected": True,
            "anomaly_description": "Wave height 31% above 7-day average.",
        },
        "evidence": {
            "source": "INCOIS Historical Archive",
            "summary": "Wave anomaly detected: 2.5m vs 7-day avg 1.9m."
        }
    }


def risk_agent(query: str, marine_data: dict, weather_data: dict) -> dict:
    """
    Evaluates vessel safety. Returns 'conflict' state if sources disagree.
    """
    wave = marine_data["data"]["wave_height_m"]
    wind = weather_data["data"]["wind_speed_knots"]
    cyclone = weather_data["data"]["cyclone_warning"]

    # Risk logic: unsafe if wave > 2m OR wind > 20kt OR active cyclone warning
    is_safe = not (wave > 2.0 or wind > 20 or cyclone)
    conflict = wave > 2.0 and wind > 20  # Both sources agree on danger → not a conflict

    return {
        "name": "Risk",
        "state": "conflict" if conflict else "validated",
        "data": {
            "is_safe_for_small_vessels": is_safe,
            "risk_level": "HIGH" if not is_safe else "LOW",
            "conflict_detected": conflict,
        },
        "evidence": {
            "source": "ISRO Bhuvan Vessel Risk Model",
            "summary": f"Risk level: {'HIGH' if not is_safe else 'LOW'} for small vessels. Wave={wave}m, Wind={wind}kt."
        }
    }


def spatial_reasoning_agent(query: str, gis_data: dict) -> dict:
    """Cross-checks geospatial bounding box constraints (mocked for MVP)."""
    return {
        "name": "Spatial Reasoning",
        "state": "validated",
        "data": {
            "bounding_box_valid": True,
            "location_resolved": "Mangalore Port, Karnataka (12.9141°N, 74.8560°E)",
        },
        "evidence": {
            "source": "ISRO Bhuvan Geocoder",
            "summary": "Location resolved: Mangalore Port. Bounding box validated."
        }
    }
