"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

{
  /* แผนที่ */
}
type Location = {
  lat: number;
  lng: number;
  order: number;
  name: string;
};

type CustomMapProps = {
  center: { lat: number; lng: number };
  locations: Location[];
};

export default function CustomMap({ center, locations }: CustomMapProps) {
  const [mapCenter, setMapCenter] = useState(center);

  const containerStyle = {
    width: "100%",
    height: "650px",
  };

  return (
    <div className="flex gap-4">
      {/* แผนที่ */}
      <div className="flex-1">
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={13}
          >
            {locations.map((loc, index) => (
              <Marker
                key={index}
                position={{ lat: loc.lat, lng: loc.lng }}
                label={loc.order.toString()}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* ลิสต์สถานที่ */}
      <div className="w-64 border p-3 rounded-lg bg-white shadow">
        <h2 className="font-bold mb-2 ">📍สถานที่</h2>
        <ul className="space-y-2">
          {locations.map((loc, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => setMapCenter({ lat: loc.lat, lng: loc.lng })}
            >
              {loc.order}. {loc.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
