import { useEffect, useRef } from "react";
import L from "leaflet";
import { OffersList } from "../../types/offer";

type MapProps = {
  offers: OffersList[];
  mapStyle: string;
};

const Map = ({ offers, mapStyle }: MapProps) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || offers.length === 0) return;

    const map = L.map(mapRef.current).setView(
      [offers[0].location.latitude, offers[0].location.longitude],
      10
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    offers.forEach((offer) => {
      L.marker([offer.location.latitude, offer.location.longitude])
        .addTo(map)
        .bindPopup(offer.title);
    });

    return () => {
      map.remove();
    };
  }, [offers]);

  return <div className={mapStyle} ref={mapRef} />;
};

export default Map;
