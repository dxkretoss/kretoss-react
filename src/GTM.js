import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GTM() {
  const location = useLocation();

  useEffect(() => {
    if (!window.dataLayer) return;

    window.dataLayer.push({
      event: "pageview",
      page: location.pathname,
    });

    console.log("GTM Pageview Triggered:", location.pathname);
  }, [location]);

  return null;
}
