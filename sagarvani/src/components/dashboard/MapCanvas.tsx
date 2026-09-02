"use client";

import { useEffect, useState } from "react";
import { 
  MapContainer, 
  TileLayer, 
  Marker, 
  Popup, 
  Circle, 
  Polyline, 
  Polygon, 
  LayerGroup, 
  ZoomControl,
  useMap
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapLayer } from "@/lib/types";

// Helper to smoothly animate map to new coordinates
function MapViewController({ coords, zoom }: { coords?: [number, number]; zoom?: number }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, zoom || 9, { duration: 1.2 });
    }
  }, [coords, zoom, map]);
  return null;
}

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const cyanMarkerIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-cyan.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const dangerMarkerIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const greenMarkerIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapCanvasProps {
  activeLayers: MapLayer[];
  center?: [number, number];
  zoom?: number;
  focusedCoordinates?: [number, number];
}

export default function MapCanvas({ 
  activeLayers, 
  center = [13.1, 74.4], 
  zoom = 8,
  focusedCoordinates 
}: MapCanvasProps) {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);

  if (!mapReady) {
    return (
      <div className="w-full h-full bg-bg-sunken flex flex-col items-center justify-center gap-2 text-text-secondary font-mono text-xs">
        <span className="size-3 rounded-full bg-primary animate-ping" />
        <span>Initializing Spatial Map Engine...</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-bg-sunken z-0 select-none">
      <MapContainer 
        center={focusedCoordinates || center} 
        zoom={zoom} 
        style={{ width: "100%", height: "100%", background: "#02051C" }}
        zoomControl={false}
      >
        <MapViewController coords={focusedCoordinates} zoom={zoom} />
        <ZoomControl position="bottomright" />
        
        {/* High-contrast dark CartoDB basemap */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>, INCOIS, IMD, ISRO Bhuvan'
          maxZoom={18}
        />

        {/* Layer 1: Wave Height Swell Contours */}
        {activeLayers.includes('Wave Height') && (
          <LayerGroup>
            <Circle center={[13.3, 74.2]} pathOptions={{ fillColor: '#00FFFF', color: '#00FFFF', fillOpacity: 0.18, weight: 1 }} radius={32000}>
              <Popup>
                <div className="font-mono text-xs p-1">
                  <span className="font-bold text-primary block">INCOIS Wave Contour</span>
                  <span>Sig. Wave Height: 1.1m — 1.3m</span>
                </div>
              </Popup>
            </Circle>
            <Circle center={[12.8, 74.4]} pathOptions={{ fillColor: '#00FFFF', color: '#00FFFF', fillOpacity: 0.12, weight: 1 }} radius={24000} />
          </LayerGroup>
        )}

        {/* Layer 2: Cyclone & Squall Hazard Overlay */}
        {activeLayers.includes('Cyclone') && (
          <LayerGroup>
            <Marker position={[12.5, 73.8]} icon={dangerMarkerIcon}>
              <Popup>
                <div className="font-mono text-xs p-1">
                  <span className="font-bold text-danger block">IMD Doppler Warning</span>
                  <span>Convective Squall Cell active 60nm SW.</span>
                </div>
              </Popup>
            </Marker>
            <Circle center={[12.5, 73.8]} pathOptions={{ fillColor: '#FF4D6D', color: '#FF4D6D', fillOpacity: 0.25, weight: 1.5, dashArray: '4, 6' }} radius={38000} />
          </LayerGroup>
        )}

        {/* Layer 3: SST (Sea Surface Temperature) Thermal Gradient */}
        {activeLayers.includes('SST') && (
          <LayerGroup>
            <Polygon 
              positions={[
                [14.9, 73.8],
                [14.9, 74.3],
                [14.4, 74.2],
                [14.4, 73.7]
              ]} 
              pathOptions={{ fillColor: '#38BDF8', color: '#38BDF8', fillOpacity: 0.2, weight: 1 }}
            >
              <Popup>
                <div className="font-mono text-xs p-1">
                  <span className="font-bold text-primary block">MOSDAC SST Thermal Gradient</span>
                  <span>Surface: 27.4°C (Upwelling Shelf Front)</span>
                </div>
              </Popup>
            </Polygon>
          </LayerGroup>
        )}

        {/* Layer 4: Currents Flow Vectors */}
        {activeLayers.includes('Currents') && (
          <LayerGroup>
            <Polyline 
              positions={[
                [14.5, 74.0],
                [14.2, 74.15],
                [13.8, 74.3],
                [13.4, 74.45],
                [13.0, 74.6]
              ]} 
              pathOptions={{ color: '#00FFFF', weight: 2, dashArray: '6, 8' }} 
            />
          </LayerGroup>
        )}

        {/* Layer 5: Potential Fishing Zones (PFZ) */}
        {activeLayers.includes('PFZ') && (
          <LayerGroup>
            <Polygon 
              positions={[
                [14.72, 73.92],
                [14.72, 74.05],
                [14.65, 74.05],
                [14.65, 73.92]
              ]} 
              pathOptions={{ fillColor: '#22E29A', color: '#22E29A', fillOpacity: 0.35, weight: 1.5 }}
            >
              <Popup>
                <div className="font-mono text-xs p-1">
                  <span className="font-bold text-success block">INCOIS PFZ Sector</span>
                  <span>Chlorophyll-a: 0.45 mg/m³</span>
                  <span className="block mt-1 text-text-secondary">High pelagic fish aggregation.</span>
                </div>
              </Popup>
            </Polygon>
            <Marker position={[14.68, 73.98]} icon={greenMarkerIcon}>
              <Popup>
                <div className="font-mono text-xs p-1">
                  <span className="font-bold text-success">PFZ Target Front (Karwar SW)</span>
                </div>
              </Popup>
            </Marker>
          </LayerGroup>
        )}

        {/* Layer 6: High Wave Warnings */}
        {activeLayers.includes('High Wave Warnings') && (
          <LayerGroup>
            <Circle center={[13.35, 74.35]} pathOptions={{ fillColor: '#FFB020', color: '#FFB020', fillOpacity: 0.28, weight: 1.5 }} radius={26000}>
              <Popup>
                <div className="font-mono text-xs p-1">
                  <span className="font-bold text-warning block">INCOIS High Wave Warning</span>
                  <span>2.8m swell height (Period 11.4s)</span>
                </div>
              </Popup>
            </Circle>
          </LayerGroup>
        )}

        {/* Coastal Key Ports (Mangalore, Malpe/Udupi, Karwar) */}
        <Marker position={[12.9141, 74.8560]} icon={cyanMarkerIcon}>
          <Popup>
            <div className="font-mono text-xs p-1">
              <span className="font-bold text-primary block">Mangalore Old Port</span>
              <span>Coordinates: 12.9141° N, 74.8560° E</span>
            </div>
          </Popup>
        </Marker>

        <Marker position={[13.3500, 74.7000]} icon={cyanMarkerIcon}>
          <Popup>
            <div className="font-mono text-xs p-1">
              <span className="font-bold text-primary block">Malpe Fishing Harbour</span>
              <span>Coordinates: 13.3500° N, 74.7000° E</span>
            </div>
          </Popup>
        </Marker>

        <Marker position={[14.8100, 74.1300]} icon={cyanMarkerIcon}>
          <Popup>
            <div className="font-mono text-xs p-1">
              <span className="font-bold text-primary block">Karwar Port</span>
              <span>Coordinates: 14.8100° N, 74.1300° E</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
