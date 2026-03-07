import type { QuizSettingsProps } from "./quiz-model";
import styles from "./QuizSettings.module.css";

export default function QuizSettings({totalItems,topics,difficulty, timer}:QuizSettingsProps){
    return <section className={styles.settingsContainer}>
      <div className={styles.setting}>
        <span className={styles.label}>Items</span>
        <span className={styles.value}>{totalItems}</span>
      </div>

      <div className={styles.setting}>
        <span className={styles.label}>Topics</span>
        <span className={styles.value}>{topics.join(", ")}</span>
      </div>

      <div className={styles.setting}>
        <span className={styles.label}>Difficulty</span>
        <span className={styles.value}>{difficulty}</span>
      </div>

      <div className={styles.setting}>
        <span className={styles.label}>Timer</span>
        <span className={styles.value}>{timer} sec</span>
      </div>
    </section>
}