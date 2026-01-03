import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();

createRoot(document.getElementById("root")!).render(<App />);
