"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function MapWrapper() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/custom/Part2/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const position = { lat: 30.0616159, lng: 31.3342673};

  return (
    <article>

      <Map position={position} zoom={100000} />
    </article>
  );
}
