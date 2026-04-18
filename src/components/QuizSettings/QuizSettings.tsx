import { useAppSelector } from "../../redux/hook";
import type { QuizSettingsProps } from "./quiz-model";
import styles from "./QuizSettings.module.css";

export default function QuizSettings({
  totalItems,
  topics,
  difficulty,
  timer,
  isInGame,
}: QuizSettingsProps) {
  const itemNumber = useAppSelector(
    (state) => state.multipleChoiceSlice.value
  );

  return (
    <section className={styles.settingsContainer}>
      
      <div className={styles.setting}>
        <span className={styles.label}>
          {isInGame ? "Item No" : "Items"}
        </span>
        <span className={styles.value}>
          {isInGame
            ? `${itemNumber + 1} / ${totalItems}`
            : totalItems}
        </span>
      </div>

      <div className={styles.setting}>
        <span className={styles.label}>Topics</span>
        <span className={styles.value}>
          {topics.join(", ")}
        </span>
      </div>

      <div className={styles.setting}>
        <span className={styles.label}>Difficulty</span>
        <span className={styles.value}>{difficulty}</span>
      </div>

      {!isInGame && (
        <div className={styles.setting}>
          <span className={styles.label}>Timer</span>
          <span className={styles.value}>{timer} secs</span>
        </div>
      )}
    </section>
  );
}