import Countdown from "react-countdown";
import styles from "./CountdownPage.module.css";
import type { CSSProperties } from "react";

export const CountdownPage = ({
  title,
  image,
  imageAlt,
  date,
  completedMessage,
  style,
}: {
  title: string;
  image: string;
  imageAlt: string;
  date: Date;
  completedMessage: string;
  style: CSSProperties | undefined;
}) => (
  <div className={styles["countdown-page"]} style={style}>
    <div>
      <img src={image} className={styles.logo} alt={imageAlt} />
    </div>

    <div className={styles.card}>
      <Countdown
        date={date}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <h1>{completedMessage}</h1>;
          }

          const displayDays = days > 0;
          const displayHours = hours > 0;
          const displayMinutes = minutes > 0;

          const countdown: string[] = [];

          if (displayDays) {
            countdown.push(`${days} ${days === 1 ? "day" : "days"}`);
          }

          if (displayHours) {
            countdown.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
          }

          if (displayMinutes) {
            countdown.push(
              `${minutes} ${minutes === 1 ? "minute" : "minutes"}`
            );
          }

          countdown.push(`${seconds} ${seconds === 1 ? "second" : "seconds"}`);

          return (
            <>
              <h1>{title} releases in</h1>
              <h1 style={{ fontSize: "32px" }}>{countdown.join(", ")}</h1>
            </>
          );
        }}
      />
    </div>
  </div>
);
