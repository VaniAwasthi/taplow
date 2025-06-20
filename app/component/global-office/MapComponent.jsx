"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "700px",
};

export default function MapComponent({ center, markers }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={1}>
      {markers.map((marker, i) => (
        <Marker key={i} position={{ lat: marker.lat, lng: marker.lng }} />
      ))}
    </GoogleMap>
  );
}
