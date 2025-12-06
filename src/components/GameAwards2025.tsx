import { CountdownPage } from "./CountdownPage";
import image from "../assets/TGA_SYMBOL.png";

export const GameAwards2025 = () => (
  <CountdownPage
    title="The Game Awards"
    image={image}
    imageAlt="The Game Awards"
    date={new Date("2025-12-12T00:30:00Z")}
    completedMessage="The show has started!"
    style={{ fontFamily: "Verdana" }}
  />
);
