"use client";

import { useEffect, useState } from "react";
import { CONSENT_CHANGE_EVENT, readConsent, reopenConsentBanner } from "@/lib/consent";

type Props = {
  title: string;
  src: string;
  mapsUrl: string;
};

// The Google Maps embed is the only non-essential third-party content on
// the site — it only renders once "Contenus tiers" consent is on, per
// app/politique-cookies/page.tsx. Refusing it still leaves a plain link to
// Google Maps, which needs no consent since nothing is embedded.
export default function ConsentGatedMap({ title, src, mapsUrl }: Props) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    function sync() {
      setAllowed(readConsent()?.thirdParty ?? false);
    }
    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
  }, []);

  if (allowed) {
    return (
      <iframe
        title={title}
        src={src}
        width="100%"
        height="320"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: "0", borderRadius: "12px" }}
      />
    );
  }

  return (
    <div className="map-placeholder">
      <p>
        La carte Google Maps n&apos;est pas affichée tant que vous n&apos;avez
        pas accepté les cookies « Contenus tiers ».
      </p>
      <div className="map-placeholder-actions">
        <button type="button" className="btn btn-contour" onClick={reopenConsentBanner}>
          Gérer mes cookies
        </button>
        <a className="btn btn-plein" href={mapsUrl} target="_blank" rel="noopener noreferrer">
          Voir sur Google Maps
        </a>
      </div>
    </div>
  );
}
