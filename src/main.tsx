import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AccessibilityToolbar } from "./components/AccessibilityToolbar";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <AccessibilityToolbar />
  </React.StrictMode>
);
