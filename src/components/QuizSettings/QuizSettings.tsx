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
    <section className={styles.container}>
      
      {/* LEFT: Topics */}
      <div className={styles.leftColumn}>
        <h3 className={styles.sectionTitle}>Topics</h3>
        <ul className={styles.topicList}>
          {topics.map((topic, index) => (
            <li key={index} className={styles.topicItem}>
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT: Config */}
      <div className={styles.rightColumn}>
        <div className={styles.configItem}>
          <span className={styles.label}>
            {isInGame ? "Item No" : "Items"}
          </span>
          <span className={styles.value}>
            {isInGame
              ? `${itemNumber + 1} / ${totalItems}`
              : totalItems}
          </span>
        </div>

        <div className={styles.configItem}>
          <span className={styles.label}>Difficulty</span>
          <span className={styles.value}>{difficulty}</span>
        </div>

        {!isInGame && (
          <div className={styles.configItem}>
            <span className={styles.label}>Timer</span>
            <span className={styles.value}>{timer} secs</span>
          </div>
        )}
      </div>
    </section>
  );
}