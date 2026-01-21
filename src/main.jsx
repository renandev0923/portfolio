import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeModeScript } from "flowbite-react";
createRoot(document.getElementById("root")).render(
  <>
  <ThemeModeScript storageKey="theme" defaultMode="auto" />
    <StrictMode>
      <App />
    </StrictMode>
  </>
);
