import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Kirby } from "./components/Kirby.tsx";
import { MetroidPrime4 } from "./components/MetroidPrime4.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kirby-air-riders" element={<Kirby />} />
        <Route path="/metroid-prime-4" element={<MetroidPrime4 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
