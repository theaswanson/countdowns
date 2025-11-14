import { CountdownPage } from "./CountdownPage";
import image from "../assets/kirby.png";

export const Kirby = () => (
  <CountdownPage
    title="Kirby Air Riders"
    image={image}
    imageAlt="Kirby"
    date={new Date(2025, 10, 20, 3)}
    completedMessage="The game is live! Go play!"
  />
);
