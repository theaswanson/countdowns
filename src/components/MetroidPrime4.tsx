import { CountdownPage } from "./CountdownPage";
import image from "../assets/metroid.png";

export const MetroidPrime4 = () => (
  <CountdownPage
    title="Metroid Prime 4"
    image={image}
    imageAlt="Metroid"
    date={new Date(2025, 12, 4, 3)}
    completedMessage="The game is live! Go play!"
    style={{ fontFamily: "Serpentine-Bold" }}
  />
);
