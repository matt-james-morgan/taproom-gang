import { createRoot } from "react-dom/client";
import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import "./index.css";
import App from "./App.tsx";

// Grafana Frontend Observability: reports JS errors and page speed from real visitors.
// Live domain only, so local dev and Vercel previews don't add noise.
if (location.hostname.endsWith("thetaproomgang.ca")) {
  initializeFaro({
    url: "https://faro-collector-prod-ca-east-0.grafana.net/collect/147585d4ade0bb439b4e680f7d6317b1",
    app: { name: "taproom-gang", environment: "production" },
    instrumentations: [...getWebInstrumentations()],
  });
}

createRoot(document.getElementById("root")!).render(<App />);
