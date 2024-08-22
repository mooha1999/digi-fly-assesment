import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { useTranslations } from "next-intl";

export default function Map(props: MapProps) {

  const t = useTranslations("Part2");

  const { position, zoom } = props

  return <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} >
      <Tooltip direction="top">
        {t("welcome")}
      </Tooltip>
    </Marker>
  </MapContainer>
}

interface MapProps {
  position: {
    lat: number;
    lng: number;
  };
  zoom: number;
}