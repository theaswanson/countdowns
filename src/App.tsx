import { NavLink } from "react-router";
import "./App.css";
import type { ReactNode } from "react";
import styles from "./Home.module.css";

const NavItem = ({ children }: { children: ReactNode }) => (
  <div className={styles["nav-item"]}>{children}</div>
);

export const App = () => (
  <div>
    <h1>Countdowns</h1>

    <NavLink to="/kirby-air-riders">
      <NavItem>Kirby Air Riders</NavItem>
    </NavLink>

    <NavLink to="/metroid-prime-4">
      <NavItem>Metroid Prime 4</NavItem>
    </NavLink>
  </div>
);
