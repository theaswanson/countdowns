import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import { App } from "./App.tsx";
import { Kirby } from "./components/Kirby.tsx";
import { MetroidPrime4 } from "./components/MetroidPrime4.tsx";
import { GameAwards2025 } from "./components/GameAwards2025.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kirby-air-riders" element={<Kirby />} />
        <Route path="/metroid-prime-4" element={<MetroidPrime4 />} />
        <Route path="/the-game-awards" element={<GameAwards2025 />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
