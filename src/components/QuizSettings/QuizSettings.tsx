import { useAppSelector } from "../../redux/hook";
import type { QuizSettingsProps } from "./quiz-model";
import styles from "./QuizSettings.module.css";

export default function QuizSettings({totalItems,topics,difficulty, timer, isInGame}:QuizSettingsProps){
    const itemNumber = useAppSelector(state => state.multipleChoiceSlice.value);
    let itemNumberTab = <div className={styles.setting}>
        <span className={styles.label}>Items</span>
        <span className={styles.value}>{totalItems}</span>
      </div>;
    
    if(isInGame){
      itemNumberTab = <div className={styles.setting}>
        <span className={styles.label}>Item No:</span>
        <span className={styles.value}>{itemNumber + 1} / {totalItems}</span>
      </div>
    }
    return <section className={styles.settingsContainer}>
        {itemNumberTab}

      <div className={styles.setting}>
        <span className={styles.label}>Topics</span>
        <span className={styles.value}>{topics.join(", ")}</span>
      </div>

      <div className={styles.setting}>
        <span className={styles.label}>Difficulty</span>
        <span className={styles.value}>{difficulty}</span>
      </div>

      {!isInGame && <div className={styles.setting}>
        <span className={styles.label}>Timer</span>
        <span className={styles.value}>{timer} sec</span>
      </div>}
    </section>
}