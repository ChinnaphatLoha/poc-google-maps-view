import CustomMap from "@/app/CustomMap";

export default function Home() {
  const center = { lat: 13.6513, lng: 100.4964 }; // Kmutt
  const locations = [
    { lat: 13.6613, lng: 100.5053, order: 1, name: "Cosmo" },
    { lat: 13.6513, lng: 100.4964, order: 2, name: "Kmutt" },
    { lat: 13.6513, lng: 100.489, order: 3, name: "Tee noi " },
  ];
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">
        🗺️ Customizable Google Map View
      </h1>
      <CustomMap center={center} locations={locations} />
    </main>
  );
}
