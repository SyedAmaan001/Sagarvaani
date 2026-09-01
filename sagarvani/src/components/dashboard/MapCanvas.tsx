"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapLayer } from "@/lib/types";
import { Layers } from "lucide-react";

// Fix for default marker icon in nextjs
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const customMarkerIcon = new L.Icon({
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

export default function MapCanvas({ activeLayers, center = [12.9141, 74.8560], zoom = 7 }: { activeLayers: MapLayer[], center?: [number, number], zoom?: number }) {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);

  if (!mapReady) return <div className="w-full h-full bg-bg-sunken flex items-center justify-center">Loading Map...</div>;

  return (
    <div className="relative w-full h-full bg-bg-sunken z-0">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ width: "100%", height: "100%", background: "#02051C" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        {activeLayers.includes('Wave Height') && (
          <LayerGroup>
            {/* Mock wave height data overlay */}
            <Circle center={[13.2, 74.1]} pathOptions={{ fillColor: '#00FFFF', color: 'transparent', fillOpacity: 0.2 }} radius={40000} />
            <Circle center={[12.8, 74.3]} pathOptions={{ fillColor: '#00FFFF', color: 'transparent', fillOpacity: 0.3 }} radius={30000} />
            <Circle center={[12.5, 74.4]} pathOptions={{ fillColor: '#00FFFF', color: 'transparent', fillOpacity: 0.4 }} radius={20000} />
            <Circle center={[12.2, 74.5]} pathOptions={{ fillColor: '#00FFFF', color: 'transparent', fillOpacity: 0.5 }} radius={15000} />
          </LayerGroup>
        )}

        {activeLayers.includes('Cyclone') && (
          <LayerGroup>
             <Marker position={[12.2, 74.5]} icon={dangerMarkerIcon}>
                <Popup className="bg-bg-elevated border-border text-foreground">
                   Squall Warning. High risk area.
                </Popup>
             </Marker>
          </LayerGroup>
        )}

        {/* User POI (Mangalore) */}
        <Marker position={[12.9141, 74.8560]} icon={customMarkerIcon}>
           <Popup>Mangalore Port</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
