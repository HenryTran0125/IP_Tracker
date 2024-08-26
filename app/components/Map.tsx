"use client";

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  const position = [10.762622, 106.660172];
  const id = self.crypto.randomUUID();

  return (
    <MapContainer
      center={position}
      zoom={11}
      scrollWheelZoom={true}
      /* IMPORTANT: the map container needs a defined size, otherwise nothing will be visible */
      style={{
        width: "100%",
        height: "100%",
      }}
      key={id}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          This Marker icon is displayed correctly with{" "}
          <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
